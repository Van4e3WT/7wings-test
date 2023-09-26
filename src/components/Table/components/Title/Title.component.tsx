import cn from 'classnames';
import { PropsWithChildren, ThHTMLAttributes } from 'react';

import S from './Title.module.scss';

type Props = PropsWithChildren<ThHTMLAttributes<HTMLTableCellElement>>;

export const Title: React.FC<Props> = ({
  children, className, ...props
}) => (
  <th className={cn(S['table-title'], className)} {...props}>
    {children}
  </th>
);
