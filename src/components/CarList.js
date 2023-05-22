import { useSelector, useDispatch } from "react-redux";
import { deleteCar } from "../store";

function CarList() {
  const dispatch = useDispatch();

  // const cars = useSelector((state) => {
  //   //search filtering logic

  //   //from carsSlice
  //   return state.cars.carList;
  // });

  //getting acces to state and adding search filtering feature
  //destructure state and get only the parms needed
  const cars = useSelector(({ cars: { carList, searchTerm } }) => {
    //filter the car list if there is a searchTerm
    return carList.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleCarDelete = (car) => {
    //dispatch needs the payload of the car id to delete
    dispatch(deleteCar(car.id));
  };
  //mapping through a lst of cars
  const renderedCars = cars.map((car) => {
    return (
      <div key={car.id} className="panel">
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });
  return (
    <div className="car-lisy">
      {renderedCars} <hr />
    </div>
  );
}

export default CarList;
