import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import { colors } from '../constants/Colors';
import { fontSizes, fontWeights } from '../constants/Fonts';

const CustomButton = ({buttonTitle,onPress}) => {
  return (
    <TouchableOpacity style={styles.buttonBody} onPress={onPress}>
      <Text style={styles.buttonTitle}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
    buttonBody:{
        backgroundColor:colors.DARK_BLUE,
        width:"100%",
        paddingVertical:15,
        alignItems:'center'
    },
    buttonTitle:{
        color:colors.WHITE,
        fontSize:fontSizes.fontM,
        fontWeight:fontWeights.fontBold
    }
});
