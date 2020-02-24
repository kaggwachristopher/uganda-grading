class Marks {
  constructor(subject, mark, student) {
    this.subject = subject;
    this.mark = mark;
    this.student = student;
  }

  computeScore() {
    if(marks >= 90) {
      console.log("You got an A");
    } else if(marks >= 80 && marks < 90) {
      console.log("You got a B");
    } else if(marks >= 70 && marks < 80) {
      console.log("You got a C");
    } else if(marks >= 60 && marks < 70) {
      console.log("You got a D");
    } else if(marks >= 50 && marks < 60) {
      console.log("You got a E");
    } else if(marks >= 40 && marks < 50) {
      console.log("You got an O");
    } else if(marks >= 0 && marks < 40) {
      console.log("YOU FAILED");
    }
  }
}