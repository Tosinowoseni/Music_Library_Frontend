import React from 'react';
import MusicTable from './Components/MusicTable';
import NavBar from './Components/NavBar';
import SearchBar from './Components/SearchBar';

function App() {
  return (
    <div className="App">
      <MusicTable />
      <SearchBar />
      <NavBar />
      Hello Tosin!
    </div>
  );
}

export default App;
