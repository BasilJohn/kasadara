import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const infoComponent = (props) => (
  <View style={styles.widthSet}>
    <Text style={styles.infoHeader}>{props.headerText}</Text>
    <Text style={styles.infoValue}>{props.value}</Text>
  </View>
);

const styles = StyleSheet.create({
    infoHeader:{
        color:"#ADACB0",
        fontWeight:"600"
      },
      infoValue:{
        color:"#4B4A50",
        fontWeight:"600"
      },
      widthSet:{
        flex:1
      }
});

export default infoComponent;
