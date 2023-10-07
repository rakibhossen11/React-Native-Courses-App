import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/view/screen/HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{title: null, headerStyle: {elevation:0}}}>
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{
          // headerLeft: () =>(
          //   // <Icon name='sort'  />
          // )
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

