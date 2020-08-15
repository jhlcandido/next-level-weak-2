import styled from 'styled-components/native';
import TextComponent from '../../../../components/Text';
import TitleComponent from '../../../../components/Title';
import InputComponent from '../../../../components/Input';
import ButtonComponent from '../../../../components/Button';

export const Container = styled.View`
  margin-bottom: 8px;
`;
export const FormGroup = styled.View`
  width: 48%;
`;
export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const Label = styled(TextComponent)`
  color: ${(props) => props.theme.colors.textLight};
`;
export const Input = styled(InputComponent)``;

export const SubmitButton = styled(ButtonComponent)`
  background-color: ${(props) => props.theme.colors.buttonSecondary};
  height: 56px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const ButtonText = styled(TextComponent)`
  color: #fff;
  font-size: 16px;
`;
