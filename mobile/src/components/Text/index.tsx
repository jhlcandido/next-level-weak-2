import React from 'react';

import { Text } from './styles';

export interface ITextProps {
  bold?: boolean;
}

const TextComponent: React.FC<ITextProps> = (props) => {
  return <Text {...props} />;
};

export default TextComponent;
