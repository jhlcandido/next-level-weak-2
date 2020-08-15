import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { useNavigation } from '@react-navigation/native';

import {
  Archivo_400Regular,
  Archivo_700Bold,
  useFonts
} from '@expo-google-fonts/archivo';
import {
  Poppins_400Regular,
  Poppins_600SemiBold
} from '@expo-google-fonts/poppins';

import {
  Container,
  Title,
  Image,
  ButtonsContainer,
  Button,
  ButtonText,
  StudyIcon,
  GiveClassesIcon,
  Connections,
  HeartIcon
} from './styles';

const Landing: React.FC = () => {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  });
  const [connections, setConnections] = useState(0);

  function navigateToGiveClasses() {
    navigation.navigate('GiveClasses');
  }

  function navigateToStudy() {
    navigation.navigate('Study');
  }

  if (!fontsLoaded) return <AppLoading />;

  return (
    <Container>
      <Image />

      <Title>
        {`Seja bem-vindo \n`}
        <Title bold>O que deseja fazer?</Title>
      </Title>

      <ButtonsContainer>
        <Button primary onPress={navigateToStudy}>
          <StudyIcon />
          <ButtonText bold>Estudar</ButtonText>
        </Button>

        <Button secondary onPress={navigateToGiveClasses}>
          <GiveClassesIcon />
          <ButtonText bold>Dar aulas</ButtonText>
        </Button>
      </ButtonsContainer>

      <Connections>
        {`Total de ${connections} conexões já realizadas `}
        <HeartIcon />
      </Connections>
    </Container>
  );
};

export default Landing;
