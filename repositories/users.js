let {bd} = require('../databases/users')

const getUsers = () =>{
    return bd;
}

const getUsersbyId = (idUser) => {
    const user = bd.filter((usuario) => usuario.id === idUser);

}

module.exports = {
    getUsers
}