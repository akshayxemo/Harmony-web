// Import models
const Post = require("../models/Posts");
const Like = require("../models/likes");

// Like a post
exports.likePost = async (req, res) => {
  try {
    const { post, user } = req.body;
    const like = new Like({
      post:post,
      user:user
    });
    console.log(like);
    const savedLike = await like.save();

    console.log("like updated successfully");
    res.status(200).json({
      success: true,
      message: 'Entry Created Successfully',
    });

    // Update the post collection based on the like
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { likes: savedLike._id } },
      { new: true }
    ).populate("likes");

    res.json({
      post: updatedPost,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: "Error while Liking post",
    });
  }
};

// Unlike a post
exports.unlikePost = async (req, res) => {
  try {
    const { post, user } = req.body;

    // Find the like to be deleted
     const foundLike = await Like.find({ post: post, user: user });

    console.log("found: "+foundLike);
    if (!foundLike) {
      return res.status(404).json({
        success: false,
        message: "Like not found",
      });
    }

    // Delete the like
    await Like.deleteOne({ _id: foundLike._id });

    // Update the post collection
    // const updatedPost = await Post.findByIdAndUpdate(
    //   post,
    //   { $pull: { likes: like } },
    //   { new: true }
    // );
    // const deletedLike = await Like.findOneAndDelete({post:post, _id:like});
    // const udpatedPost = await Post.findByIdAndUpdate(post,{$pull: {likes: deletedLike._id} }, {new: true});
    res.json({
      success: true,
      message: "Post unliked successfully",
      // post: updatedPost,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: "Error while unliking post",
    });
  }
};
