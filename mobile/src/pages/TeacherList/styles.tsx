import styled, { css } from 'styled-components/native';
import TextComponent from '../../components/Text';
import TitleComponent from '../../components/Title';
import ButtonComponent from '../../components/Button';

import background from '../../assets/images/give-classes-background.png';
import study from '../../assets/images/icons/study.png';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.backgroundLigth};
`;

export const Background = styled.ImageBackground.attrs({
  source: background,
  resizeMode: 'contain'
})`
  flex: 1;
  justify-content: center;
`;

export const List = styled(FlatList)`
  margin-top: -40px;
  padding: 16px;
`;

export const Title = styled(TitleComponent)`
  color: #fff;
  font-size: 32px;
  line-height: 37px;
  max-width: 180px;
`;
export const Description = styled(TextComponent)`
  margin-top: 24px;
  color: ${(props) => props.theme.colors.textLight};
  font-size: 16px;
  line-height: 26px;
  max-width: 240px;
`;

export const Button = styled(ButtonComponent)`
  margin: 40px 0;
  background-color: ${(props) => props.theme.colors.buttonSecondary};
  height: 58px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const ButtonText = styled(TitleComponent)`
  color: #fff;
  font-size: 16px;
`;

export const StudyIcon = styled.Image.attrs({
  source: study
})``;
