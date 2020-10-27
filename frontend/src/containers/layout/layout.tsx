import Footer from "components/footer/footer";
import Header from "components/header";
import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
