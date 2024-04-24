import { StyleSheet } from "react-native";
import AppColors from "../../utils/AppColors";
import { width } from "../../utils/Dimension";

export default StyleSheet.create({
    buttonStyle: {
        backgroundColor: AppColors.blue,
        width:width(90),
        alignItems:'center',
        paddingVertical: 15,
        borderRadius: 10,
    },
    text: { 
        fontSize: width(5), 
        color: AppColors.white, 
        fontWeight: 'bold'
    },
})