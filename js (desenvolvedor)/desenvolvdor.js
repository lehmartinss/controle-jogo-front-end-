'use scrict'


async function  postInserirDesenvolvedor (desenvolvedor){
    const url = 'http://localhost:8080/v1/controle-desenvolvedores/desenvolvedor'
    const options = {
        method: 'POST',
        headers: {
         'Content-Type': 'application/json'

        },
        body: JSON.stringify(desenvolvedor)
    }
        const response = await fetch (url, options)
        return response.ok 
}

const novoDesenvolvedor= {

   "nome": " Diego Costa",
   "email": "diego@costa",
   "cargo": "Full Stack"
    
}   

console.log(postInserirDesenvolvedor(novoDesenvolvedor))


async function  getRetornarLista(desenvolvedor){
    const url = 'http://localhost:8080/v1/controle-desenvolvedores/desenvolvedor'
    const response = await fetch(url)
    const data = await response.json()
    console.log (data)
    return data
}

async function  getRetornarDesenvolvedor (id){
    const url = ` http://localhost:8080/v1/controle-desenvolvedores/desenvolvedor${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log (data)
    return data
}

async function deleteApagarDesenvolvedor(id){
    const url = `http://localhost:8080/v1/controle-desenvolvedores/desenvolvedor${id}`
    const options= {
        method: 'DELETE'
    }
        const response = await fetch (url, options)
        return response.ok 
}

async function  putAtualizarDesenvolvedor(id, desenvolvedor){
    const url = `http://localhost:8080/v1/controle-desenvolvedores/desenvolvedor${id}`
    const options = {
        method: 'PUT',
        headers: {
         'Content-Type': 'application/json'
        },
        body: JSON.stringify(desenvolvedor)
    }
        const response = await fetch (url, options)
        return response.ok 
}

const AtualizarDesenvolvedor =  {

"nome": " Diego Costa",
"email": "diego@costa",
"cargo": "Desenvolvedor Full Stack"
 
}  

console.log(putAtualizarDesenvolvedor(1, AtualizarDesenvolvedor))