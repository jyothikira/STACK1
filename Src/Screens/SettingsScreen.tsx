import React,{Component} from 'react';
import {View,Text,StyleSheet, Button} from 'react-native';
interface props{
  navigation:any
}
interface state{}
export default class SettingsScreen extends Component<props,state>{
  constructor(props:props){
    super(props);
    this.state={}
  }
  render(){
    return(
      <View style = {styles.root}>
        <Text style={styles.title}>Settings!</Text>
        <Button title="Go to Home" onPress={() =>this.props.navigation.navigate('Home')} />
      </View>
    )
  }
    
  }
const styles=StyleSheet.create({
  root:{
    flex:1,
    backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center'
  },
  title:{
    color:'white',
    marginBottom:20
  }
})