import Button from "../../ui/Button.jsx";

export default function Cart({ product, onRemoveItem, onUpdateItemQuantity }) {
  return (
    <div className="flex-center-between hover:bg-border/40 w-full px-3 transition-colors hover:rounded-lg">
      <h2 className="min-w-60 text-gray-400">{product.name}</h2>
      <span className="text-xl font-bold">{product.price}</span>
      <span className="font-mono text-xl italic">{product.quantity}</span>

      <Button
        onClick={() => {
          onRemoveItem(product.id);
        }}
      >
        Remove
      </Button>

      <Button
        onClick={() => {
          onUpdateItemQuantity(product.id, 1);
        }}
      >
        + Add
      </Button>
      <Button
        onClick={() => {
          onUpdateItemQuantity(product.id, -1);
        }}
      >
        - Reduce
      </Button>
    </div>
  );
}
