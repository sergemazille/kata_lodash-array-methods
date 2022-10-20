// deno-lint-ignore-file no-explicit-any
export type Obj = Record<string | number | symbol, unknown>;
export type Collection = unknown[] | Obj;
export type Predicate = (item: any, index: number, array: any[]) => boolean;
export type Project = (value: any) => any;
export type Comparator = (itemA: any, itemB: any) => boolean;
