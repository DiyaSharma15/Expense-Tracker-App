import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/header';

export default function SetLimits() {
    return (
        <View style={styles.page}>
            <Header heading={'Set Limits'}/>
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