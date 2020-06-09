
exports.up = function(knex) {
  return knex.schema.table('veggies', tbl => {
      tbl.boolean('tasty');
  })
};

exports.down = function(knex) {
    return knex.schema.table('veggies', tble => {
        tbl.dropColumn("tasty");
    });
};
