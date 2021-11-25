import { Component } from "react";

const styles = {
  bubbleAlert: {
    backgroundColor: '#E9725A',
    color: '#fff',
    borderRadius: '15px',
    padding: '2px 10px',
    fontSize: '0.9rem',
    width: '20px',
  }
}

class BubbleAlert extends Component{

  getNumber(n){ // Cunción para mostrar la cantidad de articulos agregados al carrito. hasta 9, Si es mayor a nueve muestra 9+
    if(!n) { return ' ' };
    return n > 9 ? '9+' : n ;
  };

  render() {
    console.log(this.props)
    const { value } = this.props;

    return (
      <span style={ styles.bubbleAlert}>
        {
          this.getNumber(value)
        }
      </span>
    )
  }
}

export { BubbleAlert };