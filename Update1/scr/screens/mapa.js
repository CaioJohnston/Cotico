import React from "react";
import MapView from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';

export default function Mapa(){
    return(
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
          latitude: -1.2407184643549924,
          longitude: -48.54522257872825,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
          }}
        >
        </MapView>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});