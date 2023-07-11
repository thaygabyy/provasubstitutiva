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
        const professor = JSON.parse(window.localStorage.getItem('professores'))
        const curso = professor[id]

        for(let atributo in curso){
            setValue(atributo, curso[atributo])
        }
    } 
      }, [query.id])
     
    function salvar(dados){
      const professores = JSON.parse(window.localStorage.getItem('professores')) || []
      professores.splice(query.id, 1, dados)
      window.localStorage.setItem('professores', JSON.stringify(professores))
      push('/professores')

    }

    return (
        <Pagina titulo='Formulário'>
            <Form>
                <Form.Group className="mb-3" controlId="professor">
                    <Form.Label>Professor: </Form.Label>
                    <Form.Control type="text" {...register('professor')} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="idioma">
                    <Form.Label>Idioma: </Form.Label>
                    <Form.Control type="text" {...register('idioma')}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="modalidade">
                    <Form.Label>Modalidade: </Form.Label>
                    <Form.Control type="text" {...register('modalidade')} />
                </Form.Group>
            <div className='text-center'>
                <Button variant="success" onClick={handleSubmit(salvar)}>
                    <BsCheckLg className="me-2" />
                    Salvar
                </Button>
                <Link className="ms-2 btn btn-danger" href="/professores">
                <AiOutlineArrowLeft className="me-2" />
                    Voltar
                </Link>
                </div>
            </Form>
        </Pagina>
    )
}
export default form