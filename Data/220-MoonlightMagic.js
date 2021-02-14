let schema = [
    {
      category: "Category",
      categoryColor: "",
      sectionTitle: "Section Title",
      sectionLink: "#",
      sectionDescription: "Section Description",
      item: [
        {
          itemTitle: "Item Title",
          itemDescription: "Item Description",
          itemStart: "Start Date",
          itemStartCd: "Start Countdown",
          itemEnd: "",
          itemEndCd: "",
        },
      ],
    },
  ];
  
  let eventList = [
    //Category: Ellinel Full Moon Party
    {
        category: "Ellinel Full Moon Party",
        categoryColor: "#00a2ff",
        sectionTitle: "Search for Moon Candy",
        sectionLink: "https://maplestory.nexon.net/news/64760/updated-february-10-v-220-moonlight-magic-patch-notes#moon",
        sectionDescription: "Gather Moon Candy by completing tasks.",
        item: [
          {
            itemTitle: "Hunt monsters near your level",
            itemDescription: "",
            itemStart: new Date("2021/02/03 14:00 UTC"),
            itemStartCd: "startHuntMobs",
            itemEnd: new Date("2021/03/09 11:59 PM UTC"),
            itemEndCd: "endHuntMobs",
          },
          {
            itemTitle: "Obtain Combo Kill Orbs",
            itemDescription: "",
            itemStart: new Date("2021/02/10 00:00 UTC"),
            itemStartCd: "startComboOrbs",
            itemEnd: new Date("2021/03/09 11:59 PM UTC"),
            itemEndCd: "endComboOrbs",
          },
          {
            itemTitle: "Defeat Elite Monsters, Champions and Bosses",
            itemDescription: "",
            itemStart: new Date("2021/02/17 00:00 UTC"),
            itemStartCd: "startElites",
            itemEnd: new Date("2021/03/09 11:59 PM UTC"),
            itemEndCd: "endElites",
          },
          {
            itemTitle: "Use Runes",
            itemDescription: "",
            itemStart: new Date("2021/02/24 00:00 UTC"),
            itemStartCd: "startRunes",
            itemEnd: new Date("2021/03/09 11:59 PM UTC"),
            itemEndCd: "endRunes",
          },
          {
            itemTitle: "Help Pollo & Fritto ",
            itemDescription: "",
            itemStart: new Date("2021/03/03 00:00 UTC"),
            itemStartCd: "startHunters",
            itemEnd: new Date("2021/03/09 11:59 PM UTC"),
            itemEndCd: "endHunters",
          },
        ],
      },

      {
        category: "Ellinel Full Moon Party",
        categoryColor: "#00a2ff",
        sectionTitle: "Star Balloon Pop",
        sectionLink: "https://maplestory.nexon.net/news/64760/updated-february-10-v-220-moonlight-magic-patch-notes#star",
        sectionDescription: "Play the Hunting Mobs minigame to get up to 130 Star Candy daily.",
        item: [
          {
            itemTitle: "",
            itemDescription: "",
            itemStart: new Date("2021/02/03 14:00 UTC"),
            itemStartCd: "starCandy",
            itemEnd: new Date("2021/03/09 11:59 PM UTC"),
            itemEndCd: "starCandyE",
          },
        ],
      },

      {
        category: "Ellinel Full Moon Party",
        categoryColor: "#00a2ff",
        sectionTitle: "Phiny's Magic Wand",
        sectionLink: "https://maplestory.nexon.net/news/64760/updated-february-10-v-220-moonlight-magic-patch-notes#wand",
        sectionDescription: "Pay 200 Moon Candy once a day (twice a day on weeekend) for a BONK for levels 141-199.",
        item: [
          {
            itemTitle: "",
            itemDescription: "",
            itemStart: new Date("2021/02/03 14:00 UTC"),
            itemStartCd: "bonk",
            itemEnd: new Date("2021/03/09 11:59 PM UTC"),
            itemEndCd: "bonkE",
          },
        ],
      },

      {
        category: "Ellinel Full Moon Party",
        categoryColor: "#00a2ff",
        sectionTitle: "Cotton Candy Minigames",
        sectionLink: "https://maplestory.nexon.net/news/64760/updated-february-10-v-220-moonlight-magic-patch-notes#cookie",
        sectionDescription: "Play minigames to earn up to 100 Cotton Candy per day.",
        item: [
          {
            itemTitle: "Celestial Cookie Flip",
            itemDescription: "",
            itemStart: new Date("2021/02/03 14:00 UTC"),
            itemStartCd: "cookie",
            itemEnd: new Date("2021/02/23 11:59 PM UTC"),
            itemEndCd: "cookieE",
          },
          {
            itemTitle: "Uni-phoria",
            itemDescription: "",
            itemStart: new Date("2021/02/03 14:00 UTC"),
            itemStartCd: "uniphoria",
            itemEnd: new Date("2021/02/23 11:59 PM UTC"),
            itemEndCd: "uniphoriaE",
          },
          {
            itemTitle: "Potion Pyramid",
            itemDescription: "",
            itemStart: new Date("2021/02/24 00:00 UTC"),
            itemStartCd: "potionPyra",
            itemEnd: new Date("2021/03/09 11:59 PM UTC"),
            itemEndCd: "potionPyraE",
          },
          {
            itemTitle: "Wisp Wallop",
            itemDescription: "",
            itemStart: new Date("2021/02/24 00:00 UTC"),
            itemStartCd: "wispwallop",
            itemEnd: new Date("2021/03/09 11:59 PM UTC"),
            itemEndCd: "wispwallopE",
          },
        ],
      },

      {
        category: "Ellinel Full Moon Party",
        categoryColor: "#00a2ff",
        sectionTitle: "Coin Shops",
        sectionLink: "https://maplestory.nexon.net/news/64760/updated-february-10-v-220-moonlight-magic-patch-notes#moonlight",
        sectionDescription: "",
        item: [
          {
            itemTitle: "Moonlight Enhancement Shop",
            itemDescription: "",
            itemStart: new Date("2021/02/03 14:00 UTC"),
            itemStartCd: "shopmoon",
            itemEnd: new Date("2021/03/14 11:59 PM UTC"),
            itemEndCd: "shopmoonE",
          },
          {
            itemTitle: "Cotton Candy Workshop",
            itemDescription: "",
            itemStart: new Date("2021/02/03 14:00 UTC"),
            itemStartCd: "shopcotton",
            itemEnd: new Date("2021/03/14 11:59 PM UTC"),
            itemEndCd: "shopcottonE",
          },
        ],
      },
  
    //Category: Other Events
    {
      category: "Other Events",
      categoryColor: "#fff461",
      sectionTitle: "Fairy Bros’ Golden Giveaway",
      sectionLink:
        "https://maplestory.nexon.net/news/64760/updated-february-10-v-220-moonlight-magic-patch-notes#giveaway",
      sectionDescription:
        "Stay logged in for an hour each day and check in with the Fairy Bros to get attendance rewards.",
      item: [
        {
          itemTitle: "",
          itemDescription: "",
          itemStart: new Date("2021/02/03 14:00 UTC"),
          itemStartCd: "fairybros",
          itemEnd: new Date("2021/06/08 11:59 PM UTC"),
          itemEndCd: "fairybrosE",
        },
      ],
    },

    {
      category: "Other Events",
      categoryColor: "#fff461",
      sectionTitle: "Sunny Sunday",
      sectionLink:
        "https://maplestory.nexon.net/news/64760/updated-february-10-v-220-moonlight-magic-patch-notes#sunny",
      sectionDescription: "",
      item: [
        {
          itemTitle: "Week 1 - February 7",
          itemDescription:
            "30% off start force, double Moon Candy",
          itemStart: new Date("2021/02/07 12:00 AM UTC"),
          itemStartCd: "startSundayOne",
          itemEnd: new Date("2021/02/07 11:59 PM UTC"),
          itemEndCd: "endSundayOne",
        },
        {
            itemTitle: "Week 2 - February 14",
            itemDescription:
              "Free chat emoticon, 50% extra Monster Park EXP, double Moon Candy",
            itemStart: new Date("2021/02/14 12:00 AM UTC"),
            itemStartCd: "startSundayTwo",
            itemEnd: new Date("2021/02/14 11:59 PM UTC"),
            itemEndCd: "endSundayTwo",
          },
          {
            itemTitle: "Week 3 - February 21",
            itemDescription:
              "Free Mysterious Monsterbloom x3, double Monster Collection chance, double Moon Candy",
            itemStart: new Date("2021/02/21 12:00 AM UTC"),
            itemStartCd: "startSundayThree",
            itemEnd: new Date("2021/02/21 11:59 PM UTC"),
            itemEndCd: "endSundayThree",
          },
          {
            itemTitle: "Week 4 - February 28",
            itemDescription:
              "Double Pollo & Fritto and Inferno Wolf EXP, double Moon Candy",
            itemStart: new Date("2021/02/28 12:00 AM UTC"),
            itemStartCd: "startSundayFour",
            itemEnd: new Date("2021/02/28 11:59 PM UTC"),
            itemEndCd: "endSundayFour",
          },
          {
            itemTitle: "Week 5 - March 7",
            itemDescription:
              "Two stars per enhancement below 10 Star Force, 50% off Ability resets, 50% off Spell Tracing, double Moon Candy",
            itemStart: new Date("2021/03/07 12:00 AM UTC"),
            itemStartCd: "startSundayFive",
            itemEnd: new Date("2021/03/07 11:59 PM UTC"),
            itemEndCd: "endSundayFive",
          },
        
      ],
    },
  ];
  