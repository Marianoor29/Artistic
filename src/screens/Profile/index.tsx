import React from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
} from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { CustomText } from '../../components'
import { userData } from '../../utils/DummyData';
import AppColors from '../../utils/AppColors';

const Profile = ({ navigation }: any) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.container}>
          <FontAwesome name={'user-circle-o'} size={100} color={AppColors.blue} />
          <CustomText text={userData?.name} />
          <CustomText text={userData?.address} />
          <CustomText text={userData?.education} />
          <CustomText text={userData?.jobTitle} />
        </View>

      </SafeAreaView>
    </>
  );
};

export default Profile;
