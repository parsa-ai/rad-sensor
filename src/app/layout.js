import "./globals.css";

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // وزن‌های مورد نیاز
  variable: '--font-montserrat', // (اختیاری) برای استفاده به عنوان CSS Variable
  display: 'swap',
});


import Header from "./components/Header"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-[#16141F] ${montserrat.className}`}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
