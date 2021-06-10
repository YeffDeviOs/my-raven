import React, { Component } from 'react'
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemList';



 class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <h1>Estamos para Crear Experiencias</h1>
        <Navbar title={'Home'} />
        <Navbar title={'Productos'} />
        <Navbar title={'Pedidos'} />
        <Navbar title={'News'}/>
        <CartWidget />
        <br/>
        <ItemListContainer />
      </div>
    )
  }
}

export default App;