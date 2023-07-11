import Pagina from '@/components/Pagina'
import Link from 'next/link';
import { useRouter } from "next/router";
import react, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BsCheckLg } from 'react-icons/bs'
import professorValidator from '@/validators/professorValidator'


const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, formState: {errors} } = useForm() 
  
    function salvar(dados){
      const professores = JSON.parse(window.localStorage.getItem('professores')) || []
      professores.push(dados)
      window.localStorage.setItem('professores', JSON.stringify(professores))
      push('/professores')

    
    console.log(errors);
      
            }
            
    return (
        <Pagina titulo='Formulário'>
            <Form>
                <Form.Group className="mb-3" controlId="professor">
                    <Form.Label>Professor: </Form.Label>
                    <Form.Control isInvalid = {errors.professor} type="text" {...register('professor', professorValidator.professor)} />
                    {
                        errors.professor &&
                        <small className='mt-1'>{errors.professor.message} </small>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="idioma">
                    <Form.Label>Idioma: </Form.Label>
                    <Form.Control isInvalid = {errors.idioma} type="text" {...register('idioma', professorValidator.idioma)}/>
                    {
                        errors.idioma &&
                        <small className='mt-1'>{errors.idioma.message} </small>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="modalidade">
                    <Form.Label>Modalidade: </Form.Label>
                    <Form.Control isInvalid = {errors.modalidade} type="text" {...register('modalidade', professorValidator.modalidade)} />
                    {
                        errors.modalidade &&
                        <small className='mt-1'>{errors.modalidade.message} </small>
                    }
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