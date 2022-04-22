/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Image, Button, StyleSheet, View, ImageBackground} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import StartGameScreen from './screens/StartGameScreen';

const Stack = createNativeStackNavigator();

const Tab = createMaterialTopTabNavigator();

export default function App() {
  function TitleLogo() {
    return (
      <Image
        style={{width: 40, height: 40}}
        source={{uri: 'https://picsum.photos/200'}}></Image>
    );
  }

  function MyBottomTabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {backgroundColor: 'black'},
          tabBarLabelStyle: {fontSize: 15, color: '#e91e63'},
          tabBarStyle: {backgroundColor: 'yellow'},
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{tabBarLabel: 'Home Screen'}}
        />
        <Tab.Screen
          name="Details"
          component={DetailScreen}
          options={{tabBarLabel: 'Detail Screen'}}
        />
      </Tab.Navigator>
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={{flex: 1}}
        imageStyle={{opacity: 0.15}}>
        <StartGameScreen />
      </ImageBackground>
    </View>
    // <NavigationContainer>
    //   {/* <MyBottomTabs/> */}
    //   <Stack.Navigator
    //     screenOptions={{
    //       headerStyle: {
    //         backgroundColor: '#F4322E',
    //       },
    //       headerTitleStyle: {
    //         color: 'white',
    //         fontWeight: 'bold',
    //       },
    //       headerTintColor: '#fff',
    //     }}>
    //     <Stack.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={{
    //         headerTitle: props => <TitleLogo {...props} />,
    //         headerRight: () => <Button title={'Right'} color="#fff" onPress={() => alert('I am right button')} />,
    //         headerLeft: () => <Button title={'Right'} color="#000" onPress={() => alert('I am right button')} />,
    //       }}
    //     />
    //     <Stack.Screen
    //       name="Detail"
    //       component={DetailScreen}
    //       options={{
    //         title: 'My Detail',
    //       }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
