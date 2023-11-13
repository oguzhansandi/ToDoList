import { StyleSheet } from "react-native";

export default StyleSheet.create({
    innerContainer : {
        position: 'absolute',
        bottom: 10,
        left : 0,
        right : 0,
        backgroundColor: '#495E57',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        justifyContent: 'space-between',
    },
    input : {
        borderBottomWidth : 0.8,
        borderColor : '#F3EEEA',
        marginBottom : 5,
        fontSize : 16,
        color : '#F3EEEA',
    },
    saveButton : {
        padding : 10,
        margin : 10,
        borderRadius : 10,
        backgroundColor : '#777777',
        paddingVertical: 5,
    },
    focusedButton : {
        backgroundColor : 'orange',
    },
    saveText : {
        color : '#fff',
        textAlign : 'center',
        fontSize : 18,
    }
});