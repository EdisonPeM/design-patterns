import type VehicleFactory from "./VehicleFactory";
import type Car from "./Car";
import type SUV from "./SUV";

import NonLuxuryCar from "./NonLuxuryCar";
import NonLuxurySUV from "./NonLuxurySUV";

class NonLuxuryVehicleFactory implements VehicleFactory {
  getCar(): Car {
    return new NonLuxuryCar("L-C");
  }

  getSUV(): SUV {
    return new NonLuxurySUV("L-S");
  }
}

export default NonLuxuryVehicleFactory;
