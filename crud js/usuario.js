'use scrict'

async function postInserirUsuario(usuario){
    
    const url = 'http://localhost:8080/v1/controle-usuario/usuario'
    const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(usuario)
    }
    const response = await fetch(url, options)

    return response.ok
}

const novoUsuario = {
    "idade": 20,
    "data_inscricao": "2025-05-06",
    "nome": "Gabriel Silva"
}

async function getListarUsuario(){
    const url = 'http://localhost:8080/v1/controle-usuario/usuario'
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function getListarUsuarioById (id){
    const url = `http://localhost:8080/v1/controle-usuario/usuario/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

async function putAtualizarUsuario(id, usuario){

    const url = `http://localhost:8080/v1/controle-usuario/usuario/${id}`
    const options = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(usuario)
    }
    const response = await fetch(url, options)

    return response
}

const AtualizarUsuario = {
    "idade": 23,
    "data_inscricao": "2025-05-06",
    "nome": "Gabriel Silva"
}

async function deleteUsuario(id){

    const url = `http://localhost:8080/v1/controle-idioma/idioma/${id}`
    const options = {
    method: 'DELETE',
    }
    const response = await fetch(url, options)

    return response.ok
}