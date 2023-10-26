// Use the following data to apply the instuctions:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// Use forEach to console log each name to the console. You are allowed to call console.log seven times.
names.forEach(name => console.log(name));
// arrow function explanation: code will iterate over each element in names array and call console.log on each

// Use forEach to console log each name with a matching province (for example Ashwin (Western Cape). Note that you are only allowed to call console.log seven times.
// index represents the position of each name in the names array... which is then used to access the corresponding province from the provinces array using provinces[index]
// in the context of forEach method, the index parameter represents the index/position of the current element being processed in the array
// by using this index, you can access corresponding elements from other arrays
names.forEach((name, index) => {
    console.log(`${name} (${provinces[index]})`);
});

// Using map loop over all province names and turn the string to all uppercase. Log the new array to the console.
const uppercaseProvinces = provinces.map(province => province.toUpperCase()); // arrow function explanation: it takes each province name and for each province, coverts it to uppercase
console.log(uppercaseProvinces)

// Create a new array with map that has the amount of characters in each name. The result should be: [6, 9, 11, 5, 8, 7, 7]
const nameCharacterCounter = names.map(name => name.length);
console.log(nameCharacterCounter)

// Using toSorted to sort all provinces alphabetically
const sortProvinces = provinces.toSorted();
console.log(sortProvinces)

// Use filter to remove all provinces that have the word Cape in them. After filtering the array, return the amount of provinces left. The final value should be 3
const filteredProvinces = provinces.filter(province => !province.includes('Cape')); // meaning: filter provinces that do not include word "Cape"
const remainingProvincesCount = filteredProvinces.length;
console.log(remainingProvincesCount);

// Create a boolean array by using map and some to determine whether a name contains an S character. The result should be [true, true, false, true, false, true, false]
const containsS = names.map(name => name.toLowerCase().includes('s'));
console.log(containsS); // console displays wrong values


// Using only reduce, turn the above into an object that indicates the province of an individual. In other words:
// Object containing names as keys and provinces as values
const object = names.reduce((obj, name, index) => { // callback function takes an object (obj), current name (name), aand current index (index) 
    obj[name] = provinces[index]; // inside callback function: key-value pairs are assigned to obj (the object). Name is the key and corresponding province is the value. The provinces[index] expression retrieves the province based on the current index.
    return obj;
}, {}); // initial value for reduce is an empty object {} and each iteration of reduce updates and returns the obj object
console.log(object)

// Breakdown of the logic:
    // 1. Start with an initial value (obj) as an empty object ({})
    // 2. Iterate over each name in the names array
    // 3. For each iteration:
    //    - Assign the province at the current index as the value to the name key in the object
    // 4. Return the updated object for the next iteration
    // 5. The final value of the object will be the result
    // 6. Print the resulting object to the console

// ------------------------------------------------------------------------------------------------------------------------------ //

// Data
const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: '' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

// Use forEach to console.log each product name to the console.
console.log(
    products.forEach(product => console.log(product.product))
    )

// Use filter to filter out products that have a name longer than 5 characters
console.log(
    products.filter(product => product.product.length > 5)
    )

// Using both filter and map. Convert all prices that are strings to numbers, and remove all products from the array that do not have prices. After this has been done then use reduce to calculate the combined price of all remaining products.
    // a) remove products without prices:
    const removeNonPricedProducts = products.filter(product => product.price !== '');
    console.log(removeNonPricedProducts)
    // b) convert price strings to numbers
    const priceToNumber = removeNonPricedProducts.map(product => ({ ...product, price: parseFloat(product.price) }));
    console.log(priceToNumber)
    // c) calculate combined price
    const combinedPrice = priceToNumber.reduce((accumulator, product) => accumulator + product.price, 0);
    console.log(combinedPrice);

// Use reduce to concatenate all product names to create the following string: banana, mango, potato, avocado, coffee and tea.
const concatenatedString = products.reduce((accumulator, currentProduct, index) => {
    // Add a comma and space before each product name, except for the first product
    if (index !== 0) {
      accumulator += ', ';
    }
    // Concatenate the product name to the accumulator
    accumulator += currentProduct.product;
  
    return accumulator;
  }, '');
  
  console.log(concatenatedString);

// Use reduce to calculate both the highest and lowest-priced items. The names should be returned as the following string: Highest: coffee. Lowest: banana.
const prices = products.map(product => parseFloat(product.price)).filter(price => !isNaN(price));

const highestPrice = Math.max(...prices);
const lowestPrice = Math.min(...prices);

const highestProduct = products.find(product => parseFloat(product.price) === highestPrice);
const lowestProduct = products.find(product => parseFloat(product.price) === lowestPrice);

const resultString = `Highest: ${highestProduct.product}. Lowest: ${lowestProduct.product}.`;
console.log(resultString);

// Using only Object.entries and reduce recreate the object with the exact same values. However, the following object keys should be changed in the new array:
    // product should be changed to name
    // price should be changed to cost
    const updatedProducts = products.map(obj =>
        Object.entries(obj).reduce((acc, [key, value]) => {
          if (key === 'product') {
            acc.name = value;
          } else if (key === 'price') {
            acc.cost = value;
          } else {
            acc[key] = value;
          }
          return acc;
        }, {})
      );
      
      console.log(updatedProducts);