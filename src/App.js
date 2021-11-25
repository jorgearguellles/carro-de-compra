import { Component } from 'react';
import {Productos} from './components/Productos';
import { Layout } from './components/Layout';
import { Title } from './components/Title';
import { Navbar } from './components/Navbar';

class App extends Component {
  state = {
    productos: [
      { name: "Tomate", price: 1500, img: '/productos/tomate.jpg' },
      { name: "Arbejas", price: 2500, img: '/productos/arbejas.jpg' },
      { name: "Lechuga", price: 500, img: '/productos/lechuga.jpg' },
    ],
    carro: [
      // { name: "Tomate", price: 1500, img: '/productos/tomate.jpg', cantidad: 1 } -> Estructura de datos del estado del carrito de compra
    ],
    esCarroVisible: false,
  }

  agregarAlCarro = (producto) => { //Usamos fatArrowFunction para evitar el problema del camnio del this
    // console.log(producto); // Para asegurarnos que estamos recibiendo nuestro producto
    const { carro } = this.state;

    if(carro.find( prodEnCarro => prodEnCarro.name === producto.name)){ // Si el producto agregado al carro ya existe en el carrito de compra
      const newCarro = carro.map( prodEnCarro => prodEnCarro.name === producto.name 
        ? ({
          ...prodEnCarro,
          cantidad: prodEnCarro.cantidad + 1
        })
        : prodEnCarro)
        return this.setState({ carro: newCarro })
    };

    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    })
  };

  mostrarCarro = () => {
    if(!this.state.carro.length){ // Para mostrar el producto en carrito sol cuando se halla añadido alguno, no cuando este vacio y se deje acivado
      return 
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible })
  };

  render(){
    // console.log(this.state.carro);
    const { esCarroVisible } = this.state;

    return (
      <div>
        <Navbar 
          carro={ this.state.carro }
          esCarroVisible={esCarroVisible}
          mostrarCarro={this.mostrarCarro}
        />
        <Layout>
          <Title />
          <Productos 
            agregarAlCarro = { this.agregarAlCarro }
            productos = { this.state.productos }
            />
        </Layout>
      </div>
    )
  }
}

export default App;
