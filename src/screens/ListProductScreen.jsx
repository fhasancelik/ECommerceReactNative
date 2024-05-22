import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const ListProductScreen = () => {
  return (
    <View>
      <Header title="E-Market" />
      <View
        style={{
          paddingHorizontal: 5,
          paddingVertical: 3,
        }}>
        <ProductCard />
      </View>
    </View>
  );
};

export default ListProductScreen;

const styles = StyleSheet.create({});
