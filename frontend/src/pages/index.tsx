import { useVideosQuery } from "../generated/graphql";

const Index = () => {
  const { data } = useVideosQuery();
  console.log(data);
  return <div>test index</div>;
};

export default Index;
