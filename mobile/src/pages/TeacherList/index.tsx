import React, { useState, useEffect } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons/';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { api } from '../../services';
import { ITeacher } from '../../interfaces/ITeacher';

import SearchForm from './components/SearchForm';
import { Container, List } from './styles';

const TeacherList: React.FC = () => {
  const [filtersIsVisible, setFiltersIsVisible] = useState(false);

  const [teachers, setTeachers] = useState<ITeacher[]>([
    {
      id: 5,
      subject: 'Banco de Dados',
      cost: 150,
      user_id: 5,
      name: 'Jonathan Candido',
      avatar:
        'https://avatars3.githubusercontent.com/u/24982161?s=460&u=cefe0262065852df8e6d333a9d2dda5079274992&v=4',
      whatsapp: '17991080773',
      bio: 'Freelancer Fullstack na @crossdev-software'
    }
  ]);

  useEffect(() => {
    loadTeachers();
  }, []);

  function handleToggleFiltersVisible() {
    setFiltersIsVisible((prevState) => !prevState);
  }

  function loadTeachers() {
    console.log('loadTeachers');

    api
      .get('/classes')
      .then((s) => {
        setTeachers(s.data);
      })
      .catch((e) => {
        console.log('error', JSON.stringify(e));
      });
  }

  return (
    <Container>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }
      >
        {filtersIsVisible && <SearchForm />}
      </PageHeader>

      <List
        data={teachers}
        renderItem={({ item, index }) => <TeacherItem teacher={item} />}
        keyExtractor={(item, index) => String(item.id)}
      />
    </Container>
  );
};

export default TeacherList;
