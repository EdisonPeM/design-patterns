import VehicleFactory from "./VehicleFactory";
import Car from "./Car";
import SUV from "./SUV";

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
