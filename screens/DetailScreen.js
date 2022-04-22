import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import ListItem from '../components/ListItem';

const myListData = [
  {idr: 1, title: 'I'},
  {idr: 2, title: 'list 2'},
  {idr: 3, title: 'I am list 3'},
  {idr: 4, title: 'I am list 4'},
  {idr: 5, title: 'I am list 5'},
];

function itemClick(item) {
}

function DetailScreen({navigation}) {
  return (
    <View style={styles.myListView}>
      <FlatList
        data={myListData}
        keyExtractor={item => {
          return item.idr;
        }}
        renderItem={({item}) => {
          return (
            <ListItem onClick={itemClick} id={item.idr} title={item.title}/>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  myScrollView: {
    flex: 1,
    backgroundColor: 'cyan',
    paddingTop: 100,
  },
  myListView: {
    flex: 1,
  },
 
});

export default DetailScreen;
