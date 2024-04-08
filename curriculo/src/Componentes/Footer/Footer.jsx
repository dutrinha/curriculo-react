function Footer() {
  return (
    <footer>
    <div className="topicofooter" id="contato">
        <h1 className="azul">Contato</h1>
        <br/>
        <form className="form">
            <label className="azul">Nome:</label>
            <input type="text" id="nome" name="nome"/>
            <br/>
            <label className="azul">E-Mail: </label>
            <input type="text" id="email" name="email"/>
            <br/>
            <input type="submit" className="botaosubmit" value="Submit"/>
        </form>
    </div>
    </footer>
  )
}

export default Footer