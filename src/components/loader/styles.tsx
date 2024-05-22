import { StyleSheet } from 'react-native';
import AppColors from '../../utils/AppColors';
import { height, width } from '../../utils/Dimension';

export default StyleSheet.create({
  container: {
    backgroundColor: AppColors.black,
    width: width(50),
    paddingVertical: height(3),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: width(3),
    flexDirection: 'row',
  },
  text: {
    color: AppColors.black,
    fontSize: width(3.2),
    marginLeft: width(2),
    fontWeight: 'bold',
  },
});
