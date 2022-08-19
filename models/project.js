const { Schema, model } = require("mongoose");
const projectSchema = new Schema({
  //define how a project looks like
  project_no: {
    type: String,
    required: false,
  },
  project_short_description: {
    type: String,
    required: false,
  },
  request_date: {
    type: Date,
    required: false,
  },
  project_start_date: {
    type: Date,
    required: false,
  },
  project_duration: {
    type: Number,
    required: false,
  },
  project_currency: {
    type: String,
    required: false,
  },
  client: {
    type: String,
    required: false,
  },
  working_location: {
    type: String,
    required: false,
  },
  travel_required: {
    type: String,
    required: false,
  },
  team_members: {
    type: Number,
    required: false,
  },
  working_hours: {
    type: String,
    required: false,
  },
  mandatory_skills: {
    type: String,
    required: false,
  },
  nice_to_have_skills: {
    type: String,
    required: false,
  },
  to_do: {
    type: String,
    required: false,
  },
});

module.exports = model("project", projectSchema); //export it
