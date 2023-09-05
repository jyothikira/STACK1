import 'react-native-gesture-handler';
import React,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './Src/Navigation/AuthNavigation';
interface props{}
interface state{}
export default class App extends Component<props,state>{
  constructor(props:props){
    super(props);
    this.state={}
  }
  render(){
    return(
      <NavigationContainer>
         <AuthNavigator />
      </NavigationContainer>

    
    );
  }
}
 