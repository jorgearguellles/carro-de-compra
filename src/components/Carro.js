import { Component } from "react";
import { BubbleAlert } from './BubbleAlert';
import { DetallesCarro } from './DetallesCarro';

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

    const { carro, esCarroVisible, mostrarCarro } = this.props;
    const cantidad = carro.reduce((accumulador,productoEnCarrito) => accumulador + productoEnCarrito.cantidad, 0)

    return (
      <div>
        <span style={ styles.bubble }>
          {
            cantidad !== 0
            ? <BubbleAlert value={ cantidad } />
            : null
          }
        </span>
        <button 
          style={ styles.carro }
          onClick={mostrarCarro}
        >
          Carro
        </button>
        {
          esCarroVisible 
            ? <DetallesCarro carro={ carro } />
            : null
        }
      </div>
    )
  }
}

export { Carro };