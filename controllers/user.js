const { UserModel } = require("../models/User.model");

const user = async(req, res)=> {
    try{
    const { name } = req.body;
    const user = await UserModel.find({name});
    res.send({msg : "These are the users", user})
    }
    catch(err)
    {
        res.status(500).json({ error: err.message }); 
    }
}

const createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const { UserModel } = require("../models/User.model");

const updateUser = async (req, res) => {
    const userID = req.params.id;
    const { name } = req.body;

    try {
        const user = await UserModel.findById(userID);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        user.name = name;

        await user.save();

        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    user,
    createUser,
    updateUser
};
