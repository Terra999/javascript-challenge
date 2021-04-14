// Make sure app.js loaded
console.log("app.js loaded!")

// Assign the data from data.js to a descriptive variable
var ufoData = data;

// Get a hold of the tbody element in the DOM.
var tbody = d3.select("tbody");

console.log(ufoData);

// Use arrow functions to update each cell's text with ufo data values 
// (date, city, state, country, shape, duration(min), and comments)
/**
 * Writes a data set to the page
 * @param {*} data - an array of ufo data
 */
function writeTable(data) {
  tbody.html("");
  data.forEach(ufoDatum => {
    var row = tbody.append("tr");
    Object.entries(ufoDatum).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}
writeTable(ufoData);

// console.log(ufoData);   

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

      // console.log(inputValue);
      var filterData = ufoData;

      if (inputValue !== '') {
        // Filter for the date entered in the input field
        filterData = filterData.filter(ufo => (ufo.datetime === inputValue));
      }
      
      writeTable(filterData);

      console.log(filterData);

    };

