import { ExtendedRow } from '@/api';

export enum FormMode {
  READ = 'read',
  CREATE = 'create',
  EDIT = 'edit',
}

export enum ListAction {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
}

export type Form = {
  mode: FormMode;
  row: ExtendedRow & {
    parentId: number | null;
  };
} | null;
