/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  Image,
  Button,
  StyleSheet,
  View,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

const Stack = createNativeStackNavigator();

const Tab = createMaterialTopTabNavigator();

export default function App() {
  const [useNumber, setUseNumber] = useState();

  function pickNumberHandler(pickedNumber) {
    setUseNumber(pickedNumber);
  }

  if (useNumber) {
    mySelectedScreen = <GameScreen />;
  }

  let mySelectedScreen = <StartGameScreen onPickNumber={pickNumberHandler} />;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={{flex: 1}}
        imageStyle={{opacity: 0.15}}>
        <SafeAreaView style={{flex: 1}}>{<GameScreen/>}</SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
