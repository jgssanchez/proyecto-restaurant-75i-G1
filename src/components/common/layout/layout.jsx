import Menu from "../menu";
import Footer from "../footer";

const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
