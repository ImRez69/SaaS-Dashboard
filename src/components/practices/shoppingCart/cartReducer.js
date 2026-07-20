export function cartReducer(state, action) {
  console.log("cartReducer Run");

  switch (action.type) {
    case "add_item": {
      console.log(" From add_item Action => ", action);
      const productFind = state.find((product) => product.id === action.id);
      let newProducts;

      if (productFind) {
        newProducts = state.map((product) =>
          product.id === action.id
            ? { ...product, quantity: product.quantity + action.quantity }
            : product,
        );
      } else {
        newProducts = [
          ...state,
          {
            id: action.id,
            name: action.name,
            price: action.price,
            quantity: action.quantity,
          },
        ];
      }
      return newProducts;
    }

    case "update_quantity": {
      console.log(" From update_quantity Action => ", action);
      const newProducts = state.map((product) =>
        product.id === action.id
          ? { ...product, quantity: product.quantity + action.quantityChange }
          : product,
      );

      const filteredProducts = newProducts.filter(
        (product) => product.quantity > 0,
      );
      return filteredProducts;
    }

    case "remove_item": {
      console.log("From remove_item Action => ", action);
      const filteresProducts = state.filter(
        (product) => product.id !== action.id,
      );

      return filteresProducts;
    }

    case "clear_cart": {
      console.log(" From clear_cart Action => ", action);
      return [];
    }

    default: {
      console.log(" From Default Action => ", action);
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}
