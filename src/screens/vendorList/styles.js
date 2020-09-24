import {StyleSheet, Dimensions} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
  },
  pageStyle: {
    backgroundColor: '#FFFFFF',
    width: '95%',
    alignSelf: 'center',
    margin: 10,
  },
  headerContainer: {
    width: '100%',
    margin: 10,
  },
  headerText: {
    fontWeight: 'bold',
  },
  listContainer: {},
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E4E9',
  },
  nameContainer: {
    width: '60%',
  },
});
