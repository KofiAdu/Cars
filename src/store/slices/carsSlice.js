import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    carList: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      //cars array is an array of objects that needs a name and a cost
      //action.payload === { name: 'ab', cost: 140 }
      state.carList.push({
        name: action.payload.name,
        cost: action.payload.cost,
        //getting a random id with redux toolkit
        id: nanoid(),
      });
    },
    deleteCar(state, action) {
      //action.payload === id of the car to be removed
      const updated = state.carList.filter((car) => {
        return car.id !== action.payload;
      });
      state.carList = updated;
    },
  },
});

export const { changeSearchTerm, deleteCar, addCar } = carsSlice.actions;
export const carReducer = carsSlice.reducer;
