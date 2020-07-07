import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesome5 } from '@expo/vector-icons';

const Weather = ({ temp, condition }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <FontAwesome5 name="cloud-rain" size={100} color="black" />
        <Text style={styles.topText}>{temp}℃</Text>
      </View>

      <View style={styles.bottomContainer}>
        <Text>hello</Text>
      </View>
    </View>
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
    marginTop: 20,
    fontSize: 40,
  },
  bottomContainer: {
    flex: 1,
  },
});
