import { useVideosQuery } from "../generated/graphql";
import Header from "components/header";
// import { withApollo } from "lib/withApollo";

const Index = () => {
  const { data } = useVideosQuery();
  console.log(data);

  return (
    <div>
      <Header />
      test index
    </div>
  );
};

// export default withApollo({ srr: true })(Index);
export default Index;
