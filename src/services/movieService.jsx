export const GENRES = ['Actio', 'Crimen', 'Drama', 'Romance', 'Sci-Fi', 'Thriller', 'Comedy', 'Adventure', 'War', 'Mystery', 'Horror', 'Animation']

const img = (id) =>
  `https://images.unsplash.com/${id}?w=400&h=580&fit=crop&auto=format`

const portrait = (id) =>
  `https://images.unsplash.com/${id}?w=300&h=300&fit=crop&auto=format&face`

export const PEOPLE = [
  {
    id: 'p1',
    name: 'Denis Villeneuve',
    photo: portrait('photo-1600878459108-617a253537e9'),
    nationality: 'Canadian',
    bio: 'Denis Villeneuve is a Canadian filmmaker known for his visually immersive and philosophically rich science-fiction epics. His work is characterized by meticulous world-building, restrained pacing, and an unflinching gaze at human fragility.',
    movieIdsActed: [],
    movieIdsDirected: ['m1', 'm2', 'm3', 'm4'],
    role: 'director',
  },
  {
    id: 'p2',
    name: 'Christopher Nolan',
    photo: portrait('photo-1507003211169-0a1dd7228f2d'),
    nationality: 'British-American',
    bio: 'Christopher Nolan is a British-American filmmaker whose cerebral, large-scale blockbusters have redefined what mainstream cinema can achieve. His films consistently probe time, memory, and moral ambiguity.',
    movieIdsActed: [],
    movieIdsDirected: ['m5', 'm6', 'm14', 'm16', 'm19'],
    role: 'director',
  },
  {
    id: 'p3',
    name: 'Bong Joon-ho',
    photo: portrait('photo-1506794778202-cad84cf45f1d'),
    nationality: 'South Korean',
    bio: 'Bong Joon-ho is a South Korean director whose genre-fluid films dissect class inequality and social rot with dark wit and surgical precision. His work moves between thriller, horror, and satire with effortless command.',
    movieIdsActed: [],
    movieIdsDirected: ['m7', 'm8', 'm15', 'm17'],
    role: 'director',
  },
  {
    id: 'p4',
    name: 'Wong Kar-wai',
    photo: portrait('photo-1500648767791-00dcc994a43e'),
    nationality: 'Hong Kongnese',
    bio: "Wong Kar-wai is a Hong Kong auteur whose films dissolve the line between memory and longing. His impressionistic style — saturated colors, slow motion, displaced timelines — creates an ache that's entirely his own.",
    movieIdsActed: [],
    movieIdsDirected: ['m9', 'm10', 'm13', 'm20'],
    role: 'director',
  },
  {
    id: 'p5',
    name: 'Céline Sciamma',
    photo: portrait('photo-1438761681033-6461ffad8d80'),
    nationality: 'French',
    bio: 'Céline Sciamma is a French filmmaker whose intimate portraits of women and girlhood carry a quiet revolutionary charge. Her cinema is precise, sensorial, and suffused with restrained desire.',
    movieIdsActed: [],
    movieIdsDirected: ['m11', 'm12', 'm18'],
    role: 'director',
  },
  {
    id: 'p6',
    name: 'Ryan Gosling',
    photo: portrait('photo-1472099645785-5658abf4ff4e'),
    nationality: 'Canadian',
    bio: "Ryan Gosling brings a uniquely internalized stillness to every role — his silences speak as loudly as dialogue. Whether playing a neon-bathed getaway driver or a replicant questioning his humanity, he's never less than fully present.",
    movieIdsActed: ['m1', 'm6', 'm13'],
    movieIdsDirected: [],
    role: 'actor',
  },
  {
    id: 'p7',
    name: 'Cate Blanchett',
    photo: portrait('photo-1544005313-94ddf0286df2'),
    nationality: 'Australian',
    bio: "Cate Blanchett is one of cinema's great chameleons — she disappears into roles with a technical precision that never feels mechanical. Her presence transforms every scene she inhabits.",
    movieIdsActed: ['m2', 'm14'],
    movieIdsDirected: [],
    role: 'actor',
  },
  {
    id: 'p8',
    name: 'Timothée Chalamet',
    photo: portrait('photo-1519085360753-af0119f7cbe7'),
    nationality: 'American',
    bio: "Timothée Chalamet carries an unusual gravity for his age — a quality of deep interiority that registers effortlessly on screen. His vulnerability is his instrument, and he plays it with remarkable precision.",
    movieIdsActed: ['m3', 'm4'],
    movieIdsDirected: [],
    role: 'actor',
  },
  {
    id: 'p9',
    name: 'Song Kang-ho',
    photo: portrait('photo-1507003211169-0a1dd7228f2d'),
    nationality: 'South Korean',
    bio: "Song Kang-ho is South Korean cinema's finest everyman — his face a map of ordinary dignity ground down by circumstance. He anchors Bong Joon-ho's films with an earthy authenticity that makes their satirical sting all the more painful.",
    movieIdsActed: ['m7', 'm8'],
    movieIdsDirected: [],
    role: 'actor',
  },
  {
    id: 'p10',
    name: 'Joaquin Phoenix',
    photo: portrait('photo-1463453091185-61582044d556'),
    nationality: 'American',
    bio: "Joaquin Phoenix commits to roles with an alarming totality, remaking his body and psyche to inhabit each character fully. There is always a trembling authenticity beneath his performances — something raw and genuinely dangerous.",
    movieIdsActed: ['m15', 'm16'],
    movieIdsDirected: [],
    role: 'actor',
  },
  {
    id: 'p11',
    name: 'Adèle Haenel',
    photo: portrait('photo-1573496359142-b8d87734a5a2'),
    nationality: 'French',
    bio: 'Adèle Haenel is a force of concentrated fury and tenderness. Her work in Portrait of a Lady on Fire redefined screen presence — every glance weighted with entire histories.',
    movieIdsActed: ['m11'],
    movieIdsDirected: [],
    role: 'actor',
  },
  {
    id: 'p12',
    name: 'Mahershala Ali',
    photo: portrait('photo-1504257432389-52343af06ae3'),
    nationality: 'American',
    bio: 'Mahershala Ali speaks eloquently with restraint. His stillness carries tremendous emotional weight, and he has a rare ability to convey complex interiority without dialogue.',
    movieIdsActed: ['m17', 'm18'],
    movieIdsDirected: [],
    role: 'actor',
  },
]

export const MOVIES = [
  {
    id: 'm1',
    title: 'Blade Runner 2049',
    year: 2017,
    rating: 8.0,
    genres: ['Sci-Fi', 'Drama', 'Thriller'],
    posterUrl: img('photo-1536440136628-849c177e76a1'),
    synopsis: "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years. A meditation on identity, memory, and what it means to be human.",
    directorId: 'p1',
    castIds: ['p6'],
    trailerUrl: 'https://www.youtube.com/watch?v=gCcx85zbxz4',
    trending: true,
    duration: '2h 44m',
    country: 'USA / Canada',
  },
  {
    id: 'm2',
    title: 'Arrival',
    year: 2016,
    rating: 7.9,
    genres: ['Sci-Fi', 'Drama', 'Mystery'],
    posterUrl: img('photo-1462331940025-496dfbfc7564'),
    synopsis: 'When mysterious spacecraft touch down across the globe, an elite team — including a linguist — is assembled to investigate. As humanity teeters on the verge of global war, she makes a choice that will change everything.',
    directorId: 'p1',
    castIds: ['p7'],
    trailerUrl: 'https://www.youtube.com/watch?v=tFMo3UJ4B4g',
    trending: false,
    duration: '1h 56m',
    country: 'USA',
  },
  {
    id: 'm3',
    title: 'Dune: Part One',
    year: 2021,
    rating: 8.0,
    genres: ['Sci-Fi', 'Adventure', 'Drama'],
    posterUrl: img('photo-1509316785289-025f5b846b35'),
    synopsis: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset, a desert planet that is the only source of the most precious substance in existence.",
    directorId: 'p1',
    castIds: ['p8'],
    trailerUrl: 'https://www.youtube.com/watch?v=8g18jFHCLXk',
    trending: true,
    duration: '2h 35m',
    country: 'USA',
  },
  {
    id: 'm4',
    title: 'Dune: Part Two',
    year: 2024,
    rating: 8.5,
    genres: ['Sci-Fi', 'Adventure', 'Action'],
    posterUrl: img('photo-1547826039-a929f7a74e38'),
    synopsis: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a momentous choice between the love of his life and the fate of the known universe.',
    directorId: 'p1',
    castIds: ['p8'],
    trailerUrl: 'https://www.youtube.com/watch?v=Way9Dexny3w',
    trending: true,
    duration: '2h 46m',
    country: 'USA',
  },
  {
    id: 'm5',
    title: 'Interstellar',
    year: 2014,
    rating: 8.6,
    genres: ['Sci-Fi', 'Adventure', 'Drama'],
    posterUrl: img('photo-1506905925346-21bda4d32df4'),
    synopsis: "When Earth becomes uninhabitable, a team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival. A profound examination of time, love, and sacrifice.",
    directorId: 'p2',
    castIds: ['p12'],
    trailerUrl: 'https://www.youtube.com/watch?v=zSWdZVtXT7E',
    trending: false,
    duration: '2h 49m',
    country: 'USA / UK',
  },
  {
    id: 'm6',
    title: 'Inception',
    year: 2010,
    rating: 8.8,
    genres: ['Sci-Fi', 'Action', 'Thriller'],
    posterUrl: img('photo-1572283046480-e990be92d301'),
    synopsis: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O. But his real mission lies buried in the deepest layer of his own subconscious.',
    directorId: 'p2',
    castIds: ['p6'],
    trailerUrl: 'https://www.youtube.com/watch?v=YoHD9XEInc0',
    trending: true,
    duration: '2h 28m',
    country: 'USA / UK',
  },
  {
    id: 'm7',
    title: 'Parasite',
    year: 2019,
    rating: 8.5,
    genres: ['Thriller', 'Drama', 'Comedy'],
    posterUrl: img('photo-1636056472094-05ff961fc6a4'),
    synopsis: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan. A genre-exploding masterwork of social horror.",
    directorId: 'p3',
    castIds: ['p9'],
    trailerUrl: 'https://www.youtube.com/watch?v=5xH0HfJHsaY',
    trending: true,
    duration: '2h 12m',
    country: 'South Korea',
  },
  {
    id: 'm8',
    title: 'Memories of Murder',
    year: 2003,
    rating: 8.1,
    genres: ['Crime', 'Drama', 'Mystery', 'Thriller'],
    posterUrl: img('photo-1722131073730-0b2bd13c9bff'),
    synopsis: "In 1986, two detectives struggle with a series of brutal murders in the Korean countryside. Based on Korea's first serial murders, a haunting procedural about the limits of certainty and the weight of unresolved guilt.",
    directorId: 'p3',
    castIds: ['p9'],
    trending: false,
    duration: '2h 11m',
    country: 'South Korea',
  },
  {
    id: 'm9',
    title: 'In the Mood for Love',
    year: 2000,
    rating: 8.1,
    genres: ['Drama', 'Romance'],
    posterUrl: img('photo-1555993539-1732b0258235'),
    synopsis: "Two neighbors form a strong bond after both suspect their spouses of having an affair. A ravishing study in proximity, longing, and the unbearable weight of restraint, told through color, light, and slow-motion.",
    directorId: 'p4',
    castIds: ['p11'],
    trending: false,
    duration: '1h 38m',
    country: 'Hong Kong / France',
  },
  {
    id: 'm10',
    title: 'Chungking Express',
    year: 1994,
    rating: 8.0,
    genres: ['Drama', 'Romance', 'Comedy'],
    posterUrl: img('photo-1700257992019-0cd5995be606'),
    synopsis: 'Two melancholic Hong Kong policemen fall in love — one with a mysterious female drug smuggler, the other with a wistful lunch-bar waitress. Fragmented, effervescent, and achingly alive.',
    directorId: 'p4',
    castIds: [],
    trending: false,
    duration: '1h 42m',
    country: 'Hong Kong',
  },
  {
    id: 'm11',
    title: 'Portrait of a Lady on Fire',
    year: 2019,
    rating: 8.1,
    genres: ['Drama', 'Romance'],
    posterUrl: img('photo-1636056471685-1cfdfa9d2e4b'),
    synopsis: 'On an isolated island in Brittany at the end of the eighteenth century, a female painter is commissioned to do a wedding portrait of a young woman. A sublime meditation on art, gaze, and desire.',
    directorId: 'p5',
    castIds: ['p11'],
    trailerUrl: 'https://www.youtube.com/watch?v=jl4hFBbcPCg',
    trending: false,
    duration: '2h 2m',
    country: 'France',
  },
  {
    id: 'm12',
    title: 'Petite Maman',
    year: 2021,
    rating: 7.4,
    genres: ['Drama', 'Romance'],
    posterUrl: img('photo-1470813740244-df2b434a0629'),
    synopsis: "Shortly after the death of her grandmother, eight-year-old Nelly meets a girl her age in the woods who happens to be building a treehouse. A gentle time-loop fable about grief, inheritance, and the children our parents once were.",
    directorId: 'p5',
    castIds: [],
    trending: false,
    duration: '1h 12m',
    country: 'France',
  },
  {
    id: 'm13',
    title: 'Drive',
    year: 2011,
    rating: 7.8,
    genres: ['Crime', 'Drama', 'Thriller'],
    posterUrl: img('photo-1519501025264-65ba15a82390'),
    synopsis: "A mysterious Hollywood stunt performer moonlights as a getaway driver. His existence is defined by silence and speed — until a single night of violence shatters everything he has kept at arm's length.",
    directorId: 'p4',
    castIds: ['p6'],
    trailerUrl: 'https://www.youtube.com/watch?v=4PEeAVdNkEY',
    trending: false,
    duration: '1h 40m',
    country: 'USA',
  },
  {
    id: 'm14',
    title: 'Tár',
    year: 2022,
    rating: 7.5,
    genres: ['Drama', 'Mystery'],
    posterUrl: img('photo-1480714378702-e2d72f6f7f0a'),
    synopsis: "Set in the world of classical music, Lydia Tár — the first-ever female chief conductor of a major German orchestra — is at the height of her career. A portrait of power, identity, and the archaeology of a fall.",
    directorId: 'p2',
    castIds: ['p7'],
    trending: true,
    duration: '2h 38m',
    country: 'USA / Germany',
  },
  {
    id: 'm15',
    title: 'Joker',
    year: 2019,
    rating: 8.4,
    genres: ['Crime', 'Drama', 'Thriller'],
    posterUrl: img('photo-1674760761492-282f4554242b'),
    synopsis: 'In Gotham City, mentally troubled comedian Arthur Fleck embarks on a downward spiral of revolution and bloody crime. A grimy, uncomfortable portrait of a man abandoned by every system that should have caught him.',
    directorId: 'p3',
    castIds: ['p10'],
    trailerUrl: 'https://www.youtube.com/watch?v=zAGVQLHvwOY',
    trending: false,
    duration: '2h 2m',
    country: 'USA',
  },
  {
    id: 'm16',
    title: 'The Master',
    year: 2012,
    rating: 7.9,
    genres: ['Drama'],
    posterUrl: img('photo-1493676304819-0d7a8d026dcf'),
    synopsis: 'A Naval veteran arrives home from war unsettled and uncertain of his future — until he is tantalized by The Cause and its charismatic leader. An elliptical masterwork on belonging, masculinity, and intoxicating belief.',
    directorId: 'p2',
    castIds: ['p10'],
    trending: false,
    duration: '2h 17m',
    country: 'USA',
  },
  {
    id: 'm17',
    title: 'Moonlight',
    year: 2016,
    rating: 7.4,
    genres: ['Drama', 'Romance'],
    posterUrl: img('photo-1448375240586-882707db888b'),
    synopsis: "A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood. Three chapters, one life, immeasurable tenderness.",
    directorId: 'p3',
    castIds: ['p12'],
    trailerUrl: 'https://www.youtube.com/watch?v=9NJj12tJzqc',
    trending: false,
    duration: '1h 51m',
    country: 'USA',
  },
  {
    id: 'm18',
    title: 'True Detective: Night Country',
    year: 2024,
    rating: 7.9,
    genres: ['Crime', 'Mystery', 'Horror', 'Thriller'],
    posterUrl: img('photo-1743431267979-43ace055f121'),
    synopsis: 'When the long winter night falls in Ennis, Alaska, six men from the local research station mysteriously disappear. Two detectives must confront the darkness at the edge of the world and unlock the haunting secrets buried there.',
    directorId: 'p5',
    castIds: ['p12'],
    trending: true,
    duration: '6 episodes',
    country: 'USA',
  },
  {
    id: 'm19',
    title: 'No Country for Old Men',
    year: 2007,
    rating: 8.1,
    genres: ['Crime', 'Drama', 'Thriller'],
    posterUrl: img('photo-1559827291-72ebba942a3b'),
    synopsis: 'Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande. Anton Chigurh stalks the landscape like fate itself — implacable, mechanical, inevitable.',
    directorId: 'p2',
    castIds: [],
    trending: false,
    duration: '2h 2m',
    country: 'USA',
  },
  {
    id: 'm20',
    title: 'Mad Max: Fury Road',
    year: 2015,
    rating: 8.1,
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    posterUrl: img('photo-1574375927938-b00b23ae1ef1'),
    synopsis: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max. Pure cinema — nothing wasted, everything earned.",
    directorId: 'p4',
    castIds: [],
    trending: true,
    duration: '2h',
    country: 'Australia / USA',
  },
]

export function filterMovies(query = {}) {
  let results = [...MOVIES]

  if (query.search && query.search.trim()) {
    const term = query.search.toLowerCase()
    results = results.filter(
      (m) =>
        m.title.toLowerCase().includes(term) ||
        m.genres.some((g) => g.toLowerCase().includes(term))
    )
  }

  if (query.genres && query.genres.length > 0) {
    results = results.filter((m) =>
      query.genres.some((g) => m.genres.includes(g))
    )
  }

  if (query.minRating != null && query.minRating > 0) {
    results = results.filter((m) => m.rating >= query.minRating)
  }

  if (query.trending) {
    results = results.filter((m) => m.trending)
  }

  return results
}

export async function fetchMovies(query = {}) {
  await delay(400)

  const page = query.page ?? 1
  const perPage = query.perPage ?? 6
  const filtered = filterMovies(query)
  const start = (page - 1) * perPage
  const end = start + perPage
  const movies = filtered.slice(start, end)

  return {
    movies,
    totalCount: filtered.length,
    hasMore: end < filtered.length,
    page,
  }
}

export async function fetchMovieById(id) {
  await delay(300)
  return MOVIES.find((m) => m.id === id) ?? null
}

export async function fetchPersonById(id) {
  await delay(300)
  return PEOPLE.find((p) => p.id === id) ?? null
}

export function getMoviesByIds(ids) {
  return ids.map((id) => MOVIES.find((m) => m.id === id)).filter(Boolean)
}

export function getPersonById(id) {
  return PEOPLE.find((p) => p.id === id)
}

export function getMovieById(id) {
  return MOVIES.find((m) => m.id === id)
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}