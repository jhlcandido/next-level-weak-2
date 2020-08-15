import React from 'react';

import { Text } from './styles';

export interface TitleProps {
  bold?: boolean;
}

const Title: React.FC<TitleProps> = (props) => {
  return <Text {...props} />;
};

export default Title;
