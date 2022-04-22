import {View, StyleSheet, Text} from 'react-native';
import React from 'react';

import Colors from "../constants/colors";


function NumberContainer({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const styles = StyleSheet.create({
    container : {
        borderWidth: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10,
        borderColor: Colors.accecnt1,
        padding: 25,
        margin: 25
    },
    numberText: {
        color: Colors.accecnt1,
        fontSize: 36,
        fontWeight: 'bold'
    }
})