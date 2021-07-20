import { StackActions } from '@react-navigation/native';
import React, { useState } from 'react'

import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import { addTransaction } from '../redux/actions';
import QRCode from 'react-qr-code';

function Booking(props) {

    const { id, title, prices, currency } = props.route.params;

    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [ticketType, setTicket] = useState("NORMAL");
    const [ticketPrice, setPrice] = useState(prices.normal);
    const [orderVisible, setOrderVisible] = useState(false);
    const [bookingVisible, setBookingVisible] = useState(false);

    function setSeat(type) {
        if (type === "normal") {
            setPrice(prices.normal);
        } else if (type === "superior") {
            setPrice(prices.superior);
        } else {
            setPrice(prices.sofa);
        }
        setTicket(type.toUpperCase());
    }

    function getOrderDetails() {
        let ticketvalue = `Order Details
        1x Ticket - ${title.toUpperCase()}
        seats - ${ticketType}
        price - ${ticketPrice}${currency}

        ${email}
        ${fullName}
        `;
        return <div>
            <p>{ticketvalue}</p>
        </div>
    }

    function getBookingSubmission() {
        let ticketvalue = `Booking Details
        1x Ticket - ${title.toUpperCase()}
        seats - ${ticketType}
        price - ${ticketPrice}${currency}

        ${email}
        ${fullName}
        `;
        return <div>
            <QRCode value={ticketvalue} />
            <p>{ticketvalue}</p>
        </div>
    }

    return (
        <View style={styles.container}>
            <View style={styles.bookingForm}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Reserve a Seat!</Text>
                <View>
                    <Text>Movie Name - {title.toUpperCase()}</Text>
                    <Text>Ticket Type - {ticketType}</Text>
                    <View style={styles.buttonArray}>
                        <View>
                            <Button title="Normal" onPress={() => setSeat("normal")} disabled={ticketType === "NORMAL"}></Button>
                        </View>
                        <View>
                            <Button title="Superior" onPress={() => setSeat("superior")} disabled={ticketType === "SUPERIOR"}></Button>
                        </View>
                        <View>
                            <Button title="Sofa" onPress={() => setSeat("sofa")} disabled={ticketType === "SOFA"}></Button>
                        </View>
                    </View>
                </View>
                <View>
                    <Text>Email</Text>
                    <TextInput
                        placeholder="Enter Your Email"
                        value={email}
                        onChangeText={setEmail}
                        style={styles.formInput}
                    />
                </View>

                <View>
                    <Text>Name</Text>
                    <TextInput
                        placeholder="Enter Your Name"
                        value={fullName}
                        onChangeText={setFullName}
                        style={styles.formInput}
                    />
                </View>
                <Button style={{ alignSelf: 'flex-end' }} title="Submit Order" onPress={() => setOrderVisible(!orderVisible)}></Button>
            </View>
            <AwesomeAlert
                show={orderVisible}
                showProgress={false}
                title="Order Details"
                message={getOrderDetails()}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText="Cancel"
                confirmText="Submit"
                confirmButtonColor="#DD6B55"
                onCancelPressed={() => {
                    setAlertVisible(!alertVisible);
                }}
                onConfirmPressed={() => {
                    setBookingVisible(!bookingVisible);
                    addTransaction({
                        name: fullName,
                        email: email,
                        movieId: id,
                        price: ticketPrice + " " + currency,
                        ticketType: ticketType
                    });
                    setOrderVisible(!orderVisible);
                }}
            />

            <AwesomeAlert
                show={bookingVisible}
                showProgress={false}
                title="Booking Ticket"
                message={getBookingSubmission()}
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                showCancelButton={false}
                showConfirmButton={true}
                cancelText="Cancel"
                confirmText="Ok"
                confirmButtonColor="#DD6B55"
                onConfirmPressed={() => {
                    setBookingVisible(!bookingVisible);
                    props.navigation.dispatch(StackActions.popToTop());
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bookingForm: {
        backgroundColor: '#fff',

        borderColor: 'black',
        borderWidth: '1px',

        width: '100%',
        height: '50%',

        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    formInput: {
        borderColor: 'black',
        borderWidth: '1px',
    },
    buttonArray: {
        width: '100%',
        flexDirection: 'row',
        alignContent: 'space-between'
    }
});

export default Booking
