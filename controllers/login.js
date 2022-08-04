import { UserModel } from "../models/UserModel.js";

export const userLogin = async (req, res) => {
    try {

        console.log('login');
        //add new post 'test'
        // const user = new UserModel({
        //     name: 'test',
        //     password: 'test'
        // })
        // user.save();
        // const user = {name: 'test', password: 'test'};
        const user = req.body;
        console.log('User: ', user);
        const users = await UserModel.findOne({ name: user.name, password: user.password });
        console.log('login name:', users);

        if (users && users.name == user.name && users.password == user.password) {
            console.log('Success');
            res.status(200).json("Login success");
        }
        else {
            console.log('failed');
            res.status(200).json("Login failed");
        }
    } catch (error) {
        res.status(400).json({ err: error });
    }
};

export const register = (async (req, res) => {
    try {
        const user = req.body;
        const userName = await UserModel.findOne({ name: user.name });
        console.log('User: ', user.name);
        console.log('User: ', userName);

        if (!userName) {
            const newUser = new UserModel(user);
            await newUser.save();
            res.status(200).json("Register success");
            console.log('Success');
        } else {
            res.status(200).json("Register failed");
            console.log('failed');
        }

    } catch (error) {
        res.status(401).json({ err: error });
    }
});
