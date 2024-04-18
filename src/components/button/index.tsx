import React from "react"
import { TouchableOpacity, Text } from "react-native"
import styles from "./styles";

type ButtonProps = {
    onPress?: () => void;
    text?: string | number;
}

const Button = ({
    onPress = () => null,
    text,
}: ButtonProps) => {
    return (
        <TouchableOpacity
            style={styles.buttonStyle}
            onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}


export default Button;