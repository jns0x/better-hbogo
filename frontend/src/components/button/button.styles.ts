import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  display: inline-block;
  font-weight: 400;
  font-size: 15px;
  line-height: 34px;
  text-decoration: none;
  padding: 0 20px;
  border-radius: 4px;
  transition: all 0.2s;
  cursor: pointer;
  outline: none;
  border: 0;
  color: ${({ theme }) => theme.main.color};
  background-color: ${({ theme }) => theme.colors.transparent};
  box-shadow: ${({ theme }) =>
    `0 0 0 1px ${theme.buttons.default.boxShadow} inset`};

  &:hover {
    box-shadow: ${({ theme }) =>
      `0 0 0 1px ${theme.buttons.default.hover} inset`};
  }
  ${({ color, variant }) => {
    if (color === "blue") return blue;
    if (color === "orange") return orange;
  }}
  ${({ variant }) => {
    if (variant === "outline") return outline;
  }}
`;

const blue = css`
  color: ${({ theme }) => theme.main.color};
  background-color: ${({ theme }) => theme.buttons.blue.backgroundColor};
  box-shadow: ${({ theme }) =>
    `0 0 0 1px ${theme.buttons.blue.boxShadow} inset`};
  &:hover {
    background-color: ${({ theme }) => theme.buttons.blue.hover};
    box-shadow: none;
  }
`;

const orange = css`
  color: ${({ theme }) => theme.main.color};
  background-color: ${({ theme }) => theme.buttons.orange.backgroundColor};
  box-shadow: ${({ theme }) =>
    `0 0 0 1px ${theme.buttons.orange.boxShadow} inset`};
  &:hover {
    background-color: ${({ theme }) => theme.buttons.orange.hover};
    box-shadow: none;
  }
`;

const outline = css`
  background-color: ${({ theme }) => theme.colors.transparent};
  box-shadow: ${({ theme, color }) =>
    `0 0 0 1px ${theme.buttons[color].boxShadow} inset`};
  &:hover {
    background-color: none;
    box-shadow: ${({ theme, color }) =>
      `0 0 0 1px ${theme.buttons[color].hover} inset`};
  }
`;
