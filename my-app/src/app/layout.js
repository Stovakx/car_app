
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./globals.css";



export const metadata = {
  title: "Car hub",
  description: "Discover best cars in the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative  ">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
