
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Elyse', email: 'hi.elyse.wyatt@gmail.com', hash: '12345'},
       
      ])
    })
}
