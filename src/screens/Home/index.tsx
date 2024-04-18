import React from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
} from 'react-native';
import styles from './styles';
import { Button, CustomText } from '../../components';
import AppColors from '../../utils/AppColors';


const Home = ({ navigation }: any) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={AppColors.white} />
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.container}>
          <CustomText text={'Welcome Home'}/>
          <Button
            onPress={() => navigation.navigate('Profile')}
            text={'Go To Profile'}
          />
        </View>
      </SafeAreaView>
    </>
  );
};


export default Home;
