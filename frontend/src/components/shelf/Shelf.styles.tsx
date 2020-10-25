import styled, { css } from "styled-components";

const maxWidth = css`
  padding: 0 60px;
`;

export const ShelfRow = styled.div`
  margin: 3vw 0;
  padding: 0;
  margin-bottom: 10px;
`;

export const Header = styled.h2`
  font-weight: 300;
  margin: 0;
  font-size: 24px;
  ${maxWidth}
`;

export const ContainerRow = styled.div``;

export const Slider = styled.div`
  ${maxWidth}
`;

export const Mask = styled.div`
  overflow: visible;
`;

export const Item = styled.div`
  width: 16.66666667%;
  box-sizing: border-box;
  z-index: 1;
  display: inline-block;
  position: relative;
  white-space: normal;
  vertical-align: top;
  padding: 0 2px;
`;

export const Image = styled.img`
  width: 100%;
`;
