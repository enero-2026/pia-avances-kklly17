// EQUIPO: KELLY YISSETH CANO MONTIEL
//         ROSA ISELA RODRIGUEZ OLVERA
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './app/navigation/tabNavigator';
import { RecetasProvider } from './app/context/recetasContext';

export default function App() {
  return (
    <RecetasProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </RecetasProvider>
  );
}