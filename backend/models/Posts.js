// import mongoose
const mongoose = require("mongoose");
// route handler
const postSchema = mongoose.Schema(
    {
        type:{
            type:String,
            required:true
        },
        users : {
            type: mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        feeling:{
            type:String,
            required:true
        },
        description: {
            type:String,
            
        },
        likes : [{
            type: mongoose.Schema.Types.ObjectId,
            ref:"users"
        }],
        Comments : [{
            type: mongoose.Schema.Types.ObjectId,
            ref:"Comment"
        }],
        
    },{
        timestamps:true,
    }
)
// export module
module.exports =  mongoose.model("Posts",postSchema);