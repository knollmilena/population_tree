import { Controller, Get, Inject, Query } from '@nestjs/common';
import {
  HierarchyService,
  DEFAULT_HIERARCHY_CONFIG_TOKEN,
} from './hierarchy.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BuildQueryDto } from './dto/build-query.dto';
import { Level } from './types/hierarchy.type';

@ApiTags('Hierarchy')
@Controller('hierarchy')
export class HierarchyController {
  constructor(
    private readonly hierarchyService: HierarchyService,
    @Inject(DEFAULT_HIERARCHY_CONFIG_TOKEN)
    private readonly defaultConfig: {
      root: Level;
      depth: Level[];
      includeTooltip?: boolean;
    },
  ) {}

  @Get('build')
  @ApiOperation({ summary: 'Построить иерархический запрос' })
  @ApiResponse({ status: 200, description: 'Иерархия успешно построена' })
  buildQuery(@Query() query: BuildQueryDto) {
    const config = {
      root: query.root ?? this.defaultConfig.root,
      depth: query.depth ?? this.defaultConfig.depth,
    };

    return this.hierarchyService.getHierarchyTree(config);
  }
}
