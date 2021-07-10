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
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: '20px'}}>Currently Showing</Text>
      {props.loading &&
        <Text>LOADING...</Text>
      }
      {props.error &&
        <Text>{props.error}</Text>
      }
      {props.data && props.data.length > 0 && props.data.map((item, i) => {
        return (
          <View style={styles.movieItem} key={i}>
            <View>
              <Text style={styles.movieTitle}>{item.title}</Text>
            </View>
            <View>
              <Button style={styles.movieButton} title="details" onPress={() => props.navigation.navigate('Details', { movieId: item.id })} />
            </View>
          </View>
        );
      })}
      {props.data && props.data.length == 0 &&
        <View>
          <Text>No Results Found ...</Text>
        </View>
      }
      {props.searching === true &&
        <Button style={styles.movieButton} title="Clear Search" onPress={() => props.fetchMovies()} />
      }
    </View>
  );
}

function mapStateToProps(state) {
  return {
    data: state.movieReducer.movies,
    searching: state.movieReducer.searching,
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
    justifyContent: 'space-between',
    marginBottom: '10px',
    width: '80%',
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
