import cn from 'classnames';
import { ChangeEvent, useEffect, useState } from 'react';

import { NestedRow, api } from '@/api';
import { Table } from '@/components/Table';
import { DocumentIcon } from '@/assets/DocumentIcon';
import { TrashIcon } from '@/assets/TrashIcon';

import { useWorkspace } from '../Workspace.context';
import { FormMode, ListAction } from '../Workspace.types';
import { defaultRowData } from './Row.data';
import S from './Row.module.scss';
import { makeListEditor } from '../Workspace.utils';

type Props = {
  parentId?: number | null;
  data?: NestedRow;
  isEditable?: boolean;
};

export const Row: React.FC<Props> = ({
  parentId = null,
  isEditable = false,
  data = defaultRowData,
}) => {
  const {
    rowName,
    salary,
    equipmentCosts,
    overheads,
    estimatedProfit,
  } = data;
  const [mode, setMode] = useState(isEditable ? FormMode.CREATE : FormMode.READ);
  const { form, setList, setForm } = useWorkspace();

  useEffect(() => {
    if (mode === FormMode.READ) return;

    setForm({
      mode,
      row: {
        ...data,
        parentId,
      },
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (mode === FormMode.EDIT && !form) setMode(FormMode.READ);
  }, [mode, form]);

  const handleRowDelete = () => {
    api.deleteRow({ rID: data.id })
      .then((res) => {
        setList((prevState) => {
          if (!prevState) return null;

          const getFormattedList = makeListEditor(data, ListAction.DELETE);

          return getFormattedList(res.changed, prevState) ?? null;
        });
      })
      .catch((e) => {
        console.error(e.message);
      });
  };

  const handleRowCreate = () => {
    if (mode !== FormMode.READ) return;

    if (form?.row.parentId !== data.id) {
      setForm({
        mode: FormMode.CREATE,
        row: {
          ...defaultRowData,
          parentId: data.id,
        },
      });
    } else {
      setForm(null);
    }
  };

  const handleRowUpdate = () => {
    if (mode !== FormMode.READ) return;

    setMode(FormMode.EDIT);
    setForm({
      mode: FormMode.EDIT,
      row: {
        ...data,
        parentId: data.id,
      },
    });
  };

  const makeInputChangeHandler = (prop: string, isNumber = false) => (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    setForm((prevState) => {
      if (!prevState) return null;

      return {
        ...prevState,
        row: {
          ...prevState.row,
          [prop]: isNumber ? Number(e.target.value) : e.target.value,
        },
      };
    });
  };

  return (
    <>
      <Table.Row onDoubleClick={handleRowUpdate}>
        <Table.Data>
          <div className={S['buttons']} onDoubleClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={cn(S['button'], S['button--color--accent'])}
              onClick={handleRowCreate}
            >
              <div className={S['icon']}>
                <DocumentIcon />
              </div>
            </button>
            {mode === FormMode.READ ? (
              <button
                type="button"
                className={cn(S['button'], S['button--color--error'], S['button--type--extended'])}
                onClick={handleRowDelete}
              >
                <div className={S['icon']}>
                  <TrashIcon />
                </div>
              </button>
            ) : <button type="submit" aria-label="submit" />}
          </div>
        </Table.Data>
        <Table.Data>
          {form && mode !== FormMode.READ ? (
            <input name="rowName" type="text" className={S['input']} value={form.row.rowName} onChange={makeInputChangeHandler('rowName')} />
          ) : rowName}
        </Table.Data>
        <Table.Data>
          {form && mode !== FormMode.READ ? (
            <input name="salary" type="number" className={S['input']} value={form.row.salary} onChange={makeInputChangeHandler('salary', true)} />
          ) : salary}
        </Table.Data>
        <Table.Data>
          {form && mode !== FormMode.READ ? (
            <input name="equipmentCosts" type="number" className={S['input']} value={form.row.equipmentCosts} onChange={makeInputChangeHandler('equipmentCosts', true)} />
          ) : equipmentCosts}
        </Table.Data>
        <Table.Data>
          {form && mode !== FormMode.READ ? (
            <input name="overheads" type="number" className={S['input']} value={form.row.overheads} onChange={makeInputChangeHandler('overheads', true)} />
          ) : overheads}
        </Table.Data>
        <Table.Data>
          {form && mode !== FormMode.READ ? (
            <input name="estimatedProfit" type="number" className={S['input']} value={form.row.estimatedProfit} onChange={makeInputChangeHandler('estimatedProfit', true)} />
          ) : estimatedProfit}
        </Table.Data>
      </Table.Row>
      {data.child.length > 0 && data.child.map((row) => <Row key={row.id} data={row} />)}
      {form && form.row.parentId === data.id && form.mode === FormMode.CREATE && (
        <Row parentId={data.id} isEditable />
      )}
    </>
  );
};
