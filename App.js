import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HomeScreen from './src/view/screen/HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CoursesScreen from './src/view/screen/CourseScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{title: null, headerStyle: {elevation:0}}}>
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{
          headerLeft: () =>(
            <Icon name='sort' size={25} style={{margin: 20}} />
          ),
          headerRight: () =>(
            <Image 
            style={{height: 40, width: 40, marginRight: 20}}
            source={require('./assets/person.png')}
            />
          )
        }} />
        <Stack.Screen
          name='Course Screen'
          component={CoursesScreen}
          options={({navigation}) =>({
            headerTransparent: true,
            headerLeft: () =>(
              <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.goBack()}>
                <Icon
                  name="arrow-back-ios"
                  size={25}
                  style={{marginLeft: 20}}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <Icon name="more-vert" size={25} style={{marginRight: 20}} />
            ),
          }) }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

