import Button from "./Button";

export default function ItemList({ item, cat, onSelect, onDelete }) {
  if (!item) return;
  return (
    <li
      className={`flex-start-between list-none p-4 transition-colors hover:bg-gray-950/40 ${item.selected ? "bg-gray-950/60 hover:bg-gray-900/80" : ""}`}
    >
      <span className="min-w-60 text-xl">{item.name}</span>
      <span className="text-xl">{item.price}</span>
      <Button
        onClick={() => {
          onSelect(item.id);
        }}
      >
        Expensive
      </Button>
      <Button
        onClick={() => {
          onDelete(cat.id, item.id);
        }}
      >
        Delete
      </Button>
    </li>
  );
}
