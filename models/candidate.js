const { Schema, model } = require('mongoose')

// Create the Schema for the interview collection.
const candidateSchema = new Schema({
  Candidate_name: { type: String, required: false },
  Email: { type: String, required: false },
  Start_date: { type: Date, required: false },
  Salary: { type: Number, required: false },
  Candidate_link: { type: String, required: false },
  Candidate_doc: { type: String, required: false }
})

// Export schema
module.exports = Candidate = model('candidate', candidateSchema)