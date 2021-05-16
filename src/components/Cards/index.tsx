import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import Card from './Card';
import { cardPairsSelector, stepCountSelector } from '../../containers/Game/GameSelectors';
import styles from './CardsStyle';
import { getRandomPairs, showAlert } from '../../utils';
import { CARD_PAIRS_VALUE, TOTAL_PARIS_TO_SHOW } from '../../config/appConfig';
import { setCardPairs, setStepCount } from '../../containers/Game/GameActions';

interface CardListToShow {
  id: number,
  cardNum: number,
  isRightCard: boolean;
}

const Cards = () => {
  const [cardListToShow, setCardListToShow] = useState<Array<CardListToShow>>([]);
  const [selectedCardId, setSelectedCardId] = useState<number>(-1);
  const [selectedCardNum, setSelectedCardNum] = useState<number>(-1);
  const [rightSelectionCount, setRightSelectionCount] = useState<number>(0);
  const dispatch = useAppDispatch();
  const stepsCount = useAppSelector(stepCountSelector);
  const cardPairs = useAppSelector(cardPairsSelector);

  const setSelectedCardDetails = (id: number = -1, num: number = -1) => {
    setSelectedCardId(id);
    setSelectedCardNum(num);
  }

  const onCardPress = (cardId: number, cardNumber: number) => {
    if (selectedCardId !== -1) {
      if (selectedCardNum === cardNumber) {
        let cardsList = [...cardListToShow].map((cardData) => ({
          ...cardData,
          isRightCard: cardData.isRightCard || cardData.cardNum === cardNumber
        }));
        setCardListToShow(cardsList);
        setRightSelectionCount(rightSelectionCount + 1);
      }
      setSelectedCardDetails();
    } else {
      setSelectedCardDetails(cardId, cardNumber);
    }
    dispatch(setStepCount(stepsCount + 1));
  }

  useEffect(() => {
    if (cardPairs) {
      let flatCardParis = cardPairs.flat();
      let cardsList = getRandomPairs(flatCardParis, TOTAL_PARIS_TO_SHOW * 2);
      cardsList = cardsList.map((cardNum: number, id: number) => ({ id, cardNum, isRightCard: false }));
      setCardListToShow(cardsList);
      setSelectedCardDetails();
      setRightSelectionCount(0);
    }
  }, [cardPairs]);

  useEffect(() => {
    if (rightSelectionCount === TOTAL_PARIS_TO_SHOW) {
      setRightSelectionCount(0);
      showAlert({
        title: "Cogratulations!",
        msg: `You win this game by ${stepsCount} steps!`,
        btnText: "Try another round",
        onBtnPress: onGameWin,
      });
    }
  }, [rightSelectionCount])

  const onGameWin = () => {
    const randomParis: Array<Array<number>> = getRandomPairs(CARD_PAIRS_VALUE, TOTAL_PARIS_TO_SHOW);
    dispatch(setCardPairs(randomParis));
    dispatch(setStepCount(0));
  }

  return (
    <View style={styles.container}>
      {
        cardListToShow.map(({
          cardNum,
          id,
          isRightCard,
        }: CardListToShow) =>
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