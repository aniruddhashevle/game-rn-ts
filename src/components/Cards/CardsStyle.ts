import {
  StyleSheet,
} from 'react-native';
import appColors from '../../constants/appColors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    alignContent: 'center',
    padding: 5,
  },
  card: {
    width: '30%',
    height: '22%',
    margin: 5,
    borderRadius: 10,
    borderColor: appColors.white,
    borderWidth: 5,
    flexGrow: 1,
    flexShrink: 0,
    backgroundColor: appColors.cardsBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardNumber: {
    fontSize: 20,
  },
});

export default styles;