'use scrict'


async function  postInserirJogo (jogo){
    const url = '/v1/controle-jogos/jogo'
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
    "nome": "Marío Bross",
    "data_lancamento": "1986-06-03",
    "versao": "1.0",
    "tamanho": "500KB",
    "descricao": "Jogos bem legal para diversão",
    "foto_capa": "http://foto.jnp",
    "link": "http://downloadJogo.zip"
}   