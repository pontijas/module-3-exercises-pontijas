import React from 'react';
import '../stylesheets/App.scss';

const Item = (props) => {
  // console.log('holaa', props);

  return (
    <div>
      <h2 className="name">{props.items.name}</h2>
      <p className="text-muted">{props.items.description}</p>
      <h5 className="category">{props.items.category}</h5>
      <h5 className="quantity">Cantidad: {props.items.quantity}</h5>
      <h5 className="price">{props.items.price}€</h5>
    </div>
  );
};

export default Item;
