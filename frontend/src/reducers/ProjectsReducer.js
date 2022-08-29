import { createSlice } from "@reduxjs/toolkit";

// Create a slice that will help with creating and using a reducer for the projects collection.
// Give it a name, an initial state and a reducer. - Vlad Talimba
export const projectSlice = createSlice({
  name: "projects",
  initialState: { value: [] },
  reducers: {
    getProjects: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Export the getProejects reducer as an action. - Vlad Talimba
export const { getProjects } = projectSlice.actions;

export default projectSlice.reducer;
