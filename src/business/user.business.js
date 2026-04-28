const userData = require('../data/user.data');

const getUsers = () => {
    return userData.getAll();
};

const getUserById = (id) => {
    const user = userData.getById(id);
    if (!user) throw new Error("Usuario no encontrado");
    return user;
};

const createUser = (data) => {
    if (!data.nombre || !data.edad) {
        throw new Error("Datos incompletos");
    }

    return userData.create(data);
};

const updateUser = (id, data) => {
    if (!data.nombre || !data.edad) {
        throw new Error("Datos incompletos");
    }

    const updated = userData.update(id, data);
    if (!updated) throw new Error("Usuario no encontrado");

    return updated;
};

const deleteUser = (id) => {
    const user = userData.getById(id);
    if (!user) throw new Error("Usuario no encontrado");

    userData.remove(id);
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};