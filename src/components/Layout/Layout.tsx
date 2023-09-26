import { PropsWithChildren } from 'react';

import S from './Layout.module.scss';
import { Header } from './Header';
import { Menu } from './Menu';
import { Tabs } from './Tabs';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <div className={S['wrapper']}>
    <Header />
    <div className={S['container']}>
      <Menu />
      <section className={S['content']}>
        <Tabs />
        {children}
      </section>
    </div>
  </div>
);
