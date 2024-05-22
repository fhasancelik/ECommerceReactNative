import {Image, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../constants/Colors';
import {fontSizes, fontWeights} from '../constants/Fonts';
import CustomButton from './CustomButton';

const ProductCard = () => {
  const {title, price, image} = {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  };
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.price}>{price}₺</Text>
        <Text>{title}</Text>
      </View>
      <CustomButton onPress={()=>console.log("basıldı")} buttonTitle='Sepete Ekle' />
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    width: 150,
    gap: 15,
    borderWidth:1/5,
    padding:10

  },
  info: {
    gap: 15,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  price: {
    color: colors.LIGHT_BLUE,
    fontSize: fontSizes.fontM,
    fontWeight: fontWeights.fontBold,
  },
});
