import { apiClient } from './client';
import type { Item } from '../types';

export const itemService = {
  getAll: async () => {
    const response = await apiClient.get<Item[]>('/items');
    return response.data;
  },

  create: async (item: Item) => {
    const response = await apiClient.post<Item>('/items', item);
    return response.data;
  }
};
