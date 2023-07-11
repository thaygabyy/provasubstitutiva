import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { AiFillPlusCircle } from "react-icons/ai"
import { FaRegTrashAlt } from "react-icons/Fa"
import { BsPencilFill } from "react-icons/bs"


const index = () => {
    const [professores, setProfessores] = useState([]);

    useEffect(() => {
      setProfessores (getAll())
    }, []);
  
    function getAll(){
      return JSON.parse(window.localStorage.getItem("professores")) || []
    }
  
    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
      const itens = getAll()
      itens.splice(id, 1)
      window.localStorage.setItem('professores', JSON.stringify(itens))
      setProfessores(itens)
    }
}
    return (
        <>
            <Pagina titulo="Professores">
            <Link href='/professores/form' className='btn btn-primary' >
            <AiFillPlusCircle /> Novo
            </Link>
            {' '}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th >Apagar</th>
                        <th >Professor</th>
                        <th >Idioma</th>
                        <th >Modalidade</th>
                    </tr>
                </thead>
                <tbody>
                {professores.map((item, i) => (
                    <tr key={i}>
                        <td>
                            <Link href={'/professores/' + i}>
                        <BsPencilFill title="Alterar" className="text-primary"/>
                        </Link>
                        {' '}
                        <FaRegTrashAlt onClick={()=>excluir(i)} className="text-danger" />
                        </td>
                        <td>{item.professor}</td>
                        <td>{item.idioma}</td>
                        <td>{item.modalidade}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Pagina>

        </>
    )
}

export default index