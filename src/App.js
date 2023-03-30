import React from 'react';
import './App.css';

import Input from './objects/Input';
import Header from './components/Header';
import Hashtag from './components/Hashtag';

const App = () => (
    <main className='app'>
      <Header />
      <Hashtag />
      <Input id="show" value="show" content="Mostrar evertos"/>
    </main>
);

export default App;
