import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListProductScreen from '../screens/ListProductScreen';
import DetailProductScreen from '../screens/DetailProductScreen';

const MainStackNavigator = () => {
  const MainStack = createNativeStackNavigator();
  return (
    <MainStack.Navigator screenOptions={{
        headerShown:false
    }}>
      <MainStack.Screen name="ListProduct" component={ListProductScreen} />
      <MainStack.Screen name="DetailProduct" component={DetailProductScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;

const styles = StyleSheet.create({});
