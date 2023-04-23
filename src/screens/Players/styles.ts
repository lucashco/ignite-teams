import styled from "styled-components/native";
import { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;


export const Form = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  flex-direction: row;
  align-items: center;
  border-radius: 6px;
`;

export const HeaderList = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 32px 0 12px;
`

export const PlayersNumbers = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;
