import styled, { css } from 'styled-components/native';
import { ITextProps } from '.';

export const Text = styled.Text<ITextProps>`
  font-family: ${(props) => props.theme.fontFamily.textRegular};

  ${(props) =>
    props.bold &&
    css`
      font-family: ${(props) => props.theme.fontFamily.textBold};
    `}
`;
