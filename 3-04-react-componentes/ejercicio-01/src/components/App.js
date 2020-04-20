import React from 'react';
import ItemList from './ItemList';
import '../stylesheets/App.scss';

const items = [
  {
    name: 'Cereales con chocolate',
    description: 'Cereales rellenos de chocolate',
    quantity: 2,
    category: 'Cereales',
    price: 5,
  },
  {
    name: 'Hamburguesa con queso',
    description: 'Hamburguesa rica y saludable',
    quantity: 1,
    category: 'Fast-food',
    price: 15,
  },
  {
    name: 'Agua mineral',
    description: 'Agua de un charco del Himalaya',
    quantity: 2,
    category: 'Bebida',
    price: 5,
  },
];

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Menú con arrays</h1>
        <ItemList items={items} />
      </div>
    );
  }
}

export default App;
