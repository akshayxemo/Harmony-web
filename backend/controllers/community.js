// // controller is mapped to models
// const posts = require("../models/Posts");
// const comments = require("../models/comments")

// // define route handler
// module.exports ={
//     get: async (req,res)=>{
        
//             const posts = await posts.find({})
//             .then(()=>{
//                 console.log("community get post request is successfully shown");
//                 // res.send(posts);
//                 res.status(200).json(
//                     {
//                         success:true, 
//                         message:'successful community posts'
//                     }
                    
//                 );
                
//             })
//             .catch((err)=>{
//                 console.log(err);
//                 res.status(400).json(
//                     {
//                         success:false,
//                         message:'unsuccessful attemt to show community post'
//                     }
//                 );
//             });
//             console.log(posts);
//     }    
// }








const Posts = require("../models/Posts");
const comments = require("../models/comments");

module.exports = {
  get: async (req, res) => {
    try {
      const allPosts = await Posts.find({});
      console.log(allPosts);
      
     // res.status(200).json({
       // success: true,
       // message: 'Successful community posts',
      //});

      res.json({allPosts})
    } catch (err) {
      console.log(err);
      
      res.status(400).json({
        success: false,
        message: 'Unsuccessful attempt to show community post',
      });
    }
  },
};
