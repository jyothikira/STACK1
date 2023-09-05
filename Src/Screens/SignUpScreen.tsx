import React,{Component} from 'react';
import {View,Text,StyleSheet, Button} from 'react-native';
interface props{
  navigation:any
}
interface state{}
export default class SignUpScreen extends Component<props,state>{
  constructor(props:props){
    super(props);
    this.state={}
  }
  render(){
    console.log();
    return(
      <View style = {styles.root}>
        <Text style={styles.title}>SignUpScreen</Text>
        <Button 
         title="Login"
         onPress={() => this.props.navigation.navigate('Login')}
        />
        
      </View>
    )
  }
    
  }
const styles=StyleSheet.create({
  root:{
    flex:1,
    backgroundColor:'black',
    alignItems:'center',
    justifyContent:'center'
  },
  title:{
    color:'white',
    marginBottom:20
  }
})