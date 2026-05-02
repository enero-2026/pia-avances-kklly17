import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import stackNavigator from './stackNavigator';
import agregarReceta from '../tabs/agregarReceta';
import perfil from '../tabs/perfil';

const Tab = createBottomTabNavigator();

function Icon({ emoji }) {
  return <Text style={{ fontSize: 22 }}>{emoji}</Text>;
}

export default function tabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#534AB7',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: { paddingBottom: 6, height: 60 },
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={stackNavigator}
        options={{ tabBarIcon: () => <Icon emoji="📋" />, title: 'Inicio' }}
      />
      <Tab.Screen
        name="Agregar"
        component={agregarReceta}
        options={{ tabBarIcon: () => <Icon emoji="➕" />, title: 'Agregar', headerShown: true }}
      />
      <Tab.Screen
        name="Perfil"
        component={perfil}
        options={{ tabBarIcon: () => <Icon emoji="👤" />, title: 'Perfil', headerShown: true }}
      />
    </Tab.Navigator>
  );
}