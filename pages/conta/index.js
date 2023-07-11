import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { AiFillPlusCircle } from "react-icons/ai"
import { FaRegTrashAlt } from "react-icons/Fa"
import { BsPencilFill } from "react-icons/bs"


const index = () => {
    const [conta, setConta] = useState([]);

    useEffect(() => {
      setConta (getAll())
    }, []);
  
    function getAll(){
      return JSON.parse(window.localStorage.getItem("conta")) || []
    }
  
    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
      const itens = getAll()
      itens.splice(id, 1)
      window.localStorage.setItem('conta', JSON.stringify(itens))
      setConta(itens)
    }
}
    return (
        <>
            <Pagina titulo="Conta">
            <Link href='/conta/form' className='btn btn-primary' >
            <AiFillPlusCircle /> Novo
            </Link>
            {' '}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th >Apagar</th>
                        <th >Descriçao</th>
                        <th >Tipo</th>
                        <th >Valor</th>
                        <th >Data de Vencimento</th>
                    </tr>
                </thead>
                <tbody>
                {conta.map((item, i) => (
                    <tr key={i}>
                        <td>
                            <Link href={'/conta/' + i}>
                        <BsPencilFill title="Alterar" className="text-primary"/>
                        </Link>
                        {' '}
                        <FaRegTrashAlt onClick={()=>excluir(i)} className="text-danger" />
                        </td>
                        <td>{item.descricao}</td>
                        <td>{item.tipo}</td>
                        <td>{item.valor}</td>
                        <td>{item.dt_vencimento}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Pagina>

        </>
    )
}

export default index