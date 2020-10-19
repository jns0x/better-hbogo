import React from "react";

import { Container, Heading } from "./jumbotron.styles";

export interface JumbotronContainer {
  image: string;
  mt: boolean | number;
}

interface JumboInterface extends JumbotronContainer {
  heading?: string;
}

const Jumbotron: React.FC<JumboInterface> = ({ heading, image, mt }) => {
  return (
    <Container image={image} mt={mt}>
      {heading && <Heading>{heading}</Heading>}
    </Container>
  );
};

export default Jumbotron;
