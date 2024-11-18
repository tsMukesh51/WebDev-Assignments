/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const mpp = new Map();
  transactions.forEach((transaction) => {
    if(mpp.get(transaction.category) == undefined)
      mpp.set(transaction.category, 0)
    let val = mpp.get(transaction.category);
    val += transaction.price;
    mpp.set(transaction.category, val);
  });
  res = [];
  mpp.forEach((val, key) => {
    res.push({
      'category':key,
      'totalSpent': val
    });
  })
  return res;
}

module.exports = calculateTotalSpentByCategory;
