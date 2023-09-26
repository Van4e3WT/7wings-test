import cn from 'classnames';

import { MenuItemIcon } from '@/assets/MenuItemIcon';

import { itemsList } from './Menu.mock';
import S from './Menu.module.scss';

export const Menu: React.FC = () => (
  <aside className={S['menu']}>
    <div className={S['header']}>
      <span>Название проекта</span>
      <span className={S['description']}>Аббревиатура</span>
      <button type="button" aria-label="expand header" className={S['expander']} />
    </div>
    <ul className={S['list']}>
      {itemsList.map((val, idx) => (
        <li key={val} className={cn(S['list-item'], { [S['list-item--active']]: idx === 0 })}>
          <button type="button" className={S['button']}>
            <div className={S['icon']}>
              <MenuItemIcon />
            </div>
            <span>{val}</span>
          </button>
        </li>
      ))}
    </ul>
  </aside>
);
