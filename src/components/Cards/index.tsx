import React from 'react';
import {
  View,
} from 'react-native';
import Card from './Card';
import styles from './CardsStyle';

const Cards = () => {
  return (
    <View style={styles.container}>
      {
        ([...Array(12).keys()]).map((cardNum: any, index: number) =>
          <Card cardNumber={cardNum} />
        )
      }
    </View>
  );
};

export default Cards;