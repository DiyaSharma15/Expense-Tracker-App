import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Header from '../../components/header';
import Expenses from '../../components/Expenses';
import ToDoForm from '../../components/AddExpense';

export default function AddExpensesScreen({ navigation }) {
    const [expenses, setExpenses] = useState(['Rent']);

    const addExpense = (expense) => {
        setExpenses([...expenses, expense]);
    };

    const goToHome = () => {
        navigation.navigate('Home', { expenses });
    };

    const goToSetLimits = () => {
        navigation.navigate('Set Limits', { expenses });
    };

    return (
        <View style={styles.container}>
            <Header heading={'Add Expenses'}/>
            <Expenses expense={expenses} />
            <ToDoForm addExpense={addExpense} />
            <View style={styles.buttonContainer}>
                <Button title="View Expenses" onPress={goToHome} />
                <Button title="Go to Set Limits" onPress={goToSetLimits} />
            </View>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 20,
  },
});
