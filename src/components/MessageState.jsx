function MessageState({ message }) {
  return (
    <div className="message-state-box">
      <h4>A mensagem é: {message || "(nenhuma)"}</h4>
      <p>O estado está no componente pai (App).</p>
    </div>
  )
}

export default MessageState
