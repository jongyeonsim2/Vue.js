import MainController from "./controller/MainController.js";

// DOM이 완성이 되면, MainController 를 가져와서 초기화하도록 함.
document.addEventListener(
  "DOMContentLoaded", () => {
    MainController.init()
  }
);