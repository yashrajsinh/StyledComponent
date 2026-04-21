import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

import { Workouts } from '../data/Workouts';

interface Props {
  data?: any[];
  accent?: string;
  cardHeight?: number;
}

const WorkOutScreen = ({
  data = Workouts,
  accent = '#38bdf8',
  cardHeight = 300,
}: Props) => {
  return (
    <Container>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <HeaderSection>
            <Tagline accent={accent}>BEAST MODE ON</Tagline>
            <TitleLine>
              Transform <Highlight accent={accent}>Your</Highlight>
            </TitleLine>
            <TitleLine>Physique</TitleLine>
          </HeaderSection>
        )}
        renderItem={({ item }) => {
          const [instruction, volume] = item.description.split('•');

          return (
            <CardContainer activeOpacity={0.95} height={cardHeight}>
              <WorkoutImage
                source={{ uri: item.image, priority: FastImage.priority.high }}
                resizeMode="cover"
              />

              <TextShroud>
                <InfoWrapper>
                  <WorkoutTitle>{item.name}</WorkoutTitle>
                  <FullDescription>{instruction.trim()}</FullDescription>
                </InfoWrapper>

                <ActionCircle>
                  <Arrow> → </Arrow>
                </ActionCircle>
              </TextShroud>
            </CardContainer>
          );
        }}
      />
    </Container>
  );
};

export default WorkOutScreen;

// --- STYLED COMPONENTS ---

const Container = styled.View`
  flex: 1;
  background-color: #000;
`;

const HeaderSection = styled.View`
  padding: 35px;
`;

const Tagline = styled.Text<{ accent: string }>`
  color: ${props => props.accent};
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 3px;
  margin-bottom: 2px;
`;

const TitleLine = styled.Text`
  color: #fff;
  font-size: 34px;
  font-weight: 900;
  line-height: 38px;
`;

const Highlight = styled.Text<{ accent: string }>`
  color: ${props => props.accent};
  font-style: italic;
`;

// Passing 'height' prop directly to styled component
const CardContainer = styled.TouchableOpacity<{ height: number }>`
  height: ${props => props.height}px;
  margin: 10px 10px; //vertical and horizontal margin
  border-radius: 20px;
  background-color: #111;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const WorkoutImage = styled(FastImage)`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const TextShroud = styled.View`
  margin-top: auto;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.75);
  flex-direction: row;
  align-items: flex-end;
  border-top-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.1);
`;

const InfoWrapper = styled.View`
  flex: 1;
`;

const WorkoutTitle = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: 900;
  letter-spacing: -0.5px;
  margin-bottom: 4px;
`;

const FullDescription = styled.Text`
  color: #cbd5e1;
  font-size: 14px;
  line-height: 19px;
  opacity: 0.85;
`;

const ActionCircle = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
  margin-bottom: 2px;
`;

const Arrow = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight: bold;
`;
