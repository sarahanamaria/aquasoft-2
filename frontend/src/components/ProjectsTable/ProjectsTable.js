import React from "react";
import { useSelector } from "react-redux";
import "./projectstable.css";
import callApi from "../../utils/callApi";
import { useDispatch } from "react-redux";
import { updateOne } from "../../reducers/UpdateReducer";

export default function ProjectsTable(props) {
  // Get all the projects stored inside the reducer. - Vlad Talimba
  const projects = useSelector((state) => state.projects.value);

  // Variable to use the useDispatch hook.
  const dispatch = useDispatch();

  // Map through all the projects and create a row for reach project in the database. -Vlad Talimba
  const allProjects = projects.map((project, index) => {
    return (
      <tbody key={index}>
        <tr>
          <td scope="row">{project.project_no}</td>
          <td scope="row">{project.project_short_description}</td>
          <td scope="row">{project.request_date}</td>
          <td scope="row">{project.project_start_date}</td>
          <td scope="row">{project.project_duration}</td>
          <td scope="row">{project.project_currency}</td>
          <td scope="row">{project.client}</td>
          <td scope="row">{project.working_location}</td>
          <td scope="row">{project.travel_required}</td>
          <td scope="row">{project.team_members}</td>
          <td scope="row">{project.working_hours}</td>
          <td scope="row">{project.mandatory_skills}</td>
          <td scope="row">{project.nice_to_have_skills}</td>
          <td scope="row">{project.to_do}</td>
          <td scope="row">
            <button
              className="btn btn-warning"
              type="button"
              onClick={() => updateProject(project)}
            >
              Update
            </button>
          </td>
          <td scope="row">
            <button
              className="btn btn-danger"
              type="button"
              onClick={() => deleteProject(project)}
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    );
  });

  // Set the value of the reducer to the project waiting for an update by using useDispatch.
  function updateProject(project) {
    dispatch(updateOne(project));
    console.log(project);
  }

  // Delete the project using its id passed as a parameter. - Vlad Talimba
  async function deleteProject(project) {
    try {
      // Make delete request.
      const deletedProject = await callApi(
        `deleteProject/${project._id}`,
        "DELETE"
      );
      props.getProjects();
    } catch (err) {
      console.log(err);
    }
  }

  // Return a table with the first row containing the titles for each project property. - Vlad Talimba
  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">Project Name</th>
          <th scope="col">Description</th>
          <th scope="col">Request Date</th>
          <th scope="col">Start Date</th>
          <th scope="col">Duration</th>
          <th scope="col">Currency</th>
          <th scope="col">Client</th>
          <th scope="col">Location</th>
          <th scope="col">Travel</th>
          <th scope="col">Members</th>
          <th scope="col">Working Hours</th>
          <th scope="col">Mandatory Skills</th>
          <th>Nice To Have Skills</th>
          <th scope="col">To Do</th>
          <th scope="col">Update Project</th>
          <th scope="col">Delete Project</th>
        </tr>
      </thead>
      {allProjects}
    </table>
  );
}
