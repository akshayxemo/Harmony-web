
// controller is mapped to models
const User = require("../models/user.model");

// define route handler
module.exports = {
    get: (req,res)=>{
        res.render("user_form")
    },
    post: async (req,res)=>{
        // fetching data from request body
        console.log(req.body);
        const {name,email,gender,password} = req.body;
        // insert that object that is containing title,description 
        const newUser = new User( {
            username:name,
            emailId:email,
            gender:gender,
            password:password,
        })
        console.log(newUser);
        await newUser.save()
        .then(()=>{
            console.log("User successfully added");
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

    }
} 