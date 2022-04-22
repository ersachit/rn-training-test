import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

function ListItem(props) {
  return (
    <TouchableOpacity style={styles.listRow} onPress={props.onClick}>
      <Text style={styles.listItem}>{props.id}</Text> 
      <Text style={styles.listItem}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  listRow: {
    borderColor: 'red',
    borderWidth: 1,
    padding: 30,
  },
  listItem: {
    fontSize: 14,
    alignItems: 'center',
  },
});
