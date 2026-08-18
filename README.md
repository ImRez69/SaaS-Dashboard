# SaaS Dashboard

یک داشبورد مدیریتی مدرن و واکنش‌گرا برای پروژه‌های SaaS که با React و Vite ساخته شده است. رابط کاربری با Tailwind CSS و Material UI طراحی شده و برای نمایش داده‌ها از نمودارهای تعاملی Recharts استفاده می‌کند.

## تکنولوژی‌های استفاده‌شده

* **React 19** — ساخت رابط کاربری
* **Vite** — ابزار توسعه و Build
* **Tailwind CSS 4** — استایل‌دهی و طراحی رابط کاربری
* **Material UI (MUI)** — کامپوننت‌ها و آیکون‌های رابط کاربری
* **Recharts** — نمایش و بصری‌سازی داده‌ها
* **React Syntax Highlighter** — نمایش کد با Syntax Highlighting
* **ESLint + Prettier** — بررسی و فرمت‌دهی کد

## شروع کار

### دریافت پروژه

```bash
git clone https://github.com/ImRez69/SaaS-Dashboard.git
cd SaaS-Dashboard
```

### نصب وابستگی‌ها

```bash
npm install
```

### اجرای پروژه

```bash
npm run dev
```

بعد از اجرای دستور، Vite آدرس اجرای پروژه را در ترمینال نمایش می‌دهد.

## دستورات موجود

| دستور             | توضیح                                  |
| ----------------- | -------------------------------------- |
| `npm run dev`     | اجرای پروژه در حالت توسعه              |
| `npm run build`   | ساخت نسخه نهایی برای Production        |
| `npm run preview` | پیش‌نمایش نسخه Production به صورت محلی |
| `npm run lint`    | بررسی کد با ESLint                     |

## ساختار پروژه

```text
SaaS-Dashboard/
├── public/              # فایل‌های استاتیک
├── src/                 # کد اصلی پروژه
├── index.html           # نقطه ورود HTML
├── vite.config.js       # تنظیمات Vite
├── eslint.config.js     # تنظیمات ESLint
├── .prettierrc          # تنظیمات Prettier
└── package.json         # وابستگی‌ها و تنظیمات پروژه
```

## نسخه TypeScript

نسخه اصلی و TypeScript این پروژه در حال توسعه است.

اگر می‌خواهید نسخه TypeScript پروژه را مشاهده کنید، به branch زیر مراجعه کنید:

**[مشاهده نسخه TypeScript](https://github.com/ImRez69/SaaS-Dashboard/tree/typescript)**

نسخه TypeScript شامل مهاجرت پروژه از JavaScript به TypeScript است و هدف آن افزایش Type Safety، کاهش خطاها و بهبود نگهداری و توسعه پروژه است.

## مشارکت

اگر پیشنهادی برای بهبود پروژه دارید یا با مشکلی مواجه شدید، می‌توانید Issue ایجاد کنید یا Pull Request ارسال کنید.

برای مشارکت:

1. پروژه را Fork کنید.
2. یک Branch جدید ایجاد کنید.
3. تغییرات موردنظر را اعمال کنید.
4. کد را با Linter و Build بررسی کنید.
5. یک Pull Request ایجاد کنید.

## لایسنس

این پروژه در حال حاضر لایسنس مشخصی ندارد.
