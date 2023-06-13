"use strict";

var _Marks = require("./Marks.js");
//console.log("Shardul Gautam");

class Student {
  constructor(rollNo, firstName, lastName, markArr, totalMarks) {
    this.rollNo = rollNo;
    this.firstName = firstName;
    this.lastName = lastName;
    this.markArr = markArr;
    this.totalMarks = 0;
  }
  calculateTotalMarks() {
    this.totalMarks = 0;
    this.markArr.forEach(element => {
      this.totalMarks += element.mark;
    });
  }
  show() {
    this.calculateTotalMarks(this.markArr);
    console.log(this.rollNo, this.firstName, this.lastName, this.markArr, this.totalMarks);
  }
}
const resultPercentage = arrayOfStudents => {
  return arrayOfStudents.map(student => {
    student.calculateTotalMarks();
    const totalSubject = student.markArr.length;
    return student.totalMarks / totalSubject;
  });
};
const distinction = arrayOfStudents => {
  return arrayOfStudents.filter(student => {
    student.calculateTotalMarks();
    return student.totalMarks >= 200;
  });
};
const studentDetails = (students, rollNo) => {
  const student = students.find(student => {
    student.calculateTotalMarks();
    return student.rollNo === rollNo;
  });
  console.log(`${student.rollNo}   ${student.firstName} ${student.lastName}    ${student.totalMarks}`);
};
const stu1marks1 = new _Marks.Marks("Math", 89);
const stu1marks2 = new _Marks.Marks("Chemistry", 99);
const stu1marks3 = new _Marks.Marks("Physics", 90);
let markArr1 = [stu1marks1, stu1marks2, stu1marks3];
const stu2marks1 = new _Marks.Marks("Math", 79);
const stu2marks2 = new _Marks.Marks("Chemistry", 45);
const stu2marks3 = new _Marks.Marks("Physics", 87);
let markArr2 = [stu2marks1, stu2marks2, stu2marks3];
const stu3marks1 = new _Marks.Marks("Math", 59);
const stu3marks2 = new _Marks.Marks("Chemistry", 67);
const stu3marks3 = new _Marks.Marks("Physics", 40);
let markArr3 = [stu3marks1, stu3marks2, stu3marks3];
var student1 = new Student(1, 'Shardul', 'Gautam', markArr1);
var student2 = new Student(2, 'Gaurav', 'Pandey', markArr2);
var student3 = new Student(3, 'Shivam', 'Yadav', markArr3);
const allStudents = [student1, student2, student3];
student1.show();
student2.show();
student3.show();
console.log(resultPercentage(allStudents));
const totalDistinction = distinction(allStudents).length;
console.log(`Total Student with distinction ${totalDistinction}`);
studentDetails(allStudents, 1);