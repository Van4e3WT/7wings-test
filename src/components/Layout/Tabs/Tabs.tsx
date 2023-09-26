import S from './Tabs.module.scss';

export const Tabs: React.FC = () => (
  <div className={S['wrapper']}>
    <button type="button" className={S['tab']}>Строительно-монтажные работы</button>
  </div>
);
