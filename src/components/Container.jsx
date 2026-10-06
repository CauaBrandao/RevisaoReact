function Container({ children }) {
  return (
    <div className="container-component">
      <h4>Conteúdo do componente pai:</h4>
      {children}
    </div>
  )
}

export default Container
