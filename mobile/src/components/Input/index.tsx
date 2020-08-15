import React from 'react';
import { View, TextInputProperties } from 'react-native';

import { TextInput } from './styles';

const Input: React.FC<TextInputProperties> = (props) => {
  return <TextInput {...props} />;
};

export default Input;
