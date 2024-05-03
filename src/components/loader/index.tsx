import React from "react"
import { Text, ActivityIndicator, View } from "react-native"
import styles from "./styles";
import { useSelector } from "react-redux";
import { setAppLoader } from "../../redux/slice/config/configSlice";
import ReactNativeModal from "react-native-modal";
import AppColors from "../../utils/AppColors";

type ButtonProps = {

}

const Loader = ({
}: ButtonProps) => {
    const appLoader = useSelector(setAppLoader);
    console.log('ddddd', appLoader, 'ffff')
    return (
        <ReactNativeModal
        animationInTiming={300}
        animationOutTiming={200}
        animationIn={'lightSpeedIn'}
        animationOut={'lightSpeedOut'}
        isVisible={appLoader.payload}
        backdropOpacity={0.4}>
        <View style={styles.container}>
          <ActivityIndicator size="small" color={AppColors.black} />
          <Text style={styles.text}>Loading</Text>
        </View>
      </ReactNativeModal>
    )
}


export default Loader;