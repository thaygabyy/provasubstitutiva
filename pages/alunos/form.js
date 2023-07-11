import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from "next/router"
import react, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BsCheckLg } from 'react-icons/bs'
import { mask } from 'remask'

const form = () => {



    const { push } = useRouter()
    const { register, handleSubmit, setValue } = useForm()
  
    function salvar(dados){
      
        axios.post('/api/alunos/', dados)
        push('/alunos')

    }
    function handleChange(event) {
        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute('mask')

        setValue(name, mask(valor, mascara));
    }


    return (
        <Pagina titulo='Aluno'>
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" {...register('nome')} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="endereco">
                    <Form.Label>Endereço: </Form.Label>
                    <Form.Control
                    
                    mask='ssssssssssssssss'
                    maxLength={14} 
                    type="text" {...register('endereco', )} 
                    onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="dt_nascimento">
                    <Form.Label>Data de Nascimento: </Form.Label>
                    <Form.Control 
                    
                    mask='99/99/9999'
                    maxLength={10}
                    type="text" {...register('dt_nascimento')} 
                    onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control 
                    mask='SSSSS.SSSS@SSSSSSS.SSSS'
                    maxLength={30}
                    type="text" {...register('email')}
                    onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="celular">
                    <Form.Label>Celular: </Form.Label>
                    <Form.Control 
                    mask='(99) 99999-9999'
                    type="text" {...register('celular')}
                    onChange={handleChange}/>
                </Form.Group>
            <div className='text-center'>
                <Button variant="success" onClick={handleSubmit(salvar)}>
                    <BsCheckLg className="me-2" />
                    Salvar
                </Button>
                <Link className="ms-2 btn btn-danger" href="/alunos">
                <AiOutlineArrowLeft className="me-2" />
                    Voltar
                </Link>
                </div>
            </Form>
        </Pagina>
    )
}
export default form