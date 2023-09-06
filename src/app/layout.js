// "use client"

import "./globals.css";

import Footer from "../../Components/Utils/Footer";
import App from "../../Components/App";
export const metadata = {
  title: " Shopify",
  description: "developed by hassan ",
};
export default function RootLayout({ children }) {
  return (
    <html dir="" lang="">
      <head></head>
      <body>
        <main className="">
          <App children={children} />
        </main>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
