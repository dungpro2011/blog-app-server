import { PostModel } from "../models/PostModel.js";

export const getPost = async (req, res) => {
    try {
        //add new post 'test'
        // const post = new PostModel({
        //     title: 'Cần cù bù siêng năng',
        //     content: 'Có làm mới có ăn không thì ăn ***!'
        // })

        // post.save();

        const posts = await PostModel.find();
        console.log('Posts', posts);
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({ err: error });
    }
};

export const createPost = (async (req, res) => {
    try {
        const newPost =  req.body;
        const post = new PostModel(newPost);
        await post.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({ err: error });
    }
});

export const updatePost = (async (req, res) => {
    try {
        const updatePost = req.body;
        const post = await PostModel.findByIdAndUpdate({_id : updatePost._id}, updatePost, { new: true});
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({ err: error });
    }
});

export const deletePost = (async (req, res) => {
    try {
        const deletePost = req.body;
        const del = await PostModel.deleteOne({_id : deletePost._id});
        const posts = await PostModel.find();

        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({ err: error });
    }
});