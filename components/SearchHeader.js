import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableHighlight } from 'react-native';

function SearchHeader(props) {

    const [text, onChangeText] = React.useState("");

    function startSearch() {
        console.log("searching - "+ text);
    }

    return (
        <View style={{ flexDirection: 'row' }}>
            <TextInput
                style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', height: "100%" }}
                value={text}
                onChangeText={onChangeText}
                placeholder='Search'
                keyboardType='web-search'
                onSubmitEditing={startSearch}
            />
            <Button title="Search" onPress={startSearch} style={{ alignItems: 'center', justifyContent: 'center', height: "100%" }}></Button>
        </View>
    )
}

export default SearchHeader;