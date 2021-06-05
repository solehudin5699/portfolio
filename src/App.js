import React from 'react';
import { PortfolioProvider } from './context';
import Home from './pages/home';
import { projects, profile } from './data';

export default function App() {
  return (
    <PortfolioProvider value={{ projects, profile }}>
      <Home />
    </PortfolioProvider>
  );
}
