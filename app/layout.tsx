import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";
import Modal from "./components/modals/modal";
const font_nunito =Nunito({
  subsets: ["latin"],
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pundit JI",
  description: "Created by Hirewing Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ font_nunito.className} >
        {/* <Modal actionLabel="Submit" secondaryActionLabel="Next item" title="Hello Vinay" isOpen/> */}
        <RegisterModal/>
        <Navbar/>
        {children}</body>
    </html>
  );
}
