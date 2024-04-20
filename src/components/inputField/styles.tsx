import { Platform, StyleSheet } from "react-native"
import { height, width } from "../../utils/Dimension"
import AppColors from "../../utils/AppColors"


const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: AppColors.white,
        width: width(90),
        height: height(8),
        flexDirection: 'row',
        paddingHorizontal: width(2.5),
        paddingVertical: height(2),
        borderRadius: height(2),
        marginVertical: height(1),
        borderColor:AppColors.blue,
        borderWidth:width(0.5)
    },
    container: {
        backgroundColor: AppColors.white,
        width: width(80),
        height: height(5),
        marginLeft: width(1)
    },
    input: {
        width: width(68),
        color: AppColors.blue,
        fontSize: width(3.8),
        paddingBottom: width(0.1),
        marginHorizontal: width(1),
        marginVertical: Platform.OS === 'ios' ? height(0.7) : 0,
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