import { Link, useLocation } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'

export default function Nav() {
  const location = useLocation()
  const { favorites } = useFavorites()

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path + '/')

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#2c2636] bg-[#0c0b0f]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-[#c8954a] text-xl" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>
            ◆
          </span>
          <span
            className="text-[#ede9e1] text-lg font-semibold tracking-tight"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Cinéphile
          </span>
        </Link>

        <nav className="flex items-center gap-1">
          {[
            { path: '/', label: 'Inicio' },
            { path: '/explore', label: 'Exploración' },
            { path: '/favorites', label: 'Favoritas' },
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
                (path === '/' ? location.pathname === '/' : isActive(path))
                  ? 'text-[#c8954a]'
                  : 'text-[#8e8799] hover:text-[#ede9e1]'
              }`}
            >
              {label}
              {path === '/favorites' && favorites.length > 0 && (
                <span className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#c8954a] text-[#0c0b0f] text-[10px] font-bold">
                  {favorites.length}
                </span>
              )}
              {(path === '/' ? location.pathname === '/' : isActive(path)) && (
                <span className="absolute bottom-0 left-4 right-4 h-px bg-[#c8954a]" />
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
