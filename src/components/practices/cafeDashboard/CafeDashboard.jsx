import { useState } from "react";
// import { useImmer } from "use-immer";
import AddOrderForm from "./AddOrderForm";
import OrderBox from "./OrderBox";

export default function CafeDashboard() {
  const statusList = ["pending", "preparing", "ready", "complete"];
  const initialOrders = [
    {
      id: 1,
      tableNumber: 4,
      item: "Espresso",
      status: "pending",
      statusStage: 0,
      price: 45000,
    },
    {
      id: 2,
      tableNumber: 2,
      item: "Chocolate Cake",
      status: "preparing",
      statusStage: 1,
      price: 65000,
    },
    {
      id: 3,
      tableNumber: 7,
      item: "Latte",
      status: "ready",
      statusStage: 2,
      price: 55000,
    },
    {
      id: 4,
      tableNumber: 4,
      item: "Cappuccino",
      status: "pending",
      statusStage: 0,
      price: 58000,
    },
    {
      id: 5,
      tableNumber: 1,
      item: "New York Cheesecake",
      status: "preparing",
      statusStage: 1,
      price: 75000,
    },
  ];
  const newOrderSctructure = {
    tableNumber: "",
    item: "",
    price: "",
  };
  const [orders, setOrders] = useState(initialOrders);
  const [prevOrders, setPrevOrders] = useState([]);
  const [newOrderData, setNewOrderData] = useState({ ...newOrderSctructure });

  function handleNextStage(e, orderId) {
    e.preventDefault();
    e.stopPropagation();

    const targetOrder = orders.find((order) => order.id === orderId);
    const nextStage = targetOrder.statusStage + 1;
    const nextStatus = statusList[nextStage];

    const updatedOrder = {
      ...targetOrder,
      status: nextStatus,
      statusStage: nextStage,
    };
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? updatedOrder : order,
    );

    if (updatedOrder.status === "complete") {
      setPrevOrders((prev) => [...prev, updatedOrder]);
    }
    setOrders(updatedOrders.filter((order) => order.status !== "complete"));
  }

  function handleCancelOrder(e, orderId) {
    e.preventDefault();
    e.stopPropagation();

    const targetOrder = orders.find((order) => order.id === orderId);

    const canceledOrder = {
      ...targetOrder,
      status: "canceled",
      statusStage: -1,
    };
    const updatedOrders = orders.filter((order) => {
      return order.id !== orderId;
    });
    setPrevOrders((prev) => [...prev, canceledOrder]);
    setOrders(updatedOrders);
  }

  function handleSubmitOrder(e) {
    e.preventDefault();
    e.stopPropagation();

    const formData = new FormData(e.currentTarget);
    const newOrderData = {
      id: orders.length + 1,
      tableNumber: formData.get("tableNumber"),
      item: formData.get("item"),
      status: "pending",
      statusStage: 0,
      price: formData.get("price"),
    };
    setOrders((prev) => [...prev, newOrderData]);
    setNewOrderData({ ...newOrderSctructure });
  }

  function handleChangeForm(e) {
    const name = e.target.name;
    const value = e.target.value;
    setNewOrderData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  return (
    <div className="w-full">
      <AddOrderForm
        newOrderData={newOrderData}
        onSubmitOrder={handleSubmitOrder}
        onChangeForm={handleChangeForm}
      />

      <OrderBox
        style={"mx-auto mb-4 w-[90%]"}
        h3Title={"In Progress Orders"}
        orders={orders}
        onNextStage={handleNextStage}
        onCancelOrder={handleCancelOrder}
      />

      {prevOrders.length > 0 && (
        <OrderBox
          style={"mx-auto w-[90%]"}
          h3Title={"Delivered Orders"}
          orders={prevOrders}
        />
      )}
    </div>
  );
}
