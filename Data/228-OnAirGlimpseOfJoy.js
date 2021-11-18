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
    // Lara
    {
        category: "Lara",
        categoryColor: "#FFE4E4",
        sectionTitle: "Lara Pre-Registration Event",
        sectionLink:
            "https://maplestory.nexon.net/news/70205/v-228-on-air-glimpse-of-joy-patch-notes#pre",
        sectionDescription: " ",
        item: [
            {
                itemTitle: "Pre-Registration Event",
                itemDescription: "",
                itemS: new Date("2021/10/20 12:00 AM UTC"),
                itemE: new Date("2021/11/30 11:59 PM UTC"),
            },
            {
                itemTitle: "Coin Shop",
                itemDescription: "",
                itemS: new Date("2021/12/1 12:00 AM UTC"),
                itemE: new Date("2021/12/14 11:59 PM UTC"),
            },
        ],
    },
    {
        category: "Lara",
        categoryColor: "#FFE4E4",
        sectionTitle: "Lara's release",
        sectionLink:
            "https://maplestory.nexon.net/news/70205/v-228-on-air-glimpse-of-joy-patch-notes#lara",
        sectionDescription: " ",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemS: "",
                itemE: new Date("2021/12/01 12:00 AM UTC"),
            },
        ],
    },
    {
        category: "Lara",
        categoryColor: "#FFE4E4",
        sectionTitle: "Lara Adventure Support Event",
        sectionLink:
            "https://maplestory.nexon.net/news/70205/v-228-on-air-glimpse-of-joy-patch-notes#support",
        sectionDescription:
            "This event is here to support those who level up their Lara character during the event period by providing special rewards when you reach certain level milestones up to Lv. 220!",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemS: new Date("2021/12/1 12:00 AM UTC"),
                itemE: new Date("2022/02/8 11:59 PM UTC"),
            },
        ],
    },

    //Category: Main Events
    {
        category: "Maple LIVE",
        categoryColor: "#FF57ED",
        sectionTitle: "Maple LIVE",
        sectionLink:
            "https://maplestory.nexon.net/news/70205/v-228-on-air-glimpse-of-joy-patch-notes#live",
        sectionDescription: "",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemS: new Date("2021/11/18 00:00 UTC"),
                itemE: new Date("2022/02/8 11:59 PM UTC"),
            },
        ],
    },
    {
        category: "Maple LIVE",
        categoryColor: "#FF57ED",
        sectionTitle: "Creator Step Up",
        sectionLink:
            "https://maplestory.nexon.net/news/70205/v-228-on-air-glimpse-of-joy-patch-notes#creator",
        sectionDescription:
            "Earn various rewards and rank up as you complete daily, weekly, and monthly missions! and earn Subscribers, Pink Beans, and Black Beans.",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemS: new Date("2021/11/18 00:00 UTC"),
                itemE: new Date("2022/02/8 11:59 PM UTC"),
            },
        ],
    },
    {
        category: "Maple LIVE",
        categoryColor: "#FF57ED",
        sectionTitle: "STUDIO GO!",
        sectionLink:
            "https://maplestory.nexon.net/news/70205/v-228-on-air-glimpse-of-joy-patch-notes#studio",
        sectionDescription:
            "Enter LIVE Studio map every 30-minute mark of each hour to receive either Pink Studio or Blue Studio buff.",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemS: new Date("2021/11/18 00:00 UTC"),
                itemE: new Date("2022/02/8 11:59 PM UTC"),
            },
        ],
    },
    {
        category: "Maple LIVE",
        categoryColor: "#FF57ED",
        sectionTitle: "Maple ON AIR: Pop Reaction",
        sectionLink:
            "https://maplestory.nexon.net/news/70205/v-228-on-air-glimpse-of-joy-patch-notes#pop",
        sectionDescription:
            "When you defeat 500 monsters near your level (20 levels below and 20 levels above), viewers watching your broadcast will shower you with Maple Pop Pouches!",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemS: new Date("2021/11/18 00:00 UTC"),
                itemE: new Date("2021/12/14 11:59 PM UTC"),
            },
        ],
    },
    {
        category: "Maple LIVE",
        categoryColor: "#FF57ED",
        sectionTitle: "Beach Boss",
        sectionLink:
            "https://maplestory.nexon.net/news/70205/v-228-on-air-glimpse-of-joy-patch-notes#beach",
        sectionDescription:
            "You will receive an invitation above your character’s head at the 15-minute and 45-minute mark of every hour. Click on the invitation to play the game.",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemS: new Date("2021/11/18 00:00 UTC"),
                itemE: new Date("2021/12/14 11:59 PM UTC"),
            },
        ],
    },
    {
        category: "Maple LIVE",
        categoryColor: "#FF57ED",
        sectionTitle: "Maple Variety: Tangyoon Restaurant",
        sectionLink:
            "https://maplestory.nexon.net/news/70205/v-228-on-air-glimpse-of-joy-patch-notes#tangyoon",
        sectionDescription:
            "Your goal is to earn 50,000 points within 30 minutes alone or with up to 2 Maplers by cooking and delivering food.",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemS: new Date("2021/11/18 00:00 UTC"),
                itemE: new Date("2021/12/14 11:59 PM UTC"),
            },
        ],
    },
    {
        category: "Maple LIVE",
        categoryColor: "#FF57ED",
        sectionTitle: "Maple LIVE Shops",
        sectionLink: "",
        sectionDescription: "",
        item: [
            {
                itemTitle: "Pink Bean Shop",
                itemDescription:
                    "You can earn Pink Beans by completing daily and monthly missions.",
                itemLink:
                    "https://maplestory.nexon.net/news/70205/v-228-on-air-glimpse-of-joy-patch-notes#pink",
                itemS: new Date("2021/11/18 00:00 UTC"),
                itemE: new Date("2022/02/13 11:59 PM UTC"),
            },
            {
                itemTitle: "Black Bean Shop",
                itemDescription:
                    "You can earn Black Beans by completing weekly missions.",
                itemLink:
                    "https://maplestory.nexon.net/news/70205/v-228-on-air-glimpse-of-joy-patch-notes#black",
                itemS: new Date("2021/11/18 00:00 UTC"),
                itemE: new Date("2022/02/13 11:59 PM UTC"),
            },
            {
                itemTitle: "Meso Shop",
                itemDescription:
                    "The Meso Shop can only be accessed when you reach Gold Creator rank.",
                itemLink:
                    "https://maplestory.nexon.net/news/70205/v-228-on-air-glimpse-of-joy-patch-notes#meso",
                itemS: new Date("2021/11/18 00:00 UTC"),
                itemE: new Date("2022/02/13 11:59 PM UTC"),
            },
        ],
    },

    //Category: Burning
    {
        category: "On Air Burning Events",
        categoryColor: "#fc874c",
        sectionTitle: "Tera Burning Plus",
        sectionLink:
            "https://maplestory.nexon.net/news/70205/v-228-on-air-glimpse-of-joy-patch-notes#tera",
        sectionDescription:
            "Burn your character to level 200 and further to receive additional rewards.",
        item: [
            {
                itemTitle: "Part 1",
                itemDescription: "",
                itemS: new Date("2021/11/18 00:00 UTC"),
                itemE: new Date("2021/12/28 11:59 PM UTC"),
            },
            {
                itemTitle: "Part 2",
                itemDescription: "",
                itemS: new Date("2021/12/29 12:00 AM UTC"),
                itemE: new Date("2022/02/8 11:59 PM UTC"),
            },
        ],
    },
    {
        category: "On Air Burning Events",
        categoryColor: "#fc874c",
        sectionTitle: "Burning World",
        sectionLink:
            "https://maplestory.nexon.net/news/70205/v-228-on-air-glimpse-of-joy-patch-notes#burning",
        sectionDescription:
            "Special world with bonuses to make it easier to level your characters. 2 x Mega Burning (150).",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemS: new Date("2021/11/18 00:00 UTC"),
                itemE: new Date("2022/02/09 12:00 UTC"),
            },
        ],
    },
    {
        category: "On Air Burning Events",
        categoryColor: "#fc874c",
        sectionTitle: "Burning World Leap",
        sectionLink:
            "https://maplestory.nexon.net/news/70205/v-228-on-air-glimpse-of-joy-patch-notes#leap",
        sectionDescription:
            "Move up to 6 characters from Burning world to other reg worlds.",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemS: new Date("2022/02/10 00:00 UTC"),
                itemE: new Date("2022/02/24 12:00 UTC"),
            },
        ],
    },

    //Category: Other Events
    {
        category: "Other Events",
        categoryColor: "#fff461",
        sectionTitle: "Sunny Sunday",
        sectionLink:
            "https://maplestory.nexon.net/news/70205/v-228-on-air-glimpse-of-joy-patch-notes#sunny",
        sectionDescription: "",
        item: [
            {
                itemTitle: "Week 1 - November 21",
                itemDescription:
                    "Receive 50% off Spell Trace enhancement. Receive 50% off Ability resets. Receive 2x Pink Beans from Maple LIVE events.",
                itemS: new Date("2021/11/21 12:00 AM UTC"),
                itemE: new Date("2021/11/21 11:59 PM UTC"),
            },
            {
                itemTitle: "Week 2 - November 28",
                itemDescription:
                    "Receive 100% success rate when you do Star Force 5, 10, and 15. Receive 2x EXP from Pollo and Fritto. Receive 2x EXP from Inferno Wolf. Receive 2x Pink Beans from Maple LIVE events.",
                itemS: new Date("2021/11/28 12:00 AM UTC"),
                itemE: new Date("2021/11/28 11:59 PM UTC"),
            },
            {
                itemTitle: "Week 3 - December 5",
                itemDescription:
                    "Receive 100% extra EXP from Runes. Receive 300% extra EXP from Combo Kill Orbs. Receive 2x Pink Beans from Maple LIVE events.",
                itemS: new Date("2021/12/5 12:00 AM UTC"),
                itemE: new Date("2021/12/5 11:59 PM UTC"),
            },
            {
                itemTitle: "Week 4 - December 12",
                itemDescription:
                    "Receive Arcane Symbol Selector Coupon (x50). Receive 50% extra EXP from Monster Park clears. Receive 2x Pink Beans from Maple LIVE events.",
                itemS: new Date("2021/12/12 12:00 AM UTC"),
                itemE: new Date("2021/12/12 11:59 PM UTC"),
            },
        ],
    },

    {
        category: "Other Events",
        categoryColor: "#5cd1ff",
        sectionTitle: "Spell Trace Fever",
        sectionLink:
            "https://maplestory.nexon.net/news/70205/v-228-on-air-glimpse-of-joy-patch-notes#spell",
        sectionDescription:
            "Increased spell trace success rate during specified 2-hour windows.",
        item: [
            {
                itemTitle: "",
                itemDescription: "",
                itemS: new Date("2021/11/26 08:00 AM UTC"),
                itemE: new Date("2021/11/28 04:00 AM UTC"),
            },
        ],
    },
];
