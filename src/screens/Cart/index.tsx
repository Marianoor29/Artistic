import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import styles from './styles';
import { logo, } from '../../assets/images';
import AppColors from '../../utils/AppColors';
import { Button, CartItemBox, Header, ScreenWrapper } from '../../components';
import Feather from 'react-native-vector-icons/Feather'
import { width } from '../../utils/Dimension';
import { cartList } from '../../utils/DummyData';

const Cart = ({ navigation }: any) => {
  return (
    <ScreenWrapper
      scrollEnabled
      statusBarColor={AppColors.blue}
      barStyle='light-content'
      headerUnScrollable={() => (
        <Header
          source={logo}
          icon2={<Feather name='settings' color={AppColors.white} size={width(5)}/> }
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
