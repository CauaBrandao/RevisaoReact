import { useState } from 'react'

function ManageData() {
  // Variável comum - NÃO dispara re-render
  let varComum = 10

  // State - DISPARA re-render
  const [stateValue, setStateValue] = useState(15)

  function changeVar() {
    varComum = 15
    console.log("Variável comum alterada para: " + varComum)
  }

  function changeState() {
    setStateValue(20)
  }

  return (
    <div className="manage-data-container">
      <div className="data-box">
        <p>Variável comum (não dispara re-render)</p>
        <p>Valor: {varComum}</p>
        <button onClick={changeVar}>Mudar variável para 15 (não atualiza a UI)</button>
      </div>
      <div className="data-box">
        <p>State (dispara re-render)</p>
        <p>Valor: {stateValue}</p>
        <button onClick={changeState}>Mudar state para 20 (atualiza a UI)</button>
      </div>
    </div>
  )
}

export default ManageData
