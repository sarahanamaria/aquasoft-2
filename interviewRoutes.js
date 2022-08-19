const Interview = require("./models/Interview");
const { update } = require("./models/project");

// Create a GET route to get all interviews.
const getAllInterviews = async (req, res) => {
  try {
    const interviews = await Interview.find({});
    return res.json(interviews);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Create a POST route to add an interview into the collection.
const addInterview = async (req, res) => {
  try {
    const interview = new Interview({
      Interview_date: req.body.Interview_date,
      Interview_duration: req.body.Interview_duration,
      Interviewer: req.body.Interviewer,
    });
    await interview.save();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Create a PUT route to update an interview using the ID.
const updateInterview = async (req, res) => {
  try {
    const interview = await Project.updateOne(
      { _id: req.params.id },
      { ...req.body }
    );
    return res.json("Update cu succes: " + interview);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Create a DELETE route to delete an interview using its ID.
const deleteInterview = async (req, res) => {
  try {
    await Interview.deleteOne({ _id: req.params.id });
    return res.json({ message: "Sters!" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Export the routes
exports.addInterview = addInterview;
exports.getAllInterviews = getAllInterviews;
exports.updateInterview = updateInterview;
exports.deleteInterview = deleteInterview;
