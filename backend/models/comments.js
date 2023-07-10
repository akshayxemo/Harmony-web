// import mongoose
const mongoose = require("mongoose");

//route handler
const commentSchema = new mongoose.Schema({
    // which post reffering
    post : {
        type:mongoose.Schema.Types.ObjectId,
        ref: "Posts"
    },
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true
    },
    body:{
        type:String,
        required: true
    }

});
module.exports = mongoose.model("Comments",commentSchema)
