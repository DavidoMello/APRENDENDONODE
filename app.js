const express = require('express')
const app = express()
const port = 3000
app.use(express.json());

let bd = [
    {
        id: "1",
        name: "felippe"
    },
    {
        id: "2",
        name: "bruna"
    }
    
]

app.get('/users', (request, response) => {
  response.json(bd);
})

app.get('/users/:id', (request, response) =>{
  
   // pegar o id da requisição
  const idUser = request.params.id;

  // encontrar o usuario correspondente no bd,
  const user = bd.filter((usuario) => usuario.id === idUser);
 
  // responder a req com as infos do user 
  response.json(user);
})

app.post("/users", (request, response) =>{
  // pegar o corpo da requisição 
  const body = request.body;

  // criar um novo objeto a partir desse corpo
  const newUser = {
    id: (bd.length+1).toString(),
    name: body.name
  }

  // add esse novo objeto no banco
  bd.push(newUser);

  // responder a req com o banco completo
  response.json(bd);

})


app.delete("/users/:id", (request, response) =>{
  // pegar o id da req 
  const idUser = request.params.id
  
  // percorrer o banco e encontrar quem tem o id da req
  bd = bd.filter((usuario) => usuario.id != idUser);
  
  // deletar o condenadno
  

  // responder com o meu banco att
  response.json(bd);
})
app.patch("/users/:id", (request, response)=>{
  // pegar o id da req 
  const idUser = request.params.id;
  
  // pegar o corpo da req 
  const body = request.body;
  
  // percorrer o banco
  bd = bd.map((usuario) => { 
    if(usuario.id === idUser){
      //atualizar as informaçoes
      usuario.name = body.name;
    }
    return usuario;
  })
  
  // responder a req com o banco
  response.json(bd);
  
})
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


