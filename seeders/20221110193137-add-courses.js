'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('courses', [{
      title: 'POO',
      description: 'Primer curso de poo',
      weeks: '6',
      enroll_cost: '1500',
      minium_skill: 'begginer',
      bootcamp_id: '1',
     },
     {
      title: 'POO_Avanzado',
      description: 'Segundo curso de poo',
      weeks: '9',
      enroll_cost: '2500',
      minium_skill: 'Intermediate',
      bootcamp_id: '2'
     }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {});
  }
};
