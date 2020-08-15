import React, { useState } from 'react';

import {
  Container,
  Input,
  Label,
  InputGroup,
  FormGroup,
  SubmitButton,
  ButtonText
} from './styles';

const SearchForm: React.FC = () => {
  return (
    <Container>
      <Label>Matéria</Label>
      <Input placeholder="Qual a matéria?" />
      <InputGroup>
        <FormGroup>
          <Label>Dia da semana</Label>
          <Input placeholder="Qual o dia?" />
        </FormGroup>
        <FormGroup>
          <Label>Horário</Label>
          <Input placeholder="Qual o horário?" />
        </FormGroup>
      </InputGroup>

      <SubmitButton>
        <ButtonText bold>Filtrar</ButtonText>
      </SubmitButton>
    </Container>
  );
};

export default SearchForm;
