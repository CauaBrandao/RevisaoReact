import { useState } from 'react'
import './App.css'

// Imagem importada de src/assets
import City from './assets/city.jpg'

// Componentes
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragment from './components/Fragment'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import MessageState from './components/MessageState'
import ChangeMessageState from './components/ChangeMessageState'

function App() {
  // Lifting state up — message fica no App porque dois componentes precisam acessar
  const [message, setMessage] = useState("")

  function handleMessage(msg) {
    setMessage(msg)
  }

  // Função criada no pai para ser enviada ao filho via props
  function showMessage() {
    console.log("Evento do componente pai!")
  }

  // Array de carros para renderização dinâmica
  const cars = [
    { id: 1, brand: "Ford", km: 10000, color: "Azul" },
    { id: 2, brand: "VW", km: 535, color: "Vermelho" },
    { id: 3, brand: "Fiat", km: 0, color: "Branco" },
    { id: 4, brand: "Ferrari", km: 0, color: "Amarelo" },
    { id: 5, brand: "Renault", km: 32200, color: "Azul" },
  ]

  return (
    <div className="App">
      <h1>Seção 3</h1>

      {/* Fase 2 — Imagens: public vs src/assets */}
      <div className="images">
        {/* Imagem de src/assets — importada via JavaScript */}
        <img src={City} alt="Cidade cyberpunk" />
        {/* Imagem de public — caminho direto */}
        <img src="/img1.jpg" alt="Paisagem futurista" />
      </div>

      {/* Gerenciamento de Dados */}
      <p className="section-title">Gerenciamento de Dados</p>
      <ManageData />

      {/* Renderização de Listas e Condicional lado a lado */}
      <div className="two-columns">
        <div>
          <p className="section-title">Renderização de Listas</p>
          <ListRender />
        </div>
        <div>
          <p className="section-title">Renderização Condicional</p>
          <ConditionalRender />
        </div>
      </div>

      {/* Props */}
      <div className="props-section">
        <div>
          <p className="section-title">Props - Simples</p>
          <ShowUserName name="Matheus" />
        </div>
        <div>
          <p className="section-title">Props - Destructuring e Reutilização</p>
          <div className="car-details-grid">
            {cars.map((car) => (
              <CarDetails
                key={car.id}
                brand={car.brand}
                km={car.km}
                color={car.color}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fragment, Children e Função como Prop */}
      <div className="children-section">
        <div>
          <p className="section-title">Fragment</p>
          <div className="fragment-container">
            <Fragment />
          </div>
        </div>
        <div>
          <p className="section-title">Children (prop especial)</p>
          <Container>
            <p>Eu sou do componente superior</p>
          </Container>
          <Container>
            <p>Eu também</p>
          </Container>
        </div>
        <div>
          <p className="section-title">Função como Prop (Evento)</p>
          <ExecuteFunction myFunction={showMessage} />
        </div>
      </div>

      {/* Lifting State Up */}
      <p className="section-title">Lifting State Up (State compartilhado)</p>
      <div className="lifting-state-container">
        <MessageState message={message} />
        <ChangeMessageState handleMessage={handleMessage} />
      </div>
    </div>
  )
}

export default App
