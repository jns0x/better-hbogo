import Footer from "components/footer/footer";
import Header from "components/header";
import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
