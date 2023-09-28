export type Row = {
  equipmentCosts: number;
  estimatedProfit: number;
  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  overheads: number;
  rowName: string;
  salary: number;
  supportCosts: number;
};

export type ExtendedRow = Row & {
  id: number;
  total: number;
};

export type NestedRow = ExtendedRow & {
  child: Array<NestedRow>;
};

export type CreateRowRequest = Row & {
  parentId: number | null;
};

export type DeleteRowRequest = {
  rID: number;
};

export type UpdateRowRequest = DeleteRowRequest & {
  request: Row;
};

export type ListResponse = Array<NestedRow>;

export type RecalculatedRowsResponse = {
  changed: Array<ExtendedRow>;
  current: ExtendedRow;
};
