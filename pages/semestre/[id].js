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
        const semestre = JSON.parse(window.localStorage.getItem('semestre'))
        const curso = semestre[id]

        for(let atributo in curso){
            setValue(atributo, curso[atributo])
        }
    } 
      }, [query.id])
     
    function salvar(dados){
      const semestre = JSON.parse(window.localStorage.getItem('semestre')) || []
      semestre.splice(query.id, 1, dados)
      window.localStorage.setItem('semestre', JSON.stringify(semestre))
      push('/semestre')

    }

    return (
        <Pagina titulo='Formulário'>
            <Form>
                <Form.Group className="mb-3" controlId="matéria">
                    <Form.Label>Matéria: </Form.Label>
                    <Form.Control type="text" {...register('materia')} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="semestre">
                    <Form.Label>Semestre: </Form.Label>
                    <Form.Control type="text" {...register('semestre')}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="modalidade">
                    <Form.Label>Modalidade: </Form.Label>
                    <Form.Control type="text" {...register('modalidade')} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="objetivo">
                    <Form.Label>Turma: </Form.Label>
                    <Form.Control type="text" {...register('objetivo')} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Sala">
                    <Form.Label>Sala: </Form.Label>
                    <Form.Control type="text" {...register('sala')} />
                </Form.Group>
            <div className='text-center'>
                <Button variant="success" onClick={handleSubmit(salvar)}>
                    <BsCheckLg className="me-2" />
                    Salvar
                </Button>
                <Link className="ms-2 btn btn-danger" href="/semestre">
                <AiOutlineArrowLeft className="me-2" />
                    Voltar
                </Link>
                </div>
            </Form>
        </Pagina>
    )
}
export default form