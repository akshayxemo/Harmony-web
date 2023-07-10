// Import the Feedback model
const Feedback = require("../models/feedback");

// Define the route handler
module.exports = {
  post: async (req, res) => {
    try {
      // Fetch data from the request body
      const { user, feedback } = req.body;

      // Create a new instance of the Feedback model
      const newFeedback = new Feedback({
        user: user,
        feedback: feedback
      });

      console.log(newFeedback);

      // Save the new feedback
      await newFeedback.save();

      console.log("Feedback successfully added");
      res.status(200).json({
        success: true,
        message: 'Entry Created Successfully',
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        success: false,
        message: 'Feedback failed to add',
      });
    }
  },
};
