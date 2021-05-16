/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Header from '../../components/Header';
import { useAppSelector, useAppDispatch } from '../../hooks/useRedux';
import { gameAction } from './GameActions';
import { countSelector } from './GameSelectors';

const Game = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const dispatch = useAppDispatch();
  const count = useAppSelector(countSelector);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <Button title="Click" onPress={() => dispatch(gameAction(count + 1))}></Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Game;
