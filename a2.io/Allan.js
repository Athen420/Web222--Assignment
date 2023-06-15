
//making an array and add 5 objects
let students = [{
//Adding properties for object 1
studentName: "Kanye West",
marksObtained: 78,
totalMarks: 80
},
{
//Adding properties for object 2
studentName: "Find God",
marksObtained: 79,
totalMarks: 80
},
{
//Adding properties for object 3
studentName: "Biju",
marksObtained: 48,
totalMarks: 80
},
{
//Adding properties for object 4
studentName: "Roberto Idioto",
marksObtained: 20,
totalMarks: 80
},
{
  //Adding properties for object 5
  studentName: "Athen",
  marksObtained: 50,
  totalMarks: 80
  },
]

//Using the .forEach() method to add a property "percentage" to each student object.
students.forEach(student => {
//Calculating the percentage of all the students.
let percentage_value = (student.marksObtained / student.totalMarks) * 100;
// Adding percentage to present objects
student.percentage = percentage_value;
});

//Using the .sort() method to sort the array from highest percentage to lowest and print the result 
students.sort(function (a, b) {
return b.percentage - a.percentage;
});

// Print the sorted array in console and web page
console.log(JSON.stringify(students));

// Print each students name and percentage on webpage
// variable to hold html
let html = "";
students.forEach(student => {
// Get name and percentage values for each student
let per_val = student.percentage;
let name = student.studentName;

// Use if else statements to print grades based on values of percentage of student 
if (per_val >= 90) {
html += `<b>Name: </b>${name} <b> Percentage: </b>${per_val}<b> Grade:</b> A <br>`;
} else if (per_val >= 80) {
html += `<b>Name: </b>${name} <b> Percentage: </b>${per_val}<b> Grade:</b> B <br>`;
} else if (per_val >= 70) {
html += `<b>Name: </b>${name} <b> Percentage: </b>${per_val}<b> Grade:</b> B+ <br>`;
} else if (per_val >= 60) {
html += `<b>Name: </b>${name} <b> Percentage: </b>${per_val}<b> Grade:</b> C <br>`;
} else if (per_val >= 50) {
html += `<b>Name: </b>${name} <b> Percentage: </b>${per_val}<b> Grade:</b> D <br>`;
} else if (per_val < 50) {
html += `<b>Name: </b>${name} <b> Percentage: </b>${per_val}<b> Grade:</b> Fail <br>`;
} else {
html += "No Valid Value";
}
});

// output generated html on webpage
document.body.outerHTML = html;





