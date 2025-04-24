export const dynamic = "force-dynamic";

import { Nunito } from "next/font/google";

import "@/assets/styles/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import { GlobalProvider } from "@/context/GlobalContext";
import { ToastContainer } from "react-toastify";
import "photoswipe/dist/photoswipe.css";

export const metadata = {
  title: "RealtyRhythm",
};

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // add any weights you need
});

const MainLayout = ({ children }) => {
  return (
    <GlobalProvider>
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
    </GlobalProvider>
  );
};

export default MainLayout;
