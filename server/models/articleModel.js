import mongoose from 'mongoose';

const articleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }, 

    body: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const articleModel = mongoose.model('articleModel', articleSchema)
export default articleModel;