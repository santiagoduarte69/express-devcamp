'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      username: 'John',
      email: 'john@gmail.com',
      password: '123456'
     },
    {
      username: 'Doe',
      email: 'doe@gmail.com',
      password: '123456'
    },
    {
      username: 'Cristian',
      email: 'critina@gmail.com',
      password: '123456'
    }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('users', null, {});
  }
};
