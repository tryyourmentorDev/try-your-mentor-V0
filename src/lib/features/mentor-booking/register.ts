import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RegisterState {
  firstName: string;
  lastName: string;
  email: string;
  educationLevel: string;
  experienceLevel: string;
}

const initialState: RegisterState = {
  firstName: "",
  lastName: "",
  email: "",
  educationLevel: "",
  experienceLevel: "",
};

const mentorBookingRegisterSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setFistName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setEducationLevel: (state, action: PayloadAction<string>) => {
      state.educationLevel = action.payload;
    },
    setExperienceLevel: (state, action: PayloadAction<string>) => {
      state.experienceLevel = action.payload;
    },
    clearRegisterData: (state) => {
      return initialState;
    },
  },
});

export const {
  setFistName,
  setLastName,
  setEmail,
  setEducationLevel,
  setExperienceLevel,
} = mentorBookingRegisterSlice.actions;
export default mentorBookingRegisterSlice.reducer;
