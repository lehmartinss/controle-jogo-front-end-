'use scrict'

async function postInserirEmpresas(empresa){
    
    const url = 'http://localhost:8080/v1/controle-empresa/empresa'
    const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(empresa)
    }
    const response = await fetch(url, options)


    return response.ok
}

const novaEmpresa = {
    "nome_empresa": "VoxelDrive",
    "email": "contato@voxeldrive",
    "cnpj": 12345678,
    "telefone": "(11) 98765-4321"
}

async function getListarEmpresas(){
    const url = 'http://localhost:8080/v1/controle-empresa/empresa'
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function getListarEmpresasById (id){
    const url = `http://localhost:8080/v1/controle-empresa/empresa/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

async function putAtualizarEmpresas(id, empresa){

    const url = `http://localhost:8080/v1/controle-empresa/empresa/${id}`
    const options = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(empresa)
    }
    const response = await fetch(url, options)

    return response
}

const AtualizarEmpresa = {
    "nome_empresa": "VoxelDrive",
    "email": "contato@voxeldrive",
    "cnpj": 12345678,
    "telefone": "(13) 98765-4321"
}

async function deleteEmpresas(id){

    const url = `http://localhost:8080/v1/controle-empresa/empresa/${id}`
    const options = {
    method: 'DELETE',
    }
    const response = await fetch(url, options)

    return response.ok
}