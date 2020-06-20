const userMenu = document.querySelector("#menu-user");
const userMenuBtn = document.querySelector("#menu-user-button");
let userMenuIsOpen = false;

userMenuBtn.addEventListener("click", () => {
  if (!userMenuIsOpen) {
    userMenu.classList.add("animate-open-user-menu");
    userMenu.classList.remove("animate-close-user-menu");
  } else {
    userMenu.classList.add("animate-close-user-menu");
    userMenu.classList.remove("animate-open-user-menu");
  }

  userMenuIsOpen = !userMenuIsOpen;
});

const mainMenu = document.querySelector("#main-menu");
const mainMenuBtn = document.querySelector("#main-menu-button");
let mainMenuIsOpen = false;

mainMenuBtn.addEventListener("click", () => {
  if (!mainMenuIsOpen) {
    mainMenu.classList.add("animate-open-main-menu");
    mainMenu.classList.remove("animate-close-main-menu");
  } else {
    mainMenu.classList.add("animate-close-main-menu");
    mainMenu.classList.remove("animate-open-main-menu");
  }

  mainMenuIsOpen = !mainMenuIsOpen;
});
