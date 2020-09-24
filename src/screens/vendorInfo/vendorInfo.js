import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import {vendorActions} from '../../actions';
import {styles} from './styles';
import InfoComponent from '../../commonComponents/infoComponent';

class VendorList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vendorData: {},
    };
  }
  componentDidMount() {}

  render() {
    const {data} = this.props.route.params;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.infoContainer}>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>{'Vendor Information'}</Text>
            </View>
            <View style={styles.informationContainer}>
              <InfoComponent headerText={'Company'} value={data.vendor_name} />
              <InfoComponent headerText={'Phone'} value={data.vendor_mobile} />
              <InfoComponent headerText={'Fax'} value={data.vendor_mobile} />
            </View>
            <View style={styles.informationContainer}>
              <InfoComponent
                headerText={'Address'}
                value={data.vendor_address}
              />
              <InfoComponent headerText={'Email'} value={data.vendor_email} />
              <InfoComponent headerText={''} value={''} />
            </View>
          </View>
          <View style={styles.contactContainer}>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>{'Contacts'}</Text>
            </View>
            <View style={styles.contactInfoContainer}>
              <InfoComponent headerText={''} value={data.contact_one} />
              <InfoComponent headerText={''} value={''} />
              <InfoComponent headerText={''} value={data.contact_one_number} />
            </View>
            <View style={styles.contactInfoContainer}>
              <InfoComponent headerText={''} value={data.contact_two} />
              <InfoComponent headerText={''} value={''} />
              <InfoComponent headerText={''} value={data.contact_two_number} />
            </View>
            <View style={styles.contactInfoContainer}>
              <InfoComponent headerText={''} value={data.contact_three} />
              <InfoComponent headerText={''} value={''} />
              <InfoComponent
                headerText={''}
                value={data.contact_three_number}
              />
            </View>
          </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate("vendorEvent")} style={styles.button}>
           <Text style={styles.buttonText}>Add Event</Text>
          </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  const {vendorList} = state.main;
  return {vendorList};
};

const mapDispatchToProps = {
  ...vendorActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(VendorList);
