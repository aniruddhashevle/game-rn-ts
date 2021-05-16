import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Cards from '../../components/Cards';
import Header from '../../components/Header';
import { useAppDispatch } from '../../hooks/useRedux';
import { getRandomPairs } from '../../utils';
import { setCardPairs } from './GameActions';
import { CARD_PAIRS_VALUE, TOTAL_PARIS_TO_SHOW } from '../../config/appConfig';

const Game = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    // generate random pairs and set in redux
    const randomParis: Array<Array<number>> = getRandomPairs(CARD_PAIRS_VALUE, TOTAL_PARIS_TO_SHOW);
    dispatch(setCardPairs(randomParis));
  }, [])

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Header />
      <Cards />
    </SafeAreaView>
  );
};

export default Game;
