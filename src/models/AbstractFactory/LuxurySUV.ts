import SUV from "./SUV";

class LuxurySUV implements SUV {
  constructor(private name: string) {}

  getSUVName(): string {
    return this.name;
  }

  getSUVFeatures(): string {
    return "Luxury SUV Features ";
  }
}

export default LuxurySUV;
