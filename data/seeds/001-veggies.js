
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('veggies').truncate() //removes all rows from the table and resets id back to One
    .then(function () {
      // Inserts seed entries
      return knex('veggies').insert(generateData());
    });
};


function generateData(){
  return[
    {
      name: 'broccoli',
      color: 'green',
      tasty: false
    },
    {
      name: 'zucchini',
      color: 'green',
      tasty: false
    },
    {
      name: 'carrots',
      color: 'orange',
      tasty: true
    },
  ]
};