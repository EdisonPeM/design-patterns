import {
  VEHICLE_TYPES,
  AbstractVehicleFactory,
} from "../../../models/Creacionales/AbstractFactory";

export function SearchVehicle(category, type) {
  const vehicleFactory = AbstractVehicleFactory.getVehicleFactory(category);

  // Little function similar to Factory Method
  //  is not a Factory Method because the implementation is more than just creation
  switch (type) {
    case VEHICLE_TYPES.CAR: {
      const car = vehicleFactory.getCar();
      const carName = car.getCarName();
      const carFeatures = car.getCarFeatures();
      return `Name: ${carName}, Features: ${carFeatures}`;
    }

    case VEHICLE_TYPES.SUV: {
      const suv = vehicleFactory.getSUV();
      const suvName = suv.getSUVName();
      const suvFeatures = suv.getSUVFeatures();
      return `Name: ${suvName}, Features: ${suvFeatures}`;
    }

    default: {
      throw new Error("Vehicle Type is not supported");
    }
  }
}
