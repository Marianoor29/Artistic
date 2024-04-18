import { StyleSheet } from 'react-native';
import AppColors from '../../utils/AppColors';
import { width } from '../../utils/Dimension';

export default StyleSheet.create({
  SafeAreaView: { flex: 1, backgroundColor: AppColors.white },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.white,
  },
});
