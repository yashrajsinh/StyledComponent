/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import LoginScreen from './src/screen/LogInScreen';
import styled from 'styled-components/native';

function App() {
  return (
    <SafeAreaProvider>
      <Container>
        <LoginScreen />
      </Container>
    </SafeAreaProvider>
  );
}
export default App;
const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #020617;
`;
