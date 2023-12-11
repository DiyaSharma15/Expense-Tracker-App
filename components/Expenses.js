import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Expenses({ expense }) {
    return (
        <View style={styles.expense}>
          <Text style={styles.expenseHeading}>Expenses</Text>
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
    padding: 20,
    paddingTop: 150,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  expenseHeading: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  expenseText: {
    fontSize: 30,
    color: '#666',
  },
});
