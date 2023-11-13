import { StyleSheet } from "react-native";

export default StyleSheet.create ({
    toDoContainer: {
        backgroundColor : '#7DA453',
        padding : 10,
        borderRadius : 10,
        margin: 3,
        marginBottom : 5,
    },
    toDoText:{
    },
    completedToDoText : {
        backgroundColor : '#37474F',
    },
    toDoItem :  {
        color : '#fff',
        fontSize : 20,
        padding : 10,
        textDecorationLine : 'none',
    },
    completedToDoItem : {
        textDecorationLine : 'line-through',
    }
})