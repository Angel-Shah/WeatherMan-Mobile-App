
import React from 'react';
import { StyleSheet, Text, View, Animated, Button, TextInput } from 'react-native';

import { API_KEY } from './.expo/utils/WeatherAPIKey';

import Weather from './components/Weather';
import {Conditions} from './components/Conditions';

export default class App extends React.Component {
  state = {
    isLoading: false,
    temperature: 0,
    weatherCondition: null,
    description: null,
    error: null,
    city: "Toronto"
  };




  fetchWeather(cityName) {
    this.setState({ city: cityName });


  }

  // weatherSetter() {

  //   fetch(
  //     `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&APPID=${API_KEY}&units=metric`
  //     // `http://api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}`
  //   )
  //     .then(res => res.json())
  //     .then(json => {
  //       this.setState({
  //         temperature: json.main.temp,
  //         weatherCondition: json.weather[0].main,
  //         description: json.weather[0].description,
  //         isLoading: false
  //       });
  //     });
  // }



  render() {
    const { temperature, weatherCondition, description, isLoading } = this.state;
    return (
      <View style={styles.container} >
        <TextInput style={{ height: 50, marginTop:20}} placeholder=" Enter a city" onChangeText={(cityName) => this.fetchWeather(cityName)} />
        
        <Button title="search" color="orange" onPress={() => fetch(
                `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&APPID=${API_KEY}&units=metric`
                
              )
                .then(res => res.json())
                .then(json => {
                  this.setState({
                    temperature: json.main.temp,
                    weatherCondition: json.weather[0].main,
                    description: json.weather[0].description,
                    isLoading: false
                  });
          })} />

<Text style={{color:'gray'}}>Showing weather for: <Text style ={{color: 'black',fontWeight:'bold', fontSize: 19}}>{this.state.city}</Text></Text>
        <Weather weather={weatherCondition} temperature={temperature} description={description} />





      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});