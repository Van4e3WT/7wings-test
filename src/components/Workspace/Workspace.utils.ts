import { ExtendedRow, ListResponse } from '@/api';

import { ListAction } from './Workspace.types';

export const makeListEditor = (item: ExtendedRow, action: ListAction) => {
  const editList = (
    path: Array<ExtendedRow>,
    list?: ListResponse,
  ): ListResponse | undefined => {
    if (!list) return undefined;

    if (path.length === 0) {
      switch (action) {
        case ListAction.CREATE:
          return [...list, { ...item, child: [] }];
        case ListAction.UPDATE:
          return list.map((el) => (el.id === item.id ? { ...item, child: el.child } : el));
        case ListAction.DELETE:
        default:
          return list.filter(({ id }) => id !== item.id);
      }
    }

    const idx = list.findIndex(({ id }) => path[path.length - 1].id === id);

    return [
      ...list.slice(0, idx),
      {
        ...path[path.length - 1],
        child: editList(
          path.slice(0, -1),
          list[idx].child,
        ) ?? [],
      },
      ...list.slice(idx + 1),
    ];
  };

  return editList;
};
