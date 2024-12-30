import databaseConnection from "./connection.js";

databaseConnection();

const args = process.argv;

let limit = 10;

if (args[3]) {
  limit = parseInt(args[3]);
}

const fakerFile = args[2];
const faker = await import(`./faker/${fakerFile}.js`);
faker.run(limit);
