// import mongoose
const mongoose = require("mongoose");
// route handler
const feedbackSchema = mongoose.Schema(
    {     
        user : {
            type: mongoose.Schema.Types.ObjectId,
            ref:"users",
            required:true
        },
        feedback:{
            type:String,
            required:true
        }
        
    },{
        timestamps:true,
    }
    
)
// export module
module.exports =  mongoose.model("Feedback",feedbackSchema);