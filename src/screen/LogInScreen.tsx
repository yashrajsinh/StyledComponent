import React, { useState } from 'react';
import { StatusBar, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');
const LOGO_IMG =
  'https://img.freepik.com/premium-vector/bodybuilding-gym-logo-template_981215-132.jpg';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <StatusBar barStyle="light-content" />

      {/* 1. Header Section: Contains image perfectly without cropping */}
      <Header>
        <ImageContainer>
          <HeroImage source={{ uri: LOGO_IMG }} resizeMode="contain" />
        </ImageContainer>
      </Header>

      {/* 2. The Interactive Sheet */}
      <Sheet>
        <Handle />

        <BrandGroup>
          <Brand>
            IRON<AccentText>CORE</AccentText>
          </Brand>
          <Motto>Precision training for the elite athlete.</Motto>
        </BrandGroup>

        <FormArea>
          <InputContainer>
            <Label>IDENTITY</Label>
            <StyledInput
              placeholder="Email or Username"
              placeholderTextColor="#475569"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
            />
          </InputContainer>

          <InputContainer>
            <Label>ACCESS KEY</Label>
            <StyledInput
              placeholder="••••••••"
              placeholderTextColor="#475569"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </InputContainer>

          <LoginButton activeOpacity={0.8}>
            <ButtonText>UNLEASH POWER</ButtonText>
          </LoginButton>

          <FooterRow>
            <FooterLink>Lost Access?</FooterLink>
            <Divider />
            <FooterLink>Join The Elite</FooterLink>
          </FooterRow>
        </FormArea>
      </Sheet>
    </Container>
  );
}

// --- Styled Components ---

const Container = styled.View`
  flex: 1;
  background-color: #020617; /* Deepest black */
`;

const Header = styled.View`
  height: 35%;
  justify-content: center;
  align-items: center;
  background-color: #020617;
`;

const ImageContainer = styled.View`
  width: ${width * 0.7}px;
  height: ${width * 0.7}px;
  /* Glow effect behind the logo to make it feel premium */
  shadow-color: #6366f1;
  shadow-opacity: 0.3;
  shadow-radius: 40px;
  elevation: 10;
`;

const HeroImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const Sheet = styled.View`
  flex: 1;
  background-color: #0f172a; /* Slightly lighter slate */
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  padding: 20px 30px;
  /* Inner shadow/border for "Sheet" definition */
  border-top-width: 1px;
  border-top-color: #1e293b;
`;

const Handle = styled.View`
  width: 40px;
  height: 5px;
  background-color: #334155;
  border-radius: 10px;
  align-self: center;
  margin-bottom: 30px;
`;

const BrandGroup = styled.View`
  margin-bottom: 30px;
`;

const Brand = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: 900;
  letter-spacing: 2px;
`;

const AccentText = styled.Text`
  color: #6366f1;
`;

const Motto = styled.Text`
  color: #64748b;
  font-size: 15px;
  margin-top: 6px;
  font-weight: 500;
`;

const FormArea = styled.View`
  flex: 1;
`;

const InputContainer = styled.View`
  margin-bottom: 20px;
`;

const Label = styled.Text`
  color: #4f46e5;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 1.5px;
  margin-bottom: 8px;
  margin-left: 4px;
`;

const StyledInput = styled.TextInput`
  background-color: #020617;
  color: #fff;
  padding: 16px;
  border-radius: 16px;
  font-size: 16px;
  border: 1px solid #1e293b;
`;

const LoginButton = styled.TouchableOpacity`
  background-color: #6366f1;
  padding: 18px;
  border-radius: 16px;
  align-items: center;
  margin-top: 10px;
  shadow-color: #6366f1;
  shadow-opacity: 0.4;
  shadow-radius: 15px;
  elevation: 8;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-weight: 900;
  font-size: 14px;
  letter-spacing: 2px;
`;

const FooterRow = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const FooterLink = styled.Text`
  color: #475569;
  font-size: 14px;
  font-weight: 600;
`;

const Divider = styled.View`
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background-color: #334155;
  margin: 0 15px;
`;
