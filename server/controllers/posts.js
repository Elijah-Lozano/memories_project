import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    try{
        // since finding all the post messages takes time, it is an async action
        // so we need to add await and make the function async
        const postMessages = await PostMessage.find();

        console.log(postMessages);

        res.status(200).json(postMessages);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    console.log("Hello2" + post)
    const newPost = new PostMessage(post);
    console.log(newPost)
   try{
        console.log("about to save new Post")

       await newPost.save();

        console.log("new post saved...")
        res.status(201).json(newPost);
   } catch (error) {
        res.status(409).json({ message: error.message });
   }

}