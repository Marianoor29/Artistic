import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { setIsLoggedIn } from '../redux/slice/user/userSlice';
import Login from '../screens/auth/login';
import MyTabs from './bottom';
import ScreenNames from './routes';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
        //  initialRouteName={ScreenNames.LOGIN} 
         screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="HomeBase"
          options={{ headerShown: false }}
          component={MyTabs}
        />
         <Stack.Screen
          name={ScreenNames.LOGIN}
          options={{ headerShown: false }}
          component={Login}
        />
      </Stack.Navigator> 
    </NavigationContainer>
  );
};

export default MainNavigation;
