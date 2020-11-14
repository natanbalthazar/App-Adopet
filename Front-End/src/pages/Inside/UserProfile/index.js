import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { ScrollView } from 'react-native';

import BG from '../../../assets/images/UserProfile/BG.png';
import UserImageExample from '../../../assets/images/UserProfile/userimage.png';
import Dog from '../../../assets/images/UserProfile/dog.png';
import Cat from '../../../assets/images/UserProfile/Gato.png';

import PetCard from '../../../components/PetCard';

import {
  Background,
  Container,
  Exit,
  Pets,
  Title,
  Title2,
  AboutArea,
  About,
  UserInfo,
  UserState,
  UserName,
  UserImage,
} from './styles';

export default function UserProfile() {
  const navigate = useNavigation();

  return(
    <Background source={BG}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <Exit
            name={'chevron-left'}
            size={30}
            color={'#FFFFFF'}
            onPress={() => navigate.goBack()}
          />
          <UserInfo>
            <UserImage source={UserImageExample} resizeMode="cover"/>
            <UserName>Carlos Alberto</UserName>
            <UserState>Rio de Janeiro</UserState>
          </UserInfo>
          <AboutArea>
            <Title>SOBRE</Title>
            <About>Recentemente tive que me mudar para uma casa menor e estou tendo que doar meus pets.</About>
          </AboutArea>
          <Pets>
            <Title2>PETS</Title2>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <PetCard image={Dog} name={'Polenta'}/>
              <PetCard image={Cat} name={'Garfield'} adopted={1}/>
              <PetCard image={Dog} name={'Polenta'}/>
              <PetCard image={Cat} name={'Garfield'}/>
            </ScrollView>
          </Pets>
        </Container>
      </ScrollView>
    </Background>
  );
}