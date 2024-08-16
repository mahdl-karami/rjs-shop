import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

function Layout({cartProducts}) {
  return (
    <>
      <Header cartProducts={cartProducts} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
