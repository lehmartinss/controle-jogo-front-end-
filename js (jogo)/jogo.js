'use scrict'


async function  postInserirJogo (jogo){
    const url = 'http://localhost:8080/v1/controle-jogos/jogo'
    const options = {
        method: 'POST',
        headers: {
         'Content-Type': 'application/json'

        },
        body: JSON.stringify(jogo)
    }
        const response = await fetch (url, options)
        return response.ok 
}

const novoJogo = {
    "nome": "Marí8888888888o Bross",
    "data_lancamento": "1986-06-03",
    "versao": "1.0",
    "tamanho": "500KB",
    "descricao": "Jogos bem legal para diversão",
    "foto_capa": "http://foto.jnp",
    "link": "http://downloadJogo.zip"
}   

console.log(postInserirJogo(novoJogo))


async function  getRetornarLista(jogo){
    const url = 'http://localhost:8080/v1/controle-jogos/jogo'
    const response = await fetch(url)
    const data = await response.json()
    console.log (data)
    return data
}

async function  getRetornarJogo (id){
    const url = ` http://localhost:8080/v1/controle-jogos/jogo/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log (data)
    return data
}

async function deleteApagarJogo(id){
    const url = `http://localhost:8080/v1/controle-jogos/jogo/deletarjogo/${id}`
    const options= {
        method: 'DELETE'
    }
        const response = await fetch (url, options)
        return response.ok 
}

async function  putAtualizarJogo (id, jogo){
    const url = `http://localhost:8080/v1/controle-jogos/jogo/${id}`
    const options = {
        method: 'PUT',
        headers: {
         'Content-Type': 'application/json'
        },
        body: JSON.stringify(jogo)
    }
        const response = await fetch (url, options)
        return response.ok 
}

const AtualizarJogo = {
    "nome": "Marío1 Bross",
    "data_lancamento": "1986-06-03",
    "versao": "1.0",
    "tamanho": "500KB",
    "descricao": "Jogos bem legal para diversão",
    "foto_capa": "http://foto.jnp",
    "link": "http://downloadJogo.zip"
}   

console.log(putAtualizarJogo(1, AtualizarJogo))