import React from "react"; 
import { StyleSheet, Text, View } from 'react-native';

export default function Header({ heading }){

    return(
        <View style={styles.header}>
            <Text style={styles.headingText}> { heading } </Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        width: 350,
        height: 74,
        left: 50,
        top: 24,
        backgroundColor: '#FFEACA',
        borderRadius: 20,
    },
    headingText: {
        fontSize: 40,
        padding: 20,
        color: '#E27350',
        textAlign: 'center',
        fontWeight: '700',
    }
});