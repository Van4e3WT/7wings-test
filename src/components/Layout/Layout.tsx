import { PropsWithChildren } from 'react';

import S from './Layout.module.scss';
import { Header } from './Header';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <div className={S['wrapper']}>
    <Header />
    <aside />
    <section className={S['container']}>{children}</section>
  </div>
);
