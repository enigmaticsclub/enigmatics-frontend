import React from 'react';
import { NavigationBar } from './components';
import { Body, Header, Footer } from './container';

import './App.scss';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
