import cn from 'classnames';
import { PropsWithChildren, TdHTMLAttributes } from 'react';

import S from './Data.module.scss';

type Props = PropsWithChildren<TdHTMLAttributes<HTMLTableCellElement>>;

export const Data: React.FC<Props> = ({ children, className, ...props }) => (
  <td className={cn(S['table-data'], className)} {...props}>
    {children}
  </td>
);
