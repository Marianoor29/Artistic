import React, { useState } from 'react';
import {
  View,
  Text,
} from 'react-native';
import styles from './styles';
import { logo, } from '../../../assets/images';
import AppColors from '../../../utils/AppColors';
import { Button, CartItemBox, Header, ScreenWrapper } from '../../../components';
import Feather from 'react-native-vector-icons/Feather'
import { width } from '../../../utils/Dimension';
import { cartList } from '../../../utils/DummyData';
import { useDispatch } from 'react-redux';
import {logoutUser } from '../../../redux/slice/user/userSlice';
import ScreenNames from '../../../navigation/routes';
import { setAppLoader } from '../../../redux/slice/config/configSlice';

const Cart = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const logOutMethod = () => {
    dispatch(setAppLoader(true))
    console.log('true')
    dispatch(logoutUser());
    console.log(logoutUser().payload, 'logoutUser()')
    dispatch(setAppLoader(false))
    console.log('false')
  };
  return (
    <ScreenWrapper
      scrollEnabled
      statusBarColor={AppColors.blue}
      barStyle='light-content'
      headerUnScrollable={() => (
        <Header
          source={logo}
          icon1={<Feather name='settings' color={AppColors.white} size={width(5)}/> }
          icon2={<Feather name='log-out' color={AppColors.white} size={width(5)}/> }
          onPressFirstIcon2={logOutMethod}
        />
      )}
      footerUnScrollable={() => (
        <View style={styles.bottomContainer}>
        <View style={styles.totalAmountView}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalPriceText}>$470</Text>
        </View>
        <Button text={'Check Out'} />
        </View>
      )}
      >
          <View style={styles.container}>
            <Text style={styles.topTitleText}>Shopping Cart</Text>
            {cartList.map((item, key) => {
              return(
                <CartItemBox 
                key={key}
                source={item.source}
                itemName={item.itemName}
                price={item.price}
                counter={item.counter}
                />
              )
            })}
           
         
          </View>
        </ScreenWrapper>
  );
};

export default Cart;
