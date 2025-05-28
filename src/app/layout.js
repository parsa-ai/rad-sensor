import Header from "./components/ui/Header";
import "./globals.css";

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500' , '600','700'], 
  variable: '--font-montserrat', 
  display: 'swap',
});


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
