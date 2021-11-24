import { Component } from 'react';
import {Productos} from './components/Productos';
import { Layout } from './components/Layout';
import { Title } from './components/Title';

class App extends Component {
  state = {
    productos: [
      { name: "Tomate", price: 1500, img: '/productos/tomate.jpg' },
      { name: "Arbejas", price: 2500, img: '/productos/arbejas.jpg' },
      { name: "Lechuga", price: 500, img: '/productos/lechuga.jpg' },
    ] 
  }

  render(){
    return (
      <Layout>
        <Title />
        <Productos 
          agregarAlCarro = { () => console.log("Producto agregado") }
          productos = { this.state.productos }
        />
      </Layout>
    )
  }
}

export default App;
