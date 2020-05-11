import React, {useState} from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function CityInput(){
    const [enteredCity, setCity] = useState('');

    function cityInputHandler(enteredtxt) {
        setCity(enteredtxt);
      };
    return(
        <View style={styles.screen}>
            <TextInput placeholder="Enter city here" style={styles.input} onChangeText={(enteredCity)=> setCity(enteredCity)} />
            <Button title="Search" color="green" onPress={()=>props.onAddGoal(enteredGoal)} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    input: {
        width: '70%',
        padding: 5,
        borderColor: 'green',
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1

    }

});

export default CityInput;