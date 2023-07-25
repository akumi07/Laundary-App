import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import { Directions } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import store from "../store";
import Stacknavigator from "../Stacknavigator";


export default function Page() {
  return (
       <Provider store={store}>
       <Stacknavigator/>
       <StatusBar style="auto"/>
       </Provider>
      
      
   
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    //alignItems:'center',
    // justifyContent:'center'
  }
 
});
