import "@/assets/styles/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
