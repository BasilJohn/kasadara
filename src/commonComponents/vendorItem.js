import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from '../screens/vendorList/styles';
import {useNavigation} from '@react-navigation/native';
const vendorItem = ({data}) => {
    const navigation = useNavigation();
    return(<TouchableOpacity onPress={()=>navigation.navigate("vendorInfo",vendorData={data})}>
    <View style={styles.itemContainer}>
      <View style={styles.nameContainer}>
        <Text>{data.vendor_name}</Text>
        <Text>{data.vendor_address}</Text>
      </View>

      <Text>{data.vendor_mobile}</Text>
    </View>
  </TouchableOpacity>)
};

export default vendorItem;
