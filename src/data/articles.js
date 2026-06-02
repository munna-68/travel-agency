export const articles = [
  {
    slug: "silence-of-higashiyama",
    tag: "KYOTO, JAPAN",
    image: "/img/journal-kyoto-story.jpg",
    imageRatio: "wide",
    date: "NOV 12, 2024",
    author: "ELENA VANCE",
    title: "THE SILENCE OF HIGASHIYAMA: FINDING PEACE IN KYOTO'S OLD SOUL",
    excerpt:
      "Beyond the bustling markets and neon lights of central Kyoto lies a district frozen in time. Discover the winding stone paths and hidden tea houses where silence is the primary language.",
    body: [
      "Higashiyama reveals itself in layers. You can pass through it in an afternoon and think you've seen it — the broad stone steps, the lacquered shopfronts, the hush that falls as you climb toward the temples. But to know it, you have to come back in different weather, at different hours, and on different errands.",
      "On the morning I was last there, the rain had been falling since four. By eight, the stone paths from Sanjūsangen-dō toward Kiyomizu had turned a darker grey, and the moss at the base of the stone lanterns was drinking it in. A woman ahead of me, in a grey cotton coat, paused at a gate I would have walked past, and lifted the curtain. Inside, a low wooden room. A single kettle. An older monk, sitting.",
      "She didn't speak. He didn't either. The kettle came to the boil, and the rain continued, and that was the conversation.",
      "That, more than any temple complex, is what Higashiyama is for. Not the architecture — though the architecture is extraordinary — but the time it asks of you. The district only opens up once you stop trying to see it.",
    ],
    related: [
      {
        tag: "LOCAL GUIDES",
        title: "BEYOND THE BLUE DOMES: OIA'S SECRET ALLEYWAYS",
        slug: "oia-secret-alleyways",
        image: "/img/journal-santorini-domes.jpg",
      },
      {
        tag: "ADVENTURE",
        title: "WILD PEAKS: A GUIDE TO SOLO TREKKING THE CANADIAN ROCKIES",
        slug: "wild-peaks-canadian-rockies",
        image: "/img/journal-canadian-rockies.jpg",
      },
    ],
  },
  {
    slug: "paris-cafes-tourists-miss",
    tag: "TRAVEL TIPS",
    image: "/img/journal-paris-cafe.jpg",
    imageRatio: "tall",
    date: "OCT 28, 2024",
    author: "HENRI LANGLAIS",
    title: "7 CAFES IN PARIS THAT TOURISTS ALWAYS MISS",
    excerpt:
      "Skip the obvious terraces and follow the regulars instead. These are the rooms where the conversation still turns to literature, where the espresso is unhurried, and where the light is good enough to write in.",
    body: [
      "Paris is a city of cafes, but the right cafe is its own form of literature. You can read a writer in three sentences of overheard conversation, in the way the waiter greets the regular at the door, in the third-hour conversation that nobody is recording.",
      "These are seven of them. None of them is on the obvious lists. All of them have been the second home of at least one of the writers I most admire.",
    ],
    related: [
      {
        tag: "KYOTO, JAPAN",
        title: "THE SILENCE OF HIGASHIYAMA: FINDING PEACE IN KYOTO'S OLD SOUL",
        slug: "silence-of-higashiyama",
        image: "/img/journal-kyoto-story.jpg",
      },
    ],
  },
  {
    slug: "wild-peaks-canadian-rockies",
    tag: "ADVENTURE",
    image: "/img/journal-canadian-rockies.jpg",
    imageRatio: "square",
    date: "OCT 14, 2024",
    author: "MARCUS THORNE",
    title: "WILD PEAKS: A GUIDE TO SOLO TREKKING THE CANADIAN ROCKIES",
    excerpt:
      "A solo trek isn't a test of endurance — it's a conversation with yourself, held at altitude, in the long light of the high country.",
    body: [
      "There's a particular silence on the high passes in late August. The marmots have gone quiet. The wind is steady. The light has the long, almost horizontal quality that photographers wait for all year.",
      "If you walk alone through it, you'll notice something that the group trips don't give you: the trip is the conversation. The pace is the argument. The view is the conclusion, and it only lands because you walked there slowly enough to be changed by the approach.",
    ],
    related: [],
  },
  {
    slug: "oia-secret-alleyways",
    tag: "LOCAL GUIDES",
    image: "/img/journal-santorini-domes.jpg",
    imageRatio: "square",
    date: "SEP 30, 2024",
    author: "ELENA ROSSI",
    title: "BEYOND THE BLUE DOMES: OIA'S SECRET ALLEYWAYS",
    excerpt:
      "The postcards show you the front. These are the rooms behind the back doors — the small groceries, the family courtyards, the steps that lead to nowhere in particular.",
    body: [
      "The first time I climbed through Oia on my own, I was looking for the famous sunset. I never found the sunset, because I'd taken a wrong turn somewhere in the upper village and ended up in a courtyard where an older woman was hanging laundry on a low line.",
      "She offered me a small glass of cold water. I stayed for an hour. We didn't share a language, but we shared the afternoon.",
    ],
    related: [],
  },
];

export const findArticle = (slug) => articles.find((a) => a.slug === slug);
