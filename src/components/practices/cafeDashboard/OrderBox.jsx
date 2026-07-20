import OrderCard from "./OrderCard";

export default function OrderBox({
  style,
  h3Title,
  orders,
  onNextStage,
  onCancelOrder,
}) {
  return (
    <div className={style}>
      <h3 className="w-full text-center opacity-20"> {h3Title}</h3>
      <ul className="border-border bg-foreground-h-light/20 rounded-2xl border p-2">
        {orders.map((order) => (
          <OrderCard
            order={order}
            key={order.id}
            onNextStage={onNextStage}
            onCancelOrder={onCancelOrder}
          />
        ))}
      </ul>
    </div>
  );
}
