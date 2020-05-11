import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {Conditions} from '../components/Conditions';

const Weather = ({weather,temperature, description}) => {



  if (weather != null) {
    return (
      <View
        style={[
          styles.weatherContainer,
          { backgroundColor: Conditions[weather].color }
        ]}
      >
        <View style={styles.headerContainer}>
          <MaterialCommunityIcons
            size={72}
            name={Conditions[weather].icon}
            color={'#fff'}
          />
          <Text style={styles.tempText}>{temperature}˚c</Text>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>{weather}</Text>
          <Text style={styles.subtitle}>
            Description:{description}
          </Text>
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <Text style={{margin:90, fontSize: 20}}>Please enter a city</Text>
      </View>
    )
  };
};




const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    backgroundColor: '#f7b733'
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempText: {
    fontSize: 48,
    color: '#fff'
  },
  bodyContainer: {  
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  title: {
    fontSize: 48,
    color: '#fff'
  },
  subtitle: {
    fontSize: 24,
    color: '#fff'
  }
});

export default Weather;