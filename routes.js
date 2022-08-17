const Project = require('./models/project');//import model of project

const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find({}) //find ALL projects in the db/collection
    return res.json(projects)//return projects at the end if success
  } catch (err) {
    return res.status(500).json({ message: err.message })//return message with error if error. 500 is an internal server error
  }
}

const getByName = async (req, res) => {
  try {
    const projectByName = await Project.findOne({ project_no: `${req.params.project_no}` }) // search for document with the same name as the name we put in the parameter in the url. ex: /getProjectByName/doi will return the document which has the project_no = 'doi'
    return res.json(projectByName)
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

const addProject = async (req, res) => {
  try {
    const project = new Project({
      project_no: req.body.project_no,
      project_short_description: req.body.project_short_description,
      request_date: req.body.request_date,
      project_start_date: req.body.project_start_date,
      project_duration: req.body.project_duration,
      project_currency: req.body.project_currency,
      client: req.body.client,
      working_location: req.body.working_location,
      travel_required: req.body.travel_required,
      team_members: req.body.team_members,
      working_hours: req.body.working_hours,
      mandatory_skills: req.body.mandatory_skills,
      nice_to_have_skills: req.body.nice_to_have_skills,
      to_do: req.body.to_do
    })
    await project.save() //save the project with given data in the request body
    console.log('success')

  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}

const deleteProject = async (req, res) => {
  try {
    await Project.deleteOne({ _id: req.params.id }) //delete a document in the collection based on the id we give in the url. ex: /deleteProject/62f564bc23e28cbd0189b4ba deletes the document with the id 62f564bc23e28cbd0189b4ba
    return res.json({ message: 'Sters!' })
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}

const updateProject = async (req, res) => {
  try {
    const project = await Project.updateOne({ _id: req.params.id }, req.body) //give the id and based on that find the document and update it with whatever information is in the request body
    return res.json('Update cu succes: ' + project)
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}


exports.addProject = addProject //export the route so it can be used in index.js
exports.getAllProjects = getAllProjects
exports.getByName = getByName
exports.deleteProject = deleteProject
exports.updateProject = updateProject