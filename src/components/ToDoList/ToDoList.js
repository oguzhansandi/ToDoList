import React, { useState } from "react";
import { FlatList, Text, Touchable, TouchableOpacity, View } from "react-native";
import styles from './ToDoList.styles'


const ToDoList = (props) => {
    const isItemCompleted = (item) => props.completedItems && props.completedItems.includes(item);

    const handleLongPress = (item) => {
        props.onLongPress && props.onLongPress(item);
        console.log('uzun basıldı.')
      };

      
    return (
        <View>
            <FlatList 
                data={props.toDoList}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                  <View key={item.id} style={[
                    styles.toDoContainer,
                    isItemCompleted(item) && styles.completedToDoText
                  ]}>
                    <TouchableOpacity 
                        style={styles.toDoText}
                        onPress={() => props.onToggleItem(item)}
                        onLongPress={() => handleLongPress(item)}
                    >
                        <Text 
                            style={[
                                styles.toDoItem,
                                isItemCompleted(item) && styles.completedToDoItem,
                            ]}
                        >
                            {item.text}
                        </Text>
                    </TouchableOpacity>  
                  </View>
                )}
                inverted
            />
        </View>
    );
}

export default ToDoList;