// import { useVideosQuery } from "../generated/graphql";
import React from "react";
import Jumbotron from "components/jumbotron/jumbotron";
import Card from "components/card/Card";
import Layout from "containers/layout/layout";
import { css } from "styled-components";

// import { withApollo } from "lib/withApollo";

const cardFixture = [
  {
    title: "All seasons.\nAll episodes.",
    subtitle:
      "HBO GO offers all seasons from the very best series selection. You can enjoy more than 4000 series episodes together with selected movies, on all your screens.",
  },
  {
    title: "Try 7 days for free.\n No binding period.",
    subtitle:
      "All new customers can now try our service 7 days for free.\n Just 24,90 PLN per month after the trial period. Cancel anytime.",
  },
  {
    title: "HBO GO is also available\nvia affiliate partners.",
    subtitle:
      "You can subscribe to HBO GO via Operators.\n If you have HBO GO subscription register now and enjoy our contents.",
  },
];

const Index = () => {
  // const { data } = useVideosQuery();

  return (
    <Layout>
      <Jumbotron
        image="//hboeu.azureedge.net/uiimages/D81AB68F-B36E-4F08-9440-C343708D1D67/original.jpg"
        mt
      />
      <main>
        <Card>
          <Card.Item>
            <Card.Title1>THE HOME OF SERIES ONLINE</Card.Title1>
            <Card.Subtitle1>
              Try 7 days for free, no binding period, cancel anytime.
            </Card.Subtitle1>
            <Card.ButtonBig color="orange">TRY 7 DAYS FOR FREE</Card.ButtonBig>
          </Card.Item>
        </Card>
        <Card
          css={css`
            background-color: ${({ theme }) => theme.colors.darkGray};
            border-radius: 4px;
          `}
        >
          {cardFixture.map((el, i) => (
            <Card.Item key={i}>
              <Card.Title2
              // dangerouslySetInnerHTML={{ __html: el.title }}
              >
                {el.title}
              </Card.Title2>
              <Card.Subtitle2
              // dangerouslySetInnerHTML={{ __html: el.subtitle }}
              >
                {el.subtitle}
              </Card.Subtitle2>
            </Card.Item>
          ))}
        </Card>
      </main>
    </Layout>
  );
};

// export default withApollo({ srr: true })(Index);
export default Index;
