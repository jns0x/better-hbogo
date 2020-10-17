import { useVideosQuery } from "../generated/graphql";
import Header from "components/header";

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

export default Index;
