import React, { ReactNode } from "react";
import {
  ButtonBig,
  Container,
  Item,
  Row,
  Subtitle1,
  Subtitle2,
  Title1,
  Title2,
} from "./Card.styles";
// import Button from "components/button/button"

interface Props extends React.ReactElement {
  children?: ReactNode;
}

export default function Card({ children, ...props }: Props) {
  return <Container {...props}>{children}</Container>;
}

Card.Item = function CardItem({ children, ...props }: Props) {
  return <Item {...props}>{children}</Item>;
};

Card.Title1 = function CardTitle({ children, ...props }: Props) {
  return <Title1 {...props}>{children}</Title1>;
};

Card.Subtitle1 = function CardSubtitle({ children, ...props }: Props) {
  return <Subtitle1 {...props}>{children}</Subtitle1>;
};

Card.ButtonBig = function CardButtonBig({ children, ...props }: Props) {
  return <ButtonBig {...props}>{children}</ButtonBig>;
};

Card.Title2 = function CardTitle({ children, ...props }: Props) {
  return <Title2 {...props}>{children}</Title2>;
};

Card.Subtitle2 = function CardSubtitle({ children, ...props }: Props) {
  return <Subtitle2 {...props}>{children}</Subtitle2>;
};

Card.Row = function CardRow({ children, ...props }: Props) {
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
