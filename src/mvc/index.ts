import { ValueOrArray, Json, TJSON, HypertextNode, TD, TS } from "../common";

export class mvc {
  index: number;
  item: TJSON;
  list: TJSON[]
  constructor() {
    this.create();
  }
  create = () => {
    this.list = [];
  }
  update = (index: number, item: TJSON) => {
    this.list[index] = item;
    return;
  }
  read = (index: number): TJSON => {
    return this.list[index]

  }

  delete = (index: number) => {

  }

}