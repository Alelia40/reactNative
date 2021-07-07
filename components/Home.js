import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchMovies } from '../redux/actions/index';

function HomeScreen(props) {

  useEffect(() => {
    props.fetchMovies();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.movieItem}>
        {JSON.stringify(props.data)}
        <Button title="details" onPress={() => props.navigation.navigate('Details')} />
      </View>
    </View>
  );
}

function mapStateToProps(state) {
  return {
    data: state.movieReducer.movies,
    error: state.movieReducer.error,
    loading: state.movieReducer.requesting
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovies }, dispatch);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  movieItem: {
    flexDirection: 'row'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
