import styled, { css } from 'styled-components/native';
import TextComponent from '../../components/Text';
import TitleComponent from '../../components/Title';
import ButtonComponent from '../../components/Button';

import image from '../../assets/images/landing.png';
import study from '../../assets/images/icons/study.png';
import giveClasses from '../../assets/images/icons/give-classes.png';
import heart from '../../assets/images/icons/heart.png';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.primary};
  justify-content: center;
  padding: 40px;
`;

export const Image = styled.Image.attrs({
  source: image,
  resizeMode: 'contain'
})`
  align-self: center;
  width: 100%;
`;

export const Title = styled(TitleComponent)`
  color: #fff;
  font-size: 20px;
  line-height: 30px;
  margin-top: 80px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-between;
`;

interface ButtonProps {
  primary?: boolean;
  secondary?: boolean;
}

export const Button = styled(ButtonComponent)<ButtonProps>`
  height: 150px;
  width: 48%;
  background-color: #333;
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;

  ${(props) =>
    props.primary &&
    css`
      background-color: ${props.theme.colors.buttonPrimary};
    `}
  ${(props) =>
    props.secondary &&
    css`
      background-color: ${props.theme.colors.buttonSecondary};
    `};
`;

export const ButtonText = styled(TextComponent)`
  color: #fff;
  font-size: 20px;
`;

export const Connections = styled(Title)`
  font-size: 12px;
  line-height: 20px;
  max-width: 140px;
  margin-top: 40px;
  color: ${(props) => props.theme.colors.textLight};
`;

export const StudyIcon = styled.Image.attrs({
  source: study
})``;

export const GiveClassesIcon = styled.Image.attrs({
  source: giveClasses
})``;

export const HeartIcon = styled.Image.attrs({
  source: heart
})``;
