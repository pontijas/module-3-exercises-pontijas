import React from 'react';

class MediaCard extends React.Component {
  render() {
    return (
      <div className="Card-container">
        <header className="Header-container">
          <img src={this.props.image} className="Header-img" alt="user avatar" />
          <section className="Header-section">
            <h1>{this.props.name}</h1>
            <p>{this.props.date}</p>
          </section>
        </header>
        <main className="Main-container">
          <p className="Main-text">{this.props.content}</p>
        </main>
        <footer className="Footer-container">
          <a className="Footer-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Leer mas...
          </a>
          <small className="small-container">
            <p>{this.props.likes}</p>
            <i className="fas fa-heart"></i>
          </small>
        </footer>
      </div>
    );
  }
}

export default MediaCard;
