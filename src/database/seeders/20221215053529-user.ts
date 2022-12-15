'use strict';

// @ts-ignore
const moment = require('moment');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'John Doe',
          email: 'johndoe@mail.com',
          password:
            '$argon2i$v=19$m=4096,t=3,p=1$Wpu+P8z/MygOnVcAM7mbs/YWAkVwtANyTmXKyDE8NGo$tvh1fygi8J3DkWTpyUxeDpO/XsydHyF9mAFXP7ZkzrA', // password
          salt: '5a9bbe3fccff33280e9d570033b99bb3f616024570b403724e65cac8313c346a',
          created_at: moment().toDate(),
          updated_at: moment().toDate(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
