import React, { useEffect, useState } from 'react';
import {
  View,
} from 'react-native';
import { useAppSelector } from '../../hooks/useRedux';
import Card from './Card';
import { cardPairsSelector } from '../../containers/Game/GameSelectors';
import styles from './CardsStyle';
import { getRandomPairs } from '../../utils';
import { TOTAL_PARIS_TO_SHOW } from '../../config/appConfig';

const Cards = () => {
  const cardPairs: (null | Array<Array<number>>) = useAppSelector(cardPairsSelector);
  const [cardNumsList, setCardNumsList] = useState(cardPairs || []);

  useEffect(() => {
    if (cardPairs) {
      let flatCardParis = cardPairs.flat();
      setCardNumsList(getRandomPairs(flatCardParis, TOTAL_PARIS_TO_SHOW * 2));
    }
  }, [cardPairs]);

  return (
    <View style={styles.container}>
      {
        cardNumsList.map((cardNum: any, index: number) =>
          <Card key={index} cardNumber={cardNum} />
        )
      }
    </View>
  );
};

export default Cards;