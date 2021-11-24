import { Component } from 'react'

const styles = {
  btn: {
    border:'none',
    backgroundColor: 'green',
    color:'white',
    padding: '15px 20px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '18px',
  },
}

class Button extends Component{
  render(){
    return (
      <button style={styles.btn} { ...this.props} /> // Spread Operator para pasar todas las propiedades que se les pasa al botón desde el padre
    )
  }
}

export {Button};