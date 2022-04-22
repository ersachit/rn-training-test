import {Text, StyleSheet}  from 'react-native'
import React from 'react';
import Colors from '../constants/colors';


function Title({children, style}) {
    return <Text style={[styles.title, style]}>{children}</Text>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        padding: 15,
        color: Colors.black,
        textAlign: 'center',
        borderColor: Colors.black,
        borderWidth: 1,
    }
})

export default Title;