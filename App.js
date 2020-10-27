import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FilmDetails from './Components/FilmDetails';
import Search from './Components/Search';

export default class App extends React.Component{
  render(){
    const Stack=createStackNavigator()

    return (
  
       <NavigationContainer>
           <Stack.Navigator>
            <Stack.Screen name="Search" component={Search}/>
            <Stack.Screen name="FilmDetails" component={FilmDetails}/>
        </Stack.Navigator>
       </NavigationContainer>
     );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search:{
    marginTop:40,
  }
});
