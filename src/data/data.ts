const tagsData = [
  "4-koma",
  "Achromatic",
  "Achronological Order",
  "Acting",
  "Adoption",
  "Advertisement",
  "Afterlife",
  "Age Gap",
  "Age Regression",
  "Agender",
  "Agriculture",
  "Ahegao",
  "Airsoft",
  "Alchemy",
  "Aliens",
  "Alternate Universe",
  "American Football",
  "Amnesia",
  "Amputation",
  "Anachronism",
  "Anal Sex",
  "Angels",
  "Animals",
  "Anthology",
  "Anthropomorphism",
  "Anti-Hero",
  "Archery",
  "Armpits",
  "Artificial Intelligence",
  "Asexual",
  "Ashikoki",
  "Asphyxiation",
  "Assassins",
  "Astronomy",
  "Athletics",
  "Augmented Reality",
  "Autobiographical",
  "Aviation",
  "Badminton",
  "Band",
  "Bar",
  "Baseball",
  "Basketball",
  "Battle Royale",
  "Biographical",
  "Bisexual",
  "Blackmail",
  "Body Horror",
  "Body Swapping",
  "Bondage",
  "Boobjob",
  "Boxing",
  "Boys' Love",
  "Bullying",
  "Butler",
  "Calligraphy",
  "Cannibalism",
  "Card Battle",
  "Cars",
  "Centaur",
  "CGI",
  "Cheerleading",
  "Chibi",
  "Chimera",
  "Chuunibyou",
  "Circus",
  "Classic Literature",
  "Clone",
  "College",
  "Coming of Age",
  "Conspiracy",
  "Cosmic Horror",
  "Cosplay",
  "Crime",
  "Crossdressing",
  "Crossover",
  "Cult",
  "Cultivation",
  "Cumflation",
  "Cunnilingus",
  "Cute Boys Doing Cute Things",
  "Cute Girls Doing Cute Things",
  "Cyberpunk",
  "Cyborg",
  "Cycling",
  "Dancing",
  "Death Game",
  "Deepthroat",
  "Defloration",
  "Delinquents",
  "Demons",
  "Denpa",
  "Desert",
  "Detective",
  "DILF",
  "Dinosaurs",
  "Disability",
  "Dissociative Identities",
  "Dragons",
  "Drawing",
  "Drugs",
  "Dullahan",
  "Dungeon",
  "Dystopian",
  "E-Sports",
  "Economics",
  "Educational",
  "Elf",
  "Ensemble Cast",
  "Environmental",
  "Episodic",
  "Ero Guro",
  "Espionage",
  "Exhibitionism",
  "Facial",
  "Fairy",
  "Fairy Tale",
  "Family Life",
  "Fashion",
  "Feet",
  "Fellatio",
  "Female Harem",
  "Female Protagonist",
  "Femboy",
  "Femdom",
  "Fencing",
  "Firefighters",
  "Fishing",
  "Fitness",
  "Flash",
  "Flat Chest",
  "Food",
  "Football",
  "Foreign",
  "Found Family",
  "Fugitive",
  "Full CGI",
  "Full Color",
  "Futanari",
  "Gambling",
  "Gangs",
  "Gender Bending",
  "Ghost",
  "Go",
  "Goblin",
  "Gods",
  "Golf",
  "Gore",
  "Group Sex",
  "Guns",
  "Gyaru",
  "Handball",
  "Handjob",
  "Henshin",
  "Heterosexual",
  "Hikikomori",
  "Historical",
  "Homeless",
  "Human Pet",
  "Hypersexuality",
  "Ice Skating",
  "Idol",
  "Incest",
  "Inseki",
  "Irrumatio",
  "Isekai",
  "Iyashikei",
  "Josei",
  "Judo",
  "Kaiju",
  "Karuta",
  "Kemonomimi",
  "Kids",
  "Kuudere",
  "Lacrosse",
  "Lactation",
  "Language Barrier",
  "Large Breasts",
  "LGBTQ+ Themes",
  "Lost Civilization",
  "Love Triangle",
  "Mafia",
  "Magic",
  "Mahjong",
  "Maids",
  "Makeup",
  "Male Harem",
  "Male Protagonist",
  "Marriage ",
  "Martial Arts",
  "Masochism",
  "Masturbation",
  "Medicine",
  "Memory Manipulation",
  "Mermaid",
  "Meta",
  "MILF",
  "Military",
  "Mixed Gender Harem",
  "Monster Boy",
  "Monster Girl",
  "Mopeds",
  "Motorcycles",
  "Musical",
  "Mythology",
  "Nakadashi",
  "Necromancy",
  "Nekomimi",
  "Netorare",
  "Netorase",
  "Netori",
  "Ninja",
  "No Dialogue",
  "Noir",
  "Non-fiction",
  "Nudity",
  "Nun",
  "Office Lady",
  "Oiran",
  "Ojou-sama",
  "Omegaverse",
  "Orphan",
  "Otaku Culture",
  "Outdoor",
  "Pandemic",
  "Parkour",
  "Parody",
  "Philosophy",
  "Photography",
  "Pirates",
  "Poker",
  "Police",
  "Politics",
  "Post-Apocalyptic",
  "POV",
  "Pregnant",
  "Primarily Adult Cast",
  "Primarily Child Cast",
  "Primarily Female Cast",
  "Primarily Male Cast",
  "Primarily Teen Cast",
  "Prison",
  "Prostitution",
  "Public Sex",
  "Puppetry",
  "Rakugo",
  "Rape",
  "Real Robot",
  "Rehabilitation",
  "Reincarnation",
  "Religion",
  "Revenge",
  "Rimjob",
  "Robots",
  "Rotoscoping",
  "Rugby",
  "Rural",
  "Sadism",
  "Samurai",
  "Satire",
  "Scat",
  "School",
  "School Club",
  "Scissoring",
  "Scuba Diving",
  "Seinen",
  "Sex Toys",
  "Shapeshifting",
  "Ships",
  "Shogi",
  "Shoujo",
  "Shounen",
  "Shrine Maiden",
  "Skateboarding",
  "Skeleton",
  "Slapstick",
  "Slavery",
  "Software Development",
  "Space",
  "Space Opera",
  "Spearplay",
  "Squirting",
  "Steampunk",
  "Stop Motion",
  "Succubus",
  "Suicide",
  "Sumata",
  "Sumo",
  "Super Power",
  "Super Robot",
  "Superhero",
  "Surfing",
  "Surreal Comedy",
  "Survival",
  "Sweat",
  "Swimming",
  "Swordplay",
  "Table Tennis",
  "Tanks",
  "Tanned Skin",
  "Teacher",
  "Teens' Love",
  "Tennis",
  "Tentacles",
  "Terrorism",
  "Threesome",
  "Time Manipulation",
  "Time Skip",
  "Tokusatsu",
  "Tomboy",
  "Torture",
  "Tragedy",
  "Trains",
  "Transgender",
  "Travel",
  "Triads",
  "Tsundere",
  "Twins",
  "Urban",
  "Urban Fantasy",
  "Vampire",
  "Video Games",
  "Vikings",
  "Villainess",
  "Virginity",
  "Virtual World",
  "Volleyball",
  "Vore",
  "Voyeur",
  "VTuber",
  "War",
  "Watersports",
  "Werewolf",
  "Witch",
  "Work",
  "Wrestling",
  "Writing",
  "Wuxia",
  "Yakuza",
  "Yandere",
  "Youkai",
  "Yuri",
  "Zombie",
  "Zoophilia",
];

const genresData: {genres: string[], tags: string[]} = {
  genres: [
    "Action",
    "Adventure",
    "Comedy",
    "Drama",
    "Ecchi",
    "Fantasy",
    "Hentai",
    "Horror",
    "Mahou",
    "Shoujo",
    "Mecha",
    "Music",
    "Mystery",
    "Psychological",
    "Romance",
    "Sci-Fi",
    "Slice of Life",
    "Sports",
    "Supernatural",
    "Thriller",
  ],
  tags: tagsData
};

const arrayRange = (start: number, stop: number, step: number) =>
    Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
    );


const yearsData = arrayRange(1940, new Date().getFullYear() + 1, 1).reverse();

const seasonsData = [
  "Winter",
  "Spring",
  "Summer",
  "Fall"
];

const formatsData = [
  "TV Show",
  "Movie",
  "TV Short",
  "Special",
  "OVA",
  "ONA",
  "Music"
];

const airingStatusData = [
  "Airing",
  "Finished",
  "Not Yet Aired",
  "Cancelled"
];

const streamingOnData = [
  "Crunchyroll",
  "Hulu",
  "Funimation",
  "Netflix",
  "YouTube",
  "HIDIVE",
  "Amazon",
  "Vimeo",
  "VRV",
  "HBO Max",
  "Wakanim",
  "RetroCrush",
  "Adult Swim",
  "Japanese Film Archives",
  "Tubi TV",
  "Crackle",
  "AsianCrush",
  "Midnight Pulp",
  "CONtv",
  "Fakku",
  "Bilibili",
  "Disney Plus",
  "Bilibili TV",
  "Tencent Video",
  "iQ",
  "Youku",
  "WeTV",
  "Niconico Video",
  "Rooster Teeth",
  "iQIYI",
  "Star+",
];

const countryOfOriginData = [
  "Japan",
  "South Korea",
  "China",
  "Taiwan"
];

const sourceMaterialData = [
  "Original",
  "Manga",
  "Light Novel",
  "Web Novel",
  "Novel",
  "Anime",
  "Visual Novel",
  "Video Game",
  "Doujinshi",
  "Comic",
  "Live Action",
  "Game",
  "Multimedia Project",
  "Picture Book",
  "Other",
];

const trending = [
  {
    title: {
      romaji: "ONE PIECE",
      english: "ONE PIECE",
      native: "ONE PIECE"
    },
    coverImage: {
      medium: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/nx21-tXMN3Y20PIL9.jpg"
    },
    averageScore: 87,
    genres: [
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
      "Fantasy"
    ],
    episodes: null,
    studios: {
      nodes: [
        {
          name: "Toei Animation"
        }
      ]
    },
    format: "TV",
    nextAiringEpisode: {
      timeUntilAiring: 1680953,
      episode: 1054
    }
  },
  {
    title: {
      romaji: "Blue Lock",
      english: "BLUELOCK",
      native: "ブルーロック"
    },
    coverImage: {
      medium: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx137822-4dVWMSHLpGf8.png"
    },
    averageScore: 81,
    genres: [
      "Action",
      "Drama",
      "Sports"
    ],
    episodes: 24,
    studios: {
      nodes: [
        {
          name: "8-bit"
        }
      ]
    },
    format: "TV",
    nextAiringEpisode: {
      timeUntilAiring: 442553,
      episode: 21
    }
  },
  {
    title: {
      romaji: "Boku no Hero Academia 6",
      english: "My Hero Academia Season 6",
      native: "僕のヒーローアカデミア６"
    },
    coverImage: {
      medium: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx139630-oc4l8OtJ4tRQ.jpg"
    },
    averageScore: 82,
    genres: [
      "Action",
      "Adventure",
      "Comedy"
    ],
    episodes: 25,
    studios: {
      nodes: [
        {
          name: "bones"
        }
      ]
    },
    format: "TV",
    nextAiringEpisode: {
      timeUntilAiring: 413753,
      episode: 22
    }
  },
  {
    title: {
      romaji: "Kage no Jitsuryokusha ni Naritakute!",
      english: "The Eminence in Shadow",
      native: "陰の実力者になりたくて！"
    },
    coverImage: {
      medium: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx130298-O7nR1Wrav2dH.jpg"
    },
    averageScore: 82,
    genres: [
      "Action",
      "Comedy",
      "Fantasy"
    ],
    episodes: 20,
    studios: {
      nodes: [
        {
          name: "Nexus"
        }
      ]
    },
    format: "TV",
    nextAiringEpisode: null
  },
  {
    title: {
      romaji: "Benriya Saitou-san, Isekai ni Iku",
      english: "Handyman Saitou in Another World",
      native: "便利屋斎藤さん、異世界に行く"
    },
    coverImage: {
      medium: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx144092-8EKzzZQofFlW.jpg"
    },
    averageScore: 68,
    genres: [
      "Adventure",
      "Comedy",
      "Fantasy",
      "Slice of Life"
    ],
    episodes: 12,
    studios: {
      nodes: [
        {
          name: "C2C"
        }
      ]
    },
    format: "TV",
    nextAiringEpisode: {
      timeUntilAiring: 518153,
      episode: 9
    }
  },
  {
    title: {
      romaji: "Fumetsu no Anata e Season 2",
      english: "To Your Eternity Season 2",
      native: "不滅のあなたへ Season 2"
    },
    coverImage: {
      medium: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx138565-JzvDqH84ILzi.png"
    },
    averageScore: 77,
    genres: [
      "Adventure",
      "Drama",
      "Fantasy",
      "Psychological",
      "Supernatural"
    ],
    episodes: 10,
    studios: {
      nodes: [
        {
          name: "Drive"
        }
      ]
    },
    format: "TV",
    nextAiringEpisode: {
      timeUntilAiring: 505553,
      episode: 19
    }
  }
]

export { trending, genresData, yearsData, seasonsData, formatsData, airingStatusData, streamingOnData, countryOfOriginData, sourceMaterialData };
