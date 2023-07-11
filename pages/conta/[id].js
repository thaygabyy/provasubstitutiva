import Pagina from '@/components/Pagina'
import Link from 'next/link';
import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BsCheckLg } from 'react-icons/bs'

const form = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue } = useForm()
  
    useEffect(() => {

        if(query.id){

        const id = query.id
        const conta = JSON.parse(window.localStorage.getItem('conta'))
        const curso = conta[id]

        for(let atributo in curso){
            setValue(atributo, curso[atributo])
        }
    } 
      }, [query.id])
     
    function salvar(dados){
      const conta = JSON.parse(window.localStorage.getItem('conta')) || []
      conta.splice(query.id, 1, dados)
      window.localStorage.setItem('conta', JSON.stringify(conta))
      push('/conta')

    }

    return (
        <Pagina titulo='Formulário'>
            <Form>
                <Form.Group className="mb-3" controlId="descricao">
                    <Form.Label>Descrição: </Form.Label>
                    <Form.Control type="text" {...register('descricao')} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="tipo">
                    <Form.Label>Tipo: </Form.Label>
                    <Form.Control type="text" {...register('tipo')}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="valor">
                    <Form.Label>Valor: </Form.Label>
                    <Form.Control type="text" {...register('valor')} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="dt_vencimento">
                    <Form.Label>Data de vencimento: </Form.Label>
                    <Form.Control type="text" {...register('Data de vencimento')} />
                </Form.Group>
            <div className='text-center'>
                <Button variant="success" onClick={handleSubmit(salvar)}>
                    <BsCheckLg className="me-2" />
                    Salvar
                </Button>
                <Link className="ms-2 btn btn-danger" href="/conta">
                <AiOutlineArrowLeft className="me-2" />
                    Voltar
                </Link>
                </div>
            </Form>
        </Pagina>
    )
}
export default form