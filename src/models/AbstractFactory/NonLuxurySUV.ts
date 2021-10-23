import SUV from "./SUV";

class NonLuxurySUV implements SUV {
  constructor(private name: string) {}

  getSUVName(): string {
    return this.name;
  }

  getSUVFeatures(): string {
    return "Non-Luxury SUV Features ";
  }
}

export default NonLuxurySUV;
