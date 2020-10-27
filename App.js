import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './Components/Search'

export default function App() {
  return (
    <View style={styles.search}>
      <Search />
      <View  style={styles.container}>

      </View>
    </View>
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
