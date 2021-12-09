const faker = require('faker');

faker.locale = 'es';

const randomName = faker.name.findName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const randomCard = faker.helpers.createCard(); 


console.log(randomName);
console.log(randomEmail);
console.log(randomCard);
