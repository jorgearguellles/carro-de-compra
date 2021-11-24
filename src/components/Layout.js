import { Component } from "react";

const styles = {
  layout: {
    backgroundColor: '#fff',
    color: '#0A283E',
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',
  },
  container: {
    width: '1200px',
  }
}
class Layout extends Component{
  render(){
    return (
      <div style={ styles.layout } > { /*En este div centramos todo el contenido */ }
        <div style={ styles.container }> { /*En este div le damos un ancho maximo de 1200px */ }
          { this.props.children }
        </div>
      </div>
    )
  }
}

export {Layout};