const mongoose = require('mongoose');
const { Schema } = mongoose;
const PostSchema = new Schema({

    title: {
        type: String,
        required: true,

    },
    summary: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },

    cover:
    {
        type: String
    },
    author:{type:Schema.Types.ObjectId, ref:'User'},

    date: {
        type: Date,
        default: Date.now
    },
    
},
{
    timestamps: true
});

const Post = mongoose.model('post', PostSchema);
// Post.createIndexes();
module.exports = Post