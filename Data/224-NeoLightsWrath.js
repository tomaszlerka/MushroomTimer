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
                itemLink: "",
                itemS: new Date("Start date"),
                itemE: new Date("End date"),
            },
        ],
    },
];

let eventList = [
    //Category: Main Events
    {
        category: "NEO",
        categoryColor: "#80f0ff",
        sectionTitle: "Neo Castle",
        sectionLink: "https://maplestory.nexon.net/news/67904/v-224-neo-light-s-wrath-patch-notes#castle",
        sectionDescription: "Participate in the Neo Castle events to collect Neo Stones, Neo Gems, and Neo Cores!",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemS: new Date("2021/06/10 00:00 UTC"),
                itemE: new Date("2021/08/24 11:59 PM UTC"),
            },
        ],
    },
    {
        category: "NEO",
        categoryColor: "#80f0ff",
        sectionTitle: "Neo Crystal Challenge",
        sectionLink: "https://maplestory.nexon.net/news/67904/v-224-neo-light-s-wrath-patch-notes#challenge",
        sectionDescription: "Destroy 12 stages of mobs and bosses over 2 minutes to get up to 1500 Crystal Points per day, which can be used to buy Growth Potions.",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemS: new Date("2021/06/10 00:00 UTC"),
                itemE: new Date("2021/08/24 11:59 PM UTC"),
            },
        ],
    },
    {
        category: "NEO",
        categoryColor: "#80f0ff",
        sectionTitle: "Leo's Travel Journal",
        sectionLink: "https://maplestory.nexon.net/news/67904/v-224-neo-light-s-wrath-patch-notes#journal",
        sectionDescription: "Weekly challenges for Neo Stones.",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemS: new Date("2021/06/10 00:00 UTC"),
                itemE: new Date("2021/08/24 11:59 PM UTC"),
            },
        ],
    },
    {
        category: "NEO",
        categoryColor: "#80f0ff",
        sectionTitle: "Neo Stones Capping",
        sectionLink: "",
        sectionDescription: "",
        item: [
            {
                itemTitle: "Renee and the Magic Bell",
                itemDescription: "",
                itemLink: "https://maplestory.nexon.net/news/67904/v-224-neo-light-s-wrath-patch-notes#bell",
                itemS: new Date("2021/07/22 00:00 UTC"),
                itemE: new Date("2021/08/24 11:59 PM UTC"),
            },
        ],
    },
    {
        category: "NEO",
        categoryColor: "#80f0ff",
        sectionTitle: "Neo Gems Minigames",
        sectionLink: "",
        sectionDescription: "",
        item: [
            {
                itemTitle: "Supernatural Yut",
                itemDescription: "",
                itemLink: "https://maplestory.nexon.net/news/67904/v-224-neo-light-s-wrath-patch-notes#yut",
                itemS: new Date("2021/07/22 00:00 UTC"),
                itemE: new Date("2021/08/24 11:59 PM UTC"),
            },
            {
                itemTitle: "Rainbow Rush",
                itemDescription: "",
                itemLink: "https://maplestory.nexon.net/news/67904/v-224-neo-light-s-wrath-patch-notes#rush",
                itemS: new Date("2021/06/10 12:00 AM UTC"),
                itemE: new Date("2021/08/24 11:59 PM UTC"),
            },
            {
                itemTitle: "Castle Column",
                itemDescription: "",
                itemLink: "https://maplestory.nexon.net/news/67904/v-224-neo-light-s-wrath-patch-notes#column",
                itemS: new Date("2021/06/30 12:00 AM UTC"),
                itemE: new Date("2021/08/24 11:59 PM UTC"),
            },
            {
                itemTitle: "Thinking of You",
                itemDescription: "",
                itemLink: "https://maplestory.nexon.net/news/67904/v-224-neo-light-s-wrath-patch-notes#think",
                itemS: new Date("2021/07/22 00:00 UTC"),
                itemE: new Date("2021/08/24 11:59 PM UTC"),
            },
        ],
    },
    {
        category: "NEO",
        categoryColor: "#80f0ff",
        sectionTitle: "Neo Shops",
        sectionLink: "",
        sectionDescription: "",
        item: [
            {
                itemTitle: "Neo Stone Shop",
                itemDescription: "You can earn Neo Stones by point capping.",
                itemLink: "https://maplestory.nexon.net/news/67904/v-224-neo-light-s-wrath-patch-notes#stone",
                itemS: new Date("2021/06/10 00:00 UTC"),
                itemE: new Date("2021/08/29 11:59 PM UTC"),
            },
            {
                itemTitle: "Neo Gem Shop",
                itemDescription: "You can earn Neo Gems by playing mini-games.",
                itemLink: "https://maplestory.nexon.net/news/67904/v-224-neo-light-s-wrath-patch-notes#gem",
                itemS: new Date("2021/06/10 00:00 UTC"),
                itemE: new Date("2021/08/29 11:59 PM UTC"),
            },
            {
                itemTitle: "Neo Core Shop",
                itemDescription: "You can earn Neo Cores by defeating weekly bosses.",
                itemLink: "https://maplestory.nexon.net/news/67904/v-224-neo-light-s-wrath-patch-notes#core",
                itemS: new Date("2021/06/10 00:00 UTC"),
                itemE: new Date("2021/08/29 11:59 PM UTC"),
            },
            {
                itemTitle: "Neo Meso Shop",
                itemDescription: "",
                itemLink: "https://maplestory.nexon.net/news/67904/v-224-neo-light-s-wrath-patch-notes#meso",
                itemS: new Date("2021/06/10 00:00 UTC"),
                itemE: new Date("2021/08/29 11:59 PM UTC"),
            },
        ],
    },

    //Category: Burning
    {
        category: "Burning",
        categoryColor: "#fc874c",
        sectionTitle: "Tera Burning",
        sectionLink: "https://maplestory.nexon.net/news/67904/v-224-neo-light-s-wrath-patch-notes#tera",
        sectionDescription: "Burn your character to level 200 and further to receive additional rewards.",
        item: [
            {
                itemTitle: "Part 1",
                itemDescription: "",
                itemS: new Date("2021/06/10 00:00 UTC"),
                itemE: new Date("2021/07/20 11:59 PM UTC"),
            },
            {
                itemTitle: "Part 2",
                itemDescription: "",
                itemS: new Date("2021/07/22 00:00 UTC"),
                itemE: new Date("2021/08/24 11:59 PM UTC"),
            },
        ],
    },
    {
        category: "Burning",
        categoryColor: "#fc874c",
        sectionTitle: "Burning World",
        sectionLink: "https://maplestory.nexon.net/news/67904/v-224-neo-light-s-wrath-patch-notes#world",
        sectionDescription: "Special world with bonuses to make it easier to level your characters. 2 x Mega Burning (150).",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemS: new Date("2021/06/10 00:00 UTC"),
                itemE: new Date("2021/08/24 11:59 PM UTC"),
            },
        ],
    },
    {
        category: "Burning",
        categoryColor: "#fc874c",
        sectionTitle: "Burning World Leap",
        sectionLink: "https://maplestory.nexon.net/news/67904/v-224-neo-light-s-wrath-patch-notes#leap",
        sectionDescription: "Move up to 6 characters from Burning world to other reg worlds.",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemS: new Date("2021/08/25 12:00 AM UTC"),
                itemE: new Date("2021/09/09 00:00 UTC"),
            },
        ],
    },

    //Category: Miracle Time
    {
        category: "Miracle Time",
        categoryColor: "#00ff55",
        sectionTitle: "Mark Your Miracle Time Registration",
        sectionLink: "https://maplestory.nexon.net/news/67904/v-224-neo-light-s-wrath-patch-notes#registration",
        sectionDescription: "Register for the Miracle Time event.",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemS: new Date("2021/07/23 12:00 AM UTC"),
                itemE: new Date("2021/07/27 11:59 PM UTC"),
            },
        ],
    },
    {
        category: "Miracle Time",
        categoryColor: "#00ff55",
        sectionTitle: "Mark Your Miracle Time",
        sectionLink: "https://maplestory.nexon.net/news/67904/v-224-neo-light-s-wrath-patch-notes#miracle",
        sectionDescription: "Participate in the Miracle Time event. Only available during the timeslot that you registered for.",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemS: new Date("2021/07/28 05:00 AM UTC"),
                itemE: new Date("2021/08/03 11:00 PM UTC"),
            },
        ],
    },

    //Category: Other Events
    {
        category: "Other Events",
        categoryColor: "#f2fffe",
        sectionTitle: "Yeti's Big Debut!",
        sectionLink: "https://maplestory.nexon.net/news/67904/v-224-neo-light-s-wrath-patch-notes#yeti",
        sectionDescription: "Help Yeti become a TV star and customize your own chair.",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemS: new Date("2021/07/28 12:00 AM UTC"),
                itemE: new Date("2021/08/24 11:59 PM UTC"),
            },
        ],
    },

    {
        category: "Other Events",
        categoryColor: "#fff7a1",
        sectionTitle: "Zero & Best Tamer creation",
        sectionLink: "https://maplestory.nexon.net/news/67904/v-224-neo-light-s-wrath-patch-notes#zero",
        sectionDescription: "You can now create Zero or Beast Tamer.",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemS: new Date("2021/07/22 00:00 UTC"),
                itemE: new Date("2021/08/24 11:59 PM UTC"),
            },
        ],
    },

    {
        category: "Other Events",
        categoryColor: "#fff461",
        sectionTitle: "Sunny Sunday",
        sectionLink: "https://maplestory.nexon.net/news/67904/v-224-neo-light-s-wrath-patch-notes#sunny",
        sectionDescription: "",
        item: [
            {
                itemTitle: "Week 1 - July 25",
                itemDescription: "30% off Star Forcing, <br> 3x Neo Stones & Gems",
                itemS: new Date("2021/07/25 12:00 AM UTC"),
                itemE: new Date("2021/07/25 11:59 PM UTC"),
            },
            {
                itemTitle: "Week 2 - August 1",
                itemDescription: "100% extra EXP from runes, <br> 300% extra EXP from combo orbs, <br> 3x Neo Stones & Gems",
                itemS: new Date("2021/08/01 12:00 AM UTC"),
                itemE: new Date("2021/08/01 11:59 PM UTC"),
            },
            {
                itemTitle: "Week 3 - August 8",
                itemDescription: "30 Arcane Symbol Coupons, <br> 3x Neo Stones & Gems",
                itemS: new Date("2021/08/08 12:00 AM UTC"),
                itemE: new Date("2021/08/08 11:59 PM UTC"),
            },
            {
                itemTitle: "Week 4 - August 15",
                itemDescription: "50% off Spell Trace, <br> Double stars below 10, <br> 3x Neo Stones & Gems",
                itemS: new Date("2021/08/15 12:00 AM UTC"),
                itemE: new Date("2021/08/15 11:59 PM UTC"),
            },
            {
                itemTitle: "Week 5 - August 22",
                itemDescription: "50% off honor rerolls, <br> 3x Neo Stones & Gems",
                itemS: new Date("2021/08/15 12:00 AM UTC"),
                itemE: new Date("2021/08/15 11:59 PM UTC"),
            },
        ],
    },

    {
        category: "Other Events",
        categoryColor: "#5cd1ff",
        sectionTitle: "Spell Trace Fever",
        sectionLink: "https://maplestory.nexon.net/news/67904/v-224-neo-light-s-wrath-patch-notes#spell",
        sectionDescription: "Increased spell trace success rate during specified 2-hour windows.",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemS: new Date("2021/07/23 08:00 AM UTC"),
                itemE: new Date("2021/07/25 04:00 AM UTC"),
            },
        ],
    },
];
