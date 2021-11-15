import {
  VehicleFactory,
  VehicleFactoryProvider,
} from "../../../models/Creationals/AbstractFactory";

export function SearchVehicle(category, type) {
  const vehicleFactory = VehicleFactoryProvider.getVehicleFactory(category);

  // Little function similar to Factory Method
  //  is not a Factory Method because the implementation is more than just creation
  switch (type) {
    case VehicleFactory.VEHICLE_TYPES.CAR: {
      const car = vehicleFactory.getCar();
      const carName = car.getCarName();
      const carFeatures = car.getCarFeatures();
      return `Name: ${carName}, Features: ${carFeatures}`;
    }

    case VehicleFactory.VEHICLE_TYPES.SUV: {
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
