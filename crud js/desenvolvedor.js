'use scrict'

async function postInserirDesenvolvedor(desenvolvedor){
    
    const url = 'http://localhost:8080/v1/controle-desenvolvedores/desenvolvedor'
    const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(desenvolvedor)
    }
    const response = await fetch(url, options)

    return response.ok
}

const novoDesenvolvedor = {

    "nome": " Pedro Pereira",
    "email": "pedro@pereira",
    "cargo": "Full Stack"
}

async function getListarDesenvolvedor(){
    const url = 'http://localhost:8080/v1/controle-desenvolvedores/desenvolvedor'
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function getListarDesenvolvedorById (id){
    const url = `http://localhost:8080/v1/controle-desenvolvedores/desenvolvedor/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

async function putAtualizarDesenvolvedor(id, desenvolvedor){

    const url = `http://localhost:8080/v1/controle-desenvolvedores/desenvolvedor/${id}`
    const options = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(desenvolvedor)
    }
    const response = await fetch(url, options)

    return response
}

const AtualizarDesenvolvedor = {

    "nome": " Pedro Pereira",
    "email": "pedro@pereira",
    "cargo": " Back-End"
}

async function deleteDesenvolvedor(id){

    const url = `http://localhost:8080/v1/controle-desenvolvedores/desenvolvedor/${id}`
    const options = {
    method: 'DELETE',
    }
    const response = await fetch(url, options)

    return response.ok
}