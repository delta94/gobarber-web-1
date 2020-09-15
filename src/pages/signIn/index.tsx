import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Content, AnimationContainer, Background } from './styles';

import logoImg from '../../assets/logo.svg';

const SignIn = () => {
  const handleSubmit = () => {};

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBarber" />

          <form onSubmit={handleSubmit}>
            <h1>Faça seu logon</h1>

            <input name="email" placeholder="E-mail" />

            <input name="password" type="password" placeholder="Senha" />

            <button type="submit">Entrar</button>

            <a href="forgo">Esqueci minha senha</a>
          </form>

          <a href="/signup">
            <FiLogIn />
            Criar conta
          </a>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
