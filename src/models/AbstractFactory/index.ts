import VehicleFactory from "./VehicleFactory";

import LuxuryVehicleFactory from "./LuxuryVehicleFactory";
import NonLuxuryVehicleFactory from "./NonLuxuryVehicleFactory";

export const VEHICLE_TYPES = {
  CAR: "CAR",
  SUV: "SUV",
};

export const FACTORY_TYPES = {
  LUXURY_VEHICLE: "LUXURY",
  NON_LUXURY_VEHICLE: "NON LUXURY",
};

// Factory of Factories
export function getVehicleFactory(
  type: keyof typeof FACTORY_TYPES
): VehicleFactory {
  switch (type) {
    case FACTORY_TYPES.LUXURY_VEHICLE:
      return new LuxuryVehicleFactory();

    case FACTORY_TYPES.NON_LUXURY_VEHICLE:
      return new NonLuxuryVehicleFactory();

    default:
      throw new Error("Vehicle Factory Type is not supported");
  }
}
