import { createContext, useContext, useState } from 'react';

const RecetasContext = createContext();

//Datos de prueba
const recetasIniciales = [
  {
    id: '1',
    nombre: 'Tacos de Pastor',
    descripcion: 'Tacos con carne de cerdo marinada y piña',
    categoria: 'comida',
    ingredientes: ['Carne de cerdo', 'Piña', 'Cebolla', 'Cilantro', 'Tortillas'],
    pasos: ['Marinar la carne', 'Cocinar en trompo', 'Servir con piña y cebolla'],
    foto: null,
  },
  {
    id: '2',
    nombre: 'Hotcakes',
    descripcion: 'Hotcakes esponjosos con miel y mantequilla',
    categoria: 'desayuno',
    ingredientes: ['Harina', 'Huevo', 'Leche', 'Mantequilla', 'Miel'],
    pasos: ['Mezclar ingredientes', 'Calentar sartén', 'Cocinar por ambos lados'],
    foto: null,
  },
  {
    id: '3',
    nombre: 'Flan Napolitano',
    descripcion: 'Flan cremoso con caramelo',
    categoria: 'postre',
    ingredientes: ['Leche condensada', 'Leche evaporada', 'Huevos', 'Azúcar'],
    pasos: ['Hacer caramelo', 'Mezclar ingredientes', 'Hornear a baño María'],
    foto: null,
  },
];

export function RecetasProvider({ children }) {
  const [recetas, setRecetas] = useState(recetasIniciales);
  const [filtro, setFiltro] = useState('todas');
  const [busqueda, setBusqueda] = useState('');

  function agregarReceta(nuevaReceta) {
    const receta = {
      ...nuevaReceta,
      id: Date.now().toString(),
    };
    setRecetas(prev => [...prev, receta]);
  }

  function eliminarReceta(id) {
    setRecetas(prev => prev.filter(r => r.id !== id));
  }

  function editarReceta(id, datos) {
    setRecetas(prev =>
      prev.map(r => (r.id === id ? { ...r, ...datos } : r))
    );
  }

  // Recetas filtradas 
  const recetasFiltradas = recetas.filter(r => {
    const coincideCategoria = filtro === 'todas' || r.categoria === filtro;
    const coincideBusqueda  = r.nombre.toLowerCase().includes(busqueda.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });

  return (
    <RecetasContext.Provider value={{
      recetas,
      recetasFiltradas,
      filtro,
      setFiltro,
      busqueda,
      setBusqueda,
      agregarReceta,
      eliminarReceta,
      editarReceta,
    }}>
      {children}
    </RecetasContext.Provider>
  );
}

export function useRecetas() {
  return useContext(RecetasContext);
}