import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import '../css/App.css';
import { MainContent } from './MainContent';

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
