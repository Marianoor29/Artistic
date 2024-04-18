import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Profile } from '../screens'
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import { View } from 'react-native';
import AppColors from '../utils/AppColors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarShowLabel: false,
      tabBarHideOnKeyboard: true,
      headerShown: false,
      tabBarStyle: styles.tabBarStyle,
      tabBarIcon: ({ focused }: any) => {
        if (route.name === "Home") {
          return (
            <View style={styles.tabItemsStyle}>
              <View
                style={[
                  styles.bottomTabIndicator,
                  {
                    backgroundColor: focused
                      ? AppColors.darkblue
                      : AppColors.transparent,
                  },
                ]}
              />
              <Icon name={'home-outline'} size={30} color={focused ? AppColors.darkblue : AppColors.white} />
            </View>
          );
        }
        if (route.name === "Profile") {
          return (
            <View style={styles.tabItemsStyle}>
              <View
                style={[
                  styles.bottomTabIndicator,
                  {
                    backgroundColor: focused
                      ? AppColors.darkblue
                      : AppColors.transparent,
                  },
                ]}
              />
              <AntDesign name={'profile'} size={30} color={focused ? AppColors.darkblue : AppColors.white} />
            </View>
          );
        }
      }
    })}
    >

      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="HomeBase"
          options={{ headerShown: false }}
          component={MyTabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
