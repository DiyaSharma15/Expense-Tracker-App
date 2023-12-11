
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Header from '../../components/header';

export default function SetLimitsScreen({ route }) {
    const { expenses } = route.params || { expenses: [] };
    const [expenseLimits, setExpenseLimits] = useState({});

    const setLimit = (expense, limit) => {
        setExpenseLimits({ ...expenseLimits, [expense]: limit });
    };

    return (
        <View style={styles.container}>
            <Header heading={'Set Limits'}/>
            <Text style={styles.text}>Set Limits for Expenses:</Text>
            {expenses.map((expense, index) => (
                <View key={index} style={styles.expenseRow}>
                    <Text>{expense}</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Set Limit"
                        keyboardType="numeric"
                        onChangeText={(text) => setLimit(expense, text)}
                    />
                </View>
            ))}
            <Button title="Save Limits" onPress={() => console.log(expenseLimits)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    expenseRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: 100,
    },
});