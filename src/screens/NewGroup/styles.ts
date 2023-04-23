import styled from "styled-components/native";
import { UsersThree } from "phosphor-react-native";
import { Button } from "@components/Button";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => {
    return {
      size: 56,
      color: theme.COLORS.GREEN_700
    }
})`
  align-self: center;
`;

export const ButtonWithMargin = styled(Button)`
  margin-top: 20px;
`;