"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var TableRow_1 = __importDefault(require("../Models/TableRow"));
var topRoundTable = document.querySelector("#round-table");
var topHourTable = document.querySelector("#hour-table");
var topSeasonTable = document.querySelector("#season-table");
var topHourUsers = [{ name: "Arthur", points: 999 }];
var topRoundUsers = [
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
var topSeasonUsers = [{ name: "Arthur", points: 999 }];
var TableController = /** @class */ (function () {
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
var Init = function () {
    TableController.draw(topRoundTable, topRoundUsers);
};
Init();
