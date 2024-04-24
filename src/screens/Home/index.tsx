import React from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
} from 'react-native';
import styles from './styles';
import { Button, CustomText, Header, Post, ScreenWrapper } from '../../components';
import AppColors from '../../utils/AppColors';
import ScreenNames from '../../navigation/routes';
import { logo, postPicture, user } from '../../assets/images';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { width } from '../../utils/Dimension';


const Home = ({ navigation }: any) => {
  return (
    <ScreenWrapper
    scrollEnabled
    statusBarColor={AppColors.blue}
    barStyle='light-content'
    headerUnScrollable={() => (
      <Header
        source={logo}
        icon1={<AntDesign name='search1' size={width(6)} color={AppColors.white}/>}
        icon2={<AntDesign name='bells' size={width(6)} color={AppColors.white}/>}
        firstIcon={<MaterialIcons name='post-add' size={width(6)} color={AppColors.white}/>}
        />
        )}>
        <View style={styles.container}>
        <Post 
        source={user}
        postPicture={postPicture}
        userName='Maria Noor'
        time= '3 min'
        topRightIcon={<MaterialCommunityIcons name='settings-helper' size={width(6)} color={AppColors.black}/>}
        />
        </View>
    </ScreenWrapper>
  );
};


export default Home;
