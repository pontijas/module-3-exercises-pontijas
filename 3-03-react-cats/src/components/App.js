import React from 'react';
import RandomCat from './RandomCat';
import CatList from './CatList';
import '../stylesheets/App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CatList />
      </div>
    );
  }
}

export default App;
