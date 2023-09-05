import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import LoginScreen from '../Screens/LoginScreen';
import IntroScreen from '../Screens/IntroScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import ForgotPassword from '../Screens/ForgotPassword';
import HomeScreen from '../Screens/HomeScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomHeader from './CustomHeader'; 
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
interface props{
    navigation:any;
              }
interface state{}
export default class AuthNavigator extends Component<props,state>{
  constructor(props:props){
    super(props);
    this.state={}
  }
  render(){
    return(
          <Stack.Navigator screenOptions={{headerShown: false}}>
                                       
      
     <Stack.Screen name="abc" component={DrawerNav}/>
     

      <Stack.Screen name="Intro" options={{ title: 'Intro Screen' }}>
           {(props) => <IntroScreen {...props} />}
          </Stack.Screen>
         <Stack.Screen name="Login" options={{ title: 'Login Screen' }}>
          {(props) => <LoginScreen {...props} />}
         </Stack.Screen>
         <Stack.Screen name="SignUp" options={{ title: 'SignUp Screen' }}>
          {(props) => <SignUpScreen {...props} />}
          </Stack.Screen>
         <Stack.Screen name="Forgot" options={{ title: 'ForgotPassword' }}>
          {(props) => <ForgotPassword {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
     
    );
  }
    
  }

class DrawerNav extends Component{
render() {
  return (
    <Drawer.Navigator >
       <Drawer.Screen name="Home" component={BottomTab} />
      <Drawer.Screen name="Intro" options={{ title: 'Intro Screen' }}>
           {(props) => <IntroScreen {...props} />}
          </Drawer.Screen>
         <Drawer.Screen name="Login" options={{ title: 'Login Screen' }}>
          {(props) => <LoginScreen {...props} />}
         </Drawer.Screen>
         <Drawer.Screen name="SignUp" options={{ title: 'SignUp Screen' }}>
          {(props) => <SignUpScreen {...props} />}
          </Drawer.Screen>
         <Drawer.Screen name="Forgot" options={{ title: 'ForgotPassword' }}>
          {(props) => <ForgotPassword {...props} />}
          </Drawer.Screen>
    </Drawer.Navigator>
  );
}
}
class BottomTab extends Component{
  render(){
  return (
    
   
    <Tab.Navigator
    
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'black',
      }}
    >
      
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
          
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
    );
   }
  }