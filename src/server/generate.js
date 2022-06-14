var faker = require('faker');

var database = { character: [] };

for (var i = 1; i < 5; i++) {
    database.character.push({
        id: i,
        name: faker.name.words(),
        status: faker.status.words(),
        species: faker.species.words(),
        gender: faker.gender.words(),
        origin: faker.origin.words(),
        location: faker.location.words(),
        image: faker.image.words(),
        published: true,
    });
}

console.log(JSON.stringify(database));
