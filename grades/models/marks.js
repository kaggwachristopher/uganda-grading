class Marks {
  constructor(subject, marks, student) {
    this.subject = subject;
    this.marks = marks;
    this.student = student;
  }

  computeMarks() {
    let mark = null;

    if(this.marks >= 90) {
      console.log("You got an A");
      mark = "A";
    } else if(this.marks >= 80 && this.marks < 90) {
      console.log("You got a B");
      mark = "B";
    } else if(this.marks >= 70 && this.marks < 80) {
      console.log("You got a C");
      mark = "C";
    } else if(this.marks >= 60 && this.marks < 70) {
      console.log("You got a D");
      mark = "D";
    } else if(this.marks >= 50 && this.marks < 60) {
      console.log("You got a E");
      mark = "E";
    } else if(this.marks >= 40 && this.marks < 50) {
      console.log("You got an O");
      mark = "O";
    } else if(this.marks >= 0 && this.marks < 40) {
      console.log("YOU FAILED");
      mark = "F";
    }
    return mark;
  }

  validate() {
    valid = true;
    if(this.student === null) {
      valid = false;
      console.log("Student doesn't exist");
    }
    if(typeof(this.mark) !== "number") {
      valid = false;
      console.log("Please input a number");
    }
    if(this.mark < 0) {
      valid = false;
      console.log("Mark can't be less than 0");
    }
  }
}

module.exports = Marks;