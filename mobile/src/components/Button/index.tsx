import React from 'react';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';

const Button: React.FC<RectButtonProperties> = (props) => {
  return <RectButton {...props} />;
};

export default Button;
