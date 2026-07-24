import { Link } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'
import { getPersonById } from '../services/movieService'

export default function MovieCard({ movie }) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const fav = isFavorite(movie.id)
  const director = getPersonById(movie.directorId)

  return (
    <div className="group relative flex flex-col">
      <Link to={`/movie/${movie.id}`} className="block relative overflow-hidden rounded-sm bg-[#16141c]">
        <div className="aspect-[2/3] overflow-hidden">
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.target.src =
                'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=580&fit=crop&auto=format'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b0f] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {movie.trending && (
          <span className="absolute top-2 left-2 px-2 py-0.5 text-[10px] font-semibold tracking-widest uppercase bg-[#c8954a] text-[#0c0b0f]">
            Trending
          </span>
        )}
      </Link>

      <button
        onClick={() => toggleFavorite(movie.id)}
        aria-label={fav ? 'Quitar de favoritas' : 'Añadir a favoritas'}
        className={`absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full backdrop-blur-sm transition-all duration-200 ${
          fav
            ? 'bg-[#c8954a] text-[#0c0b0f]'
            : 'bg-[#0c0b0f]/60 text-[#8e8799] opacity-0 group-hover:opacity-100'
        }`}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={fav ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </button>

      <div className="mt-3 flex flex-col gap-1">
        <Link
          to={`/movie/${movie.id}`}
          className="text-[#ede9e1] font-medium text-sm leading-snug hover:text-[#c8954a] transition-colors line-clamp-2"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          {movie.title}
        </Link>
        <div className="flex items-center justify-between">
          <span className="text-[#8e8799] text-xs">{movie.year}</span>
          <span className="flex items-center gap-1 text-[#c8954a] text-xs font-semibold">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            {movie.rating.toFixed(1)}
          </span>
        </div>
        {director && (
          <span className="text-[#8e8799] text-xs truncate">{director.name}</span>
        )}
      </div>
    </div>
  )
}
