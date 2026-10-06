import { useState } from 'react'

function ConditionalRender() {
  const [x] = useState(true)
  const [name] = useState("Matheus")

  return (
    <div className="conditional-container">
      <div className="conditional-box">
        <h4>Com && (x é true):</h4>
        {x && <p>Se x for true sim!</p>}
      </div>
      <div className="conditional-box">
        <h4>Com operador ternário (name !== "João"):</h4>
        {name === "João" ? (
          <p>Nome encontrado!</p>
        ) : (
          <p>Nome não encontrado!</p>
        )}
      </div>
    </div>
  )
}

export default ConditionalRender
