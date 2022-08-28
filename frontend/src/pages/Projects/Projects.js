import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import callApi from "../../utils/callApi";
import { getProjects } from "../../reducers/ProjectsReducer";
import "./projects.css";
import ProjectsTable from "../../components/ProjectsTable/ProjectsTable";
import AddProject from "../../components/AddProject/AddProject";
import UpdateProject from "../../components/UpdateProject/UpdateProject";

export default function Projects() {
  // Create a dispatch variable that makes use of the useDispatch hook. - Vlad Talimba
  const dispatch = useDispatch();

  // Get all projects from the api. - Vlad Talimba
  useEffect(() => {
    getAllProjects();
  }, []);

  // Function that makes the GET request on the api. - Vlad Talimba
  async function getAllProjects() {
    try {
      const res = await callApi("getAllProjects", "GET");
      const body = await res.json();
      dispatch(getProjects(body));
      console.log(body);
    } catch (err) {
      console.log(err.message);
    }
  }

  // Render all components that are meant to modify the UI. - Vlad Talimba
  return (
    <div>
      <ProjectsTable getProjects={getAllProjects} />
      <div className="main-container">
        <AddProject getProjects={getAllProjects} />
        <UpdateProject getProjects={getAllProjects} />
      </div>
    </div>
  );
}
