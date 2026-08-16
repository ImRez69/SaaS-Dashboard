import type { User } from "../types/user";

export const initialUsers: User[] = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/150?img=11",
    name: "علی محمدی",
    email: "ali.mohammadi@example.com",
    role: "مدیر سیستم",
    status: "active",
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/150?img=5",
    name: "سارا احمدی",
    email: "sara.ahmadi@example.com",
    role: "برنامه‌نویس",
    status: "active",
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/150?img=12",
    name: "رضا کریمی",
    email: "reza.karimi@example.com",
    role: "طراح UI/UX",
    status: "inactive",
  },
  {
    id: 4,
    avatar: "https://i.pravatar.cc/150?img=9",
    name: "مریم حسینی",
    email: "maryam.h@example.com",
    role: "پشتیبان",
    status: "active",
  },
  {
    id: 5,
    avatar: "https://i.pravatar.cc/150?img=13",
    name: "مهدی قاسمی",
    email: "mehdi.q@example.com",
    role: "برنامه‌نویس",
    status: "pending",
  },
];
