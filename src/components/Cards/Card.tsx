import React from 'react';
import {
  Text,
  TouchableHighlight,
} from 'react-native';
import appColors from '../../constants/appColors';
import { gameAction } from '../../containers/Game/GameActions';
import { countSelector } from '../../containers/Game/GameSelectors';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import styles from './CardsStyle';

interface CardProps {
  cardNumber: number;
}

const Card = (props: CardProps) => {
  const {
    cardNumber,
  } = props;
  
  const dispatch = useAppDispatch();
  const stepsCount = useAppSelector(countSelector);

  const onCardPress = () => {
    dispatch(gameAction(stepsCount + 1));
  }

  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor={appColors.cardSelect}
      onPress={onCardPress}
      style={styles.card}
    >
      <Text style={styles.cardNumber}>{cardNumber}</Text>
    </TouchableHighlight>
  );
};

export default Card;