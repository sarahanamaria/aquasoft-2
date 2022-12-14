const connectToDB = require("./db"); // import our connection to the DB from the db.js file
const express = require("express");
const cors = require("cors"); // allows us to make requests from one website to another
const interviewRoutes = require("./interviewRoutes");
const candidateRoutes = require("./candidateRoutes");
const routes = require("./routes");
const app = express();
app.use(express.json({ extended: false })); // activate the body parser
app.use(cors());
connectToDB(); // execute the connection to the database here

const port = 3000;

// ROUTES for the "Projects" collection.
app.get("/getAllProjects", routes.getAllProjects);
app.get("/project/:project_no", routes.getByName);
app.post("/newProject", routes.addProject);
app.delete("/deleteProject/:id", routes.deleteProject);
app.put("/updateProject/:id", routes.updateProject);

// ROUTES for the "Interviews" collection.
app.get("/getAllInterviews", interviewRoutes.getAllInterviews);
app.post("/interview", interviewRoutes.addInterview);
app.put("/updateInterview/:id", interviewRoutes.updateInterview);
app.delete("/deleteInterview:/id", interviewRoutes.deleteInterview);

// ROUTES for the "Candidates" collection - Vlad Talimba

app.get("/getAllCandidates", candidateRoutes.getAllCandidates);
app.get("/joinCandidate/", candidateRoutes.join);
app.post("/newCandidate", candidateRoutes.addCandidate);
app.delete("/deleteCandidate/:id", candidateRoutes.deleteCandidate);
app.put("/putCandidate/:id", candidateRoutes.updateCandidate);

//run server
app.listen(port, () => {
  console.log(`Server pornit la portul ${port}`);
});
