import { StyleSheet } from 'react-native';
import AppColors from '../../utils/AppColors';
import { width } from '../../utils/Dimension';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.white,
  },
  topTitle:{
    color:AppColors.black,
    fontSize:width(4),
    fontWeight:'bold'
  },
  statusRawContainer:{
    flexDirection:'row',
    paddingLeft:width(1.5)
  },
});
