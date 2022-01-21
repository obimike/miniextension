import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "students",
  initialState: {
    student: "",
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {
    // Reducer comes here
  },
});
export default userSlice.reducer;
