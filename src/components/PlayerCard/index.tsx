import { IconButton } from '@components/IconButton';
import * as S from './styles';

interface Props {
  name: string;
  onRemove(): void;
}

export function PlayerCard({ name, onRemove }: Props) {
  return (
    <S.Container>
      <S.Icon name="person" />
      <S.Name>{name}</S.Name>
      <IconButton
        icon="close"
        variant="secondary"
        onPress={onRemove}
      />
    </S.Container>
  )
}
