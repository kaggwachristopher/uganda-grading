const marks = require("../index");

test("testing that the marks are a number", ()=>{
  expect(typeof(marks.marks)).toBe("number");
})

test("testing if the mark is F", ()=>{
  expect(marks.computeMarks()).toBe("F");
})