import styled from "styled-components";
import { JumbotronContainer } from "./jumbotron";

export const Container = styled("div")<JumbotronContainer>`
  background-image: ${({ image }) => `url(${image})`};
  background-size: contain;
  background-position: left top;
  margin-top: ${({ mt }) => (mt ? (typeof mt === "string" ? mt : "65px") : 0)};
  margin-bottom: 0;
  height: calc((100vw / 1920) * 480);
  position: relative;
`;

export const Heading = styled.h1`
  margin: 0 20px;
  font-size: 50px;
  font-weight: 300;
  text-transform: uppercase;
  padding-top: 150px;
`;
