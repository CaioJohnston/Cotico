import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function Pets() {
    return (
      <View style={styles.container}>
        <Text>Pets aqui</Text>
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
  });