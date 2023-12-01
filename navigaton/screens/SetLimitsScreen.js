import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SetLimits({ navigation }) {
    return (
        <View style={styles.page}>
            <Text style={styles.text}
                onPress={() => navigation.navigate('Home')}> Set Limits Screen </Text>
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