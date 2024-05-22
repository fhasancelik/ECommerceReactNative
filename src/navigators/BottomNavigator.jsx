import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainStackNavigator from './MainStackNavigator';
import CartScreen from '../screens/CartScreen';
import Home from '../icons/Home';
import {colors} from '../constants/Colors';
import Basket from '../icons/Basket';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="MainStackNavigator"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          let tabIcon;
          if (route.name === 'Home') {
            tabIcon = focused ? (
              <Home fill={colors.DARK_BLUE} />
            ) : (
              <Home fill={'none'} stroke={colors.BLACK} strokeWidth={20} />
            );
          } else if (route.name === 'Cart') {
            tabIcon = focused ? (
              <Basket fill={colors.DARK_BLUE} />
            ) : (
              <Basket fill={'none'} stroke={colors.BLACK} strokeWidth={20} />
            );
          }
          return tabIcon;
        },
      })}>
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({});
