import {
  AuthLink,
  Button,
  FormContainer,
  Input,
  InputContainer,
  Label,
  Title,
  ShowPasswordButton,
  BtnContainer,
} from 'Styled/Form.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operation';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const toggleShowPassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  const handleOnChange = e => {
    const { name, value } = e.target;
    switch (name) {
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
    dispatch(logIn({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Title>Log In</Title>
        <Label>
          Email
          <Input
            onChange={handleOnChange}
            name="email"
            value={email}
            type="mail"
          />
        </Label>
        <Label>
          Password
          <InputContainer>
            <Input
              onChange={handleOnChange}
              name="password"
              value={password}
              type={showPassword ? 'text' : 'password'}
              // showPasswordButton={showPassword}
            />
            <ShowPasswordButton type="button" onClick={toggleShowPassword}>
              {showPassword ? 'Hide' : 'Show'}
            </ShowPasswordButton>
          </InputContainer>
        </Label>
        <BtnContainer>
          <AuthLink to="/register">Register</AuthLink>
          <Button type="submit">Log In</Button>
        </BtnContainer>
      </form>
    </FormContainer>
  );
};

export default LoginForm;
