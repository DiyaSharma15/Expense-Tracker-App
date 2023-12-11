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
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 10,
    borderRadius: 4,
  },
});
