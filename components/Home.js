import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchMovies } from '../redux/actions/index';

function HomeScreen(props) {

  useEffect(() => {
    const focusEvent = props.navigation.addListener('focus', () => {
      props.fetchMovies();
    });
  }, [props.navigation]);

  return (
    <View style={styles.container}>
      {props.loading &&
      <Text>LOADING...</Text>
      }
      {props.data && props.data.map((item, i) => {
        return (
          <View style={styles.movieItem} key={i}>
            <Text style={styles.movieTitle}>{item.title}</Text>
            <Button style={styles.movieButton} title="details" onPress={() => props.navigation.navigate('Details', {movieId: item.id})} />
          </View>
        );
      })}
      {props.error &&
      <Text>{props.error}</Text>
      }
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
    flexDirection: 'row',
    marginBottom: '10px'
  },
  movieTitle: {
    flex: 2,
    alignItems: "baseline"
  },
  movieButton: {
    flex: 1
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
