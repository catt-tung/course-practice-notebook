import backpack from "./script";

function openBackpack (backpack) => {
  if (backpack.lidOpen == True) {
    return
  };
  elif (backpack.lidOpen == False) {
    backpack.toggleLid = True
  };
}