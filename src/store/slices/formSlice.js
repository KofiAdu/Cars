import { createSlice } from "@reduxjs/toolkit";
//import a functin to use extrAReducers
import { addCar } from "./carsSlice";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: 0,
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
  //to make the form slice look for t=an action in carsSLice to perform a task
  extraReducers(builder) {
    builder.addCase(addCar, (state, action) => {
      state.name = "";
      state.cost = 0;
    });
  },
});

export const { changeCost, changeName } = formSlice.actions;
export const formReducer = formSlice.reducer;
