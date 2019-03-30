// Load Chance and instantiate Chance so it can be used
const Chance = require('chance');
const chance = new Chance();

// Load Faker
const faker = require('faker/locale/es');

function generate_random_name(option) {
    let random_name
    if (option === "faker") {
        random_name = `${faker.name.firstName()} ${faker.name.lastName()} `;
    } else {
        random_name = chance.name();
    }
    return random_name;
}

function generate_random_private_credentials_chance() {
    return {
        name: chance.name(),
        email: chance.email(),
        gender: chance.gender(),
        birthday: chance.birthday({ string: true })
    }
}

module.exports = {
    generate_random_name: generate_random_name,
    generate_random_private_credentials: generate_random_private_credentials_chance
};
