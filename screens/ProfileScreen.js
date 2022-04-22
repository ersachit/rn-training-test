import React from "react";
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from "react-native";


function ProfileScreen({navigation, route}) {
    
    
    return (
        <ScrollView style={styles.myScrollView} contentContainerStyle={{alignItems: 'center'}}>
            <TouchableOpacity activeOpacity={.5} style={{alignItems: 'center', borderColor: 'red', borderWidth:1, width: 200, height: 80}}>
                <Text style={{marginTop: 30}}>I am at Profile</Text>
                
            </TouchableOpacity>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    myScrollView: {
        flex: 1,
        backgroundColor: 'yellow',
        paddingTop: 100
    }
})

export default ProfileScreen;