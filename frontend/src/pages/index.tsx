import { useVideosQuery } from "../generated/graphql";
import React from "react";
import Jumbotron from "components/jumbotron/jumbotron";
import Card from "components/card/Card";
import Layout from "containers/layout/layout";
import { css } from "styled-components";
import story from "fixtures/story.json";
import Shelf from "components/shelf/Shelf";

// import { withApollo } from "lib/withApollo";

const Index = () => {
  const { data, loading } = useVideosQuery({
    variables: { limit: 20 },
  });
  console.log(data && data.videos);
  return (
    <Layout>
      <Jumbotron
        image="//hboeu.azureedge.net/uiimages/D81AB68F-B36E-4F08-9440-C343708D1D67/original.jpg"
        mt
      />
      <main>
        <Card>
          <Card.Item>
            <Card.Title1>{story.spotlight.title}</Card.Title1>
            <Card.Subtitle1>{story.spotlight.subtitle}</Card.Subtitle1>
            <Card.ButtonBig color="orange">
              {story.spotlight.button}
            </Card.ButtonBig>
          </Card.Item>
        </Card>
        <Card
          css={css`
            background-color: ${({ theme }) => theme.colors.darkGray};
            border-radius: 4px;
          `}
        >
          {story.info.map((el, i) => (
            <Card.Item key={i}>
              <Card.Title2>{el.title}</Card.Title2>
              <Card.Subtitle2>{el.subtitle}</Card.Subtitle2>
            </Card.Item>
          ))}
        </Card>
        <Shelf>
          <Shelf.ShelfHeader>Top Series</Shelf.ShelfHeader>
          <Shelf.ShelfContainerRow>
            <Shelf.ShelfSlider>
              {data &&
                data.videos.videos.map((video) => (
                  <Shelf.ShelfItem key={video.id}>
                    <Shelf.ShelfItemImage
                      src={video.image?.img_190}
                      // height="190"
                    />
                    <Shelf.ShelfItemTrackContent>
                      {video.title}
                      {video.year}
                    </Shelf.ShelfItemTrackContent>
                  </Shelf.ShelfItem>
                ))}
            </Shelf.ShelfSlider>
          </Shelf.ShelfContainerRow>
        </Shelf>
      </main>
    </Layout>
  );
};

// export default withApollo({ srr: true })(Index);
export default Index;
