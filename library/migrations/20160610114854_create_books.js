exports.up = function(knex, Promise) {
    return knex.schema.createTable('books', function(table) {
    table.increments();
    table.string('title');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('books');
};
