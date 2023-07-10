// // controller is mapped to models
// const Posts = require("../models/Posts");
// const comments = require("../models/comments")

// // define route handler
// module.exports ={
//     post: async (req,res)=>{
//         try{
//             // fetch {postid,user,comment} from req body
//             const {post,user,body} = req.body;
//             // create a comment object
//             const comment = new comments({
//                 post:req.body.post,
//                 user:req.body.user,
//                 body:req.body.body
//             }
//             )
//             // save new comment in =to comments model
//             const saveComment = await comment.save()
//             .then(()=>{
//                 console.log("comment successfully added");
//                 res.status(200).json(
//                     {
//                         success:true, 
//                         message:'Entry Created Successfully'
//                     }
//                 );
//             })
//             .catch((err)=>{
//                 console.log(err);
//                 res.status(400).json(
//                     {
//                         success:false,
                        
//                         message:'comment faild to add'
//                     }
//                 );
//             });
//             console.log(saveComment);
    
//             // find post by id and change respective comment
//             const updatePost = await Posts.findByIdAndUpdate({_id:post},{$push:{comments: saveComment._id}},{new : true})
//             .exec()
//             .then(
//                 res.status(200).json(
//                     {
//                         success:true,
//                         massage:"comment added"
//                     }
//                 )
//             )
//             .catch((err)=>{
                
//                 console.log("comment not added added");
//                 res.status(422).json(
//                     {
//                        error:err
//                     }
//                 );
            
//         });
//             res.json({
//                 post: updatePost,
//             })
//         }catch(err){
//             console.log(err);
//             res.status(400).json(
//                 {
//                     success:false,
                    
//                     message:'error in processing comments'
//                 }
//             );
//         }
//     }
    
// }

// Controller mapped to models
const Posts = require("../models/Posts");
const Comment = require("../models/comments");

// Define route handler
module.exports = {
  post: async (req, res) => {
    try {
      // Fetch { postid, user, comment } from the request body
      const { post, user, body } = req.body;

      // Create a comment object
      const comment = new Comment({
        post:post,
        user:user,
        body:body
      });

      // Save the new comment to the Comment model
      const savedComment = await comment.save();

      console.log("Comment successfully added");
      res.status(200).json({
        success: true,
        message: "Entry Created Successfully",
      });

      // Find the post by ID and add the respective comment
      const updatedPost = await Posts.findByIdAndUpdate(
        post,
        { $push: { comments: savedComment._id } },
        { new: true }
      );

      console.log(updatedPost);
    } catch (err) {
      console.log(err);
      res.status(400).json({
        success: false,
        message: "Error in processing comments",
      });
    }
  },
};
