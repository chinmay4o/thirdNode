import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    id: {
        type: String,
    },
    like: {
        type: Boolean,
    },
    name: {
        type: String,
    }
})


export const Users = mongoose.model('ab' , userSchema);