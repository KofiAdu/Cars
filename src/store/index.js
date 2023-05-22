import { configureStore } from "@reduxjs/toolkit";
import {
  carReducer,
  addCar,
  deleteCar,
  changeSearchTerm,
} from "./slices/carsSlice";
import { formReducer, changeCost, changeName } from "./slices/formSlice";

//create store
const store = configureStore({
  //create main reducers
  reducer: {
    cars: carReducer,
    form: formReducer,
  },
});

export { store, changeCost, changeName, addCar, deleteCar, changeSearchTerm };
