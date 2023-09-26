import axios from 'axios';

import {
  CreateRowRequest,
  DeleteRowRequest,
  RecalculatedRowsResponse,
  ListResponse,
  UpdateRowRequest,
} from './API.types';

const ADDRESS = 'http://185.244.172.108:8081';
const EID = '62578';

class API {
  private static instance?: API;

  private constructor() {}

  public static getInstance(): API {
    if (!this.instance) {
      this.instance = new API();
    }

    return this.instance;
  }

  public async getList() {
    try {
      const result = await axios.get<ListResponse>(`${ADDRESS}/v1/outlay-rows/entity/${EID}/row/list`);

      return result.data;
    } catch (error) {
      throw new Error('Failed to get list');
    }
  }

  public async createRow(data: CreateRowRequest) {
    try {
      const result = await axios.post<RecalculatedRowsResponse>(`${ADDRESS}/v1/outlay-rows/entity/${EID}/row/create`, data);

      return result.data;
    } catch (error) {
      throw new Error('Failed to create row');
    }
  }

  public async updateRow({ rID, request }: UpdateRowRequest) {
    try {
      const result = await axios.post<RecalculatedRowsResponse>(`${ADDRESS}/v1/outlay-rows/entity/${EID}/row/${rID}/update`, request);

      return result.data;
    } catch (error) {
      throw new Error('Failed to update row');
    }
  }

  public async deleteRow({ rID }: DeleteRowRequest) {
    try {
      const result = await axios.delete<RecalculatedRowsResponse>(`${ADDRESS}/v1/outlay-rows/entity/${EID}/row/${rID}/delete`);

      return result.data;
    } catch (error) {
      throw new Error('Failed to delete row');
    }
  }
}

export const api = API.getInstance();
