import React from 'react';
import { FlatList, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

import { Workouts } from '../data/Workouts';

const WorkOutScreen = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content" />

      <FlatList
        data={Workouts}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <HeaderSection>
            <Tagline>BEAST MODE ON</Tagline>
            <TitleLine>
              Transform <Highlight>Your</Highlight>
            </TitleLine>
            <TitleLine>Physique</TitleLine>
          </HeaderSection>
        )}
        contentContainerStyle={{ paddingBottom: 40 }}
        renderItem={({ item }) => {
          const [instruction, volume] = item.description.split('•');

          return (
            <CardContainer activeOpacity={0.95}>
              <WorkoutImage
                source={{ uri: item.image, priority: FastImage.priority.high }}
                resizeMode={FastImage.resizeMode.cover}
              />

              <TextShroud>
                <InfoWrapper>
                  <VolumeBadge>
                    <VolumeText>{volume ? volume.trim() : 'PRO'}</VolumeText>
                  </VolumeBadge>

                  <WorkoutTitle>{item.name}</WorkoutTitle>
                  <FullDescription>{instruction.trim()}</FullDescription>
                </InfoWrapper>

                <ActionCircle>
                  <Arrow>→</Arrow>
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

// --- STYLES ---

const Container = styled.View`
  flex: 1;
  background-color: #000;
`;

const HeaderSection = styled.View`
  padding: 30px 20px 15px 24px;
`;

const Tagline = styled.Text`
  color: #38bdf8;
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

const Highlight = styled.Text`
  color: #38bdf8;
  font-style: italic;
`;

const CardContainer = styled.TouchableOpacity`
  min-height: 320px; /* Reduced from 400px for a punchier look */
  margin: 10px 18px;
  border-radius: 28px;
  overflow: hidden;
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
  padding: 20px; /* Tighter padding */
  background-color: rgba(0, 0, 0, 0.7);
  flex-direction: row;
  align-items: flex-end;
  border-top-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.1);
`;

const InfoWrapper = styled.View`
  flex: 1;
`;

const VolumeBadge = styled.View`
  align-self: flex-start;
  background-color: #38bdf8;
  padding: 3px 8px;
  border-radius: 6px;
  margin-bottom: 6px;
`;

const VolumeText = styled.Text`
  color: #000;
  font-size: 10px;
  font-weight: 900;
  text-transform: uppercase;
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
  font-weight: 400;
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
