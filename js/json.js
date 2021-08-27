// javascript object notation
// JSON
const user = {
    id:11,
    name: 'Amir',
    job: 'Actor'
};
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    name: 'Alia Store',
    address: 'Ranbir Road',
    profit: 15000,
    products: ['Laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'Alia Batt',
        profession: 'Actor'
    },
    isExpensive: false
};
const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted);