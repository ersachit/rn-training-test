import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

function PrimaryButton({children, onPress}) {
  

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        android_ripple={{color: '#640233'}}
        onPress={onPress}
        style={({pressed}) =>
          pressed
            ? [styles.buttonInnerContainer, styles.buttonPressedContainer]
            : styles.buttonOuterContainer
        }>
        <Text style={styles.buttonTextStyle}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 30,
    margin: 5,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    elevation: 2,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#72063d',
  },
  buttonPressedContainer: {
    opacity: 0.75,
  },
  buttonTextStyle: {
      color: 'white',
      textAlign: 'center',
  }
});
