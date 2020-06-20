// ==== GLOBAL ====\\

// ==== MENUS ====\\

const userMenu = document.querySelector("#menu-user");
const userMenuBtn = document.querySelector("#menu-user-button");
let userMenuIsOpen = false;

userMenuBtn.addEventListener("click", () => {
  if (!userMenuIsOpen) {
    CheckAnyMenuOpen() && CloseMainMenu();
    OpenUserMenu();
  } else {
    CloseUserMenu();
  }

  CheckAnyMenuOpen();
  userMenuIsOpen = !userMenuIsOpen;
});

const OpenUserMenu = () => {
  userMenu.classList.add("animate-open-user-menu");
  userMenu.classList.remove("animate-close-user-menu");
};

const CloseUserMenu = () => {
  userMenu.classList.add("animate-close-user-menu");
  userMenu.classList.remove("animate-open-user-menu");
};

const mainMenu = document.querySelector("#main-menu");
const mainMenuBtn = document.querySelector("#main-menu-button");
let mainMenuIsOpen = false;

mainMenuBtn.addEventListener("click", () => {
  if (!mainMenuIsOpen) {
    CheckAnyMenuOpen() && CloseUserMenu();
    OpenMainMenu();
  } else {
    CloseMainMenu();
  }

  CheckAnyMenuOpen();
  mainMenuIsOpen = !mainMenuIsOpen;
});

const OpenMainMenu = () => {
  mainMenu.classList.add("animate-open-main-menu");
  mainMenu.classList.remove("animate-close-main-menu");
};

const CloseMainMenu = () => {
  mainMenu.classList.add("animate-close-main-menu");
  mainMenu.classList.remove("animate-open-main-menu");
};

// ==== MORE FUNCTIONS ==== \\

const CheckAnyMenuOpen = () => {
  const menus = [mainMenuIsOpen, userMenuIsOpen];
  const anyOpen = menus.includes(true);
  ScroolPageController(anyOpen);
  return anyOpen;
};

const ScroolPageController = (active) => {
  if (innerWidth > 700) {
    return;
  }
  document.body.style.overflow = active ? "scroll" : "hidden";
};
