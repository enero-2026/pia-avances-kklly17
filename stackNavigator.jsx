import { createStackNavigator } from '@react-navigation/stack';
import recetas from '../tabs/recetas';
import detalleReceta from '../tabs/detalleReceta';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ListaRecetas"
        component={recetas}
        options={{ title: 'Mis Recetas' }}
      />
      <Stack.Screen
        name="DetalleReceta"
        component={detalleReceta}
        options={{ title: 'Detalle' }}
      />
    </Stack.Navigator>
  );
}