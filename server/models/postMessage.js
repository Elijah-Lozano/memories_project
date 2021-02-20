import mongoose from 'mongoose';

// define a post schema
const postSchema = new mongoose.Schema({
   title: String,
   message: String,
   creator: String,
   tags: [String],
    selectedFile: String,
    likeCount: {
       type: Number,
        default: 0
    },
    createdAt: {
       type: Date,
        default: new Date()
    }
});

// create a mongoose model for post messages
const PostMessage = mongoose.model('PostMessage', postSchema);

// export it for use elsewhere
export default PostMessage;