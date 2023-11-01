let { bd } = require('../databases/users')

const getUsers = () => {
    return bd;
}

const getUsersbyId = (idUser) => {
    return bd.filter((usuario) => usuario.id === idUser);
}
const createUser = (body) => {
    // criar um novo objeto a partir desse corpo
    const newUser = {
        id: (bd.length + 1).toString(),
        name: body.name
    }

    // add esse novo objeto no banco
    bd.push(newUser);

    // responder a req com o banco completo
    return newUser;
}


    const deleteUser = (idUser) => {
        bd = bd.filter((usuario) => usuario.id != idUser);
        return null;
    }

    const updateUser = (idUser, body) => {
        bd = bd.map((usuario) => { 
            if(usuario.id === idUser){
              //atualizar as informaçoes
              usuario.name = body.name;
            }
            return usuario;
          })
          return bd;
    }



    module.exports = {
        getUsers,
        getUsersbyId,
        createUser,
        deleteUser,
        updateUser
    }