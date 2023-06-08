class WaterGlass {
  constructor(
    type,
    volume,
    height,
    usage,
    inDishwasher
  ) {
    this.type = type;
    this.volume = volume;
    this.height = height;
    this.usage = usage;
    this.inDishwasher = inDishwasher
  }
  toggleDishwasher(loadedInDishwasher) {
    this.inDishwasher = loadedInDishwasher;
  }
}

export default WaterGlass;