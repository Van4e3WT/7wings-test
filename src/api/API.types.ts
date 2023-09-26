export type EntityResponse = {
  id: number;
  rowName: string;
};

export type OutlayRowUpdateRequest = {
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

export type RowResponse = {
  equipmentCosts: number;
  estimatedProfit: number;
  id: number;
  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  overheads: number;
  rowName: string;
  salary: number;
  supportCosts: number;
  total: number;
};

export type OutlayRowRequest = OutlayRowUpdateRequest & {
  parentId: number;
};

export type CreateRowRequest = {
  request: OutlayRowRequest;
};

export type DeleteRowRequest = {
  rID: number;
};

export type UpdateRowRequest = DeleteRowRequest & {
  request: OutlayRowUpdateRequest;
};

export type RecalculatedRowsResponse = {
  changed: Array<RowResponse>;
  current: Array<RowResponse>;
};

export type ListResponse = RowResponse & {
  child: Array<RowResponse>;
};
