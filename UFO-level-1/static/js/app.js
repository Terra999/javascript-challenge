console.log("app.js loaded!")

// from data.js
var tableData = data;

// console.log(data);

var tbody = d3.select("tbody");

data.forEach(ufoData => {

  console.log(ufoData);

  var row = tbody.append("tr");

  Object.entries(ufoData).forEach(([key, value]) => {

    var cell = row.append("td");
    cell.text(value);
  
  });
});

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // console.log(inputElement);
  // console.log(inputValue);

var filterData = tableData.filter(tableData => tableData.datetime === inputValue);

console.log(filterData);


};