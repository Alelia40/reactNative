import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { back } from 'react-native/Libraries/Animated/src/Easing';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchDetails } from '../redux/actions/index';


function DetailsScreen(props) {

    const { movieId } = props.route.params;

    useEffect(() => {
        props.fetchDetails(movieId);
    }, []);

    return (
        <View style={styles.detailContainer}>
            {props.error &&
                <Text>{props.error}</Text>
            }
            {props.loading &&
                <Text>LOADING ...</Text>
            }
            {props.data &&
                <View style={{ justifyCOntent: 'center', flexDirection: 'column', flex: "1" }}>
                    <View style={{ flexDirection: 'row', borderTopWidth: 1, borderBottomWidth: 1, backgroundColor: '#fff', height: '50%', marginTop: '25%' }}>
                        <View style={{ alignItems: 'center', flex: '3', borderEndWidth: 1, borderColor: 'black' }}>
                            <Image style={{ width: '100%', height: '100%' }} source={{ uri: props.data.image }} resizeMode={'cover'}></Image>
                        </View>
                        <View style={{ flex: '4' }}>
                            <View style={{ flexDirection: 'row', flex: '1' }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center', flex: '4', borderEndWidth: 1, borderColor: 'black' }}>
                                    <Text style={styles.detailText}>{props.data.title}</Text>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', flex: '1', borderColor: 'black' }}>
                                    <Text style={styles.detailText}>{props.data.date}</Text>
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', flex: '1', borderTopWidth: 1, borderColor: 'black' }}>
                                <Text style={styles.detailText}>Runtime: {props.data.length}</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', flex: '1', borderTopWidth: 1, borderColor: 'black' }}>
                                <Text style={styles.detailText}>Rating: {props.data.rating}</Text>
                            </View>
                        </View>
                    </View>
                    <Button title="Book Now" onPress={() => props.navigation.navigate('Booking', { id: movieId, title: props.data.title, prices: props.data.prices, currency: props.data.currency })}></Button>
                </View>
            }
        </View>
    );
}

function mapStateToProps(state) {
    return {
        data: state.movieReducer.detail,
        error: state.movieReducer.error,
        loading: state.movieReducer.requesting
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchDetails }, dispatch);
}

const styles = StyleSheet.create({
    detailContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%'
    },
    detailText: {
        fontSize: '14px',
        fontWeight: 'bold'
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);
