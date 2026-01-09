import { useState } from 'react';
import type { Item } from '../../../src/types';

interface ItemFormProps {
  onSubmit: (item: Item) => Promise<boolean>; // Returns success/fail
  disabled: boolean;
}

export function ItemForm({ onSubmit, disabled }: ItemFormProps) {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const success = await onSubmit({
      id: 0,
      name,
      description: desc
    });

    if (success) {
      setName('');
      setDesc('');
    }
  };

  return (
    <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
      <h3>Add New Item</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          placeholder="Item Name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={disabled}
        />
        <input 
          type="text" 
          placeholder="Description" 
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          disabled={disabled}
        />
        <button type="submit" disabled={disabled}>
          {disabled ? 'Saving...' : 'Add Item'}
        </button>
      </form>
    </div>
  );
}
