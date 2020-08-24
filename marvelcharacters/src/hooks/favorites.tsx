import React, {
  createContext,
  useEffect,
  useCallback,
  useContext,
  useState,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface ContextData {
  favorites: Array<number>;
  loadFavorites(): void;
}

const Context = createContext<ContextData>({} as ContextData);

const FavoritesProvider: React.FC = ({children}) => {
  const [favorites, setFavorites] = useState<Array<number>>([]);

  const loadFavorites = useCallback(async () => {
    const data = await AsyncStorage.getItem('MarvelCharacters:favorites');
    if (data) {
      setFavorites(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    loadFavorites();
  }, [loadFavorites]);

  return (
    <Context.Provider
      value={{
        favorites,
        loadFavorites,
      }}>
      {children}
    </Context.Provider>
  );
};

function useFavorites(): ContextData {
  const context = useContext(Context);

  if (!context) {
    throw new Error('useFavorites must be used within an FavoritesProvider');
  }

  return context;
}

export {FavoritesProvider, useFavorites};
