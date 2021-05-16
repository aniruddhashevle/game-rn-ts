import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import {
  Text,
  TouchableHighlight,
  Animated,
  View,
} from 'react-native';
import appColors from '../../config/appColors';
import styles from './CardsStyle';

interface CardProps {
  cardId: number;
  cardNumber: number;
  isRightCard: boolean;
  reverseFlip: boolean;
  setReverseFlip: Dispatch<SetStateAction<boolean>>;
  stepsCount: number;
  onCardPress: null | ((cardId: number, cardNumber: number) => void);
}

const Card = (props: CardProps) => {
  const {
    cardId,
    cardNumber,
    isRightCard,
    onCardPress,
    reverseFlip,
    setReverseFlip,
    stepsCount,
  } = props;

  const animate = useRef(new Animated.Value(0));
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (reverseFlip && !isRightCard) {
      animationFlop();
    }
  }, [reverseFlip])

  useEffect(() => {
    if (stepsCount === 0) {
      animationFlop();
    }
  }, [stepsCount])

  const doAFlip = () => {
    if (!isRightCard) {
      animationFlip();
    }
  };

  const animationFlip = (delay: number = 0) => {
    Animated.timing(animate.current, {
      delay,
      duration: 300,
      toValue: 180,
      useNativeDriver: true,
    }).start(() => {
      setIsFlipped(!isFlipped);
    });
    onCardPress && onCardPress(cardId, cardNumber);
  }

  const animationFlop = (delay: number = 0) => {
    Animated.timing(animate.current, {
      delay,
      duration: 300,
      toValue: 0,
      useNativeDriver: true,
    }).start(() => {
      setIsFlipped(!isFlipped);
      setReverseFlip(false);
    });
  }

  const interpolatedValueFront = animate.current.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });

  const interpolatedValueBack = animate.current.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  const rotateFront = {
    transform: [
      {
        rotateY: interpolatedValueFront,
      },
    ],
    ...styles.cardFace,
    ...styles.frontCard,
  };

  const rotateBack = {
    transform: [
      {
        rotateY: interpolatedValueBack,
      },
    ],
    ...styles.cardFace,
    ...styles.backCard,
  };

  return (
    <View style={styles.cardContainer}>
      <Animated.View style={[rotateFront, styles.fullCover, styles.card]}>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor={appColors.white}
          onPress={doAFlip}
          style={[styles.fullCover, styles.cardTouch]}
        >
          <Text style={styles.cardMark}>?</Text>
        </TouchableHighlight>
      </Animated.View>
      <Animated.View style={[rotateBack, styles.fullCover, styles.card, styles.back]}>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor={appColors.white}
          onPress={doAFlip}
          style={[styles.fullCover, styles.cardTouch]}
        >
          <Text style={styles.cardNumber}>{cardNumber}</Text>
        </TouchableHighlight>
      </Animated.View>
    </View>
  );
};

export default Card;