import React from 'react';
import Item from './Item';
import '../stylesheets/App.scss';

const ItemList = (props) => {
  // console.log('holi', props.items);

  const htmlCode = props.items.map((items) => {
    return (
      <li key={items.name} className="poke-item">
        <Item items={items} />
      </li>
    );
  });

  return <ul className="item-list">{htmlCode}</ul>;
};

export default ItemList;
