import React,{Component} from 'react';
import {View,Text,StyleSheet, Button} from 'react-native';
interface props{
  navigation:any
}
interface state{}
export default class HomeScreen extends Component<props,state>{
  constructor(props:props){
    super(props);
    this.state={}
  }
  render(){
    return(
      <View style = {styles.root}>
        <Text style={styles.title}>Home!</Text>
        <Button
        title="Go to settings"
        onPress={() =>this.props.navigation.navigate('settings')}
      />
      <View style={styles.root}>
        <Button title="Go to profile"
        onPress={() =>this.props.navigation.navigate('profile')} />
      </View>
      
      </View>
    )
  }
    
  }
const styles=StyleSheet.create({
  root:{
    flex:1,
    backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center'
  },
  title:{
    color:'white',
    marginBottom:20
  },
  button:{
    padding:16,
    marginTop:20
  }
})