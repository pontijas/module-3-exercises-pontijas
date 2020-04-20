import React from 'react';
import MediaCard from './MediaCard';
import image1 from '../images/cris.jpeg';

class MediaList extends React.Component {
  render() {
    return (
      <ul className="List-items">
        <li>
          <MediaCard name="Flor Ayala" image="https://via.placeholder.com/150" date="Domingo 5 de Abril" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." likes={25} />
        </li>
        <li>
          <MediaCard name="Cristina Pontijas" image={image1} date="Domingo 5 de Abril" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." likes={18} />
        </li>
        <li>
          <MediaCard name="Lorena Mateo" image="https://via.placeholder.com/150" date="Domingo 5 de Abril" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." likes={37} />
        </li>
      </ul>
    );
  }
}

export default MediaList;
