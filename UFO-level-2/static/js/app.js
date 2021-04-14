// Make sure app.js loaded
console.log("app.js loaded!")

// Assign the data from data.js to a descriptive variable
var ufoData = data;

// Get a hold of the tbody element in the DOM.
var tbody = d3.select("tbody");

console.log(ufoData);

// Use arrow functions to update each cell's text with ufo data values 
// (date, city, state, country, shape, duration(min), and comments)

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

    // Select all the filters.
    var filters = d3.selectAll(".filter");

    // Create event handlers - replaced "submit" with "change" for multiple filters
    button.on("click", runEnter);
    filters.on("change", runEnter);

    // Complete the event handler function for the form
    function runEnter() {

      // Prevent the page from refreshing
      d3.event.preventDefault();

      // Select the input element(s) to get the raw HTML node
      var dateElement = d3.select("#datetime");
      var cityElement = d3.select("#city");
      var stateElement = d3.select("#state");
      var countryElement = d3.select("#country");
      var shapeElement = d3.select("#shape");


      // Get the value property of the input element(s)
      var dateValue = dateElement.property("value");
      var cityValue = cityElement.property("value");
      var stateValue = stateElement.property("value");
      var countryValue = countryElement.property("value");
      var shapeValue = shapeElement.property("value");

      // console.log(inputValue);

      var filterData = ufoData;

      if (dateValue !== '') {
        // Filter for the date entered in the input field
        filterData = filterData.filter(ufo => (ufo.datetime === dateValue));
      }
      if (cityValue !== '') {
        // Filter for the city entered in the input field
        filterData = filterData.filter(ufo => (ufo.city === cityValue));
      }
      if (stateValue !== '') {
        // Filter for the state entered in the input field
        filterData = filterData.filter(ufo => (ufo.state === stateValue));
      }
      if (countryValue !== '') {
        // Filter for the country entered in the input field
        filterData = filterData.filter(ufo => (ufo.country === countryValue));
      }
      if (shapeValue !== '') {
        // Filter for the shape entered in the input field
        filterData = filterData.filter(ufo => (ufo.shape === shapeValue));
      }

      writeTable(filterData);

      console.log(filterData);

    };

