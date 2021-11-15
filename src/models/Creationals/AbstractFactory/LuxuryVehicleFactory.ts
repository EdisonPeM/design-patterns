import type VehicleFactory from "./VehicleFactory";
import type Car from "./Car";
import type SUV from "./SUV";

import LuxuryCar from "./LuxuryCar";
import LuxurySUV from "./LuxurySUV";

class LuxuryVehicleFactory implements VehicleFactory {
  getCar(): Car {
    return new LuxuryCar("L-C");
  }

  getSUV(): SUV {
    return new LuxurySUV("L-S");
  }
}

export default LuxuryVehicleFactory;
