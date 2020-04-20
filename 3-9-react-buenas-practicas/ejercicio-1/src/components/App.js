import React, { useState } from 'react';
import '../stylesheets/App.scss';

const App = () => {
  const [numbers /*, setNumbers*/] = useState([1, 4, 6, 8, 45, 89]);
  console.log('ei', numbers);

  const listItems = numbers.map((number) => {
    return <li key={number}>{number}</li>;
  });

  return (
    <div className="App">
      <h1 className="App-title">Numeritos</h1>
      <ul>{listItems}</ul>
      <form>
        <input type="text"></input>
      </form>
    </div>
  );
};

export default App;
