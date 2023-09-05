import React,{Component} from 'react';
import {View,Text,StyleSheet, Button} from 'react-native';
interface props{
  navigation:any
}
interface state{}
export default class ProfileScreen extends Component<props,state>{
  constructor(props:props){
    super(props);
    this.state={}
  }
  render(){
    return(
      <View style = {styles.root}>
        <Text style={styles.title}>Profile</Text>
        <Button
               title="Go to Settings"
                onPress={() =>this.props.navigation.navigate('Settings')}
      />
       <View>
         <Button
               title="Go to Home"
                onPress={() =>this.props.navigation.navigate('Home')}
         />
       </View>
       </View>
    );
  }
    
  }
const styles=StyleSheet.create({
  root:{
    flex:1,
     backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center',
             
  },
  title:{
    textAlign:'center',
    color:'white'
      
  },
  
})