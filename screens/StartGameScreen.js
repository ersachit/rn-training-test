import {View, TextInput, StyleSheet, Alert} from 'react-native';
import React, {useState} from 'react';
import PrimaryButton from '../components/PrimaryButton';
import Colors from '../constants/colors';

function StartGameScreen({onPickNumber}) {
  const [inputNumber, setInputNumber] = useState('');

  function resetInputButton() {
    setInputNumber('');
  }

  function confirmInputButton() {
    const myChosenNumber = parseInt(inputNumber);

    if(isNaN(myChosenNumber) || myChosenNumber <=0 || myChosenNumber >=99) {
        Alert.alert('Input number is not valid',
        'Input number should be between 1 and 99',
        [{text: 'Okay', style: 'destructive', onPress: resetInputButton}]
        );
        return;
    }
    console.log(`Input number is ${myChosenNumber}`);
    onPickNumber(myChosenNumber);
    
  }

  function rangeInputHandler(inputNumber) {
    console.log(`Input value is ${inputNumber}`);
    setInputNumber(inputNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={inputNumber}
        onChangeText={rangeInputHandler}
      />
      <PrimaryButton onPress={resetInputButton}>RESET</PrimaryButton>
      <PrimaryButton onPress={confirmInputButton}>CONFIRM</PrimaryButton>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 150,
    padding: 16,
    marginHorizontal: 25,
    borderRadius: 10,
    backgroundColor: Colors.backgroundColor,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    alignSelf: 'center',
    height: 50,
    width: 250,
    fontSize: 30,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 1,
    marginVertical: 10,
    color: '#ddb52f',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
