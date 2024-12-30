import { faker } from "@faker-js/faker";
import Answer from "../models/Answer.js";

const run = async (limit) => {
  try {
    let data = [];

    for (let i = 0; i < limit; i++) {
      data.push({
        "6757a9fcb466f5990d732074": faker.person.fullName(),
        "6757aa06b466f5990d732076": faker.helpers.arrayElement([
          "33",
          "34",
          "35",
        ]),
        "6757aa08b466f5990d732078": faker.helpers.arrayElements([
          "Nasi Goreng",
          "Nasi Uduk",
          "Sate",
          "Bubur Ayam",
        ]),
        formId: "67569d92c1af0177dda71c24",
        userId: "67492601d8f18ca6cfab0725",
      });
    }

    const fakeData = await Answer.insertMany(data);

    if (fakeData) {
      console.log(`Berhasil menambahkan ${limit} data`);
      process.exit();
    }
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

export { run };
