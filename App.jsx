import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import BottomNavigator from './src/navigators/BottomNavigator';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <SafeAreaView style={{
      flex:1
    }}>
      <NavigationContainer>
        <BottomNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
const styles = StyleSheet.create({});
