// take total amount of items and divide it by the array length
// 1. Show me how to calculate the average price of all items.

var itemsPrice = items.map
var sum = 0;
for( var i = 0; i < itemsPrice.length; i++ ){
    sum += Number(itemsPrice[i], itemsPrice.length);
}

var avg = sum/itemsPrice.length;

console.log(avg);

// 2. Show me how to get an array of items that cost between $14.00 and $18.00 USD

// find all the items in the list and their price
// select the ones between $14-$18
// display an array of the total items with that price point

var costArr = items.filter(function(amount) {
  return amount.price
});
if (amount.price <= 18 || 14 <= amount.price){

  return items.name
}


// 3. Which item has a "GBP" currency code? Display it's name and price.
var gbp =
items.map(function(currency_code){
return currency_code.price + currency_code.name;

});

console.log(gpb);

var gbp ='';
for (var i = 0; i < items.map; i++) {
  is (String(items[i].currency_code).indexOf('gpb') === 2) {
    gbp.push(items[i]);
  }
console.log(gpb);

var gpb2 = items.filter(function(amount) {
  return String(person.birthYear).indexOf('8') === 2;
});
console.log(gpb2);

//
// 4. Display a list of all items who are made of wood.


var items =[];
var woodItems = [];

for (var i = 0; i < items.length; i++) {
  if(String(items[i].materials) === "wood") {
    woodItems.push(items[i]);
  }
}
console.log('woodItems');

var woodItems2 = items.filter(function(woodStuffs) {
  return String(woodStuffs.materials) === "wood";
});
console.log('woodItems2');

//
//
//
// 5. Which items are made of eight or more materials? Display the name, number of items and the items it is made of.
 // if items > 8 materials return array.



// 6. How many items were made by their sellers?
var seller= items.map(function(itemBySeller){
  return items.who_made;

});

var sellers2 = items.filter(function(idid){
  return items.who_made === "i_did";

});
