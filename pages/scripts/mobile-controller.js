const isMobile = innerWidth < 700 ? true : false;
const ButtonUser = document.querySelector("#btnUser");

if (isMobile) {
  ButtonUser.setAttribute("data-icon", "gg:menu-grid-o");
}
