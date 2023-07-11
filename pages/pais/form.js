import Pagina from '@/components/Pagina'
import Link from 'next/link';
import { useRouter } from "next/router";
import react, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BsCheckLg } from 'react-icons/bs'
import paisValidator from '@/validators/paisValidator'

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, formState: {errors} } = useForm() 
  
    function salvar(dados){
      const pais = JSON.parse(window.localStorage.getItem('pais')) || []
      pais.push(dados)
      window.localStorage.setItem('pais', JSON.stringify(pais))
      push('/pais')

    
    console.log(errors);
      
            }
            
    return (
        <Pagina titulo='Formulário'>
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>País: </Form.Label>
                    <Form.Control isInvalid = {errors.pais} type="text" {...register('pais', paisValidator.pais )} />
                    {
                        errors.pais &&
                        <small className='mt-1'>{errors.pais.message} </small>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="duracao">
                    <Form.Label>Duração: </Form.Label>
                    <Form.Control isInvalid = {errors.duracao} type="text" {...register('duracao', paisValidator.duracao)}/>
                    {
                        errors.duracao &&
                        <small className='mt-1'>{errors.duracao.message} </small>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="modalidade">
                    <Form.Label>Modalidade: </Form.Label>
                    <Form.Control isInvalid = {errors.modalidade} type="text" {...register('modalidade', paisValidator.modalidade)} />
                    {
                        errors.modalidade &&
                        <small className='mt-1'>{errors.modalidade.message} </small>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="Obejtivo">
                    <Form.Label>Objetivo: </Form.Label>
                    <Form.Control isInvalid = {errors.objetivo} type="text" {...register('objetivo', paisValidator.objetivo)} />
                    {
                        errors.obejtivo &&
                        <small className='mt-1'>{errors.objetivo.message} </small>
                    }
                </Form.Group>
            <div className='text-center'>
                <Button variant="success" onClick={handleSubmit(salvar)}>
                    <BsCheckLg className="me-2" />
                    Salvar
                </Button>
                <Link className="ms-2 btn btn-danger" href="/pais">
                <AiOutlineArrowLeft className="me-2" />
                    Voltar
                </Link>
                </div>
            </Form>
        </Pagina>
    )
}
export default form