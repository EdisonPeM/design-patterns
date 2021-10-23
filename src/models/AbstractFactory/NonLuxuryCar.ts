import Car from "./Car";

class NonLuxuryCar implements Car {
  constructor(private name: string) {}

  getCarName(): string {
    return this.name;
  }

  getCarFeatures(): string {
    return "Non-Luxury Car Features ";
  }
}

export default NonLuxuryCar;
