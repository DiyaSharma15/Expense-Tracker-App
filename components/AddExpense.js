import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function ToDoForm({ addExpense }) {

    const [expenseText, setExpenseText] = React.useState('');
    return(
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Add a new Expense..."
                onChangeText={(text) => setExpenseText(text)}
                value={expenseText}
            />
            <Button title="Add" onPress={() => addExpense(expenseText)} />
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
      paddingVertical: 8,
      marginRight: 10,
    },
  });