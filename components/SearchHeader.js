import React from 'react';
import { TextInput, View, Button, TouchableHighlight } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchMoviesSearch } from '../redux/actions/index';

function SearchHeader(props) {

    const [text, onChangeText] = React.useState("");

    function startSearch() {
        console.log("searching - "+ text);
        props.fetchMoviesSearch(text);
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

function mapStateToProps(state) {
    return {
        data: state.movieReducer.detail,
        error: state.movieReducer.error,
        loading: state.movieReducer.requesting
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchMoviesSearch }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchHeader);