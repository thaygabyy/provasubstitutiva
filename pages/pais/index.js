import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { AiFillPlusCircle } from "react-icons/ai"
import { FaRegTrashAlt } from "react-icons/Fa"
import { BsPencilFill } from "react-icons/bs"


const index = () => {
    const [pais, setPais] = useState([]);

    useEffect(() => {
      setPais (getAll())
    }, []);
  
    function getAll(){
      return JSON.parse(window.localStorage.getItem("pais")) || []
    }
  
    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
      const itens = getAll()
      itens.splice(id, 1)
      window.localStorage.setItem('pais', JSON.stringify(itens))
      setPais(itens)
    }
}
    return (
        <>
            <Pagina titulo="País">
            <Link href='/pais/form' className='btn btn-primary' >
            <AiFillPlusCircle /> Novo
            </Link>
            {' '}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th >Apagar</th>
                        <th >País</th>
                        <th >Duração</th>
                        <th >Modalidade</th>
                        <th >Objetivo</th>
                    </tr>
                </thead>
                <tbody>
                {pais.map((item, i) => (
                    <tr key={i}>
                        <td>
                            <Link href={'/pais/' + i}>
                        <BsPencilFill title="Alterar" className="text-primary"/>
                        </Link>
                        {' '}
                        <FaRegTrashAlt onClick={()=>excluir(i)} className="text-danger" />
                        </td>
                        <td>{item.pais}</td>
                        <td>{item.duracao}</td>
                        <td>{item.modalidade}</td>
                        <td>{item.objetivo}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Pagina>

        </>
    )
}

export default index