import {
  StyleSheet,
} from 'react-native';
import appColors from '../../config/appColors';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  steps: {
    fontSize: 30,
    color: appColors.white,
  },
  stepsCount: {
    fontSize: 40,
    color: appColors.darkBlue,
  },
});

export default styles;