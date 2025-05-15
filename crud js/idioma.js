'use scrict'

async function postInserirIdioma(idioma){
   
    const url = 'http://localhost:8080/v1/controle-idioma/idioma'
    const options = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(idioma)
    }
    const response = await fetch(url, options)

    return response.ok
}

const novoIdioma= {
  "idioma": "Espanhol"
}

async function getListarIdioma(){
    const url = 'http://localhost:8080/v1/controle-idioma/idioma'
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function getListarIdiomaById(id){
    const url = `http://localhost:8080/v1/controle-idioma/idioma/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

async function putAtualizarIdioma(id, idioma){

      const url = `http://localhost:8080/v1/controle-idioma/idioma/${id}`
      const options = {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(idioma)
      }
      const response = await fetch(url, options)

      return response.ok
}

const AtualizarIdioma = {
  "idioma": "Ingles"
}

async function deleteIdioma(id){

      const url = `http://localhost:8080/v1/controle-idioma/idioma/${id}`
      const options = {
      method: 'DELETE',
      }
      const response = await fetch(url, options)

      return response.ok
}