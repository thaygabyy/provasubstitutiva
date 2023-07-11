import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { AiFillPlusCircle } from "react-icons/ai"
import { FaRegTrashAlt } from "react-icons/Fa"
import { BsPencilFill } from "react-icons/bs"
import axios from 'axios'


const index = () => {
    const [aluno, setAluno] = useState([]);

    useEffect(() => {
      setAluno (getAll())
    }, []);
  
    function getAll(){
      return JSON.parse(window.localStorage.getItem("aluno")) || []
    }
  
    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
      const itens = getAll()
      itens.splice(id, 1)
      window.localStorage.setItem('aluno', JSON.stringify(itens))
      setAluno(itens)
    }
}
    return (
        <>
            <Pagina titulo="Aluno">
            <Link href='/alunos/form' className='btn btn-primary' >
            <AiFillPlusCircle /> Novo
            </Link>
            {' '}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th >Apagar</th>
                        <th >Nome</th>
                        <th >CPF</th>
                        <th >Data de Nasc.</th>
                        <th >Email</th>
                        <th >Telefone</th>
                    </tr>
                </thead>
                <tbody>
                {aluno.map((item, i) => (
                    <tr key={i}>
                        <td>
                            <Link href={'/alunos/' + i}>
                        <BsPencilFill title="Alterar" className="text-primary"/>
                        </Link>
                        {' '}
                        <FaRegTrashAlt onClick={()=>excluir(i)} className="text-danger" />
                        </td>
                        <td>{item.nome}</td>
                        <td>{item.endereco}</td>
                        <td>{item.dt_nascimento}</td>
                        <td>{item.email}</td>
                        <td>{item.celular}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Pagina>

        </>
    )
}

export default index