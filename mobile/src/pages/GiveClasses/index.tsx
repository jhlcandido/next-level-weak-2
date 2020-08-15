import React from 'react';

import {
  Container,
  Background,
  Title,
  Description,
  Button,
  ButtonText
} from './styles';
import { useNavigation } from '@react-navigation/native';

const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation();

  function navigateBack() {
    goBack();
  }

  return (
    <Container>
      <Background>
        <Title bold>Quer ser um Proffy?</Title>
        <Description>
          Para comerçar, você precisa se cadastrar como professor na nossa
          plataforma
        </Description>
      </Background>
      <Button onPress={navigateBack}>
        <ButtonText bold>Tudo bem</ButtonText>
      </Button>
    </Container>
  );
};

export default GiveClasses;
