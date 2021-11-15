import type Car from "./Car";
import type SUV from "./SUV";

abstract class VehicleFactory {
  static VEHICLE_TYPES = {
    CAR: "CAR",
    SUV: "SUV",
  };

  abstract getCar(): Car;
  abstract getSUV(): SUV;
}

export default VehicleFactory;
