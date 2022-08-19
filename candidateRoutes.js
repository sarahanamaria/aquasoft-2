const Candidate = require("./models/candidate");

// Create a GET route to get all the candidates.
const getAllCandidates = async (req, res) => {
  try {
    const candidate = await Candidate.find({});
    return res.json(candidate);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Create a GET route that will return a candidate and it's projects and interviews (join).
const join = async (req, res) => {
  try {
    const candidate = await Candidate.where("Candidate_name")
      .equals(req.body.Candidate_name)
      .populate("Projects")
      .populate("Interviews");
    return res.json(candidate);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
// Create a POST route to add a candidate.
const addCandidate = async (req, res) => {
  try {
    const candidate = new Candidate({
      Candidate_name: req.body.Candidate_name,
      Email: req.body.Email,
      Start_date: req.body.Start_date,
      Salary: req.body.Salary,
      Candidate_link: req.body.Candidate_link,
      Candidate_doc: req.body.Candidate_doc,
      Projects: req.body.Projects,
      Interviews: req.body.Interviews,
    });
    await candidate.save();

    console.log("success");
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Create a PUT route to update a candidate using the ID.
const updateCandidate = async (req, res) => {
  try {
    const candidate = await Candidate.updateOne(
      { _id: req.params.id },
      req.body
    );
    return res.json("Update cu succes: " + candidate);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Create a DELETE route to delete a candidate using the ID.
const deleteCandidate = async (req, res) => {
  try {
    await Candidate.deleteOne({ _id: req.params.id });
    return res.json({ message: "Sters!" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Export routes.
exports.addCandidate = addCandidate;
exports.getAllCandidates = getAllCandidates;
exports.deleteCandidate = deleteCandidate;
exports.updateCandidate = updateCandidate;
exports.join = join;
