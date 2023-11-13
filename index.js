const { application } = require("express")
const path = require("path")
const express = require ("express")
const app = express()

const caminhoBase = path.join(__dirname, "templates")

app.get('/cadastrar', (requisicao, resposta) => {
    resposta.sendFile(`${caminhoBase}/cadastro.html`)
})

app.get('/', (requisicao, resposta) => {
resposta.sendFile(`${caminhoBase}/index.html`)
})

app.get('/Usuario/: id',(requisicao, resposta) => {
    const id = requisicao.params.id
    console.log(`O usuario ${id} esta desaparecido`)
    resposta.sendFile(`${caminhoBase}/usuarios.html`)
})

app.listen(3000, () => {
    console.log("servidor rodando na 3000!")

})