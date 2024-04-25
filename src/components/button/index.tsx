import React from "react"
import { TouchableOpacity, Text } from "react-native"
import styles from "./styles";

type ButtonProps = {
    onPress?: () => void;
    text?: string | number;
    disabled?: boolean
    isLoading?: boolean
    buttonStyle?: object
    textStyle?: object
}

const Button = ({
    onPress = () => null,
    text,
    disabled,
    isLoading,
    buttonStyle ={},
    textStyle ={}
}: ButtonProps) => {
    return (
        <TouchableOpacity
            style={[styles.buttonStyle, buttonStyle]}
            onPress={onPress}
            disabled={disabled || isLoading}
            >
            <Text style={[styles.text, textStyle]}>{text}</Text>
        </TouchableOpacity>
    )
}


export default Button;