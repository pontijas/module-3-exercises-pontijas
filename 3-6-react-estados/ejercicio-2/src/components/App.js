import React from 'react';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    // el estado es un objeto con la propiedad className con valor blue que es un string
    this.state = {
      className: 'blue',
    };
  }

  changeColor = () => {
    // console.log('ejecuto la funcion');
    this.setState((prevState) => {
      let nextClassName;

      if (prevState.className === 'blue') {
        // si el estado inicial es azul entonces pintalo rojo
        nextClassName = 'red';
      } else {
        // si el estado inicial es rojo entonces pintalo azul
        nextClassName = 'blue';
      }
      // esta funcion me devuelve el valor de la propiedad className igual a la propiedad nextClassName
      return { className: nextClassName };
    });
  };

  render() {
    // el render nos devuelve un div con clase de valor igual al valor de la propiedad className del objeto
    return <div onClick={this.changeColor} className={this.state.className}></div>;
  }
}

export default App;
