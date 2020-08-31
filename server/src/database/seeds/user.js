const uuid = require('uuidv4');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: uuid.uuid(), name: '4linux', password: '4linux' },
      ]);
    });
};
