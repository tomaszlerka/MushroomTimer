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
    //Category: Awake Events
    {
        category: "Awake Events",
        categoryColor: "#5effcf",
        sectionTitle: "Awakening Scroll",
        sectionLink:
            "https://maplestory.nexon.net/news/63065/updated-november-24-v-218-awake-ascend-to-mastery-patch-notes#scroll",
        sectionDescription:
            "Train your scroll once a day for 200 coins to unlock rewards.",
        item: [
            {
                itemTitle: "Baek Gong - Intro",
                itemDescription: "",
                itemStart: new Date("2020/11/18 4:00 PM PST"),
                itemStartCd: "baekGongIntroStart",
                itemEnd: new Date("2021/01/26 11:59 PM UTC"),
                itemEndCd: "baekGongIntroEnd",
            },
            {
                itemTitle: "Baek Gong - Chapter 1",
                itemDescription: "",
                itemStart: new Date("2020/11/25 12:00 AM UTC"),
                itemStartCd: "baekGongChOneStart",
                itemEnd: new Date("2021/01/26 11:59 PM UTC"),
                itemEndCd: "baekGongChOneEnd",
            },
            {
                itemTitle: "Baek Gong - Chapter 2",
                itemDescription: "",
                itemStart: new Date("2020/12/02 12:00 AM UTC"),
                itemStartCd: "baekGongChTwoStart",
                itemEnd: new Date("2021/01/26 11:59 PM UTC"),
                itemEndCd: "baekGongChTwoEnd",
            },
            {
                itemTitle: "Baek Gong - Chapter 3",
                itemDescription: "",
                itemStart: new Date("2020/12/09 12:00 AM UTC"),
                itemStartCd: "baekGongChThreeStart",
                itemEnd: new Date("2021/01/26 11:59 PM UTC"),
                itemEndCd: "baekGongChThreeEnd",
            },
            {
                itemTitle: "Chun Gong - Intro",
                itemDescription: "",
                itemStart: new Date("2020/12/16 12:00 AM UTC"),
                itemStartCd: "chunGongIntroStart",
                itemEnd: new Date("2021/01/26 11:59 PM UTC"),
                itemEndCd: "chunGongIntroEnd",
            },
            {
                itemTitle: "Chun Gong - Chapter 1",
                itemDescription: "",
                itemStart: new Date("2020/12/23 12:00 AM UTC"),
                itemStartCd: "chunGongChOneStart",
                itemEnd: new Date("2021/01/26 11:59 PM UTC"),
                itemEndCd: "chunGongChOneEnd",
            },
            {
                itemTitle: "Chun Gong - Chapter 2",
                itemDescription: "",
                itemStart: new Date("2020/12/30 12:00 AM UTC"),
                itemStartCd: "chunGongChTwoStart",
                itemEnd: new Date("2021/01/26 11:59 PM UTC"),
                itemEndCd: "chunGongChTwoEnd",
            },
            {
                itemTitle: "Chun Gong - Chapter 3",
                itemDescription: "",
                itemStart: new Date("2021/01/06 12:00 AM UTC"),
                itemStartCd: "chunGongChThreeStart",
                itemEnd: new Date("2021/01/26 11:59 PM UTC"),
                itemEndCd: "chunGongChThreeEnd",
            },
            {
                itemTitle: "Man Gong - Intro",
                itemDescription: "",
                itemStart: new Date("2021/01/13 12:00 AM UTC"),
                itemStartCd: "manGongIntroStart",
                itemEnd: new Date("2021/01/26 11:59 PM UTC"),
                itemEndCd: "manGongIntroEnd",
            },
            {
                itemTitle: "Man Gong - Ending",
                itemDescription: "",
                itemStart: new Date("2021/01/20 12:00 AM UTC"),
                itemStartCd: "manGongEndingStart",
                itemEnd: new Date("2021/01/26 11:59 PM UTC"),
                itemEndCd: "manGongEndingEnd",
            },
        ],
    },
    {
        category: "Awake Events",
        categoryColor: "#5effcf",
        sectionTitle: "Coin Shops",
        sectionLink:
            "https://maplestory.nexon.net/news/63065/updated-november-24-v-218-awake-ascend-to-mastery-patch-notes#coin",
        sectionDescription: "",
        item: [
            {
                itemTitle: "Baek Gong's Coin Shop",
                itemDescription: "",
                itemStart: new Date("2020/11/18 4:00 PM PST"),
                itemStartCd: "startBaekGongCoinShop",
                itemEnd: new Date("2021/01/26 11:59 PM UTC"),
                itemEndCd: "endBaekGongCoinShop",
            },
            {
                itemTitle: "Chun Gong's Coin Shop",
                itemDescription: "",
                itemStart: new Date("2020/12/16 12:00 AM UTC"),
                itemStartCd: "startChunGongCoinShop",
                itemEnd: new Date("2021/01/26 11:59 PM UTC"),
                itemEndCd: "endChunGongCoinShop",
            },
            {
                itemTitle: "Man Gong's Coin Shop",
                itemDescription: "",
                itemStart: new Date("2021/01/13 12:00 AM UTC"),
                itemStartCd: "startManGongCoinShop",
                itemEnd: new Date("2021/01/26 11:59 PM UTC"),
                itemEndCd: "endManGongCoinShop",
            },
        ],
    },
    {
        category: "Awake Events",
        categoryColor: "#5effcf",
        sectionTitle: "Meso Shops",
        sectionLink:
            "https://maplestory.nexon.net/news/63065/updated-november-24-v-218-awake-ascend-to-mastery-patch-notes#meso",
        sectionDescription: "",
        item: [
            {
                itemTitle: "Mr. Fortune Meso Shop",
                itemDescription: "",
                itemStart: new Date("2020/12/16 12:00 AM UTC"),
                itemStartCd: "startFortuneMesoShop",
                itemEnd: new Date("2021/01/26 11:59 PM UTC"),
                itemEndCd: "endFortuneMesoShop",
            },
            {
                itemTitle: "Chun Hee's Meso Shop",
                itemDescription: "",
                itemStart: new Date("2021/01/13 12:00 AM UTC"),
                itemStartCd: "startChunHeeMesoShop",
                itemEnd: new Date("2021/01/26 11:59 PM UTC"),
                itemEndCd: "endChunHeeMesoShop",
            },
        ],
    },
    {
        category: "Awake Events",
        categoryColor: "#5effcf",
        sectionTitle: "Bamboo Shoot Shop",
        sectionLink:
            "https://maplestory.nexon.net/news/63065/updated-november-24-v-218-awake-ascend-to-mastery-patch-notes#meso",
        sectionDescription: "",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemStart: new Date("2020/11/18 4:00 PM PST"),
                itemStartCd: "startDecorationShop",
                itemEnd: new Date("2021/01/26 11:59 PM UTC"),
                itemEndCd: "endBambooShop",
            },
        ],
    },
    {
        category: "Awake Events",
        categoryColor: "#5effcf",
        sectionTitle: "Decoration Shop",
        sectionLink:
            "https://maplestory.nexon.net/news/63065/updated-november-24-v-218-awake-ascend-to-mastery-patch-notes#deco",
        sectionDescription: "",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemStart: new Date("2020/11/18 4:00 PM PST"),
                itemStartCd: "startBambooShop",
                itemEnd: new Date("2021/01/26 11:59 PM UTC"),
                itemEndCd: "endDecorationShop",
            },
        ],
    },
    {
        category: "Awake Events",
        categoryColor: "#5effcf",
        sectionTitle: "Sage Training Grounds",
        sectionLink:
            "https://maplestory.nexon.net/news/63065/updated-november-24-v-218-awake-ascend-to-mastery-patch-notes#rock",
        sectionDescription:
            "Defeat Training Dummies to get up 120 bonus coins every day.",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemStart: new Date("2020/11/18 4:00 PM PST"),
                itemStartCd: "startTraining",
                itemEnd: new Date("2021/01/26 11:59 PM UTC"),
                itemEndCd: "endTraining",
            },
        ],
    },
    {
        category: "Awake Events",
        categoryColor: "#5effcf",
        sectionTitle: "Coin Capping - Baek Gong's Flute",
        sectionLink:
            "https://maplestory.nexon.net/news/63065/updated-november-24-v-218-awake-ascend-to-mastery-patch-notes#flute",
        sectionDescription:
            "Gather coins by picking up items dropped by mobs you kill.",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemStart: new Date("2020/11/18 4:00 PM PST"),
                itemStartCd: "startFlute",
                itemEnd: new Date("2020/12/15 11:59 PM UTC"),
                itemEndCd: "endFlute",
            },
        ],
    },
    {
        category: "Awake Events",
        categoryColor: "#5effcf",
        sectionTitle: "Coins Minigames",
        sectionLink:
            "https://maplestory.nexon.net/news/63065/updated-november-24-v-218-awake-ascend-to-mastery-patch-notes#rps",
        sectionDescription:
            "Every 15 and 45 minute mark of every hour play minigames to gather coins (up to daily capacity).",
        item: [
            {
                itemTitle: "Rock-Paper-Scissors",
                itemDescription: "",
                itemStart: new Date("2020/11/18 4:00 PM PST"),
                itemStartCd: "startRPS",
                itemEnd: new Date("2020/12/01 11:59 PM UTC"),
                itemEndCd: "endRPS",
            },
            {
                itemTitle: "Bingo",
                itemDescription: "",
                itemStart: new Date("2020/12/02 12:00 AM UTC"),
                itemStartCd: "startBingo",
                itemEnd: new Date("2020/12/15 11:59 PM UTC"),
                itemEndCd: "endBingo",
            },
        ],
    },

    //Category: Burning
    {
        category: "Burning",
        categoryColor: "#fc874c",
        sectionTitle: "Tera Burning Plus",
        sectionLink:
            "https://maplestory.nexon.net/news/63065/updated-november-24-v-218-awake-ascend-to-mastery-patch-notes#tera",
        sectionDescription: "Burn 2 characters up to level 200.",
        item: [
            {
                itemTitle: "Tera Burning Part 1",
                itemDescription: "",
                itemStart: new Date("2020/11/18 4:00 PM PST"),
                itemStartCd: "startTeraPartOne",
                itemEnd: new Date("2020/12/22 11:59 PM UTC"),
                itemEndCd: "endTeraPartOne",
            },
            {
                itemTitle: "Tera Burning Part 2",
                itemDescription: "",
                itemStart: new Date("2020/12/23 12:00 AM UTC"),
                itemStartCd: "startTeraPartTwo",
                itemEnd: new Date("2021/01/26 11:59:00 PM UTC"),
                itemEndCd: "endTeraPartTwo",
            },
        ],
    },
    {
        category: "Burning",
        categoryColor: "#fc874c",
        sectionTitle: "Burning World",
        sectionLink:
            "hhttps://maplestory.nexon.net/news/63065/updated-november-24-v-218-awake-ascend-to-mastery-patch-notes#burning",
        sectionDescription: "",
        item: [
            {
                itemTitle: "Mega Burning",
                itemDescription: "Burn 2 characters to level 150.",
                itemStart: new Date("2020/11/18 4:00 PM PST"),
                itemStartCd: "startBWorld",
                itemEnd: new Date("2021/01/27 1:59 PM UTC"),
                itemEndCd: "endBWorld",
            },
            {
                itemTitle: "World Leap",
                itemDescription:
                    "Move up to 5 characters from Burning World to any other non-Reboot world.",
                itemStart: new Date("2021/01/28 00:00 UTC"),
                itemStartCd: "startWorldLeap",
                itemEnd: new Date("2021/02/18 12:00 UTC"),
                itemEndCd: "endWorldLeap",
            },
        ],
    },

    //Category: Other Events
    {
        category: "Other Events",
        categoryColor: "#fff461",
        sectionTitle: "Sunny Sunday",
        sectionLink:
            "https://maplestory.nexon.net/news/63065/updated-november-24-v-218-awake-ascend-to-mastery-patch-notes#sunny",
        sectionDescription: "",
        item: [
            {
                itemTitle: "Week 1 - November 22",
                itemDescription:
                    "Free chat emote, Extra EXP from Runes & Combo Orbs, 2x coins & coin limit",
                itemStart: new Date("2020/11/22 12:00 AM UTC"),
                itemStartCd: "startSundayOne",
                itemEnd: new Date("2020/11/22 11:59 PM UTC"),
                itemEndCd: "endSundayOne",
            },
            {
                itemTitle: "Week 2 - November 29",
                itemDescription:
                    "2x EXP from Pollo&Fritto Portals and Inferno Wolf, 2x coins & coin limit",
                itemStart: new Date("2020/11/29 12:00 AM UTC"),
                itemStartCd: "startSundayTwo",
                itemEnd: new Date("2020/11/29 11:59 PM UTC"),
                itemEndCd: "endSundayTwo",
            },
            {
                itemTitle: "Week 3 - December 6",
                itemDescription:
                    "50% off Inner Ability and Scrolling, 2x coins & coin limit",
                itemStart: new Date("2020/12/06 12:00 AM UTC"),
                itemStartCd: "startSundayThree",
                itemEnd: new Date("2020/12/06 11:59 PM UTC"),
                itemEndCd: "endSundayThree",
            },
            {
                itemTitle: "Week 4 - December 13",
                itemDescription:
                    "Free EXP coupons, 30% off Star Forcing, 2x coins & coin limit",
                itemStart: new Date("2020/12/13 12:00 AM UTC"),
                itemStartCd: "startSundayFour",
                itemEnd: new Date("2020/12/13 11:59 PM UTC"),
                itemEndCd: "endSundayFour",
            },
        ],
    },
];
