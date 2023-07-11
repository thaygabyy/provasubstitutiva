import Pagina from '@/components/Pagina'
import Link from 'next/link';
import { useRouter } from "next/router";
import react, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BsCheckLg } from 'react-icons/bs'


const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, formState: {errors} } = useForm() 
  
    function salvar(dados){
      const semestre = JSON.parse(window.localStorage.getItem('semestre')) || []
      semestre.push(dados)
      window.localStorage.setItem('semestre', JSON.stringify(semestre))
      push('/semestre')

    
    console.log(errors);
      
            }
            
    return (
        <Pagina titulo='Formulário'>
            <Form>
                <Form.Group className="mb-3" controlId="materia">
                    <Form.Label>Matéria: </Form.Label>
                    <Form.Control isInvalid = {errors.materia} type="text" {...register('materia')} />
                    {
                        errors.materia &&
                        <small className='mt-1'>{errors.materia.message} </small>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="semestre">
                    <Form.Label>Semestre: </Form.Label>
                    <Form.Control isInvalid = {errors.semestre} type="text" {...register('semestre')}/>
                    {
                        errors.semestre &&
                        <small className='mt-1'>{errors.semestre.message} </small>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="modalidade">
                    <Form.Label>Modalidade: </Form.Label>
                    <Form.Control isInvalid = {errors.modalidade} type="text" {...register('modalidade')} />
                    {
                        errors.modalidade &&
                        <small className='mt-1'>{errors.modalidade.message} </small>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="turma">
                    <Form.Label>Turma: </Form.Label>
                    <Form.Control isInvalid = {errors.turma} type="text" {...register('turma')} />
                    {
                        errors.turma &&
                        <small className='mt-1'>{errors.turma.message} </small>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="sala">
                    <Form.Label>Sala: </Form.Label>
                    <Form.Control isInvalid = {errors.sala} type="text" {...register('sala')} />
                    {
                        errors.sala &&
                        <small className='mt-1'>{errors.sala.message} </small>
                    }
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