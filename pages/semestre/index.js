import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { AiFillPlusCircle } from "react-icons/ai"
import { FaRegTrashAlt } from "react-icons/Fa"
import { BsPencilFill } from "react-icons/bs"


const index = () => {
    const [semestre, setSemestre] = useState([]);

    useEffect(() => {
      setSemestre (getAll())
    }, []);
  
    function getAll(){
      return JSON.parse(window.localStorage.getItem("semestre")) || []
    }
  
    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
      const itens = getAll()
      itens.splice(id, 1)
      window.localStorage.setItem('semestre', JSON.stringify(itens))
      setSemestre(itens)
    }
}
    return (
        <>
            <Pagina titulo="Semestre">
            <Link href='/semestre/form' className='btn btn-primary' >
            <AiFillPlusCircle /> Novo
            </Link>
            {' '}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th >Apagar</th>
                        <th >Matéria</th>
                        <th >Semestre</th>
                        <th >Modalidade</th>
                        <th >Turma</th>
                        <th >Sala</th>
                    </tr>
                </thead>
                <tbody>
                {semestre.map((item, i) => (
                    <tr key={i}>
                        <td>
                            <Link href={'/semestre/' + i}>
                        <BsPencilFill title="Alterar" className="text-primary"/>
                        </Link>
                        {' '}
                        <FaRegTrashAlt onClick={()=>excluir(i)} className="text-danger" />
                        </td>
                        <td>{item.materia}</td>
                        <td>{item.semestre}</td>
                        <td>{item.modalidade}</td>
                        <td>{item.turma}</td>
                        <td>{item.sala}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Pagina>

        </>
    )
}

export default index