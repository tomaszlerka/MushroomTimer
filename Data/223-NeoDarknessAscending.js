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
        sectionLink: "https://maplestory.nexon.net/news/67135/v-223-neo-darkness-ascending-patch-notes#castle",
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
        sectionLink: "https://maplestory.nexon.net/news/67135/v-223-neo-darkness-ascending-patch-notes#challenge",
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
        sectionLink: "https://maplestory.nexon.net/news/67135/v-223-neo-darkness-ascending-patch-notes#journal",
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
                itemTitle: "Renee's Magic Orb",
                itemDescription: "",
                itemLink: "https://maplestory.nexon.net/news/67135/v-223-neo-darkness-ascending-patch-notes#orb",
                itemS: new Date("2021/06/10 00:00 UTC"),
                itemE: new Date("2021/06/29 11:59 PM UTC"),
            },
            {
                itemTitle: "Renee's Magic Music Box",
                itemDescription: "",
                itemLink: "https://maplestory.nexon.net/news/67135/v-223-neo-darkness-ascending-patch-notes#box",
                itemS: new Date("2021/06/30 12:00 AM UTC"),
                itemE: new Date("2021/07/20 11:59 PM UTC"),
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
                itemTitle: "One Card",
                itemDescription: "",
                itemLink: "https://maplestory.nexon.net/news/67135/v-223-neo-darkness-ascending-patch-notes#card",
                itemS: new Date("2021/06/10 00:00 UTC"),
                itemE: new Date("2021/06/29 11:59 PM UTC"),
            },
            {
                itemTitle: "Reverse Battle",
                itemDescription: "",
                itemLink: "https://maplestory.nexon.net/news/67135/v-223-neo-darkness-ascending-patch-notes#reverse",
                itemS: new Date("2021/06/30 00:00 UTC"),
                itemE: new Date("2021/07/20 11:59 PM UTC"),
            },
            {
                itemTitle: "Rainbow Rush",
                itemDescription: "",
                itemLink: "https://maplestory.nexon.net/news/67135/v-223-neo-darkness-ascending-patch-notes#rush",
                itemS: new Date("2021/06/10 12:00 AM UTC"),
                itemE: new Date("2021/08/24 11:59 PM UTC"),
            },
            {
                itemTitle: "Castle Column",
                itemDescription: "",
                itemLink: "https://maplestory.nexon.net/news/67135/v-223-neo-darkness-ascending-patch-notes#column",
                itemS: new Date("2021/06/30 12:00 AM UTC"),
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
                itemLink: "https://maplestory.nexon.net/news/67135/v-223-neo-darkness-ascending-patch-notes#stone",
                itemS: new Date("2021/06/10 00:00 UTC"),
                itemE: new Date("2021/08/29 11:59 PM UTC"),
            },
            {
                itemTitle: "Neo Gem Shop",
                itemDescription: "You can earn Neo Gems by playing mini-games.",
                itemLink: "https://maplestory.nexon.net/news/67135/v-223-neo-darkness-ascending-patch-notes#gem",
                itemS: new Date("2021/06/10 00:00 UTC"),
                itemE: new Date("2021/08/29 11:59 PM UTC"),
            },
            {
                itemTitle: "Neo Core Shop",
                itemDescription: "You can earn Neo Cores by defeating weekly bosses.",
                itemLink: "https://maplestory.nexon.net/news/67135/v-223-neo-darkness-ascending-patch-notes#core",
                itemS: new Date("2021/06/10 00:00 UTC"),
                itemE: new Date("2021/08/29 11:59 PM UTC"),
            },
            {
                itemTitle: "Neo Meso Shop",
                itemDescription: "",
                itemLink: "https://maplestory.nexon.net/news/67135/v-223-neo-darkness-ascending-patch-notes#meso",
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
        sectionLink: "https://maplestory.nexon.net/news/67135/v-223-neo-darkness-ascending-patch-notes#tera",
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
        sectionLink: "https://maplestory.nexon.net/news/67135/v-223-neo-darkness-ascending-patch-notes#world",
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
        sectionLink: "https://maplestory.nexon.net/news/67135/v-223-neo-darkness-ascending-patch-notes#leap",
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

    //Category: Kain
    {
        category: "Kain",
        categoryColor: "#8f0a00",
        sectionTitle: "Kain Release",
        sectionLink: "https://maplestory.nexon.net/news/67135/v-223-neo-darkness-ascending-patch-notes#kain",
        sectionDescription: "Kain is a Nova Archer and uses DEX as his primary stat.",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemS: "",
                itemE: new Date("2021/06/23 12:00 AM UTC"),
            },
        ],
    },
    {
        category: "Kain",
        categoryColor: "#8f0a00",
        sectionTitle: "Kain's Road to Remembrance",
        sectionLink: "https://maplestory.nexon.net/news/67135/v-223-neo-darkness-ascending-patch-notes#road",
        sectionDescription: "Get various rewards when you reach Lv. 30, 100, 150, and 200.",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemS: new Date("2021/06/23 12:00 AM UTC"),
                itemE: new Date("2021/07/20 11:59 PM UTC"),
            },
        ],
    },

    //Category: Other Events
    {
        category: "Other Events",
        categoryColor: "#df6bff",
        sectionTitle: "New Maple Leaf Event",
        sectionLink: "https://maplestory.nexon.net/news/67135/v-223-neo-darkness-ascending-patch-notes#leaf",
        sectionDescription: "It’s time to open the rewards for those of you who collected the New Maple Leaf Boxes!",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemS: new Date("2021/06/10 00:00 UTC"),
                itemE: new Date("2021/06/22 11:59 PM UTC"),
            },
        ],
    },

    {
        category: "Other Events",
        categoryColor: "#fff461",
        sectionTitle: "Sunny Sunday",
        sectionLink: "https://maplestory.nexon.net/news/67135/v-223-neo-darkness-ascending-patch-notes#sunny",
        sectionDescription: "",
        item: [
            {
                itemTitle: "Week 1 - June 13",
                itemDescription: "2x EXP from Pollo & Fritto, <br> 2x EXP from Inferno Wolf, <br> Double Neo Stones & Cores",
                itemS: new Date("2021/06/13 12:00 AM UTC"),
                itemE: new Date("2021/06/13 11:59 PM UTC"),
            },
            {
                itemTitle: "Week 2 - June 20",
                itemDescription: "50% extra Monster Park EXP, <br> 5x chance for Magnificent Soul, <br> Double Neo Stones & Cores",
                itemS: new Date("2021/06/20 12:00 AM UTC"),
                itemE: new Date("2021/06/20 11:59 PM UTC"),
            },
            {
                itemTitle: "Week 3 - June 27",
                itemDescription: "5, 10, 15 Star Forcing, <br> 30 Arcane Symbol Coupons, <br> 50% off Spell Trace, <br> Double Neo Stones & Cores",
                itemS: new Date("2021/06/27 12:00 AM UTC"),
                itemE: new Date("2021/06/27 11:59 PM UTC"),
            },
            {
                itemTitle: "Week 4 - July 4",
                itemDescription: "2x Monster Collection chance, <br> 50% honor rerolls, <br> Double Neo Stones & Cores",
                itemS: new Date("2021/07/04 12:00 AM UTC"),
                itemE: new Date("2021/07/04 11:59 PM UTC"),
            },
            {
                itemTitle: "Week 5 - July 11",
                itemDescription: "30% off Star Forcing, <br> Double Neo Stones & Cores",
                itemS: new Date("2021/07/11 12:00 AM UTC"),
                itemE: new Date("2021/07/11 11:59 PM UTC"),
            },
            {
                itemTitle: "Week 6 - July 18",
                itemDescription: "50% extra Monster Park EXP, <br> Double Sweet 16 Coins, <br> Double VIP Membership rank up",
                itemS: new Date("2021/07/18 12:00 AM UTC"),
                itemE: new Date("2021/07/18 11:59 PM UTC"),
            },
        ],
    },

    {
        category: "Other Events",
        categoryColor: "#5cd1ff",
        sectionTitle: "Spell Trace Fever",
        sectionLink: "https://maplestory.nexon.net/news/67135/v-223-neo-darkness-ascending-patch-notes#spell",
        sectionDescription: "",
        item: [
            {
                itemTitle: "June 25 - 1",
                itemDescription: "",
                itemS: new Date("2021/06/25 08:00 AM UTC"),
                itemE: new Date("2021/06/25 10:00 AM UTC"),
            },
            {
                itemTitle: "June 25 - 2",
                itemDescription: "",
                itemS: new Date("2021/06/25 06:00 PM UTC"),
                itemE: new Date("2021/06/25 08:00 PM UTC"),
            },
            {
                itemTitle: "June 26 - 1",
                itemDescription: "",
                itemS: new Date("2021/06/26 02:00 AM UTC"),
                itemE: new Date("2021/06/26 04:00 AM UTC"),
            },
            {
                itemTitle: "June 26 - 2",
                itemDescription: "",
                itemS: new Date("2021/06/26 08:00 AM UTC"),
                itemE: new Date("2021/06/26 10:00 AM UTC"),
            },
            {
                itemTitle: "June 26 - 3",
                itemDescription: "",
                itemS: new Date("2021/06/26 06:00 PM UTC"),
                itemE: new Date("2021/06/26 08:00 PM UTC"),
            },
            {
                itemTitle: "June 27 - 1",
                itemDescription: "",
                itemS: new Date("2021/06/27 02:00 AM UTC"),
                itemE: new Date("2021/06/27 04:00 AM UTC"),
            },
        ],
    },
];
