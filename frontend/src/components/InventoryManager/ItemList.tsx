import type { Item } from "../../types";

interface ItemListProps {
  items: Item[];
}

export function ItemList({ items }: ItemListProps) {
  if (items.length === 0) {
    return <p style={{ color: '#888' }}>No items found.</p>;
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <strong>{item.name}</strong>
          {item.description && <span>: {item.description}</span>}
        </li>
      ))}
    </ul>
  );
}
