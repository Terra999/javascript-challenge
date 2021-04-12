console.log("app.js loaded!")

// Assign the data from data.js to a descriptive variable
var ufoData = data;

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
var button = d3.select("#filter-btn");

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

  // Filter for the date entered in the input field

  var filterData = ufoData.filter(ufo => (ufo.datetime === inputValue));

  console.log(filterData);

  // var list = d3.select("tr");

  // list.append("td").text(filterData);

};