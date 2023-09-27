import {
  Dispatch, SetStateAction, createContext, useContext,
} from 'react';

import { ListResponse } from '@/api';

type ContextType = {
  list: ListResponse | null;
  setList: Dispatch<SetStateAction<ContextType['list']>>;
};

const Context = createContext<ContextType>({
  list: null,
  setList: () => null,
});

export const WorkspaceConsumer = Context.Consumer;
export const WorkspaceProvider = Context.Provider;

export const useWorkspace = () => useContext(Context);
