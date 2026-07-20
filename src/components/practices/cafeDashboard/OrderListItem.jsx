import Button from "./Button.jsx";

const formatter = new Intl.NumberFormat("en-US", {
  useGrouping: true,
  numberingSystem: "latn",
});

export default function OrderListItem({ order, onNextStage, onCancelOrder }) {
  const status = order.status;

  const liBgCheck = (status) => {
    let liBg = "";
    if (status === "preparing") liBg = "bg-blue-400/20 hover:bg-blue-400/10"; // Blue
    if (status === "pending") liBg = "bg-yellow-400/40 hover:bg-yellow-400/20"; // Yellow
    if (status === "ready") liBg = "bg-green-400/40 hover:bg-green-400/20"; // Green
    if (status === "complete") liBg = "bg-sky-950/40 hover:bg-sky-950/20"; // Gray
    if (status === "canceled") liBg = "bg-gray-800/40 hover:bg-gray-800/20"; // Gray
    return liBg;
  };
  const nextStageBtnTextCheck = (status) => {
    if (status === "complete") return "Delivered";
    if (status === "canceled") return "Canceled";
    if (status === "ready") return "Deliver";
    return "Next";
  };
  return (
    <li
      className={`flex-center-start min-h-18 w-full gap-4 p-4 transition-colors ${liBgCheck(status)} mb-1 first:rounded-t-lg last:rounded-b-lg`}
    >
      <span className="w-[35%] text-lg text-shadow-lg">
        {order.id}. <strong>{order.item}</strong>
      </span>

      <span className="w-[20%] text-lg text-shadow-lg">
        Price: <strong>{formatter.format(order.price)}$</strong>
      </span>

      <span className="w-[15%] text-lg text-shadow-lg">
        For Table <strong>{order.tableNumber}</strong>
      </span>

      <span className="w-[10%] text-center text-lg capitalize text-shadow-lg">
        {order.status}
      </span>

      <Button
        style={`hover:shadow-base w-[10%] text-center text-lg capitalize transition-all text-shadow-lg ${liBgCheck(status)}`}
        onClick={(e) => onNextStage(e, order.id)}
        disable={status === "complete" || status === "canceled"}
      >
        {nextStageBtnTextCheck(status)}
      </Button>

      <Button
        style="hover:shadow-base w-[10%] text-center text-lg capitalize transition-all text-shadow-lg bg-red-900/90"
        onClick={(e) => onCancelOrder(e, order.id)}
        disable={status === "complete" || status === "canceled"}
      >
        Cancel
      </Button>
    </li>
  );
}
