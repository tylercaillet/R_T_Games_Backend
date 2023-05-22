'use strict'
const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // const reviews = [...Array(5)].map((_) => {
    //   return {
    //     userId: falso.randNumber({ min: 1, max: 20 }),
    //     listingId: falso.randNumber({ min: 1, max: 20 }),
    //     review: String(falso.randPhrase()),
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   }
      
    // })
    const reviews = [
      {
        userId: 3,
        listingId: 2,
        review: 'The storyline of this game is captivating!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        listingId: 3,
        review: 'I had high expectations, but this game fell short.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        listingId: 4,
        review: 'The multiplayer mode is so much fun!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        listingId: 2,
        review: 'I couldn\'t stop playing this game. It\'s addictive!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        listingId: 5,
        review: 'The graphics are mind-blowing!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        listingId: 3,
        review: 'The gameplay mechanics are smooth and intuitive.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 7,
        listingId: 4,
        review: 'The level design is fantastic, offering plenty of exploration.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 8,
        listingId: 2,
        review: 'The game soundtrack is absolutely phenomenal!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // {
      //   userId: 9,
      //   listingId: 5,
      //   review: 'The difficulty curve is well-balanced, providing a satisfying challenge.',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   userId: 10,
      //   listingId: 1,
      //   review: 'The character customization options are extensive.',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   userId: 11,
      //   listingId: 6,
      //   review: 'The graphics are stunning, with attention to detail in every aspect.',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   userId: 12,
      //   listingId: 7,
      //   review: 'The story is gripping and keeps you engaged from start to finish.',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   userId: 13,
      //   listingId: 8,
      //   review: 'The multiplayer mode offers hours of fun with friends.',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   userId: 14,
      //   listingId: 9,
      //   review: 'The in-game economy is well-balanced and encourages strategic decision-making.',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   userId: 15,
      //   listingId: 10,
      //   review: 'The game world is vast and filled with hidden treasures to discover.',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   userId: 16,
      //   listingId: 11,
      //   review: 'The gameplay mechanics are smooth and intuitive.',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   userId: 17,
      //   listingId: 12,
      //   review: 'The game offers a wide variety of customization options for characters.',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   userId: 18,
      //   listingId: 13,
      //   review: 'The soundtrack is immersive and enhances the overall gaming experience.',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   userId: 19,
      //   listingId: 14,
      //   review: 'The difficulty level is challenging but rewarding.',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   userId: 20,
      //   listingId: 15,
      //   review: 'The game features stunning and realistic visuals.',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   userId: 16,
      //   listingId: 11,
      //   review: 'The game has a captivating storyline that keeps you engaged from start to finish.',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   userId: 17,
      //   listingId: 12,
      //   review: 'The graphics are stunning and showcase attention to detail.',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   userId: 18,
      //   listingId: 13,
      //   review: 'The multiplayer mode offers endless hours of fun and competitive gameplay.',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   userId: 19,
      //   listingId: 14,
      //   review: 'The game mechanics are innovative and bring a fresh perspective to the genre.',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   userId: 20,
      //   listingId: 15,
      //   review: 'The game provides a seamless open-world experience with no loading times.',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   userId: 21,
      //   listingId: 16,
      //   review: 'The game offers a challenging gameplay experience that keeps you coming back for more.',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   userId: 22,
      //   listingId: 12,
      //   review: 'The graphics in this game are stunning, and the immersive world truly brings the game to life.',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   userId: 7,
      //   listingId: 18,
      //   review: 'The gameplay mechanics are smooth and intuitive, making it easy to pick up and play.',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   userId: 14,
      //   listingId: 5,
      //   review: 'The storyline is captivating and keeps you engaged from start to finish.',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   userId: 9,
      //   listingId: 10,
      //   review: 'The multiplayer mode offers endless hours of fun and competitive gameplay.',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   userId: 16,
      //   listingId: 3,
      //   review: 'The sound design is exceptional, creating a truly immersive audio experience.',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   userId: 11,
      //   listingId: 9,
      //   review: 'The game\s graphics are outdated and could use improvement.',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   userId: 8,
      //   listingId: 13,
      //   review: 'The controls are a bit clunky and take some time to get used to.',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   userId: 19,
      //   listingId: 6,
      //   review: 'The game offers a wide variety of customization options, allowing you to personalize your gameplay experience.',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   userId: 15,
      //   listingId: 4,
      //   review: 'The game world is vast and filled with secrets to discover, providing hours of exploration.',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   userId: 20,
      //   listingId: 17,
      //   review: 'The game\s AI opponents are challenging and provide a satisfying level of difficulty.',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   userId: 12,
      //   listingId: 7,
      //   review: 'The game offers a great balance between action-packed gameplay and strategic decision-making.',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // }
    ];
    await queryInterface.bulkInsert('reviews', reviews)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reviews')
  }
}

