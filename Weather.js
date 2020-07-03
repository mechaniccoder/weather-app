import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

const Weather = ({ temp }) => {
  return (
    <View style={styles.container}>
      <Text>{temp}</Text>
    </View>
  );
};

export default Weather;

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
