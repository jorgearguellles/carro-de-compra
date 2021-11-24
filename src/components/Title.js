import { Component } from "react";

const styles = {
  title: {
    marginBottom: '30px',
  }
}
class Title extends Component{
  render(){
    return (
      <h1 style={StyleSheet.title}>Tienda</h1>
    )
  }
}

export { Title };