import styled, { css } from 'styled-components/native';
import TextComponent from '../../components/Text';
import TitleComponent from '../../components/Title';
import ButtonComponent from '../../components/Button';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import { ImageProps } from 'react-native';

export const Container = styled.View`
  background-color: #fff;
  border-width: 1px;
  border-color: #e6e6f0;
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
`;

export const Avatar = styled.Image`
  height: 64px;
  width: 64px;
  border-radius: 32px;
  background-color: #eee;
`;

export const Info = styled.View`
  margin-left: 16px;
`;

export const Name = styled(TextComponent)`
  color: #32264d;
  font-size: 20px;
`;

export const Subject = styled(TitleComponent)`
  font-size: 12px;
  margin-top: 4px;
`;

export const Bio = styled(TitleComponent)`
  font-size: 14px;
  margin: 0 24px 24px;
  line-height: 24px;
  color: #6a6180;
`;

export const Footer = styled.View`
  background-color: #fafafc;
  padding: 24px;
  align-items: center;
  margin-top: 24px;
`;

export const Price = styled(TitleComponent)`
  color: #626180;
  font-size: 14px;
`;

export const PriceValue = styled(TitleComponent)`
  font-size: 16px;
  color: ${(props) => props.theme.colors.primary};
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

interface IButton {
  favorite?: boolean;
  contact?: boolean;
  favorited?: boolean;
}

export const Button = styled(ButtonComponent)<IButton>`
  ${(props) =>
    props.contact &&
    css`
      background-color: ${props.theme.colors.secondary};
      flex: 1;
      flex-direction: row;
      height: 56px;
      border-radius: 8px;
      justify-content: center;
      align-items: center;
      margin-right: 8px;
    `}

  ${(props) =>
    props.favorite &&
    css`
      background-color: ${props.theme.colors.primary};
      width: 56px;
      height: 56px;
      border-radius: 8px;
      justify-content: center;
      align-items: center;
      margin-right: 8px;
    `}

    ${(props) =>
      props.favorited &&
      css`
        background-color: #e33d3d;
      `}
`;

export const ButtonText = styled(TextComponent)`
  color: #fff;
  font-size: 16px;
  margin-left: 16px;
`;

interface IFavoritedIcon extends ImageProps {
  favorited: boolean;
}

export const FavoriteIcon = styled.Image.attrs((props: IFavoritedIcon) => ({
  source: !props.favorited ? heartOutlineIcon : unfavoriteIcon
}))<IFavoritedIcon>``;

export const WhatsappIcon = styled.Image.attrs({
  source: whatsappIcon
})``;
