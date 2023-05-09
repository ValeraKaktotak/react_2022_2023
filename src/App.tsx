import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useSearchUsersQuery } from './store/github/github.api'
import HomePage from './pages/HomePage'
import FavoritePages from './pages/FavoritePages'
import Navigation from './components/Navigation'

function App() {
  const { isLoading, isError, data } = useSearchUsersQuery('ValeraKaktotak')
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritePages />} />
      </Routes>
    </>
  )
}

export default App
