import React from 'react';
import {View,Text } from 'react-native';

import { Background, Container, BG, Header, HeaderTitle, Person, PersonText, AreaInput, Input, BtCreate, BtCreateText } from './styles';

export default function Login(){
  return(
    <Background>
      <Container>
        <BG source={require('../../assets/images/LoginBG.png')}/>

        <Header>
          <HeaderTitle>Bem Vindo,{'\n'}ao Adopet</HeaderTitle>
          <Person>
          <Text> Você não possui Conta? </Text>
            <PersonText>Cria sua Conta</PersonText>
          </Person>
        </Header>

        <AreaInput>
          <Input
          placeholder="Email"
          autoCorret={false}
          autoCapitalize="none"
          />
        </AreaInput>

        <AreaInput>
          <Input
          placeholder="Senha"
          autoCorret={false}
          autoCapitalize="none"
          />
        </AreaInput>

        <BtCreate>
            <BtCreateText>Criar Minha Conta</BtCreateText>
        </BtCreate>

      </Container>
    </Background>
  )
}