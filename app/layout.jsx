import { Nunito } from "next/font/google";

import "@/assets/styles/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import { ToastContainer } from "react-toastify";
export const metadata = {
  title: "RealtyRhythm",
};

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // add any weights you need
});

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang="en" className={nunito.className}>
        <body>
          <NavBar />
          <main>{children}</main>
          <Footer />
          <ToastContainer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
