import { StyleSheet } from "react-native";
import AppColors from "../../utils/AppColors";
import { width } from "../../utils/Dimension";

export default StyleSheet.create({
    buttonStyle: {
        backgroundColor: AppColors.blue,
        paddingHorizontal: 40,
        paddingVertical: 30,
        borderRadius: 10,
    },
    text: { fontSize: width(5), color: AppColors.white, fontWeight: 'bold' },
})