import React from "react";
import { View, Text, TextProps, Image } from 'react-native';
import styles from "./styles";

type textProps = {
    artistName?: String,
    source?: any
}

const PopularArtist = ({
    source,
    artistName,
}: textProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={source} style={styles.userImage}/>
            </View>
            <View style={styles.ShadowView}></View>
            <Text style={styles.artistName}>{artistName}</Text>
        </View>
    )
}

export default PopularArtist;