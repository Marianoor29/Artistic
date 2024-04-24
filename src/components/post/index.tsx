import React from "react";
import { View,  Image, Text } from "react-native";
import styles from "./styles";
import CommonStyles from "../../utils/CommonStyles";

type headerProps ={
  source?: any,
  container?: any,
  iconView?: boolean,
  icon1?: any,
  icon2?: any,
  firstIcon?: any,
  userName?: string
  time?: string
  topRightIcon?: any,
  postPicture?: any
}
const Post = ({
 source,
 container,
 userName,
 time,
 topRightIcon,
 postPicture
}: headerProps) => {
  return (
    <View style={[styles.container, container]}>
      <View style={styles.userView}>
        <View style={styles.userDetailWrapper}>
      <Image source={source} style={styles.userImage} />
      <View style={styles.userInfoView}>
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      </View>
      <View>
        {topRightIcon}
      </View>
      </View>
    <Image source={postPicture} style={styles.postImage} />
    </View> 
  );
};

export default Post;
