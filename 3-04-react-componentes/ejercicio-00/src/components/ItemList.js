import React from 'react';
import Item from './Item';
import '../stylesheets/App.scss';

class ItemList extends React.Component {
  render() {
    return (
      <ul className="item-list">
        <li>
          <Item name="Cereales con chocolate" description="Cereales rellenos de chocolate" quantity={2} category="Cereales" price={5} />
        </li>
        <li>
          <Item name="Hamburguesa con queso" description="Hamburguesa rica y saludable" quantity={1} category="Fast-food" price={15} />
        </li>
        <li>
          <Item name="Ensalada César" description="Ensalada de pollo y salsa césar" quantity={1} category="Fast-food" price={15} />
        </li>
      </ul>
    );
  }
}

export default ItemList;
