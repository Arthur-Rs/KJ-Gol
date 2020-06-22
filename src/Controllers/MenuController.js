"use strict";
// ==== MENUS ====\\
var userMenu = document.querySelector("#menu-user");
var userMenuBtn = document.querySelector("#menu-user-button");
var userMenuIsOpen = false;
userMenuBtn.addEventListener("click", function () {
    if (!userMenuIsOpen) {
        CheckAnyMenuOpen() && CloseMainMenu();
        OpenUserMenu();
    }
    else {
        CloseUserMenu();
    }
    userMenuIsOpen = !userMenuIsOpen;
});
var OpenUserMenu = function () {
    userMenu.classList.add("animate-open-user-menu");
    userMenu.classList.remove("animate-close-user-menu");
};
var CloseUserMenu = function () {
    userMenu.classList.add("animate-close-user-menu");
    userMenu.classList.remove("animate-open-user-menu");
};
var mainMenu = document.querySelector("#main-menu");
var mainMenuBtn = document.querySelector("#main-menu-button");
var mainMenuIsOpen = false;
mainMenuBtn.addEventListener("click", function () {
    if (!mainMenuIsOpen) {
        CheckAnyMenuOpen() && CloseUserMenu();
        OpenMainMenu();
    }
    else {
        CloseMainMenu();
    }
    mainMenuIsOpen = !mainMenuIsOpen;
});
var OpenMainMenu = function () {
    mainMenu.classList.add("animate-open-main-menu");
    mainMenu.classList.remove("animate-close-main-menu");
};
var CloseMainMenu = function () {
    mainMenu.classList.add("animate-close-main-menu");
    mainMenu.classList.remove("animate-open-main-menu");
};
// ==== MORE FUNCTIONS ==== \\
var CheckAnyMenuOpen = function () {
    var menus = [mainMenuIsOpen, userMenuIsOpen];
    var anyOpen = menus.includes(true);
    return anyOpen;
};
