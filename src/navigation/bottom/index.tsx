import { View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Home, Profile } from '../../screens';
import AppColors from '../../utils/AppColors';
import styles from './styles';

const Tab = createBottomTabNavigator();

export default function MyTabs({navigation}: any) {
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
