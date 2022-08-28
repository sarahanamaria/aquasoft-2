import React, { useState, useEffect } from "react";
import "./addproject.css";
import callApi from "../../utils/callApi";

export default function AddProject(props) {
  // Create a state variable that holds an object with the properties of a project that will be added to the database. - Vlad Talimba
  const [project, setProject] = useState({
    project_no: "",
    project_short_description: "",
    request_date: "",
    project_start_date: "",
    project_duration: 0,
    project_currency: "",
    client: "",
    working_location: "",
    travel_required: "",
    team_members: 0,
    working_hours: "",
    mandatory_skills: "",
    nice_to_have_skills: "",
    to_do: "",
  });

  // Update each project property when typing inside the frorm inputs. - Vlad Talimba
  function handleChange(event) {
    const target = event.target.name;
    setProject((prev) => {
      return { ...prev, [target]: event.target.value };
    });
  }

  // Add project to the database.
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const add = await callApi(`newProject`, "POST", project);

      // Fetch all projects again. Enables live update of the page. - Vlad Talimba
      props.getProjects();
    } catch (err) {
      console.log(err);
    }
  }

  // Return a form with inputs and labels. Each input is used to update a certain piece of information about the project. - Vlad Talimba
  return (
    <form className="add-project" onSubmit={handleSubmit}>
      <label htmlFor="ProjectName">Project Name</label>
      <input
        type="text"
        placeholder="Project Name"
        id="ProjectName"
        name="project_no"
        value={project.project_no}
        onChange={handleChange}
      />
      <label htmlFor="ShortDescription">Short Description</label>
      <input
        type="text"
        placeholder="Short Description"
        id="ShortDescription"
        name="project_short_description"
        value={project.project_short_description}
        onChange={handleChange}
      />
      <label htmlFor="RequestDate">Request Date</label>
      <input
        type="date"
        id="RequestDate"
        name="request_date"
        value={project.request_date}
        onChange={handleChange}
      />

      <label htmlFor="StartDate">Start Date</label>
      <input
        type="date"
        id="StartDate"
        name="project_start_date"
        value={project.project_start_date}
        onChange={handleChange}
      />

      <label htmlFor="Duration">Project Duration</label>
      <input
        type="number"
        placeholder="Project Duration"
        id="Duration"
        name="project_duration"
        value={project.project_duration}
        onChange={handleChange}
      />

      <label htmlFor="Currency">Currency</label>
      <input
        type="text"
        placeholder="Currency"
        id="Currency"
        name="project_currency"
        value={project.project_currency}
        onChange={handleChange}
      />

      <label htmlFor="Client">Client</label>
      <input
        type="text"
        placeholder="Client"
        id="Client"
        name="client"
        value={project.client}
        onChange={handleChange}
      />

      <label htmlFor="WorkingLocation">Working Location</label>
      <input
        type="text"
        placeholder="Working Location"
        id="WorkingLocation"
        name="working_location"
        value={project.working_location}
        onChange={handleChange}
      />

      <label htmlFor="TravelReq">Travel Required</label>
      <input
        type="text"
        placeholder="Travel Required"
        id="TravelReq"
        name="travel_required"
        value={project.travel_required}
        onChange={handleChange}
      />

      <label htmlFor="TeamMembers">Team Members</label>
      <input
        type="number"
        placeholder="Team Members"
        id="TeamMembers"
        name="team_members"
        value={project.team_members}
        onChange={handleChange}
      />

      <label htmlFor="WorkingHours">Working Hours</label>
      <input
        type="text"
        placeholder="Working Hours"
        id="WorkingHours"
        name="working_hours"
        value={project.working_hours}
        onChange={handleChange}
      />

      <label htmlFor="MandatorySkille">Mandatory Skills</label>
      <input
        type="text"
        placeholder="Mandatory Skills"
        id="MandatorySkills"
        name="mandatory_skills"
        value={project.mandatory_skills}
        onChange={handleChange}
      />

      <label htmlFor="NiceSkille">Nice To Have Skills</label>
      <input
        type="text"
        placeholder="Nice To Have Skills"
        id="NiceSkills"
        name="nice_to_have_skills"
        value={project.nice_to_have_skills}
        onChange={handleChange}
      />

      <label htmlFor="ToDo">To Do</label>
      <input
        type="text"
        placeholder="To do"
        id="ToDo"
        name="to_do"
        value={project.to_do}
        onChange={handleChange}
      />
      <button className="btn btn-success">Add Project</button>
    </form>
  );
}
