const userRespository = require("../repositories/users")

const getUsers = () => {
    return userRespository.getUsers();
}
const getUsersById = (idUser) => {
    return userRespository.getUsersbyId(idUser);
}
const createUser = (body) => {
    return userRespository.createUser(body);
}
const deleteUser = (idUser) => { 
    return userRespository.deleteUser(idUser);
}
    
const updateUser = (idUser,body) => {
    return userRespository.updateUser(idUser,body);
}

module.exports = {
    getUsers,
    getUsersById,
    createUser,
    deleteUser,
    updateUser,
}