import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FavoritesProvider } from './context/FavoritesContext.jsx'
import Nav from './components/Nav.jsx'
import WelcomePage from './pages/WelcomePage.jsx'
import ExplorePage from './pages/ExplorePage.jsx'
import MovieDetailPage from './pages/MovieDetailPage.jsx'
import PersonDetailPage from './pages/PersonDetailPage.jsx'
import FavoritesPage from './pages/FavoritesPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import React from 'react'

export default function App() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <div className="bg-[#0c0b0f] min-h-screen text-[#ede9e1]">
          <Nav />
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/movie/:id" element={<MovieDetailPage />} />
            <Route path="/actor/:id" element={<PersonDetailPage role="actor" />} />
            <Route path="/director/:id" element={<PersonDetailPage role="director" />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </FavoritesProvider>
    </BrowserRouter>
  )
}
