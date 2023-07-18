import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';
import {
  FormContainer,
  Label,
  Input,
  Button,
  ShowPasswordButton,
  InputContainer,
  Title,
  AuthLink,
  BtnContainer,
} from 'Styled/Form.styled';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleOnChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const toggleShowPassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };
  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Title>Register</Title>
        <Label>
          Name
          <Input
            onChange={handleOnChange}
            value={name}
            name="name"
            type="text"
          />
        </Label>
        <Label>
          Email
          <Input
            onChange={handleOnChange}
            value={email}
            name="email"
            type="mail"
          />
        </Label>

        <Label>
          Password
          <InputContainer>
            <Input
              onChange={handleOnChange}
              value={password}
              name="password"
              type={showPassword ? 'text' : 'password'}
              // showPasswordButton={showPassword}
            />
            <ShowPasswordButton type="button" onClick={toggleShowPassword}>
              {showPassword ? 'Hide' : 'Show'}
            </ShowPasswordButton>
          </InputContainer>
        </Label>
        <BtnContainer>
          <AuthLink to="/login">Login</AuthLink>

          <Button type="submit">Register</Button>
        </BtnContainer>
      </form>
    </FormContainer>
  );
};

export default RegisterForm;
