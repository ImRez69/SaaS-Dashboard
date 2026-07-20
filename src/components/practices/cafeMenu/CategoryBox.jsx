import ItemList from "./ItemList";

export default function CategoryBox({ cat, items, onSelect, onDelete }) {
  const catNotEmpty = () => cat.itemIds.some((id) => Object.hasOwn(items, id));

  return (
    catNotEmpty() && (
      <div className="border-border w-200 rounded-2xl border bg-gray-900 py-4">
        <h2 className="border-border m-0 w-full border-b-2 py-4 text-center text-2xl">
          {cat.categoryName}
        </h2>
        <ul className="divide-border divide-y-2">
          {cat.itemIds.map((itemId) => {
            return (
              items[itemId] && (
                <ItemList
                  key={itemId}
                  item={items[itemId]}
                  cat={cat}
                  onSelect={onSelect}
                  onDelete={onDelete}
                />
              )
            );
          })}
        </ul>
      </div>
    )
  );
}
