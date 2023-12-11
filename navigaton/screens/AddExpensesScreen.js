import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../../components/header';
import Expenses from '../../components/Expenses';
import ToDoForm from '../../components/AddExpense';

export default function AddExpensesScreen({ navigation }) {
    const [expenses, setExpenses] = useState(['Rent', 'Utilities']);

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
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: '#00C2FF' }]}
                    onPress={goToHome}
                >
                    <Text style={styles.buttonText}>Add Expenses to Home Page</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: '#00C2FF' }]}
                    onPress={goToSetLimits}
                >
                    <Text style={styles.buttonText}>Add Expenses to Set Limits Page</Text>
                </TouchableOpacity>
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
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 20,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: 'blue',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
  },
});
