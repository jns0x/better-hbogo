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

const itemHoverStyle = css`
  transform: scale(1.4);
  z-index: 2;
`;

export const Item = styled.div`
  cursor: pointer;
  /* padding: 10% 0; */
  box-sizing: border-box;
  z-index: 1;
  display: inline-block;
  position: relative;
  white-space: normal;
  vertical-align: top;
  padding: 0 2px;
  transition: transform 0.2s ease-in-out;
  transition-delay: 0.2s;

  &:hover {
    ${itemHoverStyle}
  }

  @media screen and (min-width: 1400px) {
    width: 10%;
  }
  @media screen and (max-width: 1399px) and (min-width: 1100px) {
    width: 15%;
  }
  @media screen and (max-width: 1099px) and (min-width: 800px) {
    width: 20%;
  }
`;

export const Image = styled.img`
  height: auto;
  width: 100%;
  border-radius: 4px;
`;

export const SliderHandle = styled.span`
  background: rgba(20, 20, 20, 0.5);
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 20;
  width: 4%;
  text-align: center;
  -webkit-box-pack: center;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background: rgba(20, 20, 20, 0.8);
  }
`;

export const TrackContent = styled.div`
  padding: 8px;
  position: relative;
  display: block;
  transition: background-color 0.2s ease-in-out;
  background-color: ${({ itemHover }) => (itemHover ? "#141414" : "none")};
  &:hover {
    background-color: #141414;
  }
`;

export const TrackContentSynopsis = styled.div`
  margin-bottom: 6px;
  height: 40px;
  font-size: 12px;
  position: relative;
  color: #a1a19b;
  overflow: hidden;
`;

export const TrackContentMeta = styled.div`
  margin-bottom: 0.3vw;
`;

export const TrackContentMetaYear = styled.div`
  font-weight: 700;
  margin-right: 0.6vw;
  &:after {
    content: "\2022";
    display: inline-block;
    font-size: 12px;
    color: #54564d;
    padding-left: 8px;
  }
`;

export const TrackContentMetaGenre = styled.div`
  font-weight: 700;
  margin-right: 0.6vw;
`;
