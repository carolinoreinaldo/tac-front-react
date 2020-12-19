import React from 'react';

//css
import 'bootswatch/dist/flatly/bootstrap.min.css';
import './App.css';

//custom componenst
import Rotas from './views/main/rotas';

function App() {
  return (
    <div className="app">
      <Rotas />
    </div>
  );
}

export default App;
