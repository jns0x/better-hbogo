// import { useVideosQuery } from "../generated/graphql";
import Header from "components/header";
import React from "react";
import Footer from "components/footer/footer";
import Jumbotron from "components/jumbotron/jumbotron";
import Card from "components/card/Card";
import Button from "components/button/button";
// import { withApollo } from "lib/withApollo";

const cardFixture = [
  {
    title: "All seasons.\n All episodes.",
    subtitle:
      "HBO GO offers all seasons from the very best series selection. You can enjoy more than 4000 series episodes together with selected movies, on all your screens.",
  },
  {
    title: "Try 7 days for free. No binding period.",
    subtitle:
      "All new customers can now try our service 7 days for free.\n Just 24,90 PLN per month after the trial period. Cancel anytime.",
  },
  {
    title: "HBO GO is also available\n via affiliate partners.",
    subtitle:
      "You can subscribe to HBO GO via Operators. If you have HBO GO subscription register now and enjoy our contents.",
  },
];

const Index = () => {
  // const { data } = useVideosQuery();

  return (
    <div>
      <Header />
      <Jumbotron
        image="//hboeu.azureedge.net/uiimages/D81AB68F-B36E-4F08-9440-C343708D1D67/original.jpg"
        mt
      />
      <main style={{ margin: "50px auto" }}>
        <Card>
          <Card.Item>
            <Card.Title>THE HOME OF SERIES ONLINE</Card.Title>
            <Card.Subtitle>
              Try 7 days for free, no binding period, cancel anytime.
            </Card.Subtitle>
            <Button color="orange">TRY 7 DAYS FOR FREE</Button>
          </Card.Item>
        </Card>
        <Card>
          {cardFixture.map((el, i) => (
            <Card.Item key={i}>
              <Card.Title>{el.title}</Card.Title>
              <Card.Subtitle>{el.subtitle}</Card.Subtitle>
            </Card.Item>
          ))}
        </Card>
      </main>

      <Footer />
    </div>
  );
};

// export default withApollo({ srr: true })(Index);
export default Index;
