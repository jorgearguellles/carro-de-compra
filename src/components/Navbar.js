import React, { Component } from 'react'

const styles = {
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center', // Cómo esta row, lo centra de manera vertical
    height:'100px',
    justifyContent: 'space-between',
    position: 'relative', // Esta posición la vamos a usar más adelanta pra mostar el carrito counter
    padding: '0 50px',
    boxShadow: '0 2px 3px rgb(0,0,0,0.1)'
  }
}

class Navbar extends Component {
  render() {
    return (
      <nav style={ styles.navbar }>
        <p>Logo</p>
        <p>Carro</p>
      </nav>
    )
  }
}

export { Navbar };

