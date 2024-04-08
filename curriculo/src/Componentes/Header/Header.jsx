function Header() {
    return (
        <header>
          <div className="btheader">
              <a href="#sobre"><p className="btdoheader">Sobre</p></a>
              <a href="#formacao"><p className="btdoheader">Formação</p></a>
              <a href="#objetivos"><p className="btdoheader">Objetivos</p></a>
              <a href="#contato"><p className="btdoheader">Contato</p></a>
          </div>
          <div className="fotos">
              <img src="FLORESQUERDA.png" alt=""/>
              <img className="jpd" src="JPDFBRANCO.png" alt=""/>
              <img src="FLORDIREITA.png" alt=""/>
          </div>
      </header>
    )
  }
  
  export default Header