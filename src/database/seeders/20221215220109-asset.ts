'use strict';

// @ts-ignore
const moment = require('moment');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'assets',
      [
        {
          family_id: 2,
          name: 'Samsung Universe 9',
          created_at: moment().toDate(),
          updated_at: moment().toDate(),
        },
        {
          family_id: 2,
          name: 'Samsung Galaxy Book',
          created_at: moment().toDate(),
          updated_at: moment().toDate(),
        },
        {
          family_id: 6,
          name: 'iPhone 9',
          created_at: moment().toDate(),
          updated_at: moment().toDate(),
        },
        {
          family_id: 7,
          name: 'iPhone X',
          created_at: moment().toDate(),
          updated_at: moment().toDate(),
        },
        {
          family_id: 3,
          name: 'Huawei P30',
          created_at: moment().toDate(),
          updated_at: moment().toDate(),
        },
        {
          family_id: 8,
          name: 'Samsung Universe 9',
          created_at: moment().toDate(),
          updated_at: moment().toDate(),
        },
        {
          family_id: 9,
          name: 'Huawei P30',
          created_at: moment().toDate(),
          updated_at: moment().toDate(),
        },
        {
          family_id: 9,
          name: 'iPhone X',
          created_at: moment().toDate(),
          updated_at: moment().toDate(),
        },
        {
          family_id: 4,
          name: 'Samsung Universe 9',
          created_at: moment().toDate(),
          updated_at: moment().toDate(),
        },
        {
          family_id: 10,
          name: 'Samsung Galaxy Book',
          created_at: moment().toDate(),
          updated_at: moment().toDate(),
        },
        {
          family_id: 5,
          name: 'Huawei P30',
          created_at: moment().toDate(),
          updated_at: moment().toDate(),
        },
        {
          family_id: 11,
          name: 'iPhone X',
          created_at: moment().toDate(),
          updated_at: moment().toDate(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('assets', null, {});
  },
};
