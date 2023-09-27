import { useEffect, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { Table } from '@/components/Table';
import { ListResponse, api } from '@/api';

import S from './Workspace.module.scss';
import { Row } from './Row';
import { WorkspaceProvider } from './Workspace.context';

type FormFields = {
  rowName: string;
  salary: number;
  equipmentCosts: number;
  overheads: number;
  estimatedProfit: number;
};

export const Workspace: React.FC = () => {
  const [list, setList] = useState<ListResponse | null>(null);
  const methods = useForm<FormFields>();

  useEffect(() => {
    api.getList().then(setList);
  }, []);

  const handleFormSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <WorkspaceProvider value={{ list, setList }}>
      <FormProvider {...methods}>
        <div className={S['wrapper']}>
          <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
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
          </form>
        </div>
      </FormProvider>
    </WorkspaceProvider>
  );
};
