import cn from 'classnames';
import { HTMLAttributes, PropsWithChildren } from 'react';

import S from './Body.module.scss';

type Props = PropsWithChildren<HTMLAttributes<HTMLTableSectionElement>>;

export const Body: React.FC<Props> = ({ children, className, ...props }) => (
  <tbody className={cn(S['table-body'], className)} {...props}>
    {children}
  </tbody>
);
