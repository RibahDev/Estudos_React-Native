import React, { useEffect, useCallback, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location'

export default function App() {
  const [Location, setLocation] = useState(null)
  const [erroMsg, setErrorMsg] = useState(null)
  const mapRef = useRef(null)

  useEffect(() => {
    (
      async () => {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
          setErrorMsg("Permissão para acessar a localização foi negada")
          return

        }

        const subscription = await Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.High,
            timeInterval: 1000,
            distanceInterval: 1
          },
          (newLocation) => {
            const { latitude, longitude } = newLocation.coords
            setLocation({ latitude, longitude })

            if (mapRef.current) {
              mapRef.current.animateToRegion({
                latitude,
                longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
              })
            }
          }
        )
        return () => subscription.remove()
      }
    )()
  }, [])

  return (
    <View style={StyleSheet.container}>
      {errorMsg ? <Text>{errorMsg}</Text> : null }
      <MapView
        ref={mapRef}
        style={StyleSheet.map}
        initialRegion={{
          latitude: location ? location.latitude : -23.5505,
          longitude: location ? location.longitude : -46.6333,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        showsUserLocation={true}
        >
          {location && (
            <Marker coordinate={{latitude: location.latitude, longitude: location.longitude} } />
          )}
        </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    width: '100%',
    height: '100%'
  }
})
