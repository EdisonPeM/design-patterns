import {
  VEHICLE_TYPES,
  getVehicleFactory,
} from "../../../models/AbstractFactory";

export function SearchVehicle(category, type) {
  const vehicleFactory = getVehicleFactory(category);
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
