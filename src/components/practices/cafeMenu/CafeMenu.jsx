import { useState } from "react";
import CategoryBox from "./CategoryBox";

const initialItems = {
  "item-1": { id: "item-1", name: "Espresso", price: 45000, selected: true },
  "item-2": { id: "item-2", name: "Latte", price: 55000, selected: false },
  "item-3": { id: "item-3", name: "Cake 1", price: 65000, selected: false },
};

const initialCategories = {
  "cats-1": {
    id: "cats-1",
    categoryName: "Hot Drinks",
    itemIds: ["item-1", "item-2"],
  },
  "cats-2": {
    id: "cats-2",
    categoryName: "Cakes",
    itemIds: ["item-3"],
  },
};

export default function CafeMenu() {
  const [items, setItems] = useState(initialItems);
  const categories = initialCategories;
  const catsValue = Object.values(categories);

  function handleSelectedItem(itemId) {
    setItems((prevItems) => {
      const updatedEntries = Object.entries(prevItems).map(([key, item]) => [
        key,
        { ...item, selected: item.id === itemId },
      ]);
      return Object.fromEntries(updatedEntries);
    });
  }

  function handleDeleteItem(catId, itemId) {
    setItems((prevItems) => {
      const newItems = { ...prevItems };
      delete newItems[itemId];
      return newItems;
    });
  }

  return (
    <div className="flex-start-center w-full flex-wrap gap-6">
      {catsValue.map((cat) => (
        <CategoryBox
          key={cat.id}
          cat={cat}
          items={items}
          onSelect={handleSelectedItem}
          onDelete={handleDeleteItem}
        />
      ))}
    </div>
  );
}
