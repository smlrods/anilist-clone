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


const yearsData = (arrayRange(1940, new Date().getFullYear() + 1, 1).reverse());

function createNumberObject(start: number, end: number): { [key: string]: number } {
  const obj: { [key: string]: number } = {};

  for (let i of Array.from({ length: end - start + 1 }, (_, i) => i + start).reverse()) {
    obj[i.toString()] = i;
  }

  return obj;
}

interface YearQueries {
  [key: string]: number
}

const yearsQueries: YearQueries = createNumberObject(1940, new Date().getFullYear() + 1);

interface SeasonsQueries {
  [key: string]: string
}

const seasonsQueries: SeasonsQueries = {
  "Winter": "WINTER",
  "Spring": "SPRING",
  "Summer": "SUMMER",
  "Fall": "FALL"
}

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

interface FormatQueries {
  [key: string]: string
}

const formatQueries: FormatQueries = {
  'TV Show': 'TV',
  'TV Short': 'TV_SHORT',
  'Movie': 'MOVIE',
  'Special': 'SPECIAL',
  'OVA': 'OVA',
  'ONA': 'ONA',
  'Music': 'MUSIC',
  'Light Novel': 'NOVEL',
  'Manga': 'MANGA'
}

interface AiringStatusQueries {
  [key: string]: string
}

const airingStatusQueries: AiringStatusQueries = {
  "Airing": "RELEASING",
  "Finished": "FINISHED",
  "Not Yet Aired": "NOT_YET_RELEASED",
  "Cancelled": "CANCELLED"
}

const airingStatusData = [
  "Airing",
  "Finished",
  "Not Yet Aired",
  "Cancelled"
];

interface SortQueries {
  [key: string]: string 
}

const sortQueries: SortQueries = {
  'title': 'TITLE_ROMAJI',
  'popularity': 'POPULARITY_DESC',
  'average score': 'SCORE_DESC',
  'trending': 'TRENDING_DESC',
  'favorites': 'FAVOURITES_DESC',
  'date added': 'ID_DESC',
  'release date': 'START_DATE_DESC'
}

interface StreamingOnQueries {
  [key: string]: number 
}

const streamingOnQueries: StreamingOnQueries = {
  "Crunchyroll": 5,
  "Hulu": 7,
  "Funimation": 8,
  "Netflix": 10,
  "YouTube": 13,
  "HIDIVE": 20,
  "Amazon": 21,
  "Vimeo": 22,
  "VRV": 24,
  "HBO Max": 25,
  "Wakanim": 26,
  "RetroCrush": 27,
  "Adult Swim": 28,
  "Japanese Film Archives": 29,
  "Tubi TV": 30,
  "Crackle": 31,
  "AsianCrush": 32,
  "Midnight Pulp": 33,
  "CONtv": 34,
  "Fakku": 36,
  "Bilibili": 45,
  "Disney Plus": 118,
  "Bilibili TV": 119,
  "Tencent Video": 121,
  "iQ": 122,
  "Youku": 126,
  "WeTV": 131,
  "Niconico Video": 180,
  "Rooster Teeth": 195,
  "iQIYI": 204,
  "Star+": 210,
}

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

interface CoutryOfOriginQueries {
  [key: string]: string
}

const countryOrOriginQueries: CoutryOfOriginQueries = {
  "Japan": "JP",
  "South Korea": "KR",
  "China": "CN",
  "Taiwan": "TW"
}

const countryOfOriginData = [
  "Japan",
  "South Korea",
  "China",
  "Taiwan"
];

interface SourceMaterialQueries {
  [key: string]: string;
}

const sourceMaterialQueries: SourceMaterialQueries = {
  "Original": "ORIGINAL",
  "Manga": "MANGA",
  "Light Novel": "LIGHT_NOVEL",
  "Web Novel": "WEB_NOVEL",
  "Novel": "NOVEL",
  "Anime": "ANIME",
  "Visual Novel": "VISUAL_NOVEL",
  "Video Game": "VIDEO_GAME",
  "Doujinshi": "DOUJINSHI",
  "Comic": "COMIC",
  "Live Action": "LIVE_ACTION",
  "Game": "GAME",
  "Multimedia Project": "MULTIMEDIA_PROJECT",
  "Picture Book": "PICTURE_BOOK",
  "Other": "OTHER",
}

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
          "id": 136430,
          "title": {
            "romaji": "VINLAND SAGA SEASON 2",
            "english": "Vinland Saga Season 2",
            "native": "ヴィンランド・サガ SEASON2"
          },
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx136430-f8Iza5GEynRW.jpg"
          },
          "averageScore": 85,
          "genres": [
            "Action",
            "Adventure",
            "Drama"
          ],
          "episodes": 24,
          "studios": {
            "nodes": [
              {
                "name": "MAPPA"
              }
            ]
          },
          "format": "TV",
          "nextAiringEpisode": {
            "timeUntilAiring": 587897,
            "episode": 10
          },
          "season": "WINTER",
          "seasonYear": 2023
        },
        {
          "id": 21,
          "title": {
            "romaji": "ONE PIECE",
            "english": "ONE PIECE",
            "native": "ONE PIECE"
          },
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/nx21-tXMN3Y20PIL9.jpg"
          },
          "averageScore": 87,
          "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Drama",
            "Fantasy"
          ],
          "episodes": null,
          "studios": {
            "nodes": [
              {
                "name": "Toei Animation"
              }
            ]
          },
          "format": "TV",
          "nextAiringEpisode": {
            "timeUntilAiring": 1052297,
            "episode": 1054
          },
          "season": "FALL",
          "seasonYear": 1999
        },
        {
          "id": 137822,
          "title": {
            "romaji": "Blue Lock",
            "english": "BLUELOCK",
            "native": "ブルーロック"
          },
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx137822-4dVWMSHLpGf8.png"
          },
          "averageScore": 81,
          "genres": [
            "Action",
            "Drama",
            "Sports"
          ],
          "episodes": 24,
          "studios": {
            "nodes": [
              {
                "name": "8-bit"
              }
            ]
          },
          "format": "TV",
          "nextAiringEpisode": {
            "timeUntilAiring": 418697,
            "episode": 22
          },
          "season": "FALL",
          "seasonYear": 2022
        },
        {
          "id": 146984,
          "title": {
            "romaji": "Shingeki no Kyojin: The Final Season - Kanketsu-hen Zenpen",
            "english": "Attack on Titan Final Season THE FINAL CHAPTERS Special 1",
            "native": "進撃の巨人 The Final Season完結編 前編"
          },
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx146984-EnCsTCpLyIBi.jpg"
          },
          "averageScore": 89,
          "genres": [
            "Action",
            "Drama",
            "Fantasy",
            "Mystery",
            "Psychological"
          ],
          "episodes": 1,
          "studios": {
            "nodes": [
              {
                "name": "MAPPA"
              }
            ]
          },
          "format": "SPECIAL",
          "nextAiringEpisode": null,
          "season": "WINTER",
          "seasonYear": 2023
        },
        {
          "id": 139630,
          "title": {
            "romaji": "Boku no Hero Academia 6",
            "english": "My Hero Academia Season 6",
            "native": "僕のヒーローアカデミア６"
          },
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx139630-oc4l8OtJ4tRQ.jpg"
          },
          "averageScore": 82,
          "genres": [
            "Action",
            "Adventure",
            "Comedy"
          ],
          "episodes": 25,
          "studios": {
            "nodes": [
              {
                "name": "bones"
              }
            ]
          },
          "format": "TV",
          "nextAiringEpisode": {
            "timeUntilAiring": 389897,
            "episode": 23
          },
          "season": "FALL",
          "seasonYear": 2022
        },
        {
          "id": 142193,
          "title": {
            "romaji": "Eiyuu-ou, Bu wo Kiwameru Tame Tenseisu: Soshite, Sekai Saikyou no Minarai Kishi♀",
            "english": "Reborn to Master the Blade: From Hero-King to Extraordinary Squire",
            "native": "英雄王、武を極めるため転生す ～そして、世界最強の見習い騎士♀～"
          },
          "coverImage": {
            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx142193-3S6gtp7PHLNL.jpg"
          },
          "averageScore": 67,
          "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Fantasy"
          ],
          "episodes": 12,
          "studios": {
            "nodes": [
              {
                "name": "Studio Comet"
              }
            ]
          },
          "format": "TV",
          "nextAiringEpisode": {
            "timeUntilAiring": 592397,
            "episode": 10
          },
          "season": "WINTER",
          "seasonYear": 2023
        }
]

export { trending, genresData, yearsData, yearsQueries, seasonsData, seasonsQueries, formatsData, formatQueries, airingStatusData, airingStatusQueries, streamingOnData, streamingOnQueries, countryOfOriginData, countryOrOriginQueries, sourceMaterialQueries,sourceMaterialData, sortQueries};
