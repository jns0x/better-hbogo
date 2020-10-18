// import { useVideosQuery } from "../generated/graphql";
import Header from "components/header";
import React from "react";
import Footer from "components/footer/footer";
// import { withApollo } from "lib/withApollo";

const Index = () => {
  // const { data } = useVideosQuery();

  return (
    <div>
      <Header />
      <main style={{ margin: "50px auto" }}>main stuff</main>
      <Footer />
    </div>
  );
};

// export default withApollo({ srr: true })(Index);
export default Index;
