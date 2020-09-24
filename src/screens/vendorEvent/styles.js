import {StyleSheet, Dimensions} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
  },
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 30,
    justifyContent: 'center',
    backgroundColor: '#EBECF1',
  },
  dateContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  header: {
    width: '14.2%',
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#EBECF1',
    justifyContent: 'center',
  },
  date: {
    width: '14.2%',
    borderWidth: 1,
    borderColor: '#EBECF1',
    height: 60,
  },
  headerText: {
    textAlign: 'center',
  },
  dateStyle: {
    alignSelf: 'flex-end',
  },
  dateText: {},
  checkBoxContainer: {
    alignSelf: 'flex-start',
    height: '70%',
    justifyContent: 'flex-end',
  },
  tickContainer: {
    height: 10,
    width: 10,
    borderWidth: 1,
    borderColor: 'grey',
    margin: 5,
    borderRadius: 2,
  },
  tickContainerSelected: {
    height: 10,
    width: 10,
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor:"red",
    margin: 5,
    borderRadius: 2,
  },
  formContainer: {
    width: '100%',
    marginTop: 10,
  },
  inputStyle: {
    borderWidth: 1,
    width: '100%',
    height: 50,
  },buttonContainer:{
    width:"100%",
    height:50,
    marginTop:20
  },
  button:{
    width:"100%",
    height:"100%",
    backgroundColor:"grey",
    justifyContent:"center"
  },
  buttonText:{
    fontWeight:"bold",
    color:"white",
    textAlign:"center"
  }
});
