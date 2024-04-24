import React from "react";
import { View,  Image } from "react-native";
import styles from "./styles";

type headerProps ={
  source?: any,
  container?: any,
  iconView?: boolean,
  icon1?: any,
  icon2?: any,
  firstIcon?: any,
}
const Header = ({
 source,
 container,
 icon1,
 icon2,
 firstIcon,
 iconView = true
}: headerProps) => {
  return (
    <View style={[styles.container, container]}>
      <View style={styles.emptyView}>
        {firstIcon}
      </View>
    <Image source={source} style={styles.logo} />
    {iconView && (
      <View style={styles.iconView}>
      {icon1}
      {icon2}
      </View>
    ) }
   
    </View>
  );
};

export default Header;
