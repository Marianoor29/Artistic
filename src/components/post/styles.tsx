import { StyleSheet } from "react-native";
import AppColors from "../../utils/AppColors";
import { height, width } from "../../utils/Dimension";


const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.white,
    width: width(90),
    paddingVertical: height(1),
    alignItems: "center",
    borderColor:AppColors.black
  },
  userView:{
    width:width(85),
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center'
  },
  userDetailWrapper:{
    width:width(40),
    justifyContent:'space-evenly',
    flexDirection:'row',
   alignItems:'center'
  },
  userName:{
    color:AppColors.black,
    fontSize:width(3)
  },
  time:{
    color:AppColors.black,
    fontSize:width(2)
  },
  userInfoView:{
  },
  userImage: {
    width:width(12),
    height:width(12),
    borderRadius:width(50)
  },
  postImage:{
    width:width(80),
    height:height(40),
    borderRadius:width(5),
    marginTop:height(2)
  }
});
export default styles;
