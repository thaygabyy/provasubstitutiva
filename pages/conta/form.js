import Pagina from '@/components/Pagina'
import Link from 'next/link';
import { useRouter } from "next/router";
import react, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BsCheckLg } from 'react-icons/bs'
import contaValidator from '@/validators/contaValidator'

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, formState: {errors} } = useForm() 
  
    function salvar(dados){
      const conta = JSON.parse(window.localStorage.getItem('conta')) || []
      conta.push(dados)
      window.localStorage.setItem('conta', JSON.stringify(conta))
      push('/conta')

    
    console.log(errors);
      
            }
            
    return (
        <Pagina titulo='Formulário'>
            <Form>
                <Form.Group className="mb-3" controlId="descricao">
                    <Form.Label>Descrição: </Form.Label>
                    <Form.Control isInvalid = {errors.descricao} type="text" {...register('descricao', contaValidator.descricao)} />
                    {
                        errors.descricao &&
                        <small className='mt-1'>{errors.descricao.message} </small>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="tipo">
                    <Form.Label>Tipo: </Form.Label>
                    <Form.Control isInvalid = {errors.tipo} type="text" {...register('tipo', contaValidator.tipo)}/>
                    {
                        errors.tipo &&
                        <small className='mt-1'>{errors.tipo.message} </small>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="valor">
                    <Form.Label>Valor: </Form.Label>
                    <Form.Control isInvalid = {errors.valor} type="text" {...register('valor', contaValidator.valor)} />
                    {
                        errors.valor &&
                        <small className='mt-1'>{errors.valor.message} </small>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="dt_vencimento">
                    <Form.Label>Data de vencimento: </Form.Label>
                    <Form.Control isInvalid = {errors.dt_vencimento} type="text" {...register('dt_vencimento', contaValidator.dt_vencimento)} />
                    {
                        errors.dt_vencimento &&
                        <small className='mt-1'>{errors.dt_vencimento.message} </small>
                    }
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