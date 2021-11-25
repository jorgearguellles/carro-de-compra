import { Component } from "react";
import { BubbleAlert } from './BubbleAlert';

const styles = {
  carro: {
    backgroundColor: '#359A2C',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    padding: '15px',
    cursor: 'pointer',
  },
  bubble: {
    position: 'relative',
    left: '14px',
    top: '20px'
  }
}

class Carro extends Component{
  render() {
    return (
      <div>
        <span style={ styles.bubble }>
          <BubbleAlert 
            value={10}
          />
        </span>
        <button style={ styles.carro }>
          Carro
        </button>
      </div>
    )
  }
}

export { Carro };