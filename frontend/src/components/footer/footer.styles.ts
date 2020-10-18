import styled from "styled-components";

export const StyledFooter = styled.footer`
  font-size: 13px;
  text-align: center;
  margin: 0;
`;

export const FooterNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px auto;
`;

export const Group = styled.div`
  display: flex;
  justify-content: center;
  margin: 13px 0;
`;

export const Icon = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 16px;
  width: 20px;
  margin: 0 20px;
  fill: ${({ theme }) => theme.colors.gray};
`;

export const NavLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.main.color};
  padding: 10px;
  display: inline-block;
`;

export const Separator = styled.div`
  height: 1px;
  background-color: #1a1a1a;
  border-bottom: 1px solide white;
  width: 100%;
`;

export const Copyright = styled.span`
  display: block;
  text-align: center;
  font-size: 10px;
  color: #4c4c4c;
  padding: 20px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px auto;
`;

export const LinksContainer = styled(FooterNav)`
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;
