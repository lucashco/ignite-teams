import { Text, View } from 'react-native'
import React, { Component } from 'react'
import * as S from './styles';

export function Loading() {
  return (
    <S.Container>
      <S.LoadingIndicator />
    </S.Container>
  )
}
