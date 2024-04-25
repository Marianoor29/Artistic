import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimension";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
    container:{
        marginHorizontal:width(1),
        marginVertical:height(0.5)
    },
    text: {
        fontSize:width(5),
        color:AppColors.black
    },
    userImage:{
        height:width(20.4),
        width:width(20.4),
        borderRadius:width(20),
      
    },
    artistName:{
        color:AppColors.white,
        fontSize:width(3),
        position:'absolute',
        marginTop: height(6.6),
        paddingHorizontal:width(2),
        alignSelf:'center'
    },
    imageContainer:{
        width: width(21.5),
        height: width(21.5),
        borderRadius:width(20),
        borderWidth:width(0.5),
        borderColor:AppColors.blue,
        alignItems:'center',
        justifyContent:'center',
    },
    ShadowView:{
    backgroundColor: AppColors.blackShadow,
    position: "absolute",
    width: width(20),
    height: width(8.8),
    marginTop: height(6),
    alignSelf:'center',
    borderBottomLeftRadius: width(20),
    borderBottomRightRadius: width(20),
    }
})

export default styles