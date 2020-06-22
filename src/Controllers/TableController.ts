import drawRow from "../Models/TableRow";

import { IRow } from "../Definitions/Interfaces";

const topRoundTable = <HTMLElement>document.querySelector("#round-table");
const topHourTable = <HTMLElement>document.querySelector("#hour-table");
const topSeasonTable = <HTMLElement>document.querySelector("#season-table");

const topHourUsers: IRow[] = [{ name: "Arthur", points: 999 }];
const topRoundUsers: IRow[] = [
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
const topSeasonUsers: IRow[] = [{ name: "Arthur", points: 999 }];

class TableController {
  static table: HTMLElement;
  static draw(table: HTMLElement, elements: IRow[]) {
    this.table = table;

    elements.forEach((element, index) => {
      const newRow = document.createElement("li");
      newRow.classList.add("row");

      const { name, points } = element;
      newRow.innerHTML = drawRow(index + 1, name, points);

      this.table.appendChild(newRow);
    });
  }
}

const Init = () => {
  TableController.draw(topRoundTable, topRoundUsers);
};

Init();
