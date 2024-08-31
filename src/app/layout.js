import { Barlow_Semi_Condensed } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";

const font = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata = {
  title: "Frontend Mentor | Rock, Paper, Scissors",
  description: "Frontend Mentor | Rock, Paper, Scissors using Next JS",
  icons: {
    icon: "/favicon.png", // /public path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          font.className +
          "min-h-screen bg-gradient-to-b from-bg-1 to-bg-2 md:grid md:place-items-center font-semibold"
        }
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
