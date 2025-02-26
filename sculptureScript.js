 // Import the data
const sculptureList = require('./data.js');

// Initialize an empty object to store lengths
const sculptureListLengths = {};

// Loop through sculptureList and calculate string lengths
sculptureList.forEach((sculpture, index) => {
    sculptureListLengths[index] = {};
    Object.keys(sculpture).forEach(key => {
        sculptureListLengths[index][key] = sculpture[key].length;
    });
});

// Log the result
console.log(sculptureListLengths);

// Export for testing if needed
module.exports = sculptureListLengths;

