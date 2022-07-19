import Nav from "./Nav";
import Styles from "../styles/Layout.module.scss";
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={Styles.mainLayout}>{children}</div>
    </>
  );
};

export default Layout;
