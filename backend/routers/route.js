const express  = require("express");
const router = express.Router();

// import controller object
const creatPosts = require("../controllers/createPost");
const userInput = require("../controllers/userInsertController")
const { likePost, unlikePost } = require("../controllers/like");
const community = require("../controllers/community")
const commentOnPost = require("../controllers/comment");
const overall_feedback = require("../controllers/feedback");
// const postById = require("../controllers/postById");

// defines routes
router.post("/create",creatPosts.post);
router.get("/community",community.get);
router.post("/commentOnPost",commentOnPost.post);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);
router.post("/feedback",overall_feedback.post)
// router.get("/postById/:id", postById);

//export
router.get("/user",userInput.get)
router.post("/user",userInput.post)

module.exports = router;