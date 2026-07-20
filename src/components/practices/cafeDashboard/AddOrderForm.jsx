import Button from "./Button.jsx";

export default function AddOrderForm({
  newOrderData,
  onSubmitOrder,
  onChangeForm,
}) {
  const disableCheck = () => {
    const tableNumber = newOrderData.tableNumber.length === 0;
    const item = newOrderData.item.length === 0;
    const price = newOrderData.price.length === 0;
    return tableNumber || item || price;
  };

  return (
    <form
      action="submit"
      onSubmit={(e) => onSubmitOrder(e)}
      className="flex-center gap-4 py-4"
    >
      <input
        value={newOrderData.tableNumber}
        type="text"
        name="tableNumber"
        className="m-0 text-center"
        onChange={(e) => onChangeForm(e)}
        placeholder="Table Number"
      />

      <input
        value={newOrderData.item}
        type="text"
        name="item"
        className="m-0 text-center"
        onChange={(e) => onChangeForm(e)}
        placeholder="Item Name"
      />

      <input
        value={newOrderData.price}
        type="text"
        name="price"
        className="m-0 text-center"
        onChange={(e) => onChangeForm(e)}
        placeholder="Price"
      />

      <Button disable={disableCheck()}>Add Order</Button>
    </form>
  );
}
