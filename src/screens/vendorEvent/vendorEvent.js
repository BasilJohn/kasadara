import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';
import {styles} from './styles';
import {saveVendor, resetInitialState} from '../../actions/vendorActions';
import Database from '../../localStorage/Database';

const daysOfWeek = [
  {id: 1, name: 'Monday'},
  {id: 2, name: 'Tuesday'},
  {id: 3, name: 'Wednesday'},
  {id: 4, name: 'Thursday'},
  {id: 5, name: 'Friday'},
  {id: 6, name: 'Saturday'},
  {id: 7, name: 'Sunday'},
];

const days = [
  {id: 1, name: '1'},
  {id: 2, name: '2'},
  {id: 3, name: '3'},
  {id: 4, name: '4'},
  {id: 5, name: '5'},
  {id: 6, name: '6'},
  {id: 7, name: '7'},
  {id: 8, name: '8'},
  {id: 9, name: '9'},
  {id: 10, name: '10'},
  {id: 11, name: '11'},
  {id: 12, name: '12'},
  {id: 13, name: '13'},
  {id: 14, name: '14'},
  {id: 15, name: '15'},
];

const db = new Database();

const vendorEvent = () => {
  const [selectedArray, setSelectedDate] = useState([]);
  const [isChanged, setIsChange] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const dispatch = useDispatch();
  const {isDataSaved} = useSelector(state => state.main);
  const navigation = useNavigation();

  const setDate = date => {
    let array = [];
    if (selectedArray.includes(date)) {
      array = selectedArray.filter(item => item !== date);
      setSelectedDate(array);
      setIsChange(!isChanged);
    } else {
      selectedArray.push(date);
      setSelectedDate(selectedArray);
      setIsChange(!isChanged);
    }
  };
  useEffect(() => {
    if (isDataSaved) {
      navigation.dispatch(StackActions.replace('vendorList'));
      dispatch(resetInitialState());
    } else if (isDataSaved == false) {
      dispatch(resetInitialState());
      alert('Please try agiain');
    }
  }, [isChanged, isDataSaved]);

  const addVendor = () => {
    const payload = {
      vendor_name: name,
      vendor_address: address,
    };
    db.addVendor(data)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
    dispatch(saveVendor(payload));
  };

  const renderItem = ({item}) => {
    const isSelected = selectedArray.includes(item.name);
    return (
      <View key={item.id} style={styles.date}>
        <TouchableOpacity onPress={() => setDate(item.name)}>
          <View style={styles.dateStyle}>
            <Text style={styles.dateText}>{item.name}</Text>
          </View>
          <View style={styles.checkBoxContainer}>
            <View
              style={
                isSelected ? styles.tickContainerSelected : styles.tickContainer
              }></View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          {daysOfWeek.map((value, index) => {
            return (
              <View key={value.id} style={styles.header}>
                <Text style={styles.headerText}>{value.name}</Text>
              </View>
            );
          })}
        </View>
        <View style={styles.dateContainer}>
          <FlatList
            data={days}
            renderItem={renderItem}
            numColumns={7}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.formContainer}>
          <Text>Type Name</Text>
          <TextInput
            onChangeText={text => setName(text)}
            style={styles.inputStyle}
          />
          <Text>Type Address</Text>
          <TextInput
            onChangeText={text => setAddress(text)}
            style={styles.inputStyle}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => addVendor()} style={styles.button}>
            <Text style={styles.buttonText}>Add Vendor</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default vendorEvent;
