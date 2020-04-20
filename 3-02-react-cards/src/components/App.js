import React from 'react';
import MediaList from './MediaList';
import '../stylesheets/App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App-container">
        <MediaList />
      </div>
    );
  }
}

export default App;
