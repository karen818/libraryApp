exports.up = function(knex, Promise) {
    return knex.schema.createTable('categories', function(table) {
    table.increments();
    table.string('name');
    table.string('major');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('categories');
};
