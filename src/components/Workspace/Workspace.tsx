import { FormEventHandler, useEffect, useState } from 'react';

import { Table } from '@/components/Table';
import { ListResponse, api } from '@/api';

import S from './Workspace.module.scss';
import { Row } from './Row';
import { WorkspaceProvider } from './Workspace.context';
import { Form, FormMode, ListAction } from './Workspace.types';
import { makeListEditor } from './Workspace.utils';

export const Workspace: React.FC = () => {
  const [list, setList] = useState<ListResponse | null>(null);
  const [form, setForm] = useState<Form | null>(null);

  useEffect(() => {
    api.getList().then(setList);
  }, []);

  const handleFormSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    if (!form) return;

    if (form.mode === FormMode.CREATE) {
      api.createRow({ ...form.row }).then((res) => {
        setList((prevState) => {
          if (!prevState) return null;

          const getFormattedList = makeListEditor(res.current, ListAction.CREATE);

          return getFormattedList(res.changed, prevState) ?? null;
        });
      }).catch((err) => {
        console.error(err.message);
      });
    } else if (form.mode === FormMode.EDIT) {
      api.updateRow({
        rID: form.row.id,
        request: form.row,
      }).then((res) => {
        setList((prevState) => {
          if (!prevState) return null;

          const getFormattedList = makeListEditor(res.current, ListAction.UPDATE);

          return getFormattedList(res.changed, prevState) ?? null;
        });
      }).catch((err) => {
        console.error(err.message);
      });
    }

    setForm(null);
  };

  return (
    <WorkspaceProvider value={{
      list, form, setList, setForm,
    }}
    >
      <div className={S['wrapper']}>
        <form onSubmit={handleFormSubmit}>
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
              {list?.map((row) => <Row key={row.id} data={row} />)}
              {list && list.length === 0 && (
                <Row isEditable />
              )}
            </Table.Body>
          </Table>
        </form>
      </div>
    </WorkspaceProvider>
  );
};
