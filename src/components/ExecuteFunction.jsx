function ExecuteFunction({ myFunction }) {
  return (
    <div className="execute-function">
      <button onClick={myFunction}>Clique em mim (função do pai)</button>
      <p>(Abra o console para ver o log do evento do pai)</p>
    </div>
  )
}

export default ExecuteFunction
