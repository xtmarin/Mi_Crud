let usuarios = [];

const getAll = () => usuarios;

const getById = (id) => {
    return usuarios[id];
};

const create = (user) => {
    usuarios.push(user);
    return user;
};

const update = (id, data) => {
    if (!usuarios[id]) return null;

    usuarios[id] = data;
    return usuarios[id];
};

const remove = (id) => {
    if (!usuarios[id]) return null;

    usuarios.splice(id, 1);
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};