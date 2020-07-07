import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Thunderstorm: {
    iconName: 'weather-lightning',
    gradient: ['#0F2027', '#203A43', '#2C5364'],
    title: 'Thunder!',
    subTitle: 'Actually, i like AC/DC song',
  },
  Drizzle: {
    iconName: 'weather-fog',
    gradient: ['#2193b0', '#6dd5ed'],
    title: 'Drizzle',
    subTitle: 'Is like rain, but gay',
  },
  Rain: {
    iconName: 'weather-pouring',
    gradient: ['#141E30', '#243B55'],
    title: 'Raining like MF',
    subTitle: 'For more info look outside',
  },
  Snow: {
    iconName: 'weather-snowy',
    gradient: ['#d3cce3', '#e9e4f0'],
    title: 'So cold today',
    subTitle: 'Do you wanna build a snowman?',
  },
  Atmosphere: {
    iconName: 'weather-hail',
    gradient: ['#ef3b36', '#ffffff'],
    title: 'Atmosphere',
    subTitle: 'what is atmosphere?',
  },
  Clear: {
    iconName: 'weather-sunny',
    gradient: ['#fc4a1a', '#f7b733'],
    title: 'Sunny Sunny day~',
    subTitle: 'is it a song?',
  },
  Clouds: {
    iconName: 'weather-cloudy',
    gradient: ['#bdc3c7', '#2c3e50'],
    title: 'Clouds',
    subTitle: 'I know, boring',
  },
};

const Weather = ({ temp, condition }) => {
  return (
    // <View style={styles.container}>
    <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.topContainer}>
        <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={150} color="white" />
        <Text style={styles.topText}>{temp}℃</Text>
      </View>

      <View style={{ ...styles.bottomContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subTitle}>{weatherOptions[condition].subTitle}</Text>
      </View>
    </LinearGradient>
    // </View>
  );
};

export default Weather;

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf(['Thunderstorm', 'Drizzle', 'Rain', 'Snow', 'Atmosphere', 'Clear', 'Clouds']).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText: {
    marginTop: 10,
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  textContainer: {
    paddingHorizontal: 50,
  },
  title: {
    color: 'white',
    fontSize: 54,
    fontWeight: '300',
    marginBottom: 10,
  },
  subTitle: {
    color: 'white',
    fontSize: 25,
  },
});
