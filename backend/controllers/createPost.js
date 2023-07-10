
// controller is mapped to models
const Posts = require("../models/Posts");

// define route handler
module.exports = {
    post: async (req,res)=>{
        // fetching data from request body
        console.log(req.body);
        const {type,users,feeling,description} = req.body;
        // insert that object that is containing title,description 
        const newPost = new Posts( {
            type:type,
            users:users,
            feeling:feeling,
            description:description
        })
        console.log(newPost);
        await newPost.save()
        .then(()=>{
            console.log("Post successfully added");
            res.status(200).json(
                {
                    success:true, 
                    message:'Entry Created Successfully'
                }
            );
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json(
                {
                    success:false,
                    message:'Post faild to add'
                }
            );
        })

        // const response = await Posts.create({title,description});
        //send a json response with a success flag
        

    }
} 