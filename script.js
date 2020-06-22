"use strict";
var isMobile = function () {
    if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)) {
        return true;
    }
    else {
        return false;
    }
};
if (isMobile()) {
    screen.orientation.lock("portrait-primary");
}
System.register("index", ["./Controllers/MenuController.ts", "./Controllers/TableController.ts", "./Controllers/MobileController"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (_1) {
            },
            function (_2) {
            },
            function (_3) {
            }
        ],
        execute: function () {
        }
    };
});
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
var CheckAnyMenuOpen = function () {
    var menus = [mainMenuIsOpen, userMenuIsOpen];
    var anyOpen = menus.includes(true);
    return anyOpen;
};
System.register("Models/TableRow", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            exports_2("default", (function (index, name, point) {
                return "\n  <div class=\"box\">\n    <div>\n      <div class=\"box-number\"><span>" + index + "</span></div>\n      <div class=\"box-category\">\n        <span\n          class=\"iconify icon\"\n          data-icon=\"maki:soccer-11\"\n          data-inline=\"false\"\n        ></span>\n      </div>\n      <div class=\"box-time\">\n        <span\n          class=\"iconify icon\"\n          data-icon=\"bi:shield-fill\"\n          data-inline=\"false\"\n        ></span>\n      </div>\n      <div class=\"box-name\"><span>" + name + "</span></div>\n\n      <div class=\"box-star\">\n        <span\n          class=\"iconify icon\"\n          data-icon=\"ant-design:star-filled\"\n          data-inline=\"false\"\n        ></span>\n      </div>\n    </div>\n    <div>\n      <div class=\"box-point\"><span>" + point + "</span></div>\n    </div>\n  </div>\n";
            }));
        }
    };
});
System.register("Definitions/Interfaces", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("Controllers/TableController", ["Models/TableRow"], function (exports_4, context_4) {
    "use strict";
    var TableRow_1, topRoundTable, topHourTable, topSeasonTable, topHourUsers, topRoundUsers, topSeasonUsers, TableController, Init;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (TableRow_1_1) {
                TableRow_1 = TableRow_1_1;
            }
        ],
        execute: function () {
            topRoundTable = document.querySelector("#round-table");
            topHourTable = document.querySelector("#hour-table");
            topSeasonTable = document.querySelector("#season-table");
            topHourUsers = [{ name: "Arthur", points: 999 }];
            topRoundUsers = [
                { name: "Arthur", points: 999 },
                { name: "Arthur", points: 949 },
                { name: "Arthur", points: 999 },
                { name: "Arthur Reis Limadsadasdkmkmkl", points: 149 },
                { name: "Arthur", points: 149 },
                { name: "Arthur", points: 929 },
                { name: "Arthur", points: 999 },
                { name: "Arthur", points: 919 },
                { name: "Arthur", points: 99 },
                { name: "Arthur", points: 99 },
            ];
            topSeasonUsers = [{ name: "Arthur", points: 999 }];
            TableController = (function () {
                function TableController() {
                }
                TableController.draw = function (table, elements) {
                    var _this = this;
                    this.table = table;
                    elements.forEach(function (element, index) {
                        var newRow = document.createElement("li");
                        newRow.classList.add("row");
                        var name = element.name, points = element.points;
                        newRow.innerHTML = TableRow_1.default(index + 1, name, points);
                        _this.table.appendChild(newRow);
                    });
                };
                return TableController;
            }());
            Init = function () {
                TableController.draw(topRoundTable, topRoundUsers);
            };
            Init();
        }
    };
});
