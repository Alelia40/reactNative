import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchDetails } from '../redux/actions/index';


function DetailsScreen(props) {

    useEffect(() => {
        props.fetchDetails(props.movieId);
    }, []);

    return (
        <View style={styles.detailContainer}>
            <View style={{flexDirection: 'row'}}>
                <View style={{flex: '2', backgroundColor: 'blue'}}>
                    Movie
                </View>
                <View style={{flex: '4', backgroundColor: 'red'}}>
                    <View style={{flexDirection: 'row', flex:'1'}}>
                        <View style={{flex: '4'}}>
                            Name
                        </View>
                        <View style={{flex: '1'}}>
                            Date
                        </View>
                    </View>
                    <View style={{flex:'1'}}>
                        Duration
                    </View>
                    <View style={{flex:'1'}}>
                        Ratings
                    </View>
                </View>
            </View>
            <View>
                <Button title="Book Now" onpress={() => props.navigation.navigate('Details')}></Button>
            </View>
        </View>
    );
}

function mapStateToProps(state){
    return {
        data: state.movieReducer.data,
        error: state.movieReducer.error,
        loading: state.movieReducer.requesting
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchDetails}, dispatch);
}

const styles = StyleSheet.create({
    detailContainer: {
      flexDirection: 'column'
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);
