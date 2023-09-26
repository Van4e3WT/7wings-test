import cn from 'classnames';
import { PropsWithChildren, TableHTMLAttributes } from 'react';

import { Body } from './components/Body';
import { Data } from './components/Data';
import { Head } from './components/Head';
import { Row } from './components/Row';
import { Title } from './components/Title';
import S from './Table.module.scss';

type Props = PropsWithChildren<TableHTMLAttributes<HTMLTableElement>>;

type Compound = {
  (props: Props): React.ReactElement;
  Body: typeof Body;
  Data: typeof Data;
  Head: typeof Head;
  Row: typeof Row;
  Title: typeof Title;
};

export const Table: Compound = ({ children, className, ...params }) => (
  <table className={cn(S['table'], className)} {...params}>
    {children}
  </table>
);

Table.Body = Body;
Table.Data = Data;
Table.Head = Head;
Table.Row = Row;
Table.Title = Title;
