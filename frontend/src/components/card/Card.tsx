import React, { ReactNode } from "react";
import {
  ButtonBigStyled,
  Container,
  ItemStyled,
  RowStyled,
  Subtitle1Styled,
  Subtitle2Styled,
  Title1Styled,
  Title2Styled,
} from "./Card.styles";
import { ButtonProps } from "components/button/button";

interface ICardComposition {
  Item: React.FC;
  Title1: React.FC;
  Subtitle1: React.FC;
  ButtonBig: React.FC<ButtonProps>;
  Title2: React.FC;
  Subtitle2: React.FC;
  Row: React.FC;
}

const Card: React.FC & ICardComposition = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

const Item: React.FC = ({ children, ...props }) => {
  return <ItemStyled {...props}>{children}</ItemStyled>;
};

const Title1: React.FC = ({ children, ...props }) => {
  return <Title1Styled {...props}>{children}</Title1Styled>;
};

const Subtitle1: React.FC = ({ children, ...props }) => {
  return <Subtitle1Styled {...props}>{children}</Subtitle1Styled>;
};

const ButtonBig: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonBigStyled {...props}>{children}</ButtonBigStyled>;
};

const Title2: React.FC = ({ children, ...props }) => {
  return <Title2Styled {...props}>{children}</Title2Styled>;
};

const Subtitle2: React.FC = ({ children, ...props }) => {
  return <Subtitle2Styled {...props}>{children}</Subtitle2Styled>;
};

const Row: React.FC = ({ children, ...props }) => {
  return <RowStyled {...props}>{children}</RowStyled>;
};

Card.Item = Item;
Card.Title1 = Title1;
Card.Subtitle1 = Subtitle1;
Card.ButtonBig = ButtonBig;
Card.Title2 = Title2;
Card.Subtitle2 = Subtitle2;
Card.Row = Row;

export default Card;
