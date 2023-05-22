import { useSelector } from "react-redux";

function CarValue() {
  const totalCost = useSelector(({ cars: { carList, searchTerm } }) => {
    const filteredCars = carList.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    //total cost with a for loop
    // let cost = 0;
    // for (let car of filteredCars) {
    //   cost += car.cost;
    // }
    // return cost;

    /*using the reduce function*/
    //add 0 as a dummy initial value for the reduce fuction because it doesn't work on an empty array
    return filteredCars.reduce((acc, car) => acc + car.cost, 0);
  });
  return <div className="car-value">Total Cost ${totalCost}</div>;
}

export default CarValue;
