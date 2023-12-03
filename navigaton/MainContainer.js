import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import AddExpensesScreen from './screens/AddExpensesScreen';
import SetLimitsScreen from './screens/SetLimitsScreen';

const homeName = "Home";
const AddExpensesName = "Add Expenses";
const SetLimitsName = "Set Limits";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === AddExpensesName) {
              iconName = focused ? 'add-circle' : 'add-circle-outline';

            } else if (rn === SetLimitsName) {
              iconName = focused ? 'cash' : 'cash-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          
        })}
>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={AddExpensesName} component={AddExpensesScreen} />
        <Tab.Screen name={SetLimitsName} component={SetLimitsScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}