import mongoose from "mongoose";


const  accountSchema = new mongoose.Schema({
    userId: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        require: true
    }
})

export const Account = mongoose.model('Account', accountSchema);

