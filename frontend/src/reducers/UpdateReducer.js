import { createSlice } from "@reduxjs/toolkit";

// Create a slice that will help with only getting the information about one project and using it to update.
// Give it a name, an initial state and a reducer. - Vlad Talimba
export const updateSlice = createSlice({
  name: "update",
  initialState: { value: {} },
  reducers: {
    updateOne: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Export the getProejects reducer as an action. - Vlad Talimba
export const { updateOne } = updateSlice.actions;

export default updateSlice.reducer;
