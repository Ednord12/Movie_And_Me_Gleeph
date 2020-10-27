import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Root from './/Navigation/Root'

export default function App() {
  return (
   /* <View style={styles.search}>
      <Search />
      
    </View>*/
    <NavigationContainer>
      <Root/>
    </NavigationContainer>
  );
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
