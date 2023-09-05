import React,{Component} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
interface props{
  navigation:any
}
interface state{}
export default class ForgotPassword extends Component<props,state>{
  constructor(props:props){
    super(props);
    this.state={}
  }
  render(){
    console.log();
    return(
      <View style = {styles.root}>
        <Text style={styles.title}>ForgotPassword</Text>
        <Button 
         title="SignUp"
         onPress={() => this.props.navigation.navigate('SignUp')}
        />
        
      </View>
    )
  }
    
  }
const styles=StyleSheet.create({
  root:{
    flex:1,
    backgroundColor:'yellow',
    alignItems:'center',
    justifyContent:'center'
  },
  title:{
    color:'green'
  }
})