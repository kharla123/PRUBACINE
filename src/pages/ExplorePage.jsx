import React, { useState, useEffect } from 'react'
import { MOVIES } from '../services/movieService'
import MovieCard from '../components/MovieCard'

export default function ExplorePage() {
  const [movies, setMovies] = useState(MOVIES)

  useEffect(() => {
    // Simular carga de películas
    setMovies(MOVIES)
  }, [])

  return (
    <main className="p-6">
      <h1 className="text-3xl font-semibold text-[#ede9e1] mb-4">Explorar películas</h1>
      <p className="text-[#8e8799] text-base mb-8">
        Bienvenidos a la página de exploración. Aquí podrás buscar y descubrir tus próximas películas favoritas para que disfruten.
      </p>

      {movies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="text-center text-[#8e8799] text-lg">No hay películas disponibles</p>
      )}
    </main>
  )
}
