import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/header';
import Expenses from '../../components/Expenses';
import ToDoForm from '../../components/AddExpense';

export default function AddExpensesScreen() {
    const [expenses, setExpenses] = useState([' ']);
     
    const addExpense = (expense) => {
        setExpenses([...expenses, expense])
    };
     
    return (
        <View style={styles.container}>
            <Header heading={'Add Expenses'}/>
            <Expenses expense={expenses} />
            <ToDoForm addExpense={addExpense} />
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
});