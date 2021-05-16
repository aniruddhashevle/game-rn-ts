import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import Cards from '../../components/Cards';
import Header from '../../components/Header';
import { useAppDispatch } from '../../hooks/useRedux';
import { getRandomPairs } from '../../utils';
import { setCardPairs } from './GameActions';
import { CARD_PAIRS_VALUE, TOTAL_PARIS_TO_SHOW } from '../../config/appConfig';
import styles from './GameStyle';

const Game = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const dispatch = useAppDispatch();

  useEffect(() => {
    // generate random pairs and set in redux
    const randomParis: Array<Array<number>> = getRandomPairs(CARD_PAIRS_VALUE, TOTAL_PARIS_TO_SHOW);
    dispatch(setCardPairs(randomParis));
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Header />
      <Cards />
    </SafeAreaView>
  );
};

export default Game;
