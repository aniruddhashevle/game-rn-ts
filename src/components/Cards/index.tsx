import React, { useEffect, useState } from 'react';
import {
  View,
} from 'react-native';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import Card from './Card';
import { cardPairsSelector, stepCountSelector } from '../../containers/Game/GameSelectors';
import styles from './CardsStyle';
import { getRandomPairs } from '../../utils';
import { TOTAL_PARIS_TO_SHOW } from '../../config/appConfig';
import { setStepCount } from '../../containers/Game/GameActions';

const Cards = () => {
  const [cardListToShow, setCardListToShow] = useState<Array<any>>([]);
  const [selectedCardId, setSelectedCardId] = useState<number>(-1);
  const [selectedCardNum, setSelectedCardNum] = useState<number>(-1);

  const dispatch = useAppDispatch();
  const stepsCount = useAppSelector(stepCountSelector);
  const cardPairs = useAppSelector(cardPairsSelector);

  const onCardPress = (cardId: number, cardNumber: number) => {
    if (selectedCardId !== -1) {
      if (selectedCardNum === cardNumber) {
        let cardsList = [...cardListToShow].map((cardData) => ({ ...cardData, isRightCard: cardData.isRightCard || cardData.cardNum === cardNumber }));
        setCardListToShow(cardsList);
      }
      setSelectedCardId(-1);
      setSelectedCardNum(-1);
    } else {
      setSelectedCardId(cardId);
      setSelectedCardNum(cardNumber);
    }
    dispatch(setStepCount(stepsCount + 1));
  }

  useEffect(() => {
    if (cardPairs) {
      let flatCardParis = cardPairs.flat();
      let cardsList = getRandomPairs(flatCardParis, TOTAL_PARIS_TO_SHOW * 2);
      cardsList = cardsList.map((cardNum: number, id: number) => ({ id, cardNum, isRightCard: false }));
      setCardListToShow(cardsList);
      setSelectedCardId(-1);
      setSelectedCardNum(-1);
    }
  }, [cardPairs]);

  return (
    <View style={styles.container}>
      {
        cardListToShow.map(({
          cardNum,
          id,
          isRightCard,
        }) =>
          <Card
            key={id}
            cardNumber={cardNum}
            cardId={id}
            isRightCard={isRightCard}
            onCardPress={(id === selectedCardId || isRightCard) ? null : onCardPress}
          />
        )
      }
    </View>
  );
};

export default Cards;