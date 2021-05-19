'use strict';
const player = require('../models/player');

const playerData = [
  {
    fullName: 'Alex Ovechkin',
    currentTeam: 'Washington Capitals',
    jerseyNumber: 8,
    position: 'LW',
    careerPoints: 1320,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Sidney Crosby',
    currentTeam: 'Pittsburgh Penguins',
    jerseyNumber: 87,
    position: 'C',
    careerPoints: 1325,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Auston Matthews',
    currentTeam: 'Toronto Maple Leafs',
    jerseyNumber: 34,
    position: 'C',
    careerPoints: 351,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Steven Stamkos',
    currentTeam: 'Tampa Bay Lightning',
    jerseyNumber: 91,
    position: 'C',
    careerPoints: 866,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Zach Parise',
    currentTeam: 'Minnesota Wild',
    jerseyNumber: 11,
    position: 'LW',
    careerPoints: 810,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Brad Marchand',
    currentTeam: 'Boston Bruins',
    jerseyNumber: 63,
    position: 'LW',
    careerPoints: 715,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Patrick Kane',
    currentTeam: 'Chicago Blackhawks',
    jerseyNumber: 88,
    position: 'RW',
    careerPoints: 1088,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Vladimir Tarasenko',
    currentTeam: 'St. Louis Blues',
    jerseyNumber: 91,
    position: 'RW',
    careerPoints: 442,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'T.J. Oshie',
    currentTeam: 'Washington Capitals',
    jerseyNumber: 77,
    position: 'RW',
    careerPoints: 610,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Nicklas Backstrom',
    currentTeam: 'Washington Capitals',
    jerseyNumber: 19,
    position: 'C',
    careerPoints: 980,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Nikita Kucherov',
    currentTeam: 'Tampa Bay Lightning',
    jerseyNumber: 86,
    position: 'RW',
    careerPoints: 547,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Artemi Panarin',
    currentTeam: 'New York Rangers',
    jerseyNumber: 10,
    position: 'LW',
    careerPoints: 473,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'John Carlson',
    currentTeam: 'Washington Capitals',
    jerseyNumber: 74,
    position: 'D',
    careerPoints: 522,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Zdeno Chara',
    currentTeam: 'Washington Capitals',
    jerseyNumber: 33,
    position: 'D',
    careerPoints: 666,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Brent Burns',
    currentTeam: 'San Jose Sharks',
    jerseyNumber: 88,
    position: 'D',
    careerPoints: 723,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Victor Hedman',
    currentTeam: 'Tampa Bay Lightning',
    jerseyNumber: 77,
    position: 'D',
    careerPoints: 518,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Kris Letang',
    currentTeam: 'Pittsburgh Penguins',
    jerseyNumber: 58,
    position: 'D',
    careerPoints: 582,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Keith Yandle',
    currentTeam: 'Florida Panthers',
    jerseyNumber: 3,
    position: 'D',
    careerPoints: 600,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Marc-Andre Fleury',
    currentTeam: 'Vegas Golden Knights',
    jerseyNumber: 29,
    position: 'G',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Braden Holtby',
    currentTeam: 'Vancouver Canucks',
    jerseyNumber: 70,
    position: 'G',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Carey Price',
    currentTeam: 'Montreal Canadiens',
    jerseyNumber: 31,
    position: 'G',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Philipp Grubauer',
    currentTeam: 'Colorado Avalanche',
    jerseyNumber: 31,
    position: 'G',
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
