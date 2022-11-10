'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reviews', [{
      title: 'Problems',
      text: 'No me deja ingresar al curso',
      rating: '1.2',
      bootcamp_id: '1',
      user_id: '1'
     },
     {
      title: 'Curso complejo',
      text: 'El curso es supremante dificil pero enseña mucho',
      rating: '4.3',
      bootcamp_id: '2',
      user_id: '2'
     }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reviews', null, {});
  }
};
