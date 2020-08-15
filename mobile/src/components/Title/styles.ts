import styled, { css } from 'styled-components/native';
import { TitleProps } from '.';

export const Text = styled.Text<TitleProps>`
  font-family: ${(props) => props.theme.fontFamily.titleRegular};

  ${(props) =>
    props.bold &&
    css`
      font-family: ${(props) => props.theme.fontFamily.titleBold};
    `}
`;
