// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListaProdutoScreen from './components/ListaProdutoScreen';
import DetalheProdutoScreen from './components/DetalheProdutoScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ListaProduto'>
        <Stack.Screen name="ListaProduto" component={ListaProdutoScreen} />
        <Stack.Screen name='DetalheProduto' component={DetalheProdutoScreen} />
      </Stack.Navigator>        
    </NavigationContainer>
  );
}

export default App;