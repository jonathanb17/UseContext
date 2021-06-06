import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Context from './components/Context';
import React, { useState } from 'react';

// creamos el contexto
export const ThemeContext = React.createContext();

const themes = {
  'dark': {
    background: 'black',
    color: 'white'
  },
  'light': {
    background: 'white',
    color: 'black'
  }
}


function App() {

  const [theme, setTheme] = useState(themes.dark);
  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <Context />
        <button onClick={() => setTheme(themes.light)}>Modo claro</button>
        <button onClick={() => setTheme(themes.dark)}>Modo oscuro</button>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
