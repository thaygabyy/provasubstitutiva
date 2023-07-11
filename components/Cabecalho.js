import { Racing_Sans_One } from 'next/font/google'
import Link from 'next/link'
import react from 'react'
import { Container, Nav, Navbar, } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/intercambio">Intercâmbio</Navbar.Brand>
          <Nav className="me-auto">
            <Link className='nav-link' href="/conta">Conta</Link>
            <Link className='nav-link' href="/pais">Países</Link>
            <Link className='nav-link' href="/alunos">Alunos</Link>
            <Link className='nav-link' href="/professores">Professores</Link>
            <Link className='nav-link' href="/semestre">Semestre</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho