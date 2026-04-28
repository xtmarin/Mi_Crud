const userBusiness = require('../business/user.business');

const getAll = (req, res) => {
    try {
        const users = userBusiness.getUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getById = (req, res) => {
    try {
        const user = userBusiness.getUserById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const create = (req, res) => {
    try {
        const user = userBusiness.createUser(req.body);
        res.json({ mensaje: "Creado", data: user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const update = (req, res) => {
    try {
        const user = userBusiness.updateUser(req.params.id, req.body);
        res.json({ mensaje: "Actualizado", data: user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const remove = (req, res) => {
    try {
        userBusiness.deleteUser(req.params.id);
        res.json({ mensaje: "Eliminado" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};