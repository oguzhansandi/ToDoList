import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet, FlatList, Alert } from 'react-native';
import SearchBar from './components/SearchBar';
import ToDoList from './components/ToDoList';

function App(){
 
  const [completedItems, setCompletedItems] = useState([]);
  const [toDoList, setToDoList] = useState([]);
  const [activeToDoCount, setActiveToDoCount] = useState(0);
  
  const handleSavePress = (todo) => {
    const newTodo = { id: toDoList.length + 1, text: todo };
    setToDoList([...toDoList, newTodo]);
  };

  const handleToggleItem = (item) => {
    setCompletedItems((prevCompletedItems) => {
      if (prevCompletedItems.includes(item)) {
        return prevCompletedItems.filter((completedItem) => completedItem !== item);
      } else {
        return [...prevCompletedItems, item];
      }
    });
  };

  const handleLongPress = (item) => {
    Alert.alert(
      'Silme Onayı',
      'Bu öğeyi silmek istediğinize emin misiniz?',
      [
        {
          text: 'Vazgeç',
          style: 'cancel',
        },
        {
          text: 'Sil',
          onPress: () => {
            setToDoList((prevToDoList) => prevToDoList.filter((todo) => todo !== item));
          },
        },
      ],
      { cancelable: true }
    );
  };

  useEffect(() => {
    const activeCount = toDoList.filter(todo => !completedItems.includes(todo)).length;
    setActiveToDoCount(activeCount);
  }, [toDoList, completedItems, setActiveToDoCount]);  
  
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Yapılacaklar</Text>
        <Text style={styles.number}> {activeToDoCount} </Text>
      </View>
      <ToDoList 
        toDoList={toDoList} 
        completedItems={completedItems}
        onToggleItem={handleToggleItem}
        onLongPress={handleLongPress} 
      />
      <SearchBar onSavePress ={handleSavePress} /> 
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : '#111111'
  },
  headerContainer:{
    flexDirection : 'row',
    padding : 10,
    margin : 10,
    justifyContent : 'space-between',
  },
  header :{
    fontSize : 35,
    color : 'orange',
    fontWeight : 'bold',
  },
  number : {
    fontSize : 30,
    color : 'orange',
    fontWeight : 'bold',
  },
});