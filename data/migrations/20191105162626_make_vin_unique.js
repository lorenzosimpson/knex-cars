
exports.up = function(knex) {
  return knex.schema.alterTable('vehicles', function(table) {
      table.unique('vin')
  })
};

exports.down = function(knex) {
  return knex.schema.dropUnique('vin');
};
