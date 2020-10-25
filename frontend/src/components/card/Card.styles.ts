import styled from "styled-components";
import Button from "components/button/button";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 2.5vmin 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ItemStyled = styled.div`
  /* padding: 20px; */
  padding: 2.5vw;
  width: 100%;
`;

export const Title1Styled = styled.h1`
  /* font-size: 36px; */
  /* font-size: calc(30px + 1vw); */
  font-size: max(2vw, 36px);
  margin: 10px 0;
  font-weight: 300;
`;

export const Subtitle1Styled = styled.p`
  width: 100%;
  display: inline-block;
  margin: 10px 0;
  /* font-size: 18px; */
  font-size: calc(18px + 0.5vw);
`;

export const Title2Styled = styled.h2`
  /* font-size: 24px; */
  font-size: calc(24px + 0.2vw);

  margin: 0 0 10px;
  font-weight: 300;
  white-space: pre-wrap;
`;

export const Subtitle2Styled = styled.p`
  width: 100%;
  display: inline-block;
  font-size: calc(13px + 0.2vw);
  margin-top: 10px;
  white-space: pre-wrap;
`;
export const ButtonBigStyled = styled(Button)`
  font-size: 20px;
  border-radius: 6px;
  padding: 13px 30px;
  margin-top: 10px;
`;

export const RowStyled = styled.div``;
