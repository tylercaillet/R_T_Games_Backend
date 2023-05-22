'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'listings',
      [
        {
          title: 'Minecraft',
          rating: '4.4 out of 5',
          image: 'https://i.imgur.com/6DQdYcA.png',
          description: "Minecraft is a sandbox game developed by Mojang Studios. The game was created by Markus Notch Persson in the Java programming language.",
          year: '2011',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Grand Theft Auto V',
          rating: '3.8 out of 5',
          image: 'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fgrand-theft-auto-v%2Fhome%2FGTAV_EGS_Artwork_1920x1080_Hero-Carousel_V06-1920x1080-1503e4b1320d5652dd4f57466c8bcb79424b3fc0.jpg',
          description: "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overall.",
          year: '2013',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'God of War 4',
          rating: '4.8 out of 5',
          image: 'https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S1_2560x1440-5d74d9b240bba8f2c40920dcde7c5c67_2560x1440-5d74d9b240bba8f2c40920dcde7c5c67',
          description: "God of War is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment.",
          year: '2018',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'World of Warcraft',
          rating: '4 out of 5',
          image: 'https://i.imgur.com/kLdd5uN.jpeg',
          description: "World of Warcraft is a massively multiplayer online role-playing game released in 2004 by Blizzard Entertainment.",
          year: '2004',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Red Dead Redemption',
          rating: '9.7 out of 10',
          image: 'https://fontmeme.com/images/Red-Dead-Redemption-Cover.jpg',
          description: "Red Dead Redemption is a 2010 action-adventure game developed by Rockstar San Diego and published by Rockstar Games. A spiritual successor to 2004's Red Dead Revolver, it is the second game in the Red Dead series.",
          year: '2010',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Fortnite',
          rating: '9.6 out of 10',
          image: 'https://i.imgur.com/IMjozOI.png',
          description: "Fortnite Battle Royale, a free-to-play battle royale game in which up to 100 players fight to be the last person standing.",
          year: '2017',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Halo 3',
          rating: '9.5 out of 10',
          image: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Halo_3_Logo.png',
          description: "Halo 3's story centers on the interstellar war between twenty-sixth century humanity, a collection of alien races known as the Covenant, and the alien parasite Flood. The player assumes the role of the Master Chief, a cybernetically enhanced supersoldier, as he battles the Covenant and the Flood.",
          year: '2007',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Batman: Arkham City',
          rating: '9.4 out of 10',
          image: 'https://www.nicepng.com/png/detail/145-1456343_batman-arkham-city-logo-batman-arkham-city-title.png',
          description: "Batman: Arkham City is a 2011 action-adventure game developed by Rocksteady Studios and published by Warner Bros. Interactive Entertainment. Based on the DC Comics superhero Batman, it is the sequel to the 2009 video game Batman: Arkham Asylum and the second installment in the Batman: Arkham series.",
          year: '2011',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'League of Legends',
          rating: '3.2 out of 5',
          image: 'https://1000logos.net/wp-content/uploads/2020/09/League-of-Legends-Logo-2008.png',
          description: "League of Legends, commonly referred to as League, is a 2009 multiplayer online battle arena video game developed and published by Riot Games.",
          year: '2009',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'GoldenEye 007',
          rating: '8 out of 10',
          image: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/wii_24/SI_Wii_GoldenEye007_image1600w.jpg',
          description: "GoldenEye 007 is a 1997 first-person shooter video game developed by Rare and published by Nintendo for the Nintendo 64.",
          year: '1997',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Portal 2',
          rating: '9.4 out of 10',
          image: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/620/aae901f5cca93fb9f50fd4746535d24cd572b5b4.jpg',
          description: "Portal 2 is a 2011 puzzle-platform video game developed by Valve for Windows, Mac OS X, Linux, PlayStation 3, and Xbox 360.",
          year: '2011',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'The Last of Us',
          rating: '6 out of 10',
          image: 'https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg',
          description: "Players control Joel, a smuggler tasked with escorting a teenage girl, Ellie, across a post-apocalyptic United States. The Last of Us is played from a third-person perspective.",
          year: '2013',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Super Mario Odyssey',
          rating: '4.7 out of 5',
          image: 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000001130/c42553b4fd0312c31e70ec7468c6c9bccd739f340152925b9600631f2d29f8b5',
          description: "Super Mario Odyssey is a 2017 platform game developed and published by Nintendo for the Nintendo Switch.",
          year: '2017',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Resident Evil 2',
          rating: '9 out of 10',
          image: 'https://image.api.playstation.com/vulcan/ap/rnd/202206/0608/9cJzlUE7sOpwvrCmOzxubniq.jpg',
          description: "Resident Evil 2 is a 2019 survival horror game developed and published by Capcom.",
          year: '2019',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Borderlands 2',
          rating: '10 out of 10',
          image: 'https://pixelz.cc/wp-content/uploads/2017/11/borderlands-2-logo-uhd-4k-wallpaper.jpg',
          description: "Borderlands 2 is a 2012 first-person shooter video game developed by Gearbox Software and published by 2K. Taking place five years following the events of Borderlands (2009), the game is again set on the planet of Pandora.",
          year: '2012',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Assassins Creed IV: Black Flag',
          rating: '8.5 out of 10',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Assassin%27s_Creed_IV_-_Black_Flag_logo.png/800px-Assassin%27s_Creed_IV_-_Black_Flag_logo.png',
          description: "Assassin's Creed IV: Black Flag is a 2013 action-adventure video game developed by Ubisoft Montreal and published by Ubisoft. It is the sixth major installment in the Assassin's Creed series.",
          year: '2013',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'The Legend of Zelda: Breath of the Wild',
          rating: '4.8 out of 5',
          image: 'https://www.zelda.com/breath-of-the-wild/assets/img/header/zelda-botw-logo.png',
          description: "The Legend of Zelda: Breath of the Wild is a 2017 action-adventure game developed by Nintendo EPD for the Nintendo Switch and Wii U. Set at the end of the Zelda timeline, the player controls an amnesiac Link as he sets out to save Princess Zelda and prevent Calamity Ganon from destroying Hyrule.",
          year: '2017',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'BioShock',
          rating: '9.1 out of 10',
          image: 'https://cdna.artstation.com/p/assets/images/images/011/891/874/large/chx-king-logo-04.jpg?1531954283',
          description: "The game is set in 1960, and follows Jack who discovers the underwater city of Rapture. Built by business magnate Andrew Ryan to be an isolated utopia, the discovery of ADAM, a genetic material which grants superhuman powers, initiated the city's turbulent decline. ",
          year: '2007',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Baldurs Gate: Dark Alliance',
          rating: '8 out of 10',
          image: 'https://cdn1.epicgames.com/spt-assets/6c01371e776d4efbad4176efb96fab0f/baldurs_gate_dark_alliance-logo-101wl.png?h=270&quality=medium&resize=1&w=480',
          description: "Baldur's Gate: Dark Alliance is a 2001 action role-playing/hack and slash video game developed by Snowblind Studios for the PlayStation 2 and the Xbox consoles.",
          year: '2001',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Call of Duty 4: Modern Warfare',
          rating: '9.4 out of 10',
          image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/7940/header.jpg?t=1678298739',
          description: "Call of Duty 4: Modern Warfare is a 2007 first-person shooter video game developed by Infinity Ward and published by Activision. It is the fourth main installment in the Call of Duty series.",
          year: '2007',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Undertale',
          rating: '10 out of 10',
          image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/790fc838044305.5754741e8bce0.jpg',
          description: "Undertale is a 2015 2D role-playing video game created by American indie developer Toby Fox. The player controls a child who has fallen into the Underground: a large, secluded region under the surface of the Earth, separated by a magical barrier.",
          year: '2015',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'The Elder Scrolls 4: Shivering Isles',
          rating: '8.5 out of 10',
          image: 'https://m.media-amazon.com/images/I/61wroo0UJZL.jpg',
          description: "The Elder Scrolls IV: Shivering Isles is the second expansion pack for the role-playing video game The Elder Scrolls IV: Oblivion. Announced on January 18, 2007, the expansion was developed, published, and released over the Xbox Live Marketplace by Bethesda Softworks; its retail release was co-published with 2K Games.",
          year: '2007',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Metroid Prime',
          rating: '9.8 out of 10',
          image: 'https://images.nintendolife.com/164b10bdd71f4/metroid-prime-logo.large.jpg',
          description: "Metroid Prime is an action-adventure game developed by Retro Studios and published by Nintendo for the GameCube. Metroid Prime is the fifth main Metroid game and the first to use 3D computer graphics and a first-person perspective.",
          year: '2002',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Street Fighter 2',
          rating: '8 out of 10',
          image: 'https://www.giantbomb.com/a/uploads/scale_medium/8/87790/1793317-logo_sf2.png',
          description: "Street Fighter II: The World Warrior is a 2D fighting game developed by Capcom and originally released for arcades in 1991. It is the second installment in the Street Fighter series and the sequel to 1987's Street Fighter. It is Capcom's fourteenth game to use the CP System arcade system board.",
          year: '1991',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'The Legend of Zelda: Ocarina of Time',
          rating: '10 out of 10',
          image: 'https://w7.pngwing.com/pngs/646/456/png-transparent-the-legend-of-zelda-ocarina-of-time-3d-the-legend-of-zelda-a-link-between-worlds-nintendo-3ds-logo-nintendo-text-nintendo-logo.png',
          description: "The Legend of Zelda: Ocarina of Time is an action-adventure game developed and published by Nintendo for the Nintendo 64. It was released in Japan and North America in November 1998 and in PAL regions the following month. Ocarina of Time is the first game in The Legend of Zelda series with 3D graphics. ",
          year: '1998',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Doom',
          rating: '4.8 out of 5',
          image: 'https://cdn.dribbble.com/users/535985/screenshots/13396708/78936443956981.580357b6cbc5a.png',
          description: "Doom is a 1993 first-person shooter game developed by id Software for MS-DOS. Players assume the role of a space marine, popularly known as Doomguy, fighting their way through hordes of invading demons from hell. id began developing Doom after the release of their previous FPS, Wolfenstein 3D.",
          year: '1993',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Tony Hawks Pro Skater 2',
          rating: '9.5 out of 10',
          image: 'https://assets-prd.ignimgs.com/2022/01/29/tony-hawk-pro-skater-2-button-edit-1643485674590.jpg',
          description: "Tony Hawk's Pro Skater 2 is a skateboarding video game developed by Neversoft and published by Activision. It is the second installment in the Tony Hawk's series of sports games and was released for the PlayStation in 2000, with subsequent ports to Microsoft Windows, Game Boy Color, and Dreamcast the same year. ",
          year: '2000',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Disco Elysium: The Final Cut',
          rating: '8.3 out of 10',
          image: 'https://cdn1.epicgames.com/ff52981b1d9947978153c7a7f8bc6d90/offer/EGS_DiscoElysiumTheFinalCut_ZAUM_S5-1920x1080-d4811511d7c3b0442ccf811184e3e68a.jpg',
          description: "The Final Cut is the definitive edition of the smash-hit RPG. Pursue your political dreams in new quests, meet and question more of the city's locals, and explore a whole extra area. Full voice-acting, controller support, and expanded language options also included. Get even more out of this award-winning open world. You're a detective with a unique skill system at your disposal and a whole city block to carve your path across. Interrogate unforgettable characters, crack murders, or take bribes. Become a hero or an absolute disaster of a human being.",
          year: '2021',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Perfect Dark',
          rating: '8.8 out of 10',
          image: 'https://assets-prd.ignimgs.com/2020/09/04/perfect-dark-generic-1599256240992.jpg',
          description: "Step into the Dark... As Carrington Institute's most promising new Agent, Joanna Dark must uncover the truth behind the dataDyne Corporation's recent technological breakthroughs - breakthroughs which could have serious consequences for mankind.",
          year: '2000',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'NFL 2K1',
          rating: '6.3 out of 10',
          image: 'https://segaretro.org/images/5/55/NFL2K1_title.png',
          description: "In the end, NFL 2K1 is a deeper, more refined version of the original game.",
          year: '2000',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Half-Life 2',
          rating: '9.2 out of 10',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Assassin%27s_Creed_IV_-_Black_Flag_logo.png/800px-Assassin%27s_Creed_IV_-_Black_Flag_logo.png',
          description: "Metacritic's 2004 PC Game of the Year] By taking the suspense, challenge and visceral charge of the original, and adding startling new realism and responsiveness, Half-Life 2 opens the door to a world where the player's presence affects everything around him, from the physical environment to the behaviors -- even the emotions -- of both friends and enemies.",
          year: '2004',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Uncharted 2: Among Thieves',
          rating: '8.8 out of 10',
          image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/220/header.jpg?t=1666823596',
          description: "Fortune hunter Nathan Drake returns in Uncharted 2: Among Thieves, a third-person action-adventure/shooter created by award-winning developer Naughty Dog. Down on his luck, Drake is lured back into the treacherous world of thieves and mercenary treasure-seekers he had sought to leave behind.",
          year: '2009',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Tetris',
          rating: '7.4 out of 10',
          image: 'https://cdn.mos.cms.futurecdn.net/FJY29u96GopjnjRhWi2N6i-1200-80.jpg',
          description: "In Tetris, players complete lines by moving differently shaped pieces (tetrominoes), which descend onto the playing field. The completed lines disappear and grant the player points, and the player can proceed to fill the vacated spaces. The game ends when the uncleared lines reach the top of the playing field.",
          year: '1985',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Tekken 3',
          rating: '9.1 out of 10',
          image: 'https://i.ytimg.com/vi/N3YAwyC5Wc0/maxresdefault.jpg',
          description: "An ancient evil force has reawakened, attacking in secret and feeding on the souls of mighty warriors. To lure it out of hiding will take the greatest fighting contest the world has ever seen...Tekken 3. Some are fighting for revenge, some for honor, Ultimately, all are fighting for their lives and the fate of all mankind.",
          year: '1998',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Elden Ring',
          rating: '7.6 out of 10',
          image: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/06/Elden-Ring-1.jpg',
          description: "A New World Created By Hidetaka Miyazaki And George R. R. Martin. ELDEN RING, developed by FromSoftware, Inc. and BANDAI NAMCO Entertainment Inc., is a fantasy action-RPG adventure set within a world created by Hidetaka Miyazaki creator of the influential DARK SOULS video game series; and George R.R. Martin author of The New York Times best-selling fantasy series, A Song of Ice and Fire.",
          year: '2022',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Mass Effect 2',
          rating: '8.9 out of 10',
          image: 'https://live.staticflickr.com/2795/4312872709_790ed5677c_b.jpg',
          description: "The Mass Effect trilogy is a science fiction adventure set in a vast universe filled with dangerous alien life forms and mysterious uncharted planets. In this dark second chapter, Saren’s evil army of Geth soldiers has just been defeated, and humans, who are still struggling to make their mark on the galactic stage, are now faced with an even greater peril.",
          year: '2010',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'The Elder Scrolls 5: Skyrim',
          rating: '8.6 out of 10',
          image: 'https://www.kindpng.com/picc/m/785-7853543_tes-v-skyrim-logo-png-transparent-png.png',
          description: "The next chapter in the Elder Scrolls saga arrives from the Bethesda Game Studios. Skyrim reimagines the open-world fantasy epic, bringing to life a complete virtual world open for you to explore any way you choose. Play any type of character you can imagine, and do whatever you want; the legendary freedom of choice, storytelling, and adventure of The Elder Scrolls is realized like never before.",
          year: '2011',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Grand Theft Auto: Vice City',
          rating: '8.8 out of 10',
          image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Vice-city-cover.jpg/220px-Vice-city-cover.jpg',
          description: "Metacritic's 2002 PS2 Game of the Year ] Welcome to Vice City. Welcome to the 1980s. Having just made it back onto the streets of Liberty City after a long stretch in maximum security, Tommy Vercetti is sent to Vice City by his old boss, Sonny Forelli.",
          year: '2002',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Madden NFL 2003',
          rating: '7.6 out of 10',
          image: 'https://upload.wikimedia.org/wikipedia/fr/e/eb/Madden_NFL_2003_Logo.png',
          description: "Take Your Game Online: Access an online community where you can meet, chat, and play head-to-head against other gamers. Audio Dream Team: Dynamic play-by-play and analysis by Madden and Michaels. All-New Mini-camp: Hop on John Madden's Cruiser Tour Bus and travel to all NFL cities to complete skilled tasks.",
          year: '2002',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Metal Gear Solid V: The Phantom Pain',
          rating: '7.6 out of 10',
          image: 'https://w7.pngwing.com/pngs/992/779/png-transparent-metal-gear-solid-v-the-phantom-pain-quiet-video-game-konami-digital-entertainment-logo-metal-gear-solid-v-the-phantom-pain-text-poster-logo.png',
          description: "Following the prologue METAL GEAR SOLID V: GROUND ZEROES, METAL GEAR SOLID V: THE PHANTOM PAIN concludes the METAL GEAR SOLID V experience by following the story of the protagonist of the series, Big Boss (a.k.a. Snake). The METAL GEAR SOLID V experience is Creator and Director Hideo Kojima's first time incorporating open world gameplay to the groundbreaking METAL GEAR franchise.",
          year: '2015',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Devil May Cry',
          rating: '8.6 out of 10',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Assassin%27s_Creed_IV_-_Black_Flag_logo.png/800px-Assassin%27s_Creed_IV_-_Black_Flag_logo.png',
          description: "In a large American metropolis, a man named Dante, a private investigator of the supernatural, is seeking revenge for the death of his mother and brother. The world is waiting, for Dante is no ordinary man, and with his father's sword in hand, he must enter the demon realm and avenge mankind.",
          year: '2013',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Mario Bros',
          rating: '7.3 out of 10',
          image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/15081ebe-a86a-4d6b-9fc9-23d9d799b1a1/dfkpb7s-8274cbd0-76d6-441b-9d57-8130bf2dc1c4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE1MDgxZWJlLWE4NmEtNGQ2Yi05ZmM5LTIzZDlkNzk5YjFhMVwvZGZrcGI3cy04Mjc0Y2JkMC03NmQ2LTQ0MWItOWQ1Ny04MTMwYmYyZGMxYzQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.YqZ8NEDbcUKcGI6sYverVztFeMQD435gnkZR_Igf8nQ',
          description: "Mario Bros. is a 1983 arcade game developed and published for arcades by Nintendo. It was designed by Shigeru Miyamoto and Gunpei Yokoi, Nintendo's chief engineer. Italian twin brother plumbers Mario and Luigi exterminate creatures emerging from the sewers by knocking them upside-down and kicking them away.",
          year: '1983',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Gears of War',
          rating: '8.4 out of 10',
          image: 'https://upload.wikimedia.org/wikipedia/en/d/d2/Gears_of_War_logo.PNG',
          description: "Gears of War blends tactical action with survival horror and thrusts gamers into a deep and harrowing story of humankind's epic battle for survival against the Locust Horde, a nightmarish race of creatures that surface from the bowels of the planet. Lead war hero Marcus Fenix and his fire team as they face the onslaught of merciless warrior fiends. A revolutionary tactical combat system and breathtaking, high-definition visuals from the Unreal Engine 3 immerse you in a horrifying story of war and survival. A.I. teammates are indiscernable from human players. Voice recognition and real-time lip synching heighten the experience. The battlefield is a lethal place. To survive, suppress your enemy with blindfire, take cover in interactive environments, or use weapons and teammates to outwit your foes.",
          year: '2006',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'The Witcher 3: Wild Hunt',
          rating: '10 out of 10',
          image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg?t=1675178392',
          description: "The Witcher 3: Wild Hunt is a 2015 action role-playing game developed and published by CD Projekt. It is the sequel to the 2011 game The Witcher 2: Assassins of Kings and the third game in The Witcher video game series, played in an open world with a third-person perspective.",
          year: '2015',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'God of War: Ragnarok',
          rating: '7.9 out of 10',
          image: 'https://i.ytimg.com/vi/dIQGI36BxDE/maxresdefault.jpg',
          description: "The freezing winds of Fimbulwinter have come to Midgard, making survival for Kratos, Atreus, and Mimir in the Norse wilds even more challenging than before. Kratos, still bearing the knowledge of his past mistakes, wants to spare Atreus the bloody lessons he learned from his conflict with gods.",
          year: '2022',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Divinity: Original Sin 2',
          rating: '8.8 out of 10',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Assassin%27s_Creed_IV_-_Black_Flag_logo.png/800px-Assassin%27s_Creed_IV_-_Black_Flag_logo.png',
          description: "Master deep, tactical combat. Join up to 3 other players - but know that only one of you will have the chance to become a God.",
          year: '2017',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Hades',
          rating: '8.6 out of 10',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Assassin%27s_Creed_IV_-_Black_Flag_logo.png/800px-Assassin%27s_Creed_IV_-_Black_Flag_logo.png',
          description: "Defy the god of the dead as you hack and slash out of the Underworld in this rogue-like dungeon crawler from the creators of Bastion, Transistor, and Pyre. Hades is a god-like rogue-like dungeon crawler that combines the best aspects of Supergiant's critically acclaimed titles, including the fast-paced action of Bastion, the rich atmosphere and depth of Transistor, and the character-driven storytelling of Pyre.",
          year: '2021',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Star Wars: Knights of the Old Republic',
          rating: '9 out of 10',
          image: 'https://cdn.akamai.steamstatic.com/steam/apps/32370/capsule_616x353.jpg?t=1681144833',
          description: "Star Wars: Knights of the Old Republic is a role-playing video game developed by BioWare and published by LucasArts. The first installment of the Star Wars: Knights of the Old Republic series, it was released for the Xbox on July 16, 2003, and for Microsoft Windows on November 19, 2003.",
          year: '2003',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Starcraft 2: Wings of Liberty',
          rating: '8.2 out of 10',
          image: 'https://upload.wikimedia.org/wikipedia/en/2/20/StarCraft_II_-_Box_Art.jpg',
          description: "StarCraft II continues the epic saga of the Protoss, Terran, and Zerg. These three distinct and powerful races clash once again in the fast-paced real-time strategy sequel to the legendary original, StarCraft. Legions of veteran, upgraded, and brand-new unit types do battle across the galaxy, as each faction struggles for survival. Featuring a unique single-player campaign that picks up where StarCraft: Brood War left off, StarCraft II presents a cast of new heroes and familiar faces in an edgy sci-fi story filled with adventure and intrigue.",
          year: '2010',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Tom Clancys Splinter Cell',
          rating: '8.6 out of 10',
          image: 'https://cdn.akamai.steamstatic.com/steam/apps/13560/header.jpg?t=1680011054',
          description: "Infiltrate terrorists' positions, acquire critical intelligence by any means necessary, execute with extreme prejudice, and exit without a trace. In Tom Clancy's Splinter Cell, you are Sam Fisher, a highly trained secret operative of the NSA's secret arm: Third Echelon. Suit up with the latest classified field operative gear and weapons as you travel through diverse mission objectives. The world's future is in your hands, as cyber terrorism and international tensions are about to explode into WWIII.",
          year: '2002',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Okami',
          rating: '9.1 out of 10',
          image: 'https://cdn.dribbble.com/users/958455/screenshots/4857576/okami-wolf-dribbble.png?compress=1&resize=400x300&vertical=top',
          description: "In Okami, the legendary monster Orochi has come back to life and turned the world into a veritable wasteland. Players must assume the role of a wolf, an embodiment of the sun god Amaterasu, which is capable of wielding unimaginable power. The state of the world lies in gamer's hands as they must fight ominous beings and reclaim the earth from a curse that plagues it. It is crucial to help Amaterasu make the world a place where all living creatures can dwell once again.",
          year: '2006',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Fallout 3',
          rating: '8.5 out of 10',
          image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/22300/capsule_616x353.jpg?t=1665072658',
          description: "Vault-Tec engineers have worked around the clock on an interactive reproduction of Wasteland life for you to enjoy from the comfort of your own vault. Included is an expansive world, unique combat, shockingly realistic visuals, tons of player choice, and an incredible cast of dynamic characters. Every minute is a fight for survival against the terrors of the outside world – radiation, Super Mutants, and hostile mutated creatures.",
          year: '2008',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Beat Saber',
          rating: '8.5 out of 10',
          image: 'https://cdn.akamai.steamstatic.com/steam/apps/620980/capsule_616x353.jpg?t=1680556938',
          description: "Beat Saber is a VR rhythm game where your goal is to slash the beats which perfectly fit into precisely handcrafted music.",
          year: '2019',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Rock Band 3',
          rating: '8 out of 10',
          image: 'https://www.giantbomb.com/a/uploads/screen_kubrick/8/87790/1885919-box_rockband3.png',
          description: "Rock Band returns with another iteration of the popular music game featuring new songs and instruments.",
          year: '2010',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'NBA 2k1',
          rating: '7.2 out of 10',
          image: 'https://e.snmc.io/lk/l/x/b275266c1f50ad555c15d10bb8f70f76/7512196',
          description: "Visual Concepts has tweaked and buffed out the annoying gameplay traits that plagued its original hoops game, and the result is a highly polished product.",
          year: '2000',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Super Smash Bros. Ultimate',
          rating: '8.6 out of 10',
          image: 'https://www.smashbros.com/data/bs/en_US/en_GB/img/1_US.jpg',
          description: "Inklings from the Splatoon series, as well as returning Smash characters like Mario and Link will be making appearances in this classic Nintendo franchise's Switch debut. Faster combat, new items, new attacks, new defensive options, and more will keep the battle raging whether you’re at home or on the go.",
          year: '2018',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Forza Horizon 4',
          rating: '8.3 out of 10',
          image: 'https://upload.wikimedia.org/wikipedia/en/8/87/Forza_Horizon_4_cover.jpg',
          description: "For the first time in the racing and driving genre, experience dynamic seasons in a shared open-world. Explore beautiful scenery, collect over 450 cars, and become a Horizon Superstar in historic Britain.",
          year: '2018',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'NHL 2k3',
          rating: '6.5 out of 10',
          image: 'https://segaretro.org/images/thumb/7/70/NHL2K3_title.png/320px-NHL2K3_title.png',
          description: "NFL 2K3 upgrades Sega Sports' football series with realistic player animations, play-calling intelligence, and an on-the-fly audible system. With Franchise mode, you get total team control as player, coach, and general manager. A new ESPN broadcast system lets you review all the highlights from your games. Now you can track the best players, make the smartest trades, and build the most dominant team in the league. NFL 2K3 also brings you closer to the action with updated rosters and authentic stadiums.",
          year: '2002',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Bloodborne',
          rating: '8.9 out of 10',
          image: 'https://image.api.playstation.com/vulcan/img/rnd/202010/2614/KKLEVc2SIIgrFVjsZChZJk1d.jpg',
          description: "Bloodborne is an action RPG in which you hunt for answers in the ancient city of Yharnam, now cursed with a strange endemic illness spreading through the streets like a disease. Peril, death and madness infest this dark world, and you're tasked with uncovering its darkest secrets which will be necessary for you to survive. Armed with a singular arsenal of weaponry, including guns and saw cleavers, you'll require wits, strategy and reflexes to dispatch the agile and intelligent enemies that guard the city's underbelly. You will utility holy chalices to access an array of vast underground ruins, chock full of traps, beasts, and rewards, to explore and conquer on your own or with other people.",
          year: '2015',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'The Sims',
          rating: '7.9 out of 10',
          image: 'https://media.contentapi.ea.com/content/dam/eacom/SIMS/220923-franchise-page-rebrand/images/2022/10/the-sims-featured-image-2022-oct.jpg.adapt.crop191x100.1200w.jpg',
          description: "In SimCity, you had the power to build and control cities ... with The Sims, you'll create and control people!",
          year: '2000',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Final Fantasy 12',
          rating: '7.6 out of 10',
          image: 'https://cache-na.finalfantasy.com/assets/web/title/logo_ff12_en-76e8558555086cefbd75ccfa8256a653db4dbc3d98da9cd9ef2e4e97143cc6cd.png',
          description: "The story takes place in a world called Ivalice, in an age when magic was commonplace and airships plied the skies - the Archadian Empire, seeking to strengthen its base of power, had been invading and subjugating its neighboring lands one by one- a fate which befell the small Kingdom of Dalmasca. Archadia's invasion and the subsequent death of the Dalmascan king prompted the Princess Ashe, the sole surviving heir to the Dalmascan throne, to take up arms against the invaders. In her struggle to oust the occupying Archadian forces and restore freedom to her people, Ashe must watch as many of her allies pay the blood price for that freedom.",
          year: '2006',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('listings', null, {})
  }
}
