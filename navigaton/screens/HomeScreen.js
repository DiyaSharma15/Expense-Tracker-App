import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/header';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Header heading={'Expense Minder'}/>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 26, 
        fontWeight: 'bold',
    },
    page: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
})