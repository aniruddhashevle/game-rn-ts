import React from 'react';
import {
  Text,
  TouchableHighlight,
} from 'react-native';
import appColors from '../../config/appColors';
import styles from './CardsStyle';

interface CardProps {
  cardId: number;
  cardNumber: number;
  isRightCard: boolean;
  onCardPress: null | ((cardId: number, cardNumber: number) => void);
}

const Card = (props: CardProps) => {
  const {
    cardId,
    cardNumber,
    isRightCard,
    onCardPress,
  } = props;

  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor={appColors.cardSelect}
      onPress={() => onCardPress && onCardPress(cardId, cardNumber)}
      style={styles.card}
    >
      <Text style={styles.cardNumber}>{isRightCard ? `${cardNumber} RIGHT` : cardNumber}</Text>
    </TouchableHighlight>
  );
};

export default Card;