import { Injectable, Inject } from '@nestjs/common';
import { DataSource } from 'typeorm';
import {
  BuildQueryOptions,
  HierarchyLevelConfig,
  Level,
} from './types/hierarchy.type';

export const DEFAULT_HIERARCHY_CONFIG_TOKEN = Symbol(
  'DEFAULT_HIERARCHY_CONFIG',
);

@Injectable()
export class HierarchyService {
  private levels: Record<Level, HierarchyLevelConfig> = {
    country: { table: 'country', id: 'id', name: 'name' },
    city: { table: 'city', id: 'id', name: 'name', parentKey: 'country_id' },
    district: {
      table: 'district',
      id: 'id',
      name: 'name',
      parentKey: 'city_id',
    },
    street: {
      table: 'street',
      id: 'id',
      name: 'name',
      parentKey: 'district_id',
    },
    house: { table: 'house', id: 'id', name: 'name', parentKey: 'street_id' },
    resident: {
      table: 'resident',
      id: 'id',
      name: 'name',
      parentKey: 'house_id',
    },
  };
  constructor(
    @Inject(DEFAULT_HIERARCHY_CONFIG_TOKEN)
    readonly defaultHierarchyConfig: BuildQueryOptions,
    private readonly dataSource: DataSource,
  ) {}

  async buildChildren(
    depth: Level[],
    fromLevelIndex: number,
    parentTableAlias: string,
  ): Promise<string> {
    if (fromLevelIndex >= depth.length) return 'NULL';

    const current = depth[fromLevelIndex];
    const currentTable = this.levels[current].table;
    const currentAlias = current;
    const parentKey = this.levels[current].parentKey!;
    let tooltip = '';
    if (current === 'resident') {
      tooltip = `, 'tooltip', CONCAT(city.name, ', ', city.data)`;
    }

    const children = await this.buildChildren(
      depth,
      fromLevelIndex + 1,
      currentAlias,
    );

    return `
      SELECT json_agg(
        jsonb_strip_nulls(
          jsonb_build_object(
            'id', ${currentAlias}.id,
            'name', ${currentAlias}.name
            ${children.trim() !== 'NULL' ? `, 'children', (${children})` : ''}
            ${tooltip}
          )
        )
      )
      FROM ${currentTable} AS ${currentAlias}
      WHERE ${currentAlias}.${parentKey} = ${parentTableAlias}.id
    `.trim();
  }

  async buildNestedQuery(options: BuildQueryOptions): Promise<string> {
    const { root, depth } = options;
    const rootTable = this.levels[root].table;
    const rootAlias = root;
    const children = await this.buildChildren(depth, 0, rootAlias);

    return `
      SELECT
        ${rootAlias}.id AS id,
        ${rootAlias}.name AS name,
        (${children}) AS children
      FROM ${rootTable} AS ${rootAlias}
      GROUP BY ${rootAlias}.id, ${rootAlias}.name
    `.trim();
  }

  async getHierarchyTree(options: BuildQueryOptions): Promise<any> {
    const sql = await this.buildNestedQuery(options);
    return await this.dataSource.query(sql);
  }
}
