import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import MyTabs from './bottom';
import ScreenNames from './routes';
import { Login, SignUp } from '../screens/auth';
import { RootState } from '../redux/store';
import { UserState } from '../redux/slice/user/userSlice';
import { Loader } from '../components';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const userData: UserState = useSelector((state: RootState) => state.user);
  console.log(userData)
  return (
    <NavigationContainer>
      <Loader />
      {userData ? (
        <Stack.Navigator
          initialRouteName={ScreenNames.LOGIN}
          screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name={ScreenNames.LOGIN}
            options={{ headerShown: false }}
            component={Login}
          />
          <Stack.Screen
            name={ScreenNames.SIGNUP}
            options={{ headerShown: false }}
            component={SignUp}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="HomeBase"
            options={{ headerShown: false }}
            component={MyTabs}
          />
        </Stack.Navigator>
      )}

    </NavigationContainer>
  );
};

export default MainNavigation;
