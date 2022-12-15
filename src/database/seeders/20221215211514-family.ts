'use strict';

// @ts-ignore
const moment = require('moment');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'families',
      [
        {
          parent_id: null,
          name: 'Bani',
          sex: 'male',
          created_at: moment().toDate(),
          updated_at: moment().toDate(),
        },
        {
          parent_id: 1,
          name: 'Budi',
          sex: 'male',
          created_at: moment().toDate(),
          updated_at: moment().toDate(),
        },
        {
          parent_id: 1,
          name: 'Nida',
          sex: 'female',
          created_at: moment().toDate(),
          updated_at: moment().toDate(),
        },
        {
          parent_id: 1,
          name: 'Andi',
          sex: 'male',
          created_at: moment().toDate(),
          updated_at: moment().toDate(),
        },
        {
          parent_id: 1,
          name: 'Sigit',
          sex: 'male',
          created_at: moment().toDate(),
          updated_at: moment().toDate(),
        },
        {
          parent_id: 2,
          name: 'Hari',
          sex: 'male',
          created_at: moment().toDate(),
          updated_at: moment().toDate(),
        },
        {
          parent_id: 2,
          name: 'Siti',
          sex: 'female',
          created_at: moment().toDate(),
          updated_at: moment().toDate(),
        },
        {
          parent_id: 3,
          name: 'Bila',
          sex: 'female',
          created_at: moment().toDate(),
          updated_at: moment().toDate(),
        },
        {
          parent_id: 3,
          name: 'Lesti',
          sex: 'female',
          created_at: moment().toDate(),
          updated_at: moment().toDate(),
        },
        {
          parent_id: 4,
          name: 'Diki',
          sex: 'male',
          created_at: moment().toDate(),
          updated_at: moment().toDate(),
        },
        {
          parent_id: 5,
          name: 'Doni',
          sex: 'male',
          created_at: moment().toDate(),
          updated_at: moment().toDate(),
        },
        {
          parent_id: 5,
          name: 'Toni',
          sex: 'male',
          created_at: moment().toDate(),
          updated_at: moment().toDate(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('families', null, {});
  },
};
