import type {Metadata} from "next";
import "./globals.css";
import {Providers} from "@/Providers";

export const metadata: Metadata = {
    title: "فروشگاه اینترنتی دیجی‌کالا",
    description:
        "هر آنچه که نیاز دارید با بهترین قیمت از دیجی‌کالا بخرید! جدیدترین انواع گوشی موبایل، لپ تاپ، لباس، لوازم آرایشی و بهداشتی، کتاب، لوازم خانگی، خودرو و... با امکان تعویض و مرجوعی آسان | ✓ارسال رايگان ✓پرداخت در محل ✓ضمانت بازگشت کالا - برای خرید کلیک کنید!",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="fa" dir="rtl">
        <body className="antialiased">
        <Providers>{children}</Providers>
        </body>
        </html>
    );
}
