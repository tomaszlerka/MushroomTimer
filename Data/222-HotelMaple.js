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
                itemS: new Date("Start date"),
                itemE: new Date("End date"),
            },
        ],
    },
];

let eventList = [
    //Category: Main Events
    {
        category: "Hotel Maple",
        categoryColor: "#9f8aff",
        sectionTitle: "VIP Membership",
        sectionLink: "https://maplestory.nexon.net/news/66516/v-222-16th-anniversary-hotel-maple-patch-notes#vip",
        sectionDescription: "Level up your VIP rank every day by paying 200 coins. Higher ranks give you rewards and useful perks. <br> Elite rank at 5 points, Premium at 15 points and Prestige at 35 points.",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemS: new Date("2021/04/21 08:00 PM UTC"),
                itemE: new Date("2021/06/08 11:59 PM UTC"),
            },
        ],
    },
    {
        category: "Hotel Maple",
        categoryColor: "#9f8aff",
        sectionTitle: "Maple Infinity Pool",
        sectionLink: "https://maplestory.nexon.net/news/66516/v-222-16th-anniversary-hotel-maple-patch-notes#pool",
        sectionDescription: "Pay 100 coins to BONK your 141-199 character. Available once at Elite, twice at Premium or three times at Prestige per day.",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemS: new Date("2021/04/21 08:00 PM UTC"),
                itemE: new Date("2021/06/08 11:59 PM UTC"),
            },
        ],
    },
    {
        category: "Hotel Maple",
        categoryColor: "#9f8aff",
        sectionTitle: "Maple Punch King",
        sectionLink: "https://maplestory.nexon.net/news/66516/v-222-16th-anniversary-hotel-maple-patch-notes#king",
        sectionDescription: "Destroy 10 stages of mobs and bosses over 2 minutes to get up to 120 coins per day.",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemS: new Date("2021/04/21 08:00 PM UTC"),
                itemE: new Date("2021/06/08 11:59 PM UTC"),
            },
        ],
    },
    {
        category: "Hotel Maple",
        categoryColor: "#9f8aff",
        sectionTitle: "Coin Minigames",
        sectionLink: "",
        sectionDescription: "",
        item: [
            {
                itemTitle: "One Card",
                itemDescription: "",
                itemLink: "https://maplestory.nexon.net/news/66516/v-222-16th-anniversary-hotel-maple-patch-notes#one",
                itemS: new Date("2021/04/21 08:00 PM UTC"),
                itemE: new Date("2021/06/08 11:59 PM UTC"),
            },
            {
                itemTitle: "Monster Pyramid",
                itemDescription: "",
                itemLink: "https://maplestory.nexon.net/news/66516/v-222-16th-anniversary-hotel-maple-patch-notes#monster",
                itemS: new Date("2021/05/19 12:00 AM UTC"),
                itemE: new Date("2021/06/08 11:59 PM UTC"),
            },
        ],
    },
    {
        category: "Hotel Maple",
        categoryColor: "#9f8aff",
        sectionTitle: "Coin Capping",
        sectionLink: "",
        sectionDescription: "All coin capping skills require you to kill mobs near your level and are available starting at lvl 101. Different skills for different ranks.",
        item: [
            {
                itemTitle: "Neon Mushroom Watch",
                itemDescription: "VIP Classic & VIP Elite",
                itemLink: "https://maplestory.nexon.net/news/66516/v-222-16th-anniversary-hotel-maple-patch-notes#neon",
                itemS: new Date("2021/04/21 08:00 PM UTC"),
                itemE: new Date("2021/06/08 11:59 PM UTC"),
            },
            {
                itemTitle: "7-Star Catered Buffet",
                itemDescription: "VIP Premium",
                itemLink: "https://maplestory.nexon.net/news/66516/v-222-16th-anniversary-hotel-maple-patch-notes#buffet",
                itemS: new Date("2021/04/21 08:00 PM UTC"),
                itemE: new Date("2021/06/08 11:59 PM UTC"),
            },
            {
                itemTitle: "Special Therapy",
                itemDescription: "VIP Prestige",
                itemLink: "https://maplestory.nexon.net/news/66516/v-222-16th-anniversary-hotel-maple-patch-notes#therapy",
                itemS: new Date("2021/05/19 12:00 AM UTC"),
                itemE: new Date("2021/06/08 11:59 PM UTC"),
            },
        ],
    },
    {
        category: "Hotel Maple",
        categoryColor: "#9f8aff",
        sectionTitle: "Coin Shops",
        sectionLink: "",
        sectionDescription: "",
        item: [
            {
                itemTitle: "Member Services",
                itemDescription: "Progression items limited per world.",
                itemLink: "https://maplestory.nexon.net/news/66516/v-222-16th-anniversary-hotel-maple-patch-notes#service",
                itemS: new Date("2021/04/21 08:00 PM UTC"),
                itemE: new Date("2021/06/13 11:59 PM UTC"),
            },
            {
                itemTitle: "Personal Shop",
                itemDescription: "Progression & Miscellaneous items limited per character.",
                itemLink: "https://maplestory.nexon.net/news/66516/v-222-16th-anniversary-hotel-maple-patch-notes#personal",
                itemS: new Date("2021/04/21 08:00 PM UTC"),
                itemE: new Date("2021/06/13 11:59 PM UTC"),
            },
            {
                itemTitle: "Boutique",
                itemDescription: "Fashionstory items limited per character.",
                itemLink: "https://maplestory.nexon.net/news/66516/v-222-16th-anniversary-hotel-maple-patch-notes#boutique",
                itemS: new Date("2021/05/19 12:00 AM UTC"),
                itemE: new Date("2021/06/08 11:59 PM UTC"),
            },
            {
                itemTitle: "Jewelry Shop",
                itemDescription: "Event rings limited per character.",
                itemLink: "https://maplestory.nexon.net/news/66516/v-222-16th-anniversary-hotel-maple-patch-notes#jewelry",
                itemS: new Date("2021/05/19 12:00 AM UTC"),
                itemE: new Date("2021/06/08 11:59 PM UTC"),
            },
        ],
    },
    {
        category: "Hotel Maple",
        categoryColor: "#9f8aff",
        sectionTitle: "Meso Shop",
        sectionLink: "https://maplestory.nexon.net/news/66516/v-222-16th-anniversary-hotel-maple-patch-notes#meso",
        sectionDescription: "Fashionstory & Progression items available for meso, limited per world.",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemLink: "",
                itemS: new Date("2021/04/21 08:00 PM UTC"),
                itemE: new Date("2021/06/13 11:59 PM UTC"),
            },
        ],
    },
    {
        category: "Hotel Maple",
        categoryColor: "#9f8aff",
        sectionTitle: "Coupon Book",
        sectionLink: "https://maplestory.nexon.net/news/66516/v-222-16th-anniversary-hotel-maple-patch-notes#coupon",
        sectionDescription: "Shop with items that can be bought with coupons you get for leveling your VIP rank.",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemLink: "",
                itemS: new Date("2021/04/21 08:00 PM UTC"),
                itemE: new Date("2021/06/13 11:59 PM UTC"),
            },
        ],
    },
    {
        category: "Hotel Maple",
        categoryColor: "#9f8aff",
        sectionTitle: "My Kidult Day",
        sectionLink: "https://maplestory.nexon.net/news/66516/v-222-16th-anniversary-hotel-maple-patch-notes#kid",
        sectionDescription: "Complete hidden missions for Little Richie to get 300 coins, a mount and a chair. Can be done once per world.",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemLink: "",
                itemS: new Date("2021/05/17 12:00 AM UTC"),
                itemE: new Date("2021/05/19 11:59 PM UTC"),
            },
        ],
    },

    //Category: Other Events
    {
        category: "Other Events",
        categoryColor: "#45a2ff",
        sectionTitle: "The Legends Return! Ranking Rewards",
        sectionLink: "https://maplestory.nexon.net/news/66516/v-222-16th-anniversary-hotel-maple-patch-notes#rank",
        sectionDescription: "Get rewards from The Legends Return! that took place in patch 221.",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemS: new Date("2021/04/21 08:00 PM UTC"),
                itemE: new Date("2021/05/04 11:59 PM UTC"),
            },
        ],
    },

    {
        category: "Other Events",
        categoryColor: "#ffc817",
        sectionTitle: "Fairy Bros’ Golden Giveaway",
        sectionLink: "https://maplestory.nexon.net/news/66516/v-222-16th-anniversary-hotel-maple-patch-notes#golden",
        sectionDescription: "Stay logged in for an hour each day and check in with the Fairy Bros to get attendance rewards.",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemS: new Date("2021/02/03 14:00 UTC"),
                itemE: new Date("2021/06/08 11:59 PM UTC"),
            },
        ],
    },

    {
        category: "Other Events",
        categoryColor: "#fff461",
        sectionTitle: "Sunny Sunday",
        sectionLink: "https://maplestory.nexon.net/news/66516/v-222-16th-anniversary-hotel-maple-patch-notes#sunny",
        sectionDescription: "",
        item: [
            {
                itemTitle: "Week 1 - April 25",
                itemDescription: "30% off Star Forcing, <br> Double Sweet 16 Coins",
                itemS: new Date("2021/04/25 12:00 AM UTC"),
                itemE: new Date("2021/04/25 11:59 PM UTC"),
            },
            {
                itemTitle: "Week 2 - May 2",
                itemDescription: "100% extra EXP from Runes, <br> 300% extra EXP from Combo Orbs, <br> Double Sweet 16 Coins",
                itemS: new Date("2021/05/02 12:00 AM UTC"),
                itemE: new Date("2021/05/02 11:59 PM UTC"),
            },
            {
                itemTitle: "Week 3 - May 9",
                itemDescription: "2x EXP from Pollo & Fritto, <br> 2x EXP from Inferno Wolf, <br> Double Sweet 16 Coins",
                itemS: new Date("2021/05/09 12:00 AM UTC"),
                itemE: new Date("2021/05/09 11:59 PM UTC"),
            },
            {
                itemTitle: "Week 4 - May 16",
                itemDescription: "50% Spell Tracing, <br> Double Sweet 16 Coins",
                itemS: new Date("2021/05/16 12:00 AM UTC"),
                itemE: new Date("2021/05/16 11:59 PM UTC"),
            },
            {
                itemTitle: "Week 5 - May 23",
                itemDescription: "5, 10, 15 Star Forcing, <br> Double Sweet 16 Coins",
                itemS: new Date("2021/05/23 12:00 AM UTC"),
                itemE: new Date("2021/05/23 11:59 PM UTC"),
            },
            {
                itemTitle: "Week 6 - May 30",
                itemDescription: "50% extra Monster Park EXP, <br> Double Sweet 16 Coins, <br> Double VIP Membership rank up",
                itemS: new Date("2021/05/30 12:00 AM UTC"),
                itemE: new Date("2021/05/30 11:59 PM UTC"),
            },
            {
                itemTitle: "Week 7 - June 6",
                itemDescription: "50% off Inner Ability, <br> Double Sweet 16 Coins, <br> Double VIP Membership rank up",
                itemS: new Date("2021/06/06 12:00 AM UTC"),
                itemE: new Date("2021/06/06 11:59 PM UTC"),
            },
        ],
    },

    {
        category: "Other Events",
        categoryColor: "#5cd1ff",
        sectionTitle: "Spell Trace Fever - April",
        sectionLink: "https://maplestory.nexon.net/news/66516/v-222-16th-anniversary-hotel-maple-patch-notes#spell",
        sectionDescription: "",
        item: [
            {
                itemTitle: "April 23 - 1",
                itemDescription: "",
                itemS: new Date("2021/04/23 08:00 AM UTC"),
                itemE: new Date("2021/04/23 10:00 AM UTC"),
            },
            {
                itemTitle: "April 23 - 2",
                itemDescription: "",
                itemS: new Date("2021/04/23 06:00 PM UTC"),
                itemE: new Date("2021/04/23 08:00 PM UTC"),
            },
            {
                itemTitle: "April 24 - 1",
                itemDescription: "",
                itemS: new Date("2021/04/24 02:00 AM UTC"),
                itemE: new Date("2021/04/24 04:00 AM UTC"),
            },
            {
                itemTitle: "April 24 - 2",
                itemDescription: "",
                itemS: new Date("2021/04/24 08:00 AM UTC"),
                itemE: new Date("2021/04/24 10:00 AM UTC"),
            },
            {
                itemTitle: "April 24 - 3",
                itemDescription: "",
                itemS: new Date("2021/04/24 06:00 PM UTC"),
                itemE: new Date("2021/04/24 08:00 PM UTC"),
            },
            {
                itemTitle: "April 25 - 1",
                itemDescription: "",
                itemS: new Date("2021/04/25 02:00 AM UTC"),
                itemE: new Date("2021/04/25 04:00 AM UTC"),
            },
        ],
    },

    {
        category: "Other Events",
        categoryColor: "#5cd1ff",
        sectionTitle: "Spell Trace Fever - May",
        sectionLink: "https://maplestory.nexon.net/news/66516/v-222-16th-anniversary-hotel-maple-patch-notes#spell",
        sectionDescription: "",
        item: [
            {
                itemTitle: "May 28 - 1",
                itemDescription: "",
                itemS: new Date("2021/05/28 08:00 AM UTC"),
                itemE: new Date("2021/05/28 10:00 AM UTC"),
            },
            {
                itemTitle: "May 28 - 2",
                itemDescription: "",
                itemS: new Date("2021/05/28 06:00 PM UTC"),
                itemE: new Date("2021/05/28 08:00 PM UTC"),
            },
            {
                itemTitle: "May 29 - 1",
                itemDescription: "",
                itemS: new Date("2021/05/29 02:00 AM UTC"),
                itemE: new Date("2021/05/29 04:00 AM UTC"),
            },
            {
                itemTitle: "May 29 - 2",
                itemDescription: "",
                itemS: new Date("2021/05/29 08:00 AM UTC"),
                itemE: new Date("2021/05/29 10:00 AM UTC"),
            },
            {
                itemTitle: "May 29 - 3",
                itemDescription: "",
                itemS: new Date("2021/05/29 06:00 PM UTC"),
                itemE: new Date("2021/05/29 08:00 PM UTC"),
            },
            {
                itemTitle: "May 30 - 1",
                itemDescription: "",
                itemS: new Date("2021/05/30 02:00 AM UTC"),
                itemE: new Date("2021/05/30 04:00 AM UTC"),
            },
        ],
    },

    {
        category: "Other Events",
        categoryColor: "#ffc817",
        sectionTitle: "Cash Inventory Transfer",
        sectionLink: "https://maplestory.nexon.net/news/66516/v-222-16th-anniversary-hotel-maple-patch-notes#transfer",
        sectionDescription: "",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemS: new Date("2021/06/02 06:30 PM UTC"),
                itemE: new Date("2021/06/08 11:59 PM UTC"),
            },
        ],
    },
];
