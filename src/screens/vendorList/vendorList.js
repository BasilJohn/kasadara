import React from 'react';
import {connect} from 'react-redux';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import {vendorActions} from '../../actions';
import {styles} from './styles';
import VendorItem from '../../commonComponents/vendorItem';

class VendorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vendorList: [],
    };
  }
  componentDidMount() {
    this.props.getVendorList();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.vendorList !== this.props.vendorList) {
      this.setState({vendorList: this.props.vendorList});
    }
  }

  renderItem = ({item}) => (
    <VendorItem data={item} />
  );

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.pageStyle}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{"Vendors("+this.state.vendorList.length+")"}</Text>
          </View>
          <View style={styles.listContainer}>
            <FlatList
              data={this.state.vendorList}
              renderItem={this.renderItem}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.objectId}
            />
          </View>
        </View>
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
