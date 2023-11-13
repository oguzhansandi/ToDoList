import React, { useState } from "react";
import { Text, TextInput, TouchableHighlight, View} from 'react-native';
import styles from './SearchBar.styles';

const SearchBar = (props) => {
    const [inputText, setInputText] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleChangeText = (text) => {
        setInputText(text);
    };

    const handleSavePress = () => {
        if(inputText) {
            props.onSavePress(inputText);
            setInputText('');
            setIsFocused(false);
        }
    };
    
    return (
            <View style={styles.innerContainer}>
                <TextInput
                    style = {styles.input} 
                    placeholder="Yapılacak.."
                    placeholderTextColor="#A9A9A9"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChangeText={handleChangeText}
                    value={inputText}
                />
                <TouchableHighlight
                    style = {[
                        styles.saveButton, 
                        inputText ? styles.focusedButton : null
                    ]} 
                    onPress={handleSavePress}

                >
                    <Text style={styles.saveText}>Kaydet</Text>
                </TouchableHighlight>
            </View>
    );
};

export default SearchBar;