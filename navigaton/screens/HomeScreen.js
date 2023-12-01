import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.page}>
            <Text
                onPress={() => alert('This is the "Home" screen.')}
                style={styles.text}>Home Screen</Text>
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