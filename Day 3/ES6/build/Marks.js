"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Marks = void 0;
class Marks {
  constructor(subjectName, mark) {
    this.subjectName = subjectName;
    this.mark = mark;
  }
  test() {
    console.log(this.subjectName + " " + this.mark);
  }
}
exports.Marks = Marks;