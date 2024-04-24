import { StyleSheet } from "react-native";
import AppColors from "../../../utils/AppColors";
import { height, width } from "../../../utils/Dimension";

const styles = StyleSheet.create({
    SafeAreaView: { flex: 1, backgroundColor: AppColors.white },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: AppColors.white,
    },
    title:{
      fontSize:height(3),
      color:AppColors.blue,
      fontWeight:'bold',
      marginBottom:height(4)
    },
    signupText:{
      fontSize:height(2),
      color:AppColors.blue,
      marginTop:height(5),
      marginBottom:height(2)
    },
    animatedImageStyle: {
      height: height(40),
      width:width(60),
      marginBottom:height(3)
    },

   
})

export default styles;