import React from 'react';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputContent: '',
    };
  }
  // esta funcion cambia el valor del objeto del estado
  // target hace referencia al input que es el elemento que estamos escuchando
  handleChange = (ev) => {
    this.setState({
      inputContent: ev.target.value,
    });
  };

  render() {
    return (
      <div className="app-container">
        <form>
          {/* ponemos un listener en el input con onChange y le aplicamos al listener la funcion handleChange*/}
          <input onChange={this.handleChange} type="text"></input>
          <p className="text">{this.state.inputContent}</p>
        </form>
      </div>
    );
  }
}

export default App;
