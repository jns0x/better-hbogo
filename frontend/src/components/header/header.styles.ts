import styled from "styled-components";

export const Logo = styled.span`
  width: 111px;
  height: 25px;
  margin-right: 20px;
  background: transparent url("/images/logo.svg") no-repeat 50% 50%;
`;

export const Nav = styled.nav`
  height: 80px;
  background: linear-gradient(rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  width: 100%;
`;

export const Container = styled.div`
  height: 65px;
  padding: 0 68px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  /* max-width: 1920px; */
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Item = styled.div`
  font-size: 18px;
  padding: 18px;
  transition: background-color 0.5s;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightBlue};
  }
`;
