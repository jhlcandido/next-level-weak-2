import styled from 'styled-components/native';
import TitleComponent from '../Title';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

export const Container = styled.View`
  padding: 40px;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TopBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled(TitleComponent)`
  color: #fff;
  font-size: 24px;
  line-height: 32px;
  max-width: 160px;
  margin: 40px 0;
`;

export const LogoImg = styled.Image.attrs({
  source: logoImg
})``;

export const BackIcon = styled.Image.attrs({
  source: backIcon,
  resizeMode: 'contain'
})``;
