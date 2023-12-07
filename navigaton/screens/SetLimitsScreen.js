import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Header from '../../components/header';

export default function SetLimits() {
    const [rentLimit, setRentLimit] = useState('');
    const [utilitiesLimit, setUtilitiesLimit] = useState('');
    const [beautyLimit, setBeautyLimit] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleUpdateLimit = (category) => {
        // Set the selected category to update
        setSelectedCategory(category);
    };

    const handleSaveLimit = () => {
        // Implement the logic to save the updated limit
        // You can use the selectedCategory state to identify which category is being updated
        console.log(`Save limit for ${selectedCategory}:`, getLimitValue(selectedCategory));
        // Reset the selected category after handling the update
        setSelectedCategory('');
    };

    const getLimitValue = (category) => {
        switch (category) {
            case 'Rent':
                return rentLimit;
            case 'Utilities':
                return utilitiesLimit;
            case 'Beauty':
                return beautyLimit;
            default:
                return '';
        }
    };

    const resetInputValue = (category) => {
        switch (category) {
            case 'Rent':
                setRentLimit('');
                break;
            case 'Utilities':
                setUtilitiesLimit('');
                break;
            case 'Beauty':
                setBeautyLimit('');
                break;
            default:
                break;
        }
    };

    return (
        <View style={styles.page}>
            <Header heading={'Set Limits'}/>
            <View style={styles.container}>
                {/* Rent Section */}
                <View style={styles.sectionContainer}>
                    <Text>Rent</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Current Limit"
                        keyboardType="numeric"
                        value={selectedCategory === 'Rent' ? rentLimit : getLimitValue('Rent')}
                        onChangeText={(text) => setRentLimit(text)}
                        editable={selectedCategory === 'Rent'}
                    />
                    {selectedCategory === 'Rent' && (
                        <TouchableOpacity
                            style={styles.updateButton}
                            onPress={handleSaveLimit}
                        >
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                    )}
                    {selectedCategory !== 'Rent' && (
                        <TouchableOpacity
                            style={styles.updateButton}
                            onPress={() => handleUpdateLimit('Rent')}
                        >
                            <Text style={styles.buttonText}>Update</Text>
                        </TouchableOpacity>
                    )}
                </View>
                
                {/* Utilities Section */}
                <View style={styles.sectionContainer}>
                    <Text>Utilities</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Current Limit"
                        keyboardType="numeric"
                        value={selectedCategory === 'Utilities' ? utilitiesLimit : getLimitValue('Utilities')}
                        onChangeText={(text) => setUtilitiesLimit(text)}
                        editable={selectedCategory === 'Utilities'}
                    />
                    {selectedCategory === 'Utilities' && (
                        <TouchableOpacity
                            style={styles.updateButton}
                            onPress={handleSaveLimit}
                        >
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                    )}
                    {selectedCategory !== 'Utilities' && (
                        <TouchableOpacity
                            style={styles.updateButton}
                            onPress={() => handleUpdateLimit('Utilities')}
                        >
                            <Text style={styles.buttonText}>Update</Text>
                        </TouchableOpacity>
                    )}
                </View>

                {/* Beauty Section */}
                <View style={styles.sectionContainer}>
                    <Text>Beauty</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Current Limit"
                        keyboardType="numeric"
                        value={selectedCategory === 'Beauty' ? beautyLimit : getLimitValue('Beauty')}
                        onChangeText={(text) => setBeautyLimit(text)}
                        editable={selectedCategory === 'Beauty'}
                    />
                    {selectedCategory === 'Beauty' && (
                        <TouchableOpacity
                            style={styles.updateButton}
                            onPress={handleSaveLimit}
                        >
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                    )}
                    {selectedCategory !== 'Beauty' && (
                        <TouchableOpacity
                            style={styles.updateButton}
                            onPress={() => handleUpdateLimit('Beauty')}
                        >
                            <Text style={styles.buttonText}>Update</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        marginTop: 20,
    },
    sectionContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFEACA',
        borderRadius: 20,
        top: 50,
        padding: 5,
        marginBottom: 20,
    },
    updateButton: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 10,

    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 5,
        padding: 3,
        marginBottom: 2,
        width: 120,
        textAlign: 'center',
    },
});

