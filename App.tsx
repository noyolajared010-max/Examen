import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importa las pantallas
import HomeScreen, { RootStackParamList } from './screens/HomeScreen'; // Importamos el tipo desde HomeScreen
import DetailScreen from './screens/DetailScreen';
import CameraScreen from './screens/CameraScreen'; // ¡Nueva pantalla!

// 1. Crea el Stack Navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Inicio (FlatList)' }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title: 'Detalle' }}
        />
        {/* Agregamos la ruta para la cámara */}
        <Stack.Screen
          name="CameraScreen"
          component={CameraScreen}
          options={{ title: 'Cámara del Dispositivo' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}