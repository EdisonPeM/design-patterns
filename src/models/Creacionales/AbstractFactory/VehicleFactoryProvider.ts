import type VehicleFactory from "./VehicleFactory";

import LuxuryVehicleFactory from "./LuxuryVehicleFactory";
import NonLuxuryVehicleFactory from "./NonLuxuryVehicleFactory";

/*
 * Factory Method Over AbstractFactory
 */
class VehicleFactoryProvider {
  static FACTORY_TYPES = {
    LUXURY_VEHICLE: "LUXURY",
    NON_LUXURY_VEHICLE: "NON LUXURY",
  };

  static getVehicleFactory(
    type: keyof typeof VehicleFactoryProvider.FACTORY_TYPES
  ): VehicleFactory {
    switch (type) {
      case VehicleFactoryProvider.FACTORY_TYPES.LUXURY_VEHICLE:
        return new LuxuryVehicleFactory();

      case VehicleFactoryProvider.FACTORY_TYPES.NON_LUXURY_VEHICLE:
        return new NonLuxuryVehicleFactory();

      default:
        throw new Error("Vehicle Factory Type is not supported");
    }
  }
}

export default VehicleFactoryProvider;
