import { Rubik } from "next/font/google";
import Body from "../_components/ui/dashboard/Body";
import Layout from "../_components/ui/dashboard/Layout";
import "./globals.css";
import { ThemeProvider } from "../_components/contexts/ThemeContext";
import { ModalProvider } from "../_components/contexts/ModalContext";

const rubik = Rubik({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "داشبورد",
  description: "این قسمت داشبورد برنامه است",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <ThemeProvider>
        <ModalProvider>
          <Body className={`${rubik.className}`}>
            <Layout>{children}</Layout>
          </Body>
        </ModalProvider>
      </ThemeProvider>
    </html>
  );
}
