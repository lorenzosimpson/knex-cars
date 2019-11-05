
exports.up = function(knex) {
  return knex.schema.createTable('vehicles', function(table) {
      table.increments();
      table.string('vin').notNullable();
      table.string('make').notNullable();
      table.string('model').notNullable();
      table.float('mileage').notNullable();
      table.string('transmissionType');
      table.string('titleStatus');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('vehicles')
};
