import React, { useState, useEffect } from 'react';

import { Container, List } from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { api } from '../../services';

const Favorites: React.FC = () => {
  const [teachers, setTeachers] = useState([
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
      <PageHeader title="Proffys disponíveis" />

      <List
        data={teachers}
        renderItem={({ item, index }) => <TeacherItem teacher={item} />}
        keyExtractor={(item, index) => String(item.id)}
      />
    </Container>
  );
};

export default Favorites;
