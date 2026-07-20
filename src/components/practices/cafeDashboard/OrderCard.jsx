import OrderListItem from "./OrderListItem";

export default function OrderCard({ order, onNextStage, onCancelOrder }) {
  return (
    <OrderListItem
      order={order}
      onNextStage={onNextStage}
      onCancelOrder={onCancelOrder}
    />
  );
}
