import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import FavoritePages from './pages/FavoritePages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="favorites" element={<FavoritePages />} />
    </Routes>
  )
}

export default App
