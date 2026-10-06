function CarDetails({ brand, km, color }) {
  return (
    <div className="car-detail-card">
      <h4>Detalhes do carro:</h4>
      <ul>
        <li>Marca: {brand}</li>
        <li>Quilometragem: {km}</li>
        <li>Cor: {color}</li>
      </ul>
      {km === 0 ? <p>Carro novo</p> : <p>Carro usado</p>}
    </div>
  )
}

export default CarDetails
