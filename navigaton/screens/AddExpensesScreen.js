import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AddExpensesScreen({ navigation }) {
    return (
        <View style={styles.page}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={styles.text}>Add Expenses Screen</Text>
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