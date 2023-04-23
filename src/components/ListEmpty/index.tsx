import { View, Text } from 'react-native'
import React from 'react'

import * as S from './styles';

type Props = {
  message: string;
}

export function ListEmpty({ message }: Props) {
  return (
    <S.Container>
      <S.Message>{message}</S.Message>
    </S.Container>
  )
}
