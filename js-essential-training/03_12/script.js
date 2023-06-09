import Backpack from "./Backpack.js";
import WaterGlass from "./WaterGlass.js";

const paperlessBackpack = new Backpack (
  'Paperless Backpack',
  30,
  'black',
  6,
  26,
  26,
  true
)

const cocktailGlass = new WaterGlass (
  'Cocktail Glass',
  300,
  8,
  'Cocktails',
  false
)

const smallGlass = new WaterGlass (
  'Water Glass',
  150,
  4,
  'Water',
  true
)