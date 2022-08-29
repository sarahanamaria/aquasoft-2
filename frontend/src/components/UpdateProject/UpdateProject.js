import React, { useEffect, useState } from "react";
import "./updateproject.css";
import callApi from "../../utils/callApi";
import { useSelector } from "react-redux";

export default function UpdateProject(props) {
  // Use the reducer value of the object selected for update. - Vlad Talimba
  const updateProject = useSelector((state) => state.update.value);

  // Create a state variable that will store the value from the reducer in state. - Vlad Talimba
  const [updatedProject, setUpdatedProject] = useState({});

  // Every time the reducer value changes (or the information to be updated changes), set it to state. - Vlad Talimba
  useEffect(() => {
    setUpdatedProject(updateProject);
  }, [updateProject]);

  // Set the updated information in state. - Vlad Talimba
  function handleChange(event) {
    const target = event.target.name;
    setUpdatedProject((prev) => {
      return { ...prev, [target]: event.target.value };
    });
  }

  // Make a put request that will update the project inside the database using its id. - Vlad Talimba
  async function handleSubmit(event) {
    event.preventDefault();
    if (JSON.stringify(updatedProject) === "{}") {
      alert("Please select a project to update.");
    } else {
      try {
        const update = await callApi(
          `updateProject/${updatedProject._id}`,
          "PUT",
          updatedProject
        );
        // Fetch all projects again. Enables live update of the page. - Vlad Talimba
        props.getProjects();
      } catch (err) {
        console.log(err);
      }
    }
  }

  // Returns a form with all inputs representing a project property. Each input will get the value of the object chosen for update, so that new information can be changed or added instead. - Vlad Talimba
  return (
    <form className="update-project" onSubmit={handleSubmit}>
      <label htmlFor="ProjectName">Project Name</label>
      <input
        type="text"
        placeholder="Project Name"
        id="ProjectName"
        name="project_no"
        value={updatedProject.project_no}
        onChange={handleChange}
      />
      <label htmlFor="ShortDescription">Short Description</label>
      <input
        type="text"
        placeholder="Short Description"
        id="ShortDescription"
        name="project_short_description"
        value={updatedProject.project_short_description}
        onChange={handleChange}
      />
      <label htmlFor="RequestDate">Request Date</label>
      <input
        type="date"
        id="RequestDate"
        name="request_date"
        value={updatedProject.request_date}
        onChange={handleChange}
      />

      <label htmlFor="StartDate">Start Date</label>
      <input
        type="date"
        id="StartDate"
        name="project_start_date"
        value={updatedProject.project_start_date}
        onChange={handleChange}
      />

      <label htmlFor="Duration">Project Duration</label>
      <input
        type="number"
        placeholder="Project Duration"
        id="Duration"
        name="project_duration"
        value={updatedProject.project_duration}
        onChange={handleChange}
      />

      <label htmlFor="Currency">Currency</label>
      <input
        type="text"
        placeholder="Currency"
        id="Currency"
        name="project_currency"
        value={updatedProject.project_currency}
        onChange={handleChange}
      />

      <label htmlFor="Client">Client</label>
      <input
        type="text"
        placeholder="Client"
        id="Client"
        name="client"
        value={updatedProject.client}
        onChange={handleChange}
      />

      <label htmlFor="WorkingLocation">Working Location</label>
      <input
        type="text"
        placeholder="Working Location"
        id="WorkingLocation"
        name="working_location"
        value={updatedProject.working_location}
        onChange={handleChange}
      />

      <label htmlFor="TravelReq">Travel Required</label>
      <input
        type="text"
        placeholder="Travel Required"
        id="TravelReq"
        name="travel_required"
        value={updatedProject.travel_required}
        onChange={handleChange}
      />

      <label htmlFor="TeamMembers">Team Members</label>
      <input
        type="number"
        placeholder="Team Members"
        id="TeamMembers"
        name="team_members"
        value={updatedProject.team_members}
        onChange={handleChange}
      />

      <label htmlFor="WorkingHours">Working Hours</label>
      <input
        type="text"
        placeholder="Working Hours"
        id="WorkingHours"
        name="working_hours"
        value={updatedProject.working_hours}
        onChange={handleChange}
      />

      <label htmlFor="MandatorySkille">Mandatory Skills</label>
      <input
        type="text"
        placeholder="Mandatory Skills"
        id="MandatorySkills"
        name="mandatory_skills"
        value={updatedProject.mandatory_skills}
        onChange={handleChange}
      />

      <label htmlFor="NiceSkille">Nice To Have Skills</label>
      <input
        type="text"
        placeholder="Nice To Have Skills"
        id="NiceSkills"
        name="nice_to_have_skills"
        value={updatedProject.nice_to_have_skills}
        onChange={handleChange}
      />

      <label htmlFor="ToDo">To Do</label>
      <input
        type="text"
        placeholder="To do"
        id="ToDo"
        name="to_do"
        value={updatedProject.to_do}
        onChange={handleChange}
      />
      <button className="btn btn-warning">Update Project</button>
    </form>
  );
}
