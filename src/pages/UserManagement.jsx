import { initialUsers } from "../data/userManagementData";
import Avatar from "../components/ui/Avatar";
import Badge from "../components/ui/Badge";
import MinStatCard from "../components/ui/MinStatCard";
import Table from "../components/ui/Table";
import { useState } from "react";
import Button from "../components/ui/Button";

export default function UsersManagement() {
  // const [users, setUsers] = useState(initialUsers); // For later if client need to control users like add or romove
  const users = initialUsers;

  const usersDetails = {
    allUser: users,
    activeUser: users.filter((user) => user.status === "active"),
    inactiveUser: users.filter((user) => user.status === "inactive"),
    pendingUser: users.filter((user) => user.status === "pending"),
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-foreground word-spacing-hover-anime w-full text-2xl font-bold">
        مدیریت کارمندان
      </h1>

      <div className="flex w-full justify-center gap-4">
        <div className="w-1/4">
          <MinStatCard title={"کل کاربران"} value={usersDetails.allUser.length}>
            <p>
              <strong className="text-green-500">12%+ </strong>
              نسبت به هفته قبل
            </p>
          </MinStatCard>
        </div>

        <div className="w-1/4">
          <MinStatCard
            title={"کاربران فعال"}
            value={usersDetails.activeUser.length}
          >
            <p>
              <strong className="text-emerald-500">2%+ </strong>
              نسبت به هفته قبل
            </p>
          </MinStatCard>
        </div>

        <div className="w-1/4">
          <MinStatCard
            title={"کاربران غیر فعال"}
            value={usersDetails.inactiveUser.length}
          >
            <p>
              <strong className="text-rose-500">1%+ </strong>
              نسبت به هفته قبل
            </p>
          </MinStatCard>
        </div>

        <div className="w-1/4">
          <MinStatCard
            title={"کاربران در انتظار"}
            value={usersDetails.pendingUser.length}
          >
            <p>
              <strong className="text-amber-500">8%+ </strong>
              نسبت به هفته قبل
            </p>
          </MinStatCard>
        </div>
      </div>

      <UsersTable users={users} />
    </div>
  );
}

function UsersTable({ users }) {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    role: "همه نقش ها",
  });

  const columns = [
    { key: "id", label: "شناسه" },
    {
      key: "avatar",
      label: "تصویر",
      render: (value, item) => (
        <Avatar
          src={value}
          userName={item.name}
          style="transition-all hover:opacity-60 cursor-default"
          onlyImage
        />
      ),
    },
    { key: "name", label: "نام" },
    { key: "email", label: "ایمیل" },
    { key: "role", label: "نقش" },
    {
      key: "status",
      label: "وضعیت",
      render: (value) => <Badge status={value} />,
    },
  ];

  const filteredItems = users.filter((user) => {
    const matchName = user.name.includes(inputValues.name);
    const matchEmail = user.email.includes(inputValues.email);
    const matchRole =
      inputValues.role === "همه نقش ها" || user.role.includes(inputValues.role);
    return matchName && matchEmail && matchRole;
  });

  function changeHanlde(e) {
    setInputValues((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  }

  function clearHandle() {
    setInputValues({ name: "", email: "", role: "همه نقش ها" });
  }

  return (
    <div className="flex w-full flex-wrap items-center gap-4">
      <div className="flex w-full justify-between gap-4">
        <div className="flex flex-1 justify-between gap-4">
          <input
            type="text"
            name="name"
            className="w-1/2"
            placeholder="جستجو نام"
            value={inputValues.name}
            onChange={changeHanlde}
          />
          <input
            type="text"
            name="email"
            className="w-1/2"
            placeholder="جستجو ایمیل"
            value={inputValues.email}
            onChange={changeHanlde}
          />
        </div>

        <select
          name="role"
          className=""
          value={inputValues.role}
          onChange={changeHanlde}
        >
          <option value="همه نقش ها">همه نقش ها</option>
          <option value="مدیر سیستم">مدیر سیستم</option>
          <option value="برنامه‌نویس">برنامه‌نویس</option>
          <option value="طراح UI/UX">طراح UI/UX</option>
          <option value="پشتیبان">پشتیبان</option>
        </select>

        <Button onClick={clearHandle}>پاک کردن</Button>
      </div>

      <Table columns={columns} items={filteredItems} />
    </div>
  );
}
