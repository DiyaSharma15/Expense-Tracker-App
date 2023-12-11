import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/header';

export default function HomeScreen({ route }) {
    const { expenses } = route.params || { expenses: [] };

    return (
        <View style={styles.container}>
            <Header heading={'Expense Minder'}/>
            <Text style={styles.text}>Expenses:</Text>
            <View>
                {expenses.map((expense, index) => (
                    <Text key={index}>{expense}</Text>
                ))}
            </View>
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