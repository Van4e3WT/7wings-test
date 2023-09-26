import cn from 'classnames';
import { HTMLAttributes, PropsWithChildren } from 'react';

import S from './Row.module.scss';

export type Props = PropsWithChildren<HTMLAttributes<HTMLTableRowElement>>;

export const Row: React.FC<Props> = ({ children, className, ...props }) => (
  <tr className={cn(S['table-row'], className)} {...props}>
    {children}
  </tr>
);
