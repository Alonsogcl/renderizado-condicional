import React, { Component } from 'react'
import cars from './data/cars.json';
//import ConditionalSection from './sections/conditional'
import ConditionalSectionPractico from './sections/conditionalLogin'
import logo from './logo.svg';
import './App.css';

class CarItem extends Component {
  render() {
    const { car, id } = this.props

    return (
      <li>{/* <li key={car.id}> La key no debe ir aquí, debe ir dentro del componente que estamos listando*/}
        {/*<p>Key:{key}</p>La Key no es accesible desde nuestro componente */}
        <p>Key:{id}</p> {/*Si queremos usar el valor de la key se asigna el mismo valor a otra prop con otro nombre */}
        <p><strong>Nombre:</strong>{car.name}</p>
        <p><strong>Marca:</strong>{car.company}</p>
      </li>
    )
  }
}

function App() {
  const numbers = [1, 1, 3, 4, 5]
  return (
    <div className="App">
      <h4>Trabajando con listas con objetos</h4>
      <ul>
        {
          cars.map(car => { //Se transformará cada objeto en el nuevo componente CarItem
            return <CarItem id={car.id} key={car.id} car={car} />
            /*Este list item se convierte en un componente
            <li key={car.id}>
              <p><strong>Nombre:</strong>{car.name}</p>
              <p><strong>Marca:</strong>{car.company}</p>
            </li>*/
          })
        }
      </ul>

      <h4>Trabajando con Listas</h4>
      {numbers.map((number, index) => {
        {/*numbers.map(number => {*/ }
        //return <p>Soy el número {number}</p>
        return <p key={index}> Soy el número {number}</p>
        //return <p key={number}> Soy el número {number}</p>
      })}

      {/*<ConditionalSection/>*/}
      <ConditionalSectionPractico />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
