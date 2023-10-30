const express = require('express')
//passar uma informação do express para a constante
const userRepositories = require('./repositories/users')
const app = express()
const port = 3000
app.use(express.json());
//simulando um banco de dados em memória usando let
//usando let pois ele pode ser alterado > se fosse const o bd não poderia ser alterado;
//bd = data bases

//get= retornar alguma coisa para o usuario 
//o get user cria o acesso aos usuarios
app.get('/users', (request, response) => {
  response.json(userRepositories.getUsers());
  //request > receber um pedido do usuario > response = A "response" é a resposta enviada
  // pelo servidor ao cliente após processar a "request".
  // Ela contém informações sobre o resultado da ação solicitada e quaisquer dados
  // associados a essa resposta.
})

app.get('/users/:id', (request, response) =>{
  
   // pegar o id da requisição
  const idUser = request.params.id;

  // encontrar o usuario correspondente no bd,
  const user = bd.filter((usuario) => usuario.id === idUser);
  response.json(userRespository.getUserById(idUser));
  
 // filter > aplicar uma condição e acessar de forma direta ao id.
 //filter tambem é uma forma de retornar somente um usuario
  // responder a req com as infos do user 
  response.json(user);
})
//post = mapeamos especifico a uma rota.
//usamos tambem para enviar ums informação para o processamento
//ele vai receber tambem 2 funções o r request e response 
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
//patch= uso quando quero fazer uma att em uma parte especifica ou fazer
//uma att parcial
//economizando no servidor gastando menos, onde consigo fazer att mais precisas
//Isso é especialmente útil em casos em que os recursos são grandes ou quando
// você deseja evitar atualizações concorrentes em recursos compartilhados.
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
  
//iniciar um servidor web em uma maquina host 
//A função app.listen é essencial para qualquer aplicação web, pois é responsável 
//por tornar a aplicação acessível na rede e lidar com as requisições dos clientes,
// permitindo que os usuários interajam com a aplicação por meio da web.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


