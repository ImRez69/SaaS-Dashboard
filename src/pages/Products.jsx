import { useState } from "react";
import MinStatCard from "../components/ui/MinStatCard";
import { initialProducts } from "../data/productsData";
import Avatar from "../components/ui/avatar";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Table from "../components/ui/Table";
import formatNumber from "../utils/formatNumber";

export default function Products() {
  // const [products, setProducts] = useState(initialProducts); // For later if client need to control Products like add or romove
  const [activeTabId, setActiveTabId] = useState(() => {
    return JSON.parse(localStorage.getItem("activeTabId")) || 1;
  });

  const products = initialProducts;
  const productsDetails = {
    allProducts: products,
    activeProduct: products.filter((product) => product.status === "available"),
    inactiveProduct: products.filter(
      (product) => product.status === "low_stock",
    ),
    pendingProduct: products.filter(
      (product) => product.status === "out_of_stock",
    ),
    sumProductsPrice: formatNumber(
      products.reduce(
        (total, currentProduct) => total + currentProduct.price,
        0,
      ),
    ),
  };

  const tabSwitchHandle = (newId) => {
    setActiveTabId(newId);
    localStorage.setItem("activeTabId", JSON.stringify(newId));
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-foreground word-spacing-hover-anime w-full text-2xl font-bold">
        محصولات
      </h1>

      <div className="flex w-full flex-col justify-center gap-4">
        <div className="flex w-full justify-between gap-4">
          <div className="w-1/4">
            <MinStatCard
              title={"ارزش کل انبار (محصولات)"}
              value={productsDetails.sumProductsPrice + " تومان"}
            >
              <p>
                <strong className="text-emerald-500">12%+ </strong>
                نسبت به ماه قبل
              </p>
            </MinStatCard>
          </div>

          <div className="w-1/4">
            <MinStatCard
              title={"فروش هفته گذشته"}
              value={formatNumber(13210000) + " تومان"}
            >
              <p>
                <strong className="text-green-500">24%+ </strong>
                نسبت به هفته قبل
              </p>
            </MinStatCard>
          </div>

          <div className="w-1/4">
            <MinStatCard
              title={"فروش ماه گذشته"}
              value={formatNumber(64350000) + " تومان"}
            >
              <p>
                <strong className="text-amber-500">0% </strong>
                نسبت به ماه قبل
              </p>
            </MinStatCard>
          </div>

          <div className="w-1/4">
            <MinStatCard
              title={"فروش سال گذشته"}
              value={formatNumber(1432710000) + " تومان"}
            >
              <p>
                <strong className="text-rose-500">24%- </strong>
                نسبت به سال قبل
              </p>
            </MinStatCard>
          </div>
        </div>

        <div className="flex w-full justify-center gap-4">
          <div className="w-1/4">
            <MinStatCard
              title={"کل محصولات"}
              value={productsDetails.allProducts.length}
            >
              <p>
                <strong className="text-emerald-500">12%+ </strong>
                نسبت به ماه قبل
              </p>
            </MinStatCard>
          </div>

          <div className="w-1/4">
            <MinStatCard
              title={"محصولات در دسترس "}
              value={productsDetails.activeProduct.length}
            >
              <p>
                <strong className="text-green-500">24%+ </strong>
                نسبت به ماه قبل
              </p>
            </MinStatCard>
          </div>

          <div className="w-1/4">
            <MinStatCard
              title={"محصولات در حال اتمام"}
              value={productsDetails.inactiveProduct.length}
            >
              <p>
                <strong className="text-amber-500">36%+ </strong>
                نسبت به ماه قبل
              </p>
            </MinStatCard>
          </div>

          <div className="w-1/4">
            <MinStatCard
              title={"محصولات ناموجود"}
              value={productsDetails.pendingProduct.length}
            >
              <p>
                <strong className="text-rose-500">8%+ </strong>
                نسبت به ماه قبل
              </p>
            </MinStatCard>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col justify-center gap-4">
        <TabSwitch activeTabId={activeTabId} onSwitch={tabSwitchHandle} />
        <ProductsSection activeTabId={activeTabId} products={products} />
      </div>
    </div>
  );
}

function ProductsSection({ activeTabId, products }) {
  const [inputValues, setInputValues] = useState({
    name: "",
    category: "",
    status: "همه وضعیت ها",
  });

  const filteredItems = products.filter((product) => {
    const matchName = product.name.includes(inputValues.name);
    const matchCategory = product.category.includes(inputValues.category);
    const matchStatus =
      inputValues.status === "همه وضعیت ها" ||
      product.status.includes(inputValues.status);
    return matchName && matchCategory && matchStatus;
  });

  function changeHandle(e) {
    setInputValues((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  }

  function clearHandle() {
    setInputValues({ name: "", category: "", status: "همه وضعیت ها" });
  }

  return (
    <>
      <Searchbar
        inputValues={inputValues}
        onChange={changeHandle}
        onClear={clearHandle}
      />
      <ProductsList status={activeTabId === 1} products={filteredItems} />
      <ProductsTable status={activeTabId === 2} products={filteredItems} />
    </>
  );
}

function TabSwitch({ activeTabId, onSwitch }) {
  return (
    <div>
      <span>حالت نمایش: </span>

      <Button
        style={`rounded-l-none border-l-0 ${activeTabId === 1 && "bg-muted/20"}`}
        hover={false}
        onClick={() => onSwitch(1)}
      >
        لیست
      </Button>

      <Button
        style={`rounded-r-none border-r-0 ${activeTabId === 2 && "bg-muted/20"}`}
        hover={false}
        onClick={() => onSwitch(2)}
      >
        جدول
      </Button>
    </div>
  );
}

function Searchbar({ inputValues, onChange, onClear }) {
  return (
    <div className="flex w-full justify-between gap-4">
      <div className="flex flex-1 justify-between gap-4">
        <input
          type="text"
          name="name"
          className="w-1/2"
          placeholder="جستجو نام"
          value={inputValues.name}
          onChange={onChange}
        />
        <input
          type="text"
          name="category"
          className="w-1/2"
          placeholder="جستجو دسته بندی"
          value={inputValues.category}
          onChange={onChange}
        />
      </div>

      <select
        name="status"
        className=""
        value={inputValues.status}
        onChange={onChange}
      >
        <option value="همه وضعیت ها">همه وضعیت ها</option>
        <option value="در دسترس">در دسترس</option>
        <option value="در حال اتمام">در حال اتمام</option>
        <option value="ناموجود">ناموجود</option>
      </select>

      <Button onClick={onClear}>پاک کردن</Button>
    </div>
  );
}

function ProductsTable({ status, products }) {
  const columns = [
    { key: "id", label: "شناسه" },
    {
      key: "image",
      label: "تصویر",
      render: (value, item) => (
        <Avatar
          src={value}
          alt={item.name}
          style="transition-all hover:opacity-60 cursor-default"
          onlyImage
        />
      ),
    },
    { key: "name", label: "نام" },
    { key: "category", label: "دسته بندی" },
    {
      key: "status",
      label: "وضعیت",
      render: (value) => <Badge status={value} />,
    },
  ];
  return (
    <div
      className={`flex w-full flex-wrap items-center gap-4 ${status ? "" : "hidden"}`}
    >
      <Table columns={columns} items={products} />
    </div>
  );
}

function ProductsList({ status, products }) {
  return (
    <div className={`grid grid-cols-4 gap-4 ${status ? "" : "hidden"}`}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

function Product({ product }) {
  return (
    <div className="bg-surface border-border group shadow-base flex flex-col rounded-2xl border p-4">
      <img
        src={product.image}
        alt={product.name || "product-image"}
        className="light:bg-transparent light:mix-blend-multiply rounded-xl transition-opacity group-hover:opacity-80"
      />
      <h3 className="line-clamp-2 h-18 overflow-hidden py-4 text-lg text-ellipsis">
        {product.name}
      </h3>
      <span className="my-3">دسته‌بندی: {product.category}</span>
      <div className="flex items-center justify-between">
        <Badge status={product.status} />
        <span className="text-lg">{formatNumber(product.price)}</span>
      </div>
    </div>
  );
}
