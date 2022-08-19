const Candidate = require('./models/candidate')
const getAllCandidates = async (req, res) => {
  try {
    const candidate = await Candidate.find({})
    return res.json(candidate)
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}

const addCandidate = async (req, res) => {
  try {
    const candidate = new Candidate({
      Candidate_name: req.body.Candidate_name,
      Email: req.body.Email,
      Start_date: req.body.Start_date,
      Salary: req.body.Salary,
      Candidate_link: req.body.Candidate_link,
      Candidate_doc: req.body.Candidate_doc

    })
    await candidate.save()
    console.log('success')

  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}

const updateCandidate = async (req, res) => {
  try {
    const candidate = await Candidate.updateOne({ _id: req.params.id }, req.body)
    return res.json('Update cu succes: ' + candidate)
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}

const deleteCandidate = async (req, res) => {
  try {
    await Candidate.deleteOne({ _id: req.params.id })
    return res.json({ message: 'Sters!' })
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}

exports.addCandidate = addCandidate
exports.getAllCandidates = getAllCandidates
exports.deleteCandidate = deleteCandidate
exports.updateCandidate = updateCandidate