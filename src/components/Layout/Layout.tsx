import { PropsWithChildren } from 'react';

import S from './Layout.module.scss';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <div className={S['wrapper']}>
    <header />
    <aside />
    <section className={S['container']}>{children}</section>
  </div>
);
