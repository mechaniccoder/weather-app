import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import Loader from './Loader';
import Weather from './Weather';

const API_KEY = 'a7ada5973794e2fbcdc34f0874424235';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [temperature, setTemperature] = useState(null);

  // 현 위치의 날씨를 가져오는 함수입니다.
  const getWeather = async (latitude, longitude) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    const { data } = await axios.get(url);
    setTemperature(data.main.temp);
  };

  useEffect(() => {
    const getLocation = async () => {
      try {
        setIsLoading(true);
        await Location.requestPermissionsAsync(); // 사용자 위치 접근권한 요청, promise를 반환합니다.
        // const {
        //   coords: { latitude, longitude },
        // } = await Location.getCurrentPositionAsync();
        const latitude = 37.503,
          longitude = 126.7102;
        getWeather(latitude, longitude);
        setIsLoading(false);
      } catch (error) {
        Alert.alert("can't find your location.");
      }
    };
    getLocation();
  }, []);
  return <>{isLoading ? <Loader /> : <Weather temp={Math.round(temperature)} />}</>;
};

export default App;
