import React from "react"; 
import { StyleSheet, Text, View } from 'react-native';

export default function Header({ heading }){

    return(
        <View style={styles.header}>
            <Text style={styles.headingText}> { heading } </Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    header: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginTop: 30,
    },
    headingText: {
        fontSize: 40,
        backgroundColor: '#FFEACA',
        borderRadius: 15,
        padding: 20,
        color: '#E27350',
    }
  });