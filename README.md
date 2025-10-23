# Game Iliya - Full Local Project

این پروژه نسخهٔ محلی فروشگاه "گیم ایلیا" است که شامل:
- Backend: Node.js + Express + MongoDB
- Frontend: صفحات موبایلی ساده
- پنل ادمین ساده
- نمونه استاب برای درگاه زرین‌پال و اسکریپر

## اجرای لوکال
1. نصب MongoDB و اجرا (یا MongoDB Atlas)
2. در مسیر backend: `npm install` سپس متغیرهای `.env` را بسازید
3. `.env` نمونه:
```
MONGO_URI=mongodb://127.0.0.1:27017/gameiliya
ZARINPAL_MERCHANT=YOUR_KEY_HERE
BASE_URL=http://localhost:3000
```
4. اجرا: `npm run dev` یا `npm start`
5. بعد از اجرا، وب‌سایت بر روی `http://localhost:3000` در دسترس خواهد بود.

## اجرای روی گوشی
1. ساده‌ترین راه: سرور را روی کامپیوتر اجرا کنید و گوشی را به همان شبکه متصل کنید؛ آدرس `http://<PC_IP>:3000` را در مرورگر گوشی باز کنید.
2. یا از سرویس‌های Deploy مانند Render/Heroku/ Railway استفاده کنید و سپس لینک را در گوشی باز کنید.

برای هر کمکی در تنظیم زرین‌پال یا اسکریپینگ داده‌ها با من بگو.
