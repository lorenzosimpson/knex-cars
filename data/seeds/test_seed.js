
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('vehicles').del()
    .then(function () {
      // Inserts seed entries
      return knex('vehicles').insert([
        {id: 1, vin: 'abc123', make: 'Toyota', model: 'Corolla', mileage: 20000}
      ]);
    });
};
