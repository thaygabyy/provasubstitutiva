const contaValidator = {
    descricao: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 3,
            message: 'O minimo é 3'
        },
        maxLength: {
            value: 100,
            message: 'O máximo é 100'
        },
    },
    tipo: {
        required: 'Campo Obrigatório',
        maxLength: {
            value: 10,
            message: 'O máximo é 10'
        },
        min: {
            value: 2.5,
            message:'O valor mínimo é 2.5'
        },
        max: {
            value: 10,
            message: 'O valor máximo é 10'
        },
    },
    valor: {
        required: 'Campo Obrigatório',
        maxLength: {
            value: 1000,
            message: 'O máximo é 1000'
        },
    },
    dt_vencimento: {
        required: 'Campo Obrigatório',
        maxLength: {
            value: 10,
            message: 'O máximo é 10'
        },
    }
}


 export default contaValidator