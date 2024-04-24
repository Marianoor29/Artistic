import { StyleSheet } from "react-native"
import { height, width } from "../../utils/Dimension"
import AppColors from "../../utils/AppColors"

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: AppColors.white,
        width: width(90),
        // height: height(8),
        flexDirection: 'row',
        paddingHorizontal: width(2.5),
        paddingVertical: height(1.3),
        borderRadius: height(0.5),
        borderColor:AppColors.blue,
        borderWidth:width(0.3)
    },
    container: {
        backgroundColor: AppColors.white,
        width: width(68),
        marginLeft: width(1),
    },
    input: {
        width: width(68),
        color: AppColors.blue,
        fontSize: width(3.8),
        paddingTop: 0,
    },
    errorView: {
        alignSelf: 'flex-start',
        paddingHorizontal: width(9),
        marginBottom:height(1)
    },
    errorText: {
        fontSize: width(3),
        color: AppColors.red
    }
})

export default styles