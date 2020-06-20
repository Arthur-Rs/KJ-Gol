const userMenu = document.querySelector("#menu-user");
const userMenuBtn = document.querySelector("#menu-user-button");
let userMenuIsOpen = false;

userMenuBtn.addEventListener("click", () => {
  if (!userMenuIsOpen) {
    userMenu.classList.add("animate-open");
    userMenu.classList.remove("animate-close");
  } else {
    userMenu.classList.add("animate-close");
    userMenu.classList.remove("animate-open");
  }

  userMenuIsOpen = !userMenuIsOpen;
});
