import React from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import { stepCountSelector } from '../../containers/Game/GameSelectors';
import { useAppSelector } from '../../hooks/useRedux';
import styles from './HeaderStyle';

const Header = () => {
  const stepsCount = useAppSelector(stepCountSelector);

  return (
    <View style={styles.container}>
      <Button title="Restart" onPress={() => { }} />
      <Text style={styles.steps}>
        STEPS:
        <Text style={styles.stepsCount}>{stepsCount}</Text>
      </Text>
    </View>
  );
};

export default Header;
