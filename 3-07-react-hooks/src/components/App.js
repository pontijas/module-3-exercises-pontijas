import React from 'react';

import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Cris',
    };
  }

  sayGoodbye = () => {
    this.setState({
      name: 'Mundo',
    });
  };

  render() {
    return <h1 onClick={this.sayGoodbye}>Hola {this.state.name}</h1>;
  }
}

export default App;
