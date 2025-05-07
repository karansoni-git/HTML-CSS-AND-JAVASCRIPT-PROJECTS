let isSwitchOn = true;
let getSwitch = document.querySelector(".switch");
let getBulbUpper = document.querySelector(".bulb_Upper");
let getBulbMain = document.querySelector(".bulb_Main");

getSwitch.addEventListener("click", function () {
  if (isSwitchOn) {
    getSwitch.classList.remove("switch_On");
    getBulbUpper.classList.remove("bulb_Upper_On");
    getBulbMain.classList.remove("bulb_Main_On");
    isSwitchOn = false;
  } else {
    getSwitch.classList.add("switch_On");
    getBulbUpper.classList.add("bulb_Upper_On");
    getBulbMain.classList.add("bulb_Main_On");
    isSwitchOn = true;
  }
});
