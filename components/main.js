import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Home';
import DetailsScreen from './Details';
import SearchHeader from './SearchHeader';
import Booking from './Booking';

const Stack = createStackNavigator();

function Main(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: 'Movie Tickets',
                        headerStyle: {
                            backgroundColor: '#161616',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerRight: () => (
                            <SearchHeader></SearchHeader>
                        )
                    }} />
                <Stack.Screen
                    name="Details"
                    component={DetailsScreen}
                    options={{
                        title: 'Details',
                        headerStyle: {
                            backgroundColor: '#161616',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        }
                    }} />
                    <Stack.Screen
                    name="Booking"
                    component={Booking}
                    options={{
                        title: 'Book A Showing',
                        headerStyle: {
                            backgroundColor: '#161616',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        }
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Main;
