import { StyleSheet } from "react-native";
import AppColors from "../../utils/AppColors";
import { height, width } from "../../utils/Dimension";

export default StyleSheet.create({
    buttonStyle: {
        backgroundColor: AppColors.blue,
        width:width(80),
        alignItems:'center',
        paddingVertical:height(2),
        borderRadius:width(8),
    },
    text: { 
        fontSize: width(5), 
        color: AppColors.white, 
        fontWeight: 'bold'
    },
})