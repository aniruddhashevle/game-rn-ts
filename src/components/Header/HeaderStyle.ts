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
    // backgroundColor: '#ff0', TODO
  },
  steps: {
    fontSize: 34,
  },
  stepsCount: {
    fontSize: 44,
    color: appColors.darkBlue,
  },
});

export default styles;