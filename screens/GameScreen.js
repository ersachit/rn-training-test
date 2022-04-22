import { Text, View } from 'react-native';
import React from 'react';
import Title from '../components/Title';
import NumberContainer from '../components/NumberContainer';

function GameScreen() {
  return (
    <View style={{flex:1, padding:25}}>
      <Title style={{fontSize: 45}}>Other Party Guess</Title>
      <Title style={{fontSize: 25}}>Other Party Guess</Title>
      <NumberContainer>{'Hello'}</NumberContainer>
      <View>
        <Text>Is this Higer or Lower?</Text>
        {/* + - */}
      </View>
    </View>
  )
}

export default GameScreen;