import React, { useState } from 'react'

import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

function Booking(props) {

    const { id, price, currency } = props.route.params;

    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");

    return (
        <View style={styles.container}>
            <View>
                <Text>Reserve a Seat!</Text>
                <View></View>
                <TextInput
                    placeholder="Enter Your Email"
                    value={email}
                />
                <TextInput
                    placeholder="Enter Your Name"
                    value={fullName}
                />
                <Button title="Submit Order"></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Booking
