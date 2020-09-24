
import {StyleSheet, Dimensions} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#F5F5F7"
  },
  headerContainer:{
      width:"95%",
      alignSelf:"center",
      marginTop:10,
      paddingBottom:20,
      borderBottomWidth:1,
      borderBottomColor:"#F1F1F1"
  },
  informationContainer:{
    width:"95%",
    alignSelf:"center",
    marginTop:10,
    paddingBottom:10,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  contactInfoContainer:{
    width:"95%",
    alignSelf:"center",
    marginTop:10,
    paddingBottom:10,
    flexDirection:"row",
    justifyContent:"space-between",
    borderBottomWidth:1,
    borderBottomColor:"#F1F1F1",

  },
  infoContainer:{
    width:"95%",
    alignSelf:"center",
    marginTop:10,
    borderBottomWidth:1,
    borderBottomColor:"#F1F1F1",
    backgroundColor:"#FFFFFF"
  },
  contactContainer:{
    width:"95%",
    alignSelf:"center",
    marginTop:10,
    backgroundColor:"#FFFFFF"
  },
  headerText:{
      fontWeight:"bold"
  },
  listContainer:{
      
    width:"98%",
    alignSelf:"center"
  },
  itemContainer:{
      flexDirection:"row",
      justifyContent:"space-between",
      marginTop:10,
      paddingBottom:10,
      borderBottomWidth:1,
      borderBottomColor:"#E5E4E9"
  },
  nameContainer:{
      width:"60%"
  },
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
  },
  buttonContainer:{
    width:"100%",
    height:50
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