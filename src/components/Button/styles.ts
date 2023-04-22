import styled from "styled-components/native";

export type ButtonTypeStyleProps = 'primary' | 'secondary';

type ButtonProps = {
  variant: ButtonTypeStyleProps;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  height: 56px;
  background-color: ${({ theme, variant }) => variant === 'primary'
    ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
`

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`
