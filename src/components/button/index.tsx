import React from "react"
import { TouchableOpacity, Text } from "react-native"
import styles from "./styles";

type ButtonProps = {
    onPress: () => void;
    text?: string | number;
    disabled?: boolean
    isLoading?: boolean
}

const Button = ({
    onPress = () => null,
    text,
    disabled,
    isLoading,
}: ButtonProps) => {
    return (
        <TouchableOpacity
            style={styles.buttonStyle}
            onPress={onPress}
            disabled={disabled || isLoading}
            >
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}


export default Button;