import Car from "./Car";

class LuxuryCar implements Car {
  constructor(private name: string) {}

  getCarName(): string {
    return this.name;
  }

  getCarFeatures() {
    return "Luxury Car Features ";
  }
}

export default LuxuryCar;
