export type Level =
  | 'country'
  | 'city'
  | 'district'
  | 'street'
  | 'house'
  | 'resident';

export interface BuildQueryOptions {
  root: Level;
  depth: Level[];
}

export interface HierarchyLevelConfig {
  table: string;
  id: string;
  name: string;
  parentKey?: string;
}
