import cn from 'classnames';
import { HTMLAttributes, PropsWithChildren } from 'react';

import S from './Head.module.scss';

type Props = PropsWithChildren<HTMLAttributes<HTMLTableSectionElement>>;

export const Head: React.FC<Props> = ({ children, className, ...props }) => (
  <thead className={cn(S['table-head'], className)} {...props}>
    {children}
  </thead>
);
