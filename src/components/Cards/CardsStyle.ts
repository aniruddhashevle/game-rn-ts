import {
  StyleSheet,
} from 'react-native';
import appColors from '../../config/appColors';

const styles = StyleSheet.create({
  fullCover: {
    width: '100%',
    height: '100%',
  },
  container: {
    padding: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    alignContent: 'center',
  },
  cardContainer: {
    width: '30%',
    height: '22%',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backfaceVisibility: 'hidden',
  },
  cardNumber: {
    fontSize: 24,
  },
  cardMark: {
    fontSize: 28,
    color: appColors.white,
  },
  cardFace: {
    borderWidth: 5,
    borderRadius: 10,
    borderColor: appColors.white,
    flexGrow: 1,
    flexShrink: 0,
  },
  frontCard: {
    backgroundColor: appColors.cardsBlue,
  },
  backCard: {
    backgroundColor: appColors.white,
  },
  back: {
    position: 'absolute',
    top: 0,
  },
  cardTouch: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;