import { createContext, useContext, useState } from 'react'

const initialValue = {
  favorites: [],
  toggleFavorite: () => {},
  isFavorite: () => false,
}

export const FavoritesContext = createContext(initialValue)

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([])

  function toggleFavorite(id) {
    setFavorites((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    )
  }

  function isFavorite(id) {
    return favorites.includes(id)
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  return useContext(FavoritesContext)
}
