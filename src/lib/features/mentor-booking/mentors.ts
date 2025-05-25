import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";

interface MentorsState {
    mentors: any[]; // Array of mentor names or IDs
    selectedMentor: string | null; // Currently selected mentor
    loading: boolean; // Loading state for fetching mentors
    error: string | null; // Error state for fetching mentors
    isFetched: boolean; // Flag to indicate if mentors have been fetched
}


const initialState: MentorsState = {
    mentors: [], // Initialize with an empty array or fetch from an API
    selectedMentor: null, // No mentor selected initially
    loading: false, // Loading state for fetching mentors
    error: null, // Error state for fetching mentors
    isFetched: false, // Flag to indicate if mentors have been fetched
};

export const fetchMentors = createAsyncThunk("register/getMentors", async () => {
  // Replace with your actual API endpoint or logic to fetch mentors

    console.log("fetching ENV in serside [NEXT_PUBLIC_API_URL]", process.env.NEXT_PUBLIC_API_URL);
    console.log("fetching ENV in serside", process.env);
    const aaa =  await fetch("http://192.168.1.5:3000/mentors.json");
    console.log("result", aaa);
    return aaa.json();
  });

const mentorBookingMentorsSlice = createSlice({
    name: "mentors",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchMentors.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.mentors = [];
            state.isFetched = false;
          })
          .addCase(fetchMentors.fulfilled, (state, action) => {
            console.log("mentorsssss", action.payload);
            state.loading = false;
            state.mentors = state.mentors.concat(action.payload);
            state.error = null;
            state.isFetched = true;
          })
          .addCase(fetchMentors.rejected, (state, action) => {
            state.loading = false;
            state.mentors = [];
            state.error = action.error.message || "Failed to fetch mentors";
            state.isFetched = true;
          })
        }

});

export default mentorBookingMentorsSlice.reducer;