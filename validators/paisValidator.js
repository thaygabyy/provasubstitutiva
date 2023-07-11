const paisValidator = {
    nome: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 3,
            message: 'O minimo é 3'
        },
        maxLength: {
            value: 10,
            message: 'O máximo é 10'
        },
    },
    duracao: {
        required: 'Campo Obrigatório',
        maxLength: {
            value: 3,
            message: 'O máximo é 3'
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
    modalidade: {
        required: 'Campo Obrigatório',
        maxLength: {
            value: 10,
            message: 'O máximo é 10'
        },
    }
}

 export default paisValidator