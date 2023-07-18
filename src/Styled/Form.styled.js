import styled from 'styled-components';
import { Link } from 'react-router-dom';
const FormContainer = styled.div`
  width: 450px;
  padding: 30px 25px;
  margin: 0 auto;
  border-radius: 7px;
  margin-top: 100px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  margin-top: 5px;
  padding-right: 50px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #2635ff;
`;

const ShowPasswordButton = styled.button`
  position: absolute;
  top: 3px;
  right: 0;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 8px;
  background: transparent;
  border: none;
  cursor: pointer;
`;
const Button = styled.button`
  display: block;
  border-radius: 20px;
  border: 1px solid #030c87;
  background: #2635ff;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 25px;
  letter-spacing: 1px;

  transition: transform 80ms ease-in;

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }
`;

const AuthLink = styled(Link)`
  color: #ff445c;
`;

const InputContainer = styled.div`
  position: relative;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
`;

export {
  FormContainer,
  Label,
  Input,
  Button,
  ShowPasswordButton,
  InputContainer,
  Title,
  AuthLink,
  BtnContainer,
};
