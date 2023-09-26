import cn from 'classnames';

import { MenuIcon } from '@/assets/MenuIcon';
import { BackIcon } from '@/assets/BackIcon';

import S from './Header.module.scss';
import { HeaderSection } from './Header.data';

export const Header: React.FC = () => (
  <header className={S['wrapper']}>
    <div className={S['controls']}>
      <button type="button" className={S['button']}>
        <div className={S['icon']}>
          <MenuIcon />
        </div>
      </button>
      <button type="button" className={S['button']}>
        <div className={S['icon']}>
          <BackIcon />
        </div>
      </button>
    </div>
    <nav>
      <ul className={S['list']}>
        {Object.values(HeaderSection).map((val, idx) => (
          <li key={val} className={cn(S['list-item'], { [S['list-item--active']]: idx === 0 })}>
            <button type="button" className={S['button']}>{val}</button>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);
