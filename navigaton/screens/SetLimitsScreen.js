
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
                    <Text style={styles.expenseText}>{expense}</Text>
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
      backgroundColor: '#f4f4f4',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#333',
    },
    expenseRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 10,
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 3,
    },
    expenseText: {
      fontSize: 16,
      color: '#333',
      marginRight: 10,

    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
      paddingVertical: 5,
      width: 100,
      borderRadius: 4,
    },
  });
