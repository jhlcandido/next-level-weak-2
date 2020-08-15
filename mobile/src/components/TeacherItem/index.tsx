import React from 'react';

import {
  Container,
  Profile,
  Avatar,
  Info,
  Name,
  Subject,
  Bio,
  Footer,
  Price,
  PriceValue,
  ButtonsContainer,
  Button,
  FavoriteIcon,
  WhatsappIcon,
  ButtonText
} from './styles';
import { ITeacher } from '../../interfaces/ITeacher';

interface ITeacherItemProps {
  teacher: ITeacher;
}

const TeacherItem: React.FC<ITeacherItemProps> = ({ teacher }) => {
  const { avatar, name, subject, bio } = teacher;
  const favorited = true;

  return (
    <Container>
      <Profile>
        <Avatar source={{ uri: avatar }} />

        <Info>
          <Name bold>{name}</Name>
          <Subject>{subject}</Subject>
        </Info>
      </Profile>

      <Bio>{bio}</Bio>

      <Footer>
        <Price>
          {`Preço/hora   `}
          <PriceValue>R$ 20,00</PriceValue>
        </Price>
        <ButtonsContainer>
          <Button favorite favorited={favorited}>
            <FavoriteIcon favorited={favorited} />
          </Button>

          <Button contact>
            <WhatsappIcon />
            <ButtonText bold>Entrar em contato</ButtonText>
          </Button>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
};

export default TeacherItem;
