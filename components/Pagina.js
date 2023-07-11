import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Cabecalho from './Cabecalho'
import Rodape from './Rodape'
import { Container } from 'react-bootstrap';

const Pagina = (props) => {

    return (
        <>
            <Cabecalho />
            <div className='bg-secondary text-white py-3 text-center mb-3'>
                <Container>
                <h1>{props.titulo}</h1>
                </Container>
            </div>
           
            <Container className='mb-5 pb-4' >
                {props.children}
            </Container>

            <Rodape />
        </>
    )
}

export default Pagina