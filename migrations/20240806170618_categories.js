export async function up(knex) {
  await knex.schema.createTable('products-categories', (table) => {
    table.increments('id')
    table.string('text')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('products-categories')
}
