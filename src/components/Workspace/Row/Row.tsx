import cn from 'classnames';
import { useFormContext } from 'react-hook-form';

import { NestedRow, api } from '@/api';
import { Table } from '@/components/Table';
import { DocumentIcon } from '@/assets/DocumentIcon';
import { TrashIcon } from '@/assets/TrashIcon';

import { useWorkspace } from '../Workspace.context';
import { defaultRowData } from '../Workspace.data';
import S from './Row.module.scss';

type Props = {
  data?: NestedRow;
  isEditable?: boolean;
};

export const Row: React.FC<Props> = ({ isEditable = false, data = defaultRowData }) => {
  const {
    rowName,
    salary,
    equipmentCosts,
    overheads,
    estimatedProfit,
  } = data;
  const { register } = useFormContext();
  const { setList } = useWorkspace();

  const handleRowDelete = () => {
    api.deleteRow({ rID: data.id })
      .then(() => {
        setList((prevState) => {
          if (!prevState) return null;

          return prevState.filter(({ id }) => id !== data.id);
        });
      })
      .catch((e) => {
        console.error(e.message);
      });
  };

  return (
    <Table.Row>
      <Table.Data>
        <div className={S['buttons']}>
          <button type="button" className={cn(S['button'], S['button--color--accent'])}>
            <div className={S['icon']}>
              <DocumentIcon />
            </div>
          </button>
          {!isEditable ? (
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
        {isEditable ? (
          <input {...register('rowName')} type="text" className={S['input']} />
        ) : rowName}
      </Table.Data>
      <Table.Data>
        {isEditable ? (
          <input {...register('salary')} type="number" name="salary" className={S['input']} />
        ) : salary}
      </Table.Data>
      <Table.Data>
        {isEditable ? (
          <input {...register('equipmentCosts')} type="number" name="equipmentCosts" className={S['input']} />
        ) : equipmentCosts}
      </Table.Data>
      <Table.Data>
        {isEditable ? (
          <input {...register('overheads')} type="number" name="overheads" className={S['input']} />
        ) : overheads}
      </Table.Data>
      <Table.Data>
        {isEditable ? (
          <input {...register('estimatedProfit')} type="number" name="estimatedProfit" className={S['input']} />
        ) : estimatedProfit}
      </Table.Data>
    </Table.Row>
  );
};
