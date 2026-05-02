import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useRecetas } from '../context/recetasContext';

// Categorías disponibles para filtrar
const CATEGORIAS = ['todas', 'desayuno', 'comida', 'cena', 'postre'];

export default function RecetasScreen({ navigation }) {
  const { recetasFiltradas, filtro, setFiltro, busqueda, setBusqueda } = useRecetas();

  return (
    <View style={styles.container}>

      {/* Barra de búsqueda */}
      <TextInput
        style={styles.buscador}
        placeholder="Buscar receta..."
        value={busqueda}
        onChangeText={setBusqueda}
      />

      {/* Filtros por categoría */}
      <View style={styles.filtros}>
        {CATEGORIAS.map(cat => (
          <TouchableOpacity
            key={cat}
            style={[styles.filtroBtn, filtro === cat && styles.filtroBtnActivo]}
            onPress={() => setFiltro(cat)}
          >
            <Text style={[styles.filtroTxt, filtro === cat && styles.filtroTxtActivo]}>
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Lista de recetas */}
      <FlatList
        data={recetasFiltradas}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('DetalleReceta', { receta: item })}
          >
            <View style={styles.cardHeader}>
              <Text style={styles.cardNombre}>{item.nombre}</Text>
              <View style={styles.categoria}>
                <Text style={styles.categoriaTxt}>{item.categoria}</Text>
              </View>
            </View>
            <Text style={styles.cardDesc} numberOfLines={2}>
              {item.descripcion}
            </Text>
            <Text style={styles.cardIngredientes}>
              🥗 {item.ingredientes.length} ingredientes
            </Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyTxt}>No se encontraron recetas</Text>
          </View>
        }
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container:        { flex: 1, backgroundColor: '#F1EFE8', padding: 16 },
  buscador:         { backgroundColor: '#fff', borderRadius: 10, padding: 12,
                      fontSize: 15, marginBottom: 12, borderWidth: 1,
                      borderColor: '#D3D1C7' },
  filtros:          { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 16 },
  filtroBtn:        { paddingHorizontal: 14, paddingVertical: 6, borderRadius: 20,
                      backgroundColor: '#fff', borderWidth: 1, borderColor: '#D3D1C7' },
  filtroBtnActivo:  { backgroundColor: '#534AB7', borderColor: '#534AB7' },
  filtroTxt:        { fontSize: 13, color: '#666', textTransform: 'capitalize' },
  filtroTxtActivo:  { color: '#fff', fontWeight: 'bold' },
  card:             { backgroundColor: '#fff', borderRadius: 12, padding: 16,
                      marginBottom: 12, borderWidth: 1, borderColor: '#D3D1C7' },
  cardHeader:       { flexDirection: 'row', justifyContent: 'space-between',
                      alignItems: 'center', marginBottom: 6 },
  cardNombre:       { fontSize: 16, fontWeight: 'bold', color: '#1a1a1a', flex: 1 },
  categoria:        { backgroundColor: '#EDE9FF', borderRadius: 20,
                      paddingHorizontal: 10, paddingVertical: 3 },
  categoriaTxt:     { fontSize: 11, color: '#534AB7', textTransform: 'capitalize' },
  cardDesc:         { fontSize: 13, color: '#666', marginBottom: 8 },
  cardIngredientes: { fontSize: 12, color: '#888' },
  empty:            { alignItems: 'center', marginTop: 60 },
  emptyTxt:         { fontSize: 16, color: '#999' },
});