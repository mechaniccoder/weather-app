import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import * as Location from 'expo-location';
import Loader from './Loader';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getLocation = async () => {
      try {
        setIsLoading(true);
        // 사용자 권한 요청, promise를 반환한다.
        await Location.requestPermissionsAsync();
        const {
          coords: { latitude, longitude },
        } = await Location.getCurrentPositionAsync();
        setIsLoading(false);
      } catch (error) {
        Alert.alert("can't find your location.");
      }
    };
    getLocation();
  }, []);
  return <>{isLoading ? <Loader /> : null}</>;
}
