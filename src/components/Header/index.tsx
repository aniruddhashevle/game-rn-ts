import React from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import { CARD_PAIRS_VALUE, TOTAL_PARIS_TO_SHOW } from '../../config/appConfig';
import { setCardPairs, setStepCount } from '../../containers/Game/GameActions';
import { stepCountSelector } from '../../containers/Game/GameSelectors';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { getRandomPairs } from '../../utils';
import styles from './HeaderStyle';

const Header = () => {
  const stepsCount = useAppSelector(stepCountSelector);
  const dispatch = useAppDispatch();

  const onRestartPress = () => {
    // generate random pairs and set in redux
    const randomParis: Array<Array<number>> = getRandomPairs(CARD_PAIRS_VALUE, TOTAL_PARIS_TO_SHOW);
    dispatch(setCardPairs(randomParis));
    dispatch(setStepCount(0));
  }

  return (
    <View style={styles.container}>
      <Button title="Restart" onPress={onRestartPress} />
      <Text style={styles.steps}>
        STEPS:
        <Text style={styles.stepsCount}>{stepsCount}</Text>
      </Text>
    </View>
  );
};

export default Header;
