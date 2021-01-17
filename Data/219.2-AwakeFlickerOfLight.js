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
            "https://maplestory.nexon.net/news/63875/v-219-awake-flicker-of-light-patch-notes#scroll",
        sectionDescription:
            "Train your scroll once a day for 200 coins to unlock rewards.",
        item: [
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
        sectionTitle: "Scroll Supplementary Training",
        sectionLink:
            "https://maplestory.nexon.net/news/63875/v-219-awake-flicker-of-light-patch-notes#supplementary",
        sectionDescription: "Catch up scroll training.",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemStart: new Date("2020/12/17 00:00"),
                itemStartCd: "catchUpStart",
                itemEnd: new Date("2021/01/26 11:59 PM UTC"),
                itemEndCd: "catchUpEnd",
            },
        ],
    },
    {
        category: "Awake Events",
        categoryColor: "#5effcf",
        sectionTitle: "Coin Shops",
        sectionLink:
            "https://maplestory.nexon.net/news/63875/v-219-awake-flicker-of-light-patch-notes#coin",
        sectionDescription: "",
        item: [
            {
                itemTitle: "Baek Gong's Coin Shop",
                itemDescription: "",
                itemStart: new Date("2020/11/18 4:00 PM PST"),
                itemStartCd: "startBaekGongCoinShop",
                itemEnd: new Date("2021/01/31 11:59 PM UTC"),
                itemEndCd: "endBaekGongCoinShop",
            },
            {
                itemTitle: "Chun Gong's Coin Shop",
                itemDescription: "",
                itemStart: new Date("2020/12/16 12:00 AM UTC"),
                itemStartCd: "startChunGongCoinShop",
                itemEnd: new Date("2021/01/31 11:59 PM UTC"),
                itemEndCd: "endChunGongCoinShop",
            },
            {
                itemTitle: "Man Gong's Coin Shop",
                itemDescription: "",
                itemStart: new Date("2021/01/13 12:00 AM UTC"),
                itemStartCd: "startManGongCoinShop",
                itemEnd: new Date("2021/01/31 11:59 PM UTC"),
                itemEndCd: "endManGongCoinShop",
            },
        ],
    },
    {
        category: "Awake Events",
        categoryColor: "#5effcf",
        sectionTitle: "Meso Shops",
        sectionLink:
            "https://maplestory.nexon.net/news/63875/v-219-awake-flicker-of-light-patch-notes#meso",
        sectionDescription: "",
        item: [
            {
                itemTitle: "Mr. Fortune Meso Shop",
                itemDescription: "",
                itemStart: new Date("2020/12/16 12:00 AM UTC"),
                itemStartCd: "startFortuneMesoShop",
                itemEnd: new Date("2021/01/31 11:59 PM UTC"),
                itemEndCd: "endFortuneMesoShop",
            },
            {
                itemTitle: "Chun Hee's Meso Shop",
                itemDescription: "",
                itemStart: new Date("2021/01/13 12:00 AM UTC"),
                itemStartCd: "startChunHeeMesoShop",
                itemEnd: new Date("2021/01/31 11:59 PM UTC"),
                itemEndCd: "endChunHeeMesoShop",
            },
        ],
    },
    {
        category: "Awake Events",
        categoryColor: "#5effcf",
        sectionTitle: "Bamboo Shoot Shop",
        sectionLink:
            "https://maplestory.nexon.net/news/63875/v-219-awake-flicker-of-light-patch-notes#bamboo",
        sectionDescription: "",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemStart: new Date("2020/11/18 4:00 PM PST"),
                itemStartCd: "startDecorationShop",
                itemEnd: new Date("2021/01/31 11:59 PM UTC"),
                itemEndCd: "endBambooShop",
            },
        ],
    },
    {
        category: "Awake Events",
        categoryColor: "#5effcf",
        sectionTitle: "Decoration Shop",
        sectionLink:
            "https://maplestory.nexon.net/news/63875/v-219-awake-flicker-of-light-patch-notes#deco",
        sectionDescription: "",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemStart: new Date("2020/11/18 4:00 PM PST"),
                itemStartCd: "startBambooShop",
                itemEnd: new Date("2021/01/31 11:59 PM UTC"),
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
            "Defeat Training Dummies to get up 150 bonus coins every day.",
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
        sectionTitle: "Coin Capping",
        sectionLink:
            "https://maplestory.nexon.net/news/63875/v-219-awake-flicker-of-light-patch-notes#sword",
        sectionDescription: "Gather coins by killing mobs.",
        item: [
            {
                itemTitle: "Man Gong's Jewel",
                itemDescription: "",
                itemStart: new Date("2021/01/13 12:00 AM UTC"),
                itemStartCd: "startJewel",
                itemEnd: new Date("2021/01/26 11:59 PM UTC"),
                itemEndCd: "endJewel",
            },
        ],
    },
    {
        category: "Awake Events",
        categoryColor: "#5effcf",
        sectionTitle: "Intensive Training",
        sectionLink:
            "https://maplestory.nexon.net/news/63875/v-219-awake-flicker-of-light-patch-notes#intensive",
        sectionDescription:
            "Get additional coins for capping each day during this period.",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemStart: new Date("2021/01/13 12:00 AM PST"),
                itemStartCd: "startIntensive",
                itemEnd: new Date("2021/01/26 11:59 PM UTC"),
                itemEndCd: "endIntensive",
            },
        ],
    },
    {
        category: "Awake Events",
        categoryColor: "#5effcf",
        sectionTitle: "Coin Minigames",
        sectionLink:
            "https://maplestory.nexon.net/news/63875/v-219-awake-flicker-of-light-patch-notes#treasure",
        sectionDescription:
            "Every 15 and 45 minute mark of every hour play minigames to gather coins (up to daily capacity).",
        item: [
            {
                itemTitle: "Bingo",
                itemDescription: "",
                itemStart: new Date("2021/01/13 12:00 AM UTC"),
                itemStartCd: "startBingo",
                itemEnd: new Date("2021/01/26 11:59 PM UTC"),
                itemEndCd: "endBingo",
            },
        ],
    },

    //Category: Holiday Events
    {
        category: "Holiday Events",
        categoryColor: "#ff2626",
        sectionTitle: "Wonky the Fairy's Magic Lamp",
        sectionLink:
            "https://maplestory.nexon.net/news/63875/v-219-awake-flicker-of-light-patch-notes#lamp",
        sectionDescription:
            "Celebrate New Year by doing daily missions and gathering rewards.",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemStart: new Date("2021/01/06 12:00 PM PST"),
                itemStartCd: "startLamp",
                itemEnd: new Date("2021/01/26 11:59 PM UTC"),
                itemEndCd: "endLamp",
            },
        ],
    },

    //Category: Burning
    {
        category: "Burning",
        categoryColor: "#fc874c",
        sectionTitle: "Tera Burning Plus",
        sectionLink:
            "https://maplestory.nexon.net/news/63875/v-219-awake-flicker-of-light-patch-notes#tera",
        sectionDescription: "Burn 2 characters up to level 200.",
        item: [
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
            "https://maplestory.nexon.net/news/63875/v-219-awake-flicker-of-light-patch-notes#leap",
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
        sectionTitle: "Legion Arena",
        sectionLink:
            "https://maplestory.nexon.net/news/63875/v-219-awake-flicker-of-light-patch-notes#arena",
        sectionDescription:
            "Assemble your legion of MapleStory characters and do battle with other players in this special new mini-game.",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemStart: new Date("2020/12/17 00:00 UTC"),
                itemStartCd: "startArena",
                itemEnd: new Date("2021/01/26 11:59 PM UTC"),
                itemEndCd: "endArena",
            },
        ],
    },
    {
        category: "Other Events",
        categoryColor: "#fff461",
        sectionTitle: "Zero & Beast Tamer Creation",
        sectionLink:
            "https://maplestory.nexon.net/news/63875/v-219-awake-flicker-of-light-patch-notes#zero",
        sectionDescription:
            "Create Zero and Beast Tamer characters for a limited time. Zero now also available in Reboot server.",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemStart: new Date("2020/12/17 00:00 UTC"),
                itemStartCd: "startCreation",
                itemEnd: new Date("2021/01/26 11:59 PM UTC"),
                itemEndCd: "endCreation",
            },
        ],
    },
    {
        category: "Other Events",
        categoryColor: "#fff461",
        sectionTitle: "Maplehood Watch",
        sectionLink:
            "https://maplestory.nexon.net/news/63875/v-219-awake-flicker-of-light-patch-notes#watch",
        sectionDescription:
            "Maplehood Watch returns! Come protect the neighborhood and earn free Cash items along the way. Defeat 200 monsters near your level to get rewards. Can be completed 2 (for Enhancement) or 3 (for Gachapon & Beauty) times a day per character.",
        item: [
            {
                itemTitle: "Wednesday - Gachapon Day 1",
                itemDescription: "",
                itemStart: new Date("2021/01/27 12:00 AM UTC"),
                itemStartCd: "startHoodGachaOne",
                itemEnd: new Date("2021/01/27 11:59 PM UTC"),
                itemEndCd: "endHoodGachaOne",
            },
            {
                itemTitle: "Saturday - Enhancement Day 1",
                itemDescription: "",
                itemStart: new Date("2021/01/30 12:00 AM UTC"),
                itemStartCd: "startHoodEnhOne",
                itemEnd: new Date("2021/01/30 11:59 PM UTC"),
                itemEndCd: "endHoodEnhOne",
            },
            {
                itemTitle: "Monday - Beauty Day 1",
                itemDescription: "",
                itemStart: new Date("2021/02/01 12:00 AM UTC"),
                itemStartCd: "startHoodBeautyOne",
                itemEnd: new Date("2021/02/01 11:59 PM UTC"),
                itemEndCd: "endHoodBeautyOne",
            },
            {
                itemTitle: "Wednesday - Gachapon Day 2",
                itemDescription: "",
                itemStart: new Date("2021/02/03 12:00 AM UTC"),
                itemStartCd: "startHoodGachaTwo",
                itemEnd: new Date("2021/02/03 11:59 PM UTC"),
                itemEndCd: "endHoodGachaTwo",
            },
            {
                itemTitle: "Saturday - Enhancement Day 2",
                itemDescription: "",
                itemStart: new Date("2021/02/06 12:00 AM UTC"),
                itemStartCd: "startHoodEnhTwo",
                itemEnd: new Date("2021/02/06 11:59 PM UTC"),
                itemEndCd: "endHoodEnhTwo",
            },
            {
                itemTitle: "Monday - Beauty Day 2",
                itemDescription: "",
                itemStart: new Date("2021/02/08 12:00 AM UTC"),
                itemStartCd: "startHoodBeautyTwo",
                itemEnd: new Date("2021/02/08 11:59 PM UTC"),
                itemEndCd: "endHoodBeautyTwo",
            },
        ],
    },
    {
        category: "Other Events",
        categoryColor: "#fff461",
        sectionTitle: "Spiegelmann's Lucky Boxes",
        sectionLink:
            "https://maplestory.nexon.net/news/63875/v-219-awake-flicker-of-light-patch-notes#lucky",
        sectionDescription:
            "Defeat 2000 monsters near your level each day to get rewarded lucky boxes. Once a day per world.",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemStart: new Date("2021/01/27 12:00 AM UTC"),
                itemStartCd: "startBoxes",
                itemEnd: new Date("2021/02/09 11:59 PM UTC"),
                itemEndCd: "endBoxes",
            },
        ],
    },
    {
        category: "Other Events",
        categoryColor: "#fff461",
        sectionTitle: "Sunny Sunday",
        sectionLink:
            "https://maplestory.nexon.net/news/63875/v-219-awake-flicker-of-light-patch-notes#sunny",
        sectionDescription: "",
        item: [
            {
                itemTitle: "January 24",
                itemDescription:
                    "5x chance for Magnificent Soul, 50% off Scrolling, 2x coins & coin limit.",
                itemStart: new Date("2021/01/24 12:00 AM UTC"),
                itemStartCd: "startSundaySix",
                itemEnd: new Date("2021/01/24 11:59 PM UTC"),
                itemEndCd: "endSundaySix",
            },
            {
                itemTitle: "January 31",
                itemDescription:
                    "2x exp from Pollo & Frito, 2x exp from Inferno Wolf.",
                itemStart: new Date("2021/01/31 12:00 AM UTC"),
                itemStartCd: "startSundaySeven",
                itemEnd: new Date("2021/01/31 11:59 PM UTC"),
                itemEndCd: "endSundaySeven",
            },
        ],
    },
];
