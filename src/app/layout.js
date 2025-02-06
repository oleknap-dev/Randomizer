import "./globals.css";
import { Sour_Gummy } from "next/font/google";

const sourgummy = Sour_Gummy({ subsets: ["latin"] });

export const metadata = {
  title: "Randomizer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sourgummy.className}>{children}</body>
    </html>
  );
}
