import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("fetchUsers", async (params) => {
  try {
    const response = await fetch("https://66f24f2b71c84d805874b833.mockapi.io/crud");
    const result = await response.json();
    console.log("DD-1", result);
    return result;
  } catch (err) {
    console.log(err);
  }
});

// how to call api

const apiSlices = createSlice({
  name: "api",
  initialState: {
    datas: [],
    // status: "idle",
    isLoading:false,
    error: "",
  },
  // reducers: {
  //   addDatas: (state, action) => {
  //     console.log("inside-store", JSON.stringify(action.payload));
  //     state.datas.push(action.payload);
  //   },
  // },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
        state.isLoading = true
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.datas = action.payload
        state.isLoading = false
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.isLoading = false
      });
  },
});

// Promise lifecycle

export const { addDatas } = apiSlices.actions;
export default apiSlices.reducer;
