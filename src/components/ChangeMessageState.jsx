function ChangeMessageState({ handleMessage }) {
  const messages = ["Oi", "Olá", "Tudo bem?"]

  return (
    <div className="change-message-box">
      <h4>Escolha uma mensagem:</h4>
      <div>
        {messages.map((msg, index) => (
          <button key={index} onClick={() => handleMessage(msg)}>
            {index + 1} - {msg}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ChangeMessageState
