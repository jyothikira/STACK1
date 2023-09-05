import React,{Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons  from 'react-native-vector-icons/Ionicons'; 
// You may need to install this package
interface props{
  navigation:any;
    }
interface state{}
export default class CustomHeader extends Component<props,state>{
  constructor(props:props){
    super(props);
    this.state={}
  }
  render(){
    return(
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TouchableOpacity
        onPress={() => this.props.navigation.toggleDrawer()} // Opens the drawer
        style={{ paddingHorizontal: 10 }}
      >
        <Ionicons name="menu" size={30} color="black" /> 
      </TouchableOpacity>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hi</Text>
    </View>
   );
 };
}
 