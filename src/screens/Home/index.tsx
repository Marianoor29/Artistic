import React from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
} from 'react-native';
import styles from './styles';
import { Button, CustomText } from '../../components';
import AppColors from '../../utils/AppColors';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';


const Home = ({ navigation }: any) => {
  const {value} = useSelector((state : RootState) => state.counter)
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={AppColors.white} />
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.container}>
          <Text>{value}</Text>
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
