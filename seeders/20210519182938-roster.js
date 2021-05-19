'use strict';
const player = require('../models/player');

const playerData = [
  {
    fullName: 'Alex Ovechkin',
    currentTeam: 'Washington Capitals',
    jerseyNumber: 8,
    position: 'LW',
    careerGoals: 730,
    careerAssists: 590,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Sidney Crosby',
    currentTeam: 'Pittsburg Penguins',
    jerseyNumber: 87,
    position: 'C',
    careerGoals: 486,
    careerAssists: 839,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Auston Matthews',
    currentTeam: 'Toronto Maple Leafs',
    jerseyNumber: 34,
    position: 'C',
    careerGoals: 199,
    careerAssists: 152,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Steven Stamkos',
    currentTeam: 'Tampa Bay Lightning',
    jerseyNumber: 91,
    position: 'C',
    careerGoals: 439,
    careerAssists: 427,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName:
    currentTeam:
    jerseyNumber:
    position:
    careerGoals:
    careerAssists:
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName:
    currentTeam:
    jerseyNumber:
    position:
    careerGoals:
    careerAssists:
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName:
    currentTeam:
    jerseyNumber:
    position:
    careerGoals:
    careerAssists:
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName:
    currentTeam:
    jerseyNumber:
    position:
    careerGoals:
    careerAssists:
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName:
    currentTeam:
    jerseyNumber:
    position:
    careerGoals:
    careerAssists:
    createdAt: new Date(),
    updatedAt: new Date()
  },
]



module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('rosters', playerData, {})
     
      

    
  
},



  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('rosters', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
