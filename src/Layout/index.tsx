import { Content } from "antd/es/layout/layout";
import Footer from "./Footer";
import Header from "./Header";

const BaseLayout = ({children}: any) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

export default BaseLayout;
