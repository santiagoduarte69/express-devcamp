'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //addColumn : argumentos
    //          1. Nombre de tabla donde poner l columna
    //          2. Nueva colummna  a poner
    //          3.opcions de configuracion
    await queryInterface.addColumn('courses' ,
                                   'bootcamp_id',
                                    {
                                      type:Sequelize.INTEGER,
                                      references:{
                                        model: 'bootcamps',
                                        ket: 'id',
                                      },
                                      onUpdate:  'CASCADE',
                                      onDelete: 'SET NULL'
                                    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('courses' ,
                                      'bootcamp_id')
  }
};
