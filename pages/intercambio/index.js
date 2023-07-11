import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { AiFillPlusCircle } from "react-icons/ai"
import { FaRegTrashAlt } from "react-icons/Fa"
import { BsPencilFill } from "react-icons/bs"


const index = () => {
    const [idioma, setIdioma] = useState([]);
    

    useEffect(() => {
      setIdioma (getAll())
    }, []);
  
    function getAll(){
      return JSON.parse(window.localStorage.getItem("idioma")) || []
    }
  
    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
      const itens = getAll()
      itens.splice(id, 1)
      window.localStorage.setItem('idioma', JSON.stringify(itens))
      setIdioma(itens)
    }
}
    return (
        <>
            <Pagina titulo="Faça seu intercâmbio em 2023!">

            <Link href='/alunos/form' className='btn btn-primary' >
            <AiFillPlusCircle /> Novo
            </Link>
            {' '}
            

<img src="https://th.bing.com/th?id=OIF.pKydiHpW8%2biGBnn5jng4dQ&w=305&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="rounded float-end" alt="..."></img>
            
<img src="https://th.bing.com/th?id=OIF.pKydiHpW8%2biGBnn5jng4dQ&w=305&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="rounded float-end" alt="..."></img>
            
<img src="https://th.bing.com/th?id=OIF.pKydiHpW8%2biGBnn5jng4dQ&w=305&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="rounded float-end" alt="..."></img>
            
<img src="https://th.bing.com/th?id=OIF.pKydiHpW8%2biGBnn5jng4dQ&w=305&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="rounded float-end" alt="..."></img>
            
<img src="https://th.bing.com/th?id=OIF.pKydiHpW8%2biGBnn5jng4dQ&w=305&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="rounded float-end" alt="..."></img>
            
<img src="https://th.bing.com/th?id=OIF.pKydiHpW8%2biGBnn5jng4dQ&w=305&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="rounded float-end" alt="..."></img>
            

        </Pagina>

        </>
    )
}
export default index