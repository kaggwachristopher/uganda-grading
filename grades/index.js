const marks = require("./models/marks");
const student = require("./models/student");

const sandra = new marks("SST", 23, "Sandra");
sandra.computeMarks();

const hajiGrade = new marks("Islam", 90, "Haruna");
hajiGrade.computeMarks();

module.exports = sandra;