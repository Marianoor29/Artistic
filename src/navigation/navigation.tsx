import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { setIsLoggedIn } from '../redux/slice/user/userSlice';
import Login from '../screens/auth/login';
import MyTabs from './bottom';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const isLogin = useSelector(setIsLoggedIn)
  return (
    <NavigationContainer>
      {!isLogin ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="HomeBase"
          options={{ headerShown: false }}
          component={MyTabs}
        />
      </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        />
      </Stack.Navigator>
      )
    }
      
    </NavigationContainer>
  );
};

export default MainNavigation;
