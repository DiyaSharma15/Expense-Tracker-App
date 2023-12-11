import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/header';

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 3; i++) {
      const channel = Math.floor(Math.random() * 150 + 100).toString(16).padStart(2, '0');
      color += channel;
    }
    return color;
};

export default function HomeScreen({ route }) {
    const { expenses } = route.params || { expenses: [] };

    return (
        <View style={styles.container}>
            <Header heading={'Expense Minder'}/>
            <Text style={styles.heading}>Expenses:</Text>
            <View style={styles.expensesContainer}>
                {expenses.map((expense, index) => (
                <View key={index} style={[styles.expenseItem, { backgroundColor: getRandomColor() }]}>
                    <Text style={styles.expenseText}>{expense}</Text>
                </View>
                ))}
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f4f4f4',
      alignItems: 'center',
      paddingTop: 20,
    },
    heading: {
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 100,
      marginBottom: 10,
      color: '#333',
    },
    expensesContainer: {
      width: '80%',
      borderRadius: 8,
      padding: 10,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 3,
    },
    expenseItem: {
      marginBottom: 15,
      borderRadius: 4,
      padding: 10,
    },
    expenseText: {
      fontSize: 24,
      color: '#000',
      fontWeight: 'bold',
    },
});