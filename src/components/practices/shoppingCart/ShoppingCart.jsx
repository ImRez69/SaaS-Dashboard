import { useReducer } from "react";
import { cartReducer } from "./cartReducer";
import Cart from "./Cart";
import Button from "./Button";

const initialProduct = [
  { id: 1, name: "Product A", price: 100, quantity: 1 },
  { id: 2, name: "Product B", price: 200, quantity: 3 },
];
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

export default function ShoppingCart() {
  const [state, dispatch] = useReducer(cartReducer, initialProduct);

  const products = state;
  const newProduct = { id: 3, name: "Product B", price: 300, quantity: 5 };
  function addItemHandler() {
    const productName =
      "Product " +
      alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();

    dispatch({
      type: "add_item",
      ...newProduct,
      name: productName,
      id: 3,
      quantity: 1,
    });
  }

  function updateItemQuantityHandler(productId, quantityChange) {
    dispatch({ type: "update_quantity", id: productId, quantityChange });
  }

  function removeItemHandler(productId) {
    dispatch({ type: "remove_item", id: productId });
  }

  function clearCartHandler() {
    dispatch({ type: "clear_cart" });
  }

  return (
    <div className="flex-center bg-border/40 divide-border min-w-2/3 flex-col divide-y-2 rounded-2xl p-4">
      {/* {cartReducer()} */}
      {/* {console.log(state)} */}
      {/* {console.log(products)} */}

      {products.map((product) => (
        <Cart
          key={product.id}
          product={product}
          onUpdateItemQuantity={updateItemQuantityHandler}
          onRemoveItem={removeItemHandler}
        />
      ))}
      <div className="flex-center gap-8 pt-4">
        <Button onClick={addItemHandler}>Add Item</Button>

        <Button onClick={clearCartHandler} style={"bg-red-900"}>
          Clear Cart
        </Button>
      </div>
      {/* {addItemHandler()} */}
      {/* <form
        action=""
        className="flex-center-start w-full gap-4 px-2 py-4"
        name="add-item"
      >
        <input type="text" placeholder="Name" className="m-0 w-4/10" />
        <input type="number" placeholder="Price" className="m-0 w-2/10" />
        <input type="number" placeholder="Quantity" className="m-0 w-2/10" />
        <Button
        //   type={"submit"}
          onClick={(e) => {
            addItemHandler(e, new FormData("add-item"));
          }}
          style={"w-2/10"}
        >
          Add Item
        </Button>
      </form> */}
    </div>
  );
}
