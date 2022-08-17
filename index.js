const connectToDB = require('./db'); // import our connection to the DB from the db.js file
const express = require('express');
const cors = require('cors'); // allows us to make requests from one website to another
const routes = require('./routes');

const app = express();
app.use(express.json({ extended: false })) // activate the body parser
app.use(cors())
connectToDB() // execute the connection to the database here

const port = 3000;

app.get('/getAllProjects', routes.getAllProjects)
app.get('/project/:project_no', routes.getByName)
app.post('/newProject', routes.addProject)
app.delete('/deleteProject/:id', routes.deleteProject)
app.put('/updateProject/:id', routes.updateProject)


//run server
app.listen(port, () => {
  console.log(`Server pornit la portul ${port}`)
})