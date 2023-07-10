//import mongoose
const mongoose = require("mongoose");


//route handler

const likeSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Posts", //reference to the post model
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
});

//export
module.exports = mongoose.model("Like", likeSchema);