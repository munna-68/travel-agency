export const destinations = [
  {
    slug: "kyoto-autumn-path",
    place: "KYOTO, JAPAN",
    title: "THE AUTUMN PATH",
    image: "/img/kyoto-autumn-path.jpg",
    aspect: "16 / 10",
    overlay: "bottom",
    tagVariant: "light",
    intro:
      "Wander through ancient gateways and witness the seasonal transformation of the imperial city.",
    duration: "6 DAYS",
    bestTime: "OCT — NOV",
    groupSize: "UP TO 10",
    difficulty: "EASY",
    startingFrom: "$2,180",
    highlights: [
      "Private dawn visit to Fushimi Inari's lesser-trodden paths",
      "Tea ceremony hosted by a third-generation Kyoto master",
      "Two nights in a restored machiya townhouse in Higashiyama",
    ],
    itinerary: [
      {
        day: "DAY 01",
        title: "Arrival in Kyoto",
        copy: "Settle into the machiya and meet your guide for a slow walk through Gion's lantern-lit lanes. A first kaiseki dinner sets the tempo for the days ahead.",
      },
      {
        day: "DAY 02",
        title: "Eastern Hills",
        copy: "An early start traces the philosophers' path before the crowds arrive. The afternoon is reserved for a private temple visit, closed to the public.",
      },
      {
        day: "DAY 03",
        title: "Arashiyama & The Bamboo",
        copy: "A walking day through the western bamboo groves, ending with a riverside lunch and an afternoon at a master calligrapher's atelier.",
      },
      {
        day: "DAY 04",
        title: "Fushimi Inari at Dawn",
        copy: "Pre-dawn departure to climb the upper shrines with a Shinto priest. The descent is unhurried, with stops for tea and conversation.",
      },
      {
        day: "DAY 05",
        title: "North Kyoto & Crafts",
        copy: "A day devoted to the artisans of north Kyoto: a knife maker, a textile dyer, and a copperware workshop. Dinner is a tasting menu built around seasonal kaiseki.",
      },
      {
        day: "DAY 06",
        title: "Departure",
        copy: "A final breakfast on the machiya veranda, with transfers arranged to the station or Kansai International Airport.",
      },
    ],
  },
  {
    slug: "glacier-valley",
    place: "MONTANA, USA",
    title: "GLACIER VALLEY",
    image: "/img/montana-glacier-valley.jpg",
    aspect: "3 / 4",
    overlay: "bottom",
    tagVariant: "dark",
    intro:
      "A high-country expedition through the quiet edges of Glacier National Park, far from the postcard pull-offs.",
    duration: "8 DAYS",
    bestTime: "JUL — SEP",
    groupSize: "UP TO 8",
    difficulty: "MODERATE",
    startingFrom: "$3,420",
    highlights: [
      "Backcountry access via the historic Sperry and Granite Park chalets",
      "Pristine alpine lakes reached only on foot",
      "Ranger-led conversations on glaciology and park history",
    ],
    itinerary: [
      {
        day: "DAY 01",
        title: "Whitefish Arrival",
        copy: "Land in Whitefish, transfer to a timber lodge on the edge of the Flathead. Welcome dinner and a briefing with your lead guide.",
      },
      {
        day: "DAY 02",
        title: "Into the Park",
        copy: "Cross into Glacier via the quieter west entrance. A short acclimatising walk along Lake McDonald precedes the first evening in the chalet system.",
      },
      {
        day: "DAY 03",
        title: "Sperry Chalet",
        copy: "A full ridge day to Sperry Chalet, with sweeping views of the surrounding cirque. The chalet dinner is shared with the hut keepers and fellow travellers.",
      },
      {
        day: "DAY 04",
        title: "Above the Cloud Line",
        copy: "An optional summit attempt with a high-alpine guide, or a slower morning to read, draw, and watch the weather move across the valley.",
      },
      {
        day: "DAY 05",
        title: "Granite Park",
        copy: "A traverse day to Granite Park Chalet, with stops at alpine lakes known only to the backcountry rangers.",
      },
      {
        day: "DAY 06",
        title: "Down to the Valley",
        copy: "A long descent through wildflower meadows, ending at the Going-to-the-Sun corridor. The afternoon is a rest day.",
      },
      {
        day: "DAY 07",
        title: "Blackfeet Country",
        copy: "A day with a Blackfeet cultural historian, visiting the ancestral plains east of the park. The conversation grounds the week in the longer story of the land.",
      },
      {
        day: "DAY 08",
        title: "Departure",
        copy: "Return to Whitefish with a final lunch at the lodge, then onward transfer to the airport.",
      },
    ],
  },
  {
    slug: "emerald-curve",
    place: "GUILIN, CHINA",
    title: "THE EMERALD CURVE",
    image: "/img/guilin-emerald-curve.jpg",
    aspect: "1 / 1",
    overlay: "bottom",
    tagVariant: "light",
    position: "topRight",
    intro:
      "A slow journey along the Li River, where the karst peaks rise like brushstrokes from the water.",
    duration: "5 DAYS",
    bestTime: "APR — JUN, SEP — OCT",
    groupSize: "UP TO 12",
    difficulty: "EASY",
    startingFrom: "$1,890",
    highlights: [
      "Private bamboo-raft drift on the most photographed bend of the Li",
      "A cormorant fisherman demonstration at dusk",
      "Two nights in a restored courtyard house in Daxu old town",
    ],
    itinerary: [
      {
        day: "DAY 01",
        title: "Arrival in Guilin",
        copy: "Land in Guilin and transfer to a courtyard retreat in the old town. Evening walk along the canal and a first taste of the regional kitchen.",
      },
      {
        day: "DAY 02",
        title: "The Li River",
        copy: "A full day on the river, drifting south from Xingping. A slow lunch on a quiet sandbar, then an evening cormorant demonstration with a fifth-generation fisherman.",
      },
      {
        day: "DAY 03",
        title: "Yangshuo Countryside",
        copy: "A bicycle day through the rice paddies and limestone villages outside Yangshuo. Optional calligraphy workshop in the afternoon.",
      },
      {
        day: "DAY 04",
        title: "Longji Rice Terraces",
        copy: "A drive north to the Longji terraces, with a walking tour led by a Yao minority guide who explains the irrigation and the harvest calendar.",
      },
      {
        day: "DAY 05",
        title: "Departure",
        copy: "A final morning in Daxu, browsing the old covered street, before transfer back to Guilin airport.",
      },
    ],
  },
];

export const findDestination = (slug) =>
  destinations.find((d) => d.slug === slug);
