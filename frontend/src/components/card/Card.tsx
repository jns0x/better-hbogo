import React, { ReactNode } from "react";
import { Container, Title, Item, Subtitle, Row } from "./Card.styles";

interface Props extends React.ReactElement {
  children?: ReactNode;
}

//container
//item
//TextContainer
//HEading
//Text
//Row

export default function Card({ children, ...props }: Props) {
  return <Container {...props}>{children}</Container>;
}

Card.Item = function CardItem({ children, ...props }: Props) {
  return <Item {...props}>{children}</Item>;
};

Card.Title = function CardTitle({ children, ...props }: Props) {
  return <Title {...props}>{children}</Title>;
};

Card.Subtitle = function CardSubtitle({ children, ...props }: Props) {
  return <Subtitle {...props}>{children}</Subtitle>;
};

Card.Subtitle = function CardSubtitle({ children, ...props }: Props) {
  return <Row {...props}>{children}</Row>;
};
// const Card: React.FC = ({ children, ...props }) => {
//   return <Container {...props}>{children}</Container>;
// };

// Card.Item: React.FC = ({ children, ...props }) => {
//   return <Item {...props}>{children}</Item>;
// };

// Card.Heading: React.FC = ({ children, ...props }) => {
//     return <Heading {...props}>{children}</Heading>;
//   };

// export default Card;
