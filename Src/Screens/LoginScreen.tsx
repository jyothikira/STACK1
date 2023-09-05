import React,{Component} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
interface props{
  navigation:any;
}
interface state{}
export default class LoginScreen extends Component<props,state>{
  constructor(props:props){
    super(props);
    this.state={}
  }
 render(){
    return(
      <View style = {styles.root}>
        <Text style={styles.title}>LoginScreen</Text>
        <Button
         title="Forgot"
         onPress={() => this.props.navigation.navigate('Forgot')}
       />
       <View style={{height:50}}>
        <Button 
         title="SignUp"
         onPress={() => this.props.navigation.navigate('SignUp')}
       />
       </View>
       </View>
      
      
    )
  }
    
  }
const styles=StyleSheet.create({
  root:{
    flex:1,
    backgroundColor:'green',
    alignItems:'center',
    justifyContent:'center',
       
    },
  title:{
    color:'white',
    fontSize:24,
    marginBottom:30,
    padding:16
    
      },
    })