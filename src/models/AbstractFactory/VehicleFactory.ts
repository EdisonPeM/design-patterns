import Car from "./Car";
import SUV from "./SUV";

interface VehicleFactory {
  getCar(): Car;
  getSUV(): SUV;
}

export default VehicleFactory;
