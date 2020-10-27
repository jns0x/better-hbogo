import styled, { css } from "styled-components";

export const ShelfRow = styled.div`
  margin: 3vw 0;
  padding: 0;
  margin-bottom: 10px;
`;

export const Header = styled.h2`
  font-weight: 300;
  margin: 0;
  font-size: 24px;
  ${({ theme }) => theme.generalPadding};
`;

export const ContainerRow = styled.div`
  position: relative;
  ${({ theme }) => theme.generalPadding};
`;

export const Slider = styled.div`
  white-space: nowrap;
`;

export const Mask = styled.div`
  overflow: visible;
`;

export const Item = styled.div`
  width: 10%;
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
  height: auto;
`;

export const SliderHandle = styled.span`
  background: rgba(20, 20, 20, 0.5);
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 20;
  width: 4%;
  text-align: center;
  -webkit-box-pack: center;
`;
