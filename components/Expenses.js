import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Expenses({ expense }) {
    return (
        <View style={styles.expense}>
          <Text style={styles.expenseText}>Expenses</Text>
          <View>
            {expense.map((expense, index) => (
              <Text style={styles.expenseText} key={index}>{expense}</Text>
            ))}
          </View>
        </View>
    );
}


const styles = StyleSheet.create({
    expense: {
        flex: 1,
        padding: 100,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    expenseText: {
        fontSize: 30,
    },
});