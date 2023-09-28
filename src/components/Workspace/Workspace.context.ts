import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
} from 'react';

import { ListResponse } from '@/api';

import { Form } from './Workspace.types';

type ContextType = {
  list: ListResponse | null;
  setList: Dispatch<SetStateAction<ContextType['list']>>;
  form: Form;
  setForm: Dispatch<SetStateAction<ContextType['form']>>;
};

const Context = createContext<ContextType>({
  list: null,
  form: null,
  setList: () => null,
  setForm: () => null,
});

export const WorkspaceConsumer = Context.Consumer;
export const WorkspaceProvider = Context.Provider;

export const useWorkspace = () => useContext(Context);
