import { useState, useEffect, useCallback } from 'react';
import { itemService } from '../api/items';
import type { Item } from '../types';

export function useItems() {
  const [items, setItems] = useState<Item[]>([]);

  // Use a status string for basic state management
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    setStatus('loading');
    setError(null);
    try {
      const data = await itemService.getAll();
      setItems(data);
      setStatus('idle');
    } catch (err: any) {
      console.error(err);
      setError('Failed to fetch items');
      setStatus('error');
    }
  }, []);

  // Initial load
  useEffect(() => {
    refresh();
  }, [refresh]);

  const add = async (item: Item) => {
    try {
      await itemService.create(item);
      // Auto-refresh after adding
      await refresh();
      return true;
    } catch (err: any) {
      console.error(err);
      setError('Failed to add item');
      return false;
    }
  };

  return { items, status, error, add, refresh };
}
