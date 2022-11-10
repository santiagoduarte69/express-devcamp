'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bootcamps', [{
      name: 'Javascripts Avanzado',
      description: 'Bootcamp professional',
      website: 'java.com',
      phone: '3214568794',
      average_rating: '5.2',
      average_cost: '1500',
      user_id: '1'
     },
     {
      name: 'Php Avanzado',
      description: 'Bootcamp professional teacher',
      website: 'php.com',
      phone: '3202303044',
      average_rating: '1.2',
      average_cost: '800213',
      user_id: '1'
     }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bootcamps', null, {});
  }
};
