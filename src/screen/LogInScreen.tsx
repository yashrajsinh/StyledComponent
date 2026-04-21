import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

const LOGO_IMG =
  'https://img.freepik.com/premium-vector/gym-maniac-esport-mascot-logo-design_119810-1979.jpg';

type Props = {
  navigation: any;
};

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Header>
        <ImageContainer>
          <HeroImage source={{ uri: LOGO_IMG }} resizeMode="contain" />
        </ImageContainer>
      </Header>

      <Sheet>
        <BrandGroup>
          <Brand size={25}>
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
              error={email.length > 0 && !email.includes('@')}
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
              error={password.length > 0 && password.length < 6}
            />
          </InputContainer>

          <LoginButton
            disabled={!email || !password}
            onPress={() => navigation.navigate('WorkOutScreen')}
          >
            <ButtonText>UNLEASH POWER</ButtonText>
          </LoginButton>

          <FooterRow>
            <FooterLink>Lost Access?</FooterLink>
          </FooterRow>
        </FormArea>
      </Sheet>
    </View>
  );
}
const View = styled.View`
  flex: 1;
  background-color: #020617;
`;

const Header = styled.View`
  height: 40%;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.View`
  width: ${width * 0.6}px;
  height: ${width * 0.6}px;
`;

const HeroImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

const Sheet = styled.View`
  flex: 1;
  background-color: #0f172a;
  border-radius: 40px;
  padding: 30px;
`;

const BrandGroup = styled.View`
  margin-bottom: 30px;
`;

interface BrandProps {
  size?: number;
}

const Brand = styled.Text<BrandProps>`
  color: #fff;
  font-size: ${props => props.size || 24}px;
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
  margin-bottom: 10px;
`;

interface InputProps {
  error?: boolean;
}

const StyledInput = styled.TextInput<InputProps>`
  background-color: #020617;
  color: #fff;
  padding: 16px;
  border-radius: 16px;
  font-size: 16px;
  border: 1px solid ${props => (props.error ? 'red' : '#1e293b')};
`;

interface ButtonProps {
  disabled?: boolean;
}

const LoginButton = styled.TouchableOpacity<ButtonProps>`
  background-color: ${props => (props.disabled ? '#334155' : '#6366f1')};
  padding: 18px;
  border-radius: 16px;
  align-items: center;
  margin-top: 10px;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`;

const ButtonText = styled.Text`
  color: #fff;
  font-weight: 900;
  font-size: 14px;
  letter-spacing: 2px;
`;

const FooterRow = styled.View`
  margin-top: 30px;
  align-items: center;
`;

const FooterLink = styled.Text`
  color: #475569;
  font-size: 14px;
  font-weight: 600;
`;
