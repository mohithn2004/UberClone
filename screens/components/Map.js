import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from "react-native-maps"
import { useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { selectOrigin } from '../../slices/navSlice';

const Map = () => {
  const origin = useSelector(selectOrigin)

  return (
      <MapView style={tw`flex-1`}
        initialRegion={{
          latitude: 82,
          longitude: -122,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      />
  );
}

export default Map;

const styles = StyleSheet.create({
});