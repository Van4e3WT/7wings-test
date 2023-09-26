import { Table } from '@/components/Table';

import S from './Workspace.module.scss';

export const Workspace: React.FC = () => (
  <div className={S['wrapper']}>
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Title>Уровень</Table.Title>
          <Table.Title>Наименование работ</Table.Title>
          <Table.Title>Основная з/п</Table.Title>
          <Table.Title>Оборудование</Table.Title>
          <Table.Title>Накладные расходы</Table.Title>
          <Table.Title>Сметная прибыль</Table.Title>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Data>Test</Table.Data>
          <Table.Data>Test</Table.Data>
          <Table.Data>Test</Table.Data>
          <Table.Data>Test</Table.Data>
          <Table.Data>Test</Table.Data>
          <Table.Data>Test</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>Test</Table.Data>
          <Table.Data>Test</Table.Data>
          <Table.Data>Test</Table.Data>
          <Table.Data>Test</Table.Data>
          <Table.Data>Test</Table.Data>
          <Table.Data>Test</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Data>Test</Table.Data>
          <Table.Data>Test</Table.Data>
          <Table.Data>Test</Table.Data>
          <Table.Data>Test</Table.Data>
          <Table.Data>Test</Table.Data>
          <Table.Data>Test</Table.Data>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
);
