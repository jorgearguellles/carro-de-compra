import { Component } from 'react'

const styles = {
  producto: {
    border: 'solid 1px #eee',
    borderRadius: '10px',
    boxShadow: '0 5px 5px rgb(0,0,0,0.1)',
    width: '30%',
    padding: '10px 15px',
    textAlign: 'center',
  },
  img: {
    width: '100%',
  }
};

class Producto extends Component{
  render(){
    // console.log(this.props) // Para verificar que si estamos recibiendo las porpiedades desde el componente padre
    const { producto } = this.props; // Lo destructuramos para poderlo usar de manra más legible para humanos

    return (
      <div style={ styles.producto }>
        <img style={ styles.img } alt={ producto.name } src={ producto.img } />
        <h3>{ producto.name }</h3>
        <p>{ producto.price }</p>
      </div>
    )
  }
}

export {Producto};