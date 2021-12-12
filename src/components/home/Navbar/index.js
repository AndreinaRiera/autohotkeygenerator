import Swal from 'sweetalert2'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function MainNavbar() {

  const fireMsg = () => {
    Swal.fire({
      title            : '¡Es cierto, mira!',
      icon             : 'question',
      confirmButtonText: 'oh, es cierto. Gracias',
      html             : `1 minuto cada hora * 24 horas al dia = <strong>24 minutos</strong> <br> 
        * 365 dias del año = <strong>8.760 minutos</strong> <br> 
        / 60 minutos cada hora = <strong>146 horas</strong>`
      
    })
  };


  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" id="main_navbar" variant="dark">
      <Navbar.Brand href="#home">AutoHotKeyFan</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#Generator" className="scroll">
          Generador
          </Nav.Link>
          <Nav.Link href="#contact" className="scroll">
            Contactos
          </Nav.Link>
        </Nav>
        <Nav>
          <Navbar.Text className="pointer" onClick={fireMsg}>
            Un minuto ahorrado cada hora, son 146 horas al año 
          </Navbar.Text>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#Generator">AutoHotKeyFan</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Scroll className="nav-link active" to="#Generator">Generador</Scroll>
            </li>
            <li className="nav-item">
              <Scroll className="nav-link" to="#contact">Contactos</Scroll>
            </li>
          </ul>
          <span className="navbar-text">
            <span className="pointer" onClick={fireMsg}>Un minuto ahorrado cada hora, son 146 horas al año </span> 
          </span>
        </div>
      </div>
    </nav> */
