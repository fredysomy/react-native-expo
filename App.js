import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <Text style={styles.text}>By Fredy Somy</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3a415e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
      color:"cyan",
      fontSize:"30"
  }
});
