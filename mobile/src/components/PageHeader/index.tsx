import React, { ReactNode } from 'react';

import { Container, TopBar, BackIcon, LogoImg, Title, Header } from './styles';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  headerRight,
  children
}) => {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate('Landing');
  }

  return (
    <Container>
      <TopBar>
        <BorderlessButton onPress={handleGoBack}>
          <BackIcon />
        </BorderlessButton>

        <LogoImg />
      </TopBar>

      <Header>
        <Title bold>{title}</Title>
        {headerRight}
      </Header>

      {children}
    </Container>
  );
};

export default PageHeader;
