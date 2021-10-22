
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl =>{
        tbl.increments()
    })
    .createTable('ingredients', tbl =>{
        tbl.increments()
    })
    .createTable('steps', tbl =>{
        tbl.increments() 
    })
    .createTable('step_ingredients', tbl =>{
        tbl.increments()
    })
  
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('step_ingredients')
  .dropTableIfExists('steps')
  .dropTableIfExists('ingredients')
  .dropTableIfExists()
};
