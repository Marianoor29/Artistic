import { Platform, StyleSheet } from "react-native";
import AppColors from "../utils/AppColors";
import { height, width } from "../utils/Dimension";


const styles = StyleSheet.create({
    tabBarStyle:{
        height: Platform.OS === "ios" ? height(12) : height(10.5),
        backgroundColor: AppColors.blue,
        borderTopColor: AppColors.white,
        borderTopWidth: width(0.3),
        borderTopRightRadius: width(7),
        borderTopLeftRadius: width(7),
    },
    tabItemsStyle: {
        alignItems:"center",
        justifyContent: "center",
        width: width(18),
        height: "100%",
      },
      bottomTabIndicator: {
        position: "absolute",
        top: 0,
        height: height(0.6),
        width: width(16),
        borderBottomEndRadius: width(5),
        borderBottomStartRadius: width(5),
      },
})

export default styles