import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import GamePage from './pages/Game';
import Store from './pages/Store';
import Deck from './pages/Deck';
import Info from './pages/Info';

export default function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <Navbar />
      <main className="pt-16 min-h-screen overflow-y-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/store" element={<Store />} />
          <Route path="/deck" element={<Deck />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
