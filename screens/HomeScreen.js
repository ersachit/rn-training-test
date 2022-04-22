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
  {id: 1, title: 'I am list 1'},
  {id: 2, title: 'I am list 2'},
  {id: 3, title: 'I am list 3'},
  {id: 4, title: 'I am list 4'},
  {id: 5, title: 'I am list 5'},
  {id: 6, title: 'I am list 1'},
  {id: 7, title: 'I am list 2'},
];

function itemClick(item) {
  console.log(`Clicked on ${item.id}`)
}

function HomeScreen({navigation}) {
  return (
    <View style={styles.myListView}>
      <FlatList
        data={myListData}
        keyExtractor={item => {
          return item.id;
        }}
        renderItem={({item}) => {
          return (
            <ListItem onClick={()=> itemClick(item)} id={item.id} title={item.title}/>
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

export default HomeScreen;
