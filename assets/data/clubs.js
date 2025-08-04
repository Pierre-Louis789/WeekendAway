const clubs = [
  {
    club: "Arsenal",
    league: "Premier League",
    country: "England",
    city: "London",
    stadium: {
      name: "Emirates Stadium",
      capacity: 60260,
      tourAvailable: true,
      tourLink: "/bookings.html?club=arsenal&type=tour"
    },
    image: "arsenal.jpg",
    description: "Founded in 1886, Arsenal is one of England’s most decorated clubs. Known for its attacking style and loyal fanbase, the Emirates Stadium offers a sleek matchday experience.",
    fanZone: [
      {
        name: "The Tollington Arms",
        description: "Classic pre-match pub with live screens and Gooner vibes.",
        link: "https://www.thetollingtonarms.co.uk/"
      },
      {
        name: "The Twelve Pins",
        description: "Lively spot near Finsbury Park station, packed on matchdays.",
        link: "https://www.twelvepins.co.uk/"
      }
    ],
    transport: {
      nearestStation: "Arsenal (Piccadilly Line)",
      planner: "https://tfl.gov.uk/plan-a-journey/"
    },
    attractions: [
      {
        name: "Camden Market",
        type: "Shopping & Food",
        link: "https://www.camdenmarket.com/"
      },
      {
        name: "British Museum",
        type: "Culture",
        link: "https://www.britishmuseum.org/"
      }
    ],
    affiliate: {
      tickets: "/bookings.html?club=arsenal&type=tickets",
      hotels: "/bookings.html?club=arsenal&type=hotels",
      flights: "/bookings.html?club=arsenal&type=flights"
    },
    newsFeed: [
      {
        title: "Arsenal sign new striker ahead of season opener",
        source: "BBC Sport",
        link: "https://www.bbc.co.uk/sport/football/arsenal-transfer"
      },
      {
        title: "Emirates Stadium upgrades fan zones",
        source: "Sky Sports",
        link: "https://www.skysports.com/football/news/arsenal-fan-zone"
      }
    ]
  },

  {
    club: "Manchester City",
    league: "Premier League",
    country: "England",
    city: "Manchester",
    stadium: {
      name: "Etihad Stadium",
      capacity: 55017,
      tourAvailable: true,
      tourLink: "/bookings.html?club=manchester-city&type=tour"
    },
    image: "manchester-city.jpg",
    description: "The reigning champions, Manchester City have dominated English football in recent years. The Etihad offers a high-tech stadium experience and world-class football.",
    fanZone: [
      {
        name: "Mary D's Beamish Bar",
        description: "Legendary City pub with pre-match buzz and blue decor.",
        link: "https://www.facebook.com/marydsbar/"
      }
    ],
    transport: {
      nearestStation: "Etihad Campus (Metrolink)",
      planner: "https://tfgm.com/"
    },
    attractions: [
      {
        name: "National Football Museum",
        type: "Culture",
        link: "https://www.nationalfootballmuseum.com/"
      },
      {
        name: "Northern Quarter",
        type: "Food & Nightlife",
        link: "https://www.visitmanchester.com/"
      }
    ],
    affiliate: {
      tickets: "/bookings.html?club=manchester-city&type=tickets",
      hotels: "/bookings.html?club=manchester-city&type=hotels",
      flights: "/bookings.html?club=manchester-city&type=flights"
    },
    newsFeed: [
      {
        title: "City unveil new kit with tribute to Manchester music scene",
        source: "The Guardian",
        link: "https://www.theguardian.com/football/manchester-city-kit-launch"
      }
    ]
  },
  
 {
    club: "Liverpool",
    league: "Premier League",
    country: "England",
    city: "Liverpool",
    stadium: {
      name: "Anfield",
      capacity: 54074,
      tourAvailable: true,
      tourLink: "/bookings.html?club=liverpool&type=tour"
    },
    image: "liverpool.jpg",
    description: "Anfield is home to one of the most passionate fanbases in world football. The famous Kop and club anthem 'You'll Never Walk Alone' make matchdays unforgettable.",
    fanZone: [
      {
        name: "The Sandon",
        description: "Historic pub where Liverpool FC was founded.",
        link: "https://www.thesandon.com/"
      }
    ],
    transport: {
      nearestStation: "Liverpool Lime Street",
      planner: "https://www.merseytravel.gov.uk/"
    },
    attractions: [
      {
        name: "The Beatles Story",
        type: "Culture",
        link: "https://www.beatlesstory.com/"
      },
      {
        name: "Albert Dock",
        type: "Food & Shopping",
        link: "https://www.albertdock.com/"
      }
    ],
    affiliate: {
      tickets: "/bookings.html?club=liverpool&type=tickets",
      hotels: "/bookings.html?club=liverpool&type=hotels",
      flights: "/bookings.html?club=liverpool&type=flights"
    },
    newsFeed: [
      {
        title: "Liverpool announce pre-season tour dates",
        source: "ESPN",
        link: "https://www.espn.com/soccer/liverpool-tour"
      }
    ]
  },

{  // ← Now this object is correctly separated
  club: "Brighton & Hove Albion",
  league: "Premier League",
  country: "England",
  city: "Brighton",
  stadium: {
    name: "Amex Stadium",
    capacity: 31800,
    tourAvailable: true,
    tourLink: "/bookings.html?club=brighton&type=tour"
  },
  image: "brighton.jpg",
  description: "Brighton’s rise to Premier League prominence has been marked by smart recruitment and stylish football. The Amex offers a modern seaside matchday experience.",
  fanZone: [
    {
      name: "The Swan Inn",
      description: "Popular with Seagulls fans, just a short walk from the stadium.",
      link: "https://www.swaninnbrighton.co.uk/"
    }
  ],
  transport: {
    nearestStation: "Falmer",
    planner: "https://www.nationalrail.co.uk/"
  },
  attractions: [
    {
      name: "Brighton Pier",
      type: "Seaside Fun",
      link: "https://www.brightonpier.co.uk/"
    },
    {
      name: "Royal Pavilion",
      type: "Historic Site",
      link: "https://brightonmuseums.org.uk/royalpavilion/"
    }
  ],
  affiliate: {
    tickets: "/bookings.html?club=brighton&type=tickets",
    hotels: "/bookings.html?club=brighton&type=hotels",
    flights: "/bookings.html?club=brighton&type=flights"
  },
  newsFeed: [
    {
      title: "Brighton unveil new youth academy plans",
      source: "BBC Sport",
      link: "https://www.bbc.co.uk/sport/football/brighton-academy"
    }
  ]
},

{
  club: "Chelsea",
  league: "Premier League",
  country: "England",
  city: "London",
  stadium: {
    name: "Stamford Bridge",
    capacity: 40343,
    tourAvailable: true,
    tourLink: "/bookings.html?club=chelsea&type=tour"
  },
  image: "chelsea.jpg",
  description: "Chelsea boasts a rich history and a cabinet full of silverware. Stamford Bridge is a classic London ground with modern touches and a global fanbase.",
  fanZone: [
    {
      name: "The Butcher’s Hook",
      description: "Historic pub where Chelsea FC was founded in 1905.",
      link: "https://www.thebutchershook.co.uk/"
    }
  ],
  transport: {
    nearestStation: "Fulham Broadway",
    planner: "https://tfl.gov.uk/"
  },
  attractions: [
    {
      name: "Natural History Museum",
      type: "Culture",
      link: "https://www.nhm.ac.uk/"
    },
    {
      name: "King's Road",
      type: "Shopping",
      link: "https://www.kingsroad.co.uk/"
    }
  ],
  affiliate: {
    tickets: "/bookings.html?club=chelsea&type=tickets",
    hotels: "/bookings.html?club=chelsea&type=hotels",
    flights: "/bookings.html?club=chelsea&type=flights"
  },
  newsFeed: [
    {
      title: "Chelsea sign promising midfielder from Ligue 1",
      source: "Sky Sports",
      link: "https://www.skysports.com/football/news/chelsea-transfer"
    }
  ]
},

{
  club: "Crystal Palace",
  league: "Premier League",
  country: "England",
  city: "London",
  stadium: {
    name: "Selhurst Park",
    capacity: 25486,
    tourAvailable: false,
    tourLink: null
  },
  image: "crystal-palace.jpg",
  description: "Known for its vibrant fanbase and gritty performances, Crystal Palace brings South London pride to the Premier League.",
  fanZone: [
    {
      name: "The Clifton Arms",
      description: "Local pub buzzing with Palace fans on matchdays.",
      link: "https://www.facebook.com/TheCliftonArms/"
    }
  ],
  transport: {
    nearestStation: "Selhurst",
    planner: "https://tfl.gov.uk/"
  },
  attractions: [
    {
      name: "Crystal Palace Park",
      type: "Nature & History",
      link: "https://www.crystalpalacepark.org.uk/"
    }
  ],
  affiliate: {
    tickets: "/bookings.html?club=crystal-palace&type=tickets",
    hotels: "/bookings.html?club=crystal-palace&type=hotels",
    flights: "/bookings.html?club=crystal-palace&type=flights"
  },
  newsFeed: [
    {
      title: "Palace confirm new stand development",
      source: "The Guardian",
      link: "https://www.theguardian.com/football/crystal-palace-stadium"
    }
  ]
},

{
  club: "Everton",
  league: "Premier League",
  country: "England",
  city: "Liverpool",
  stadium: {
    name: "Goodison Park",
    capacity: 39414,
    tourAvailable: true,
    tourLink: "/bookings.html?club=everton&type=tour"
  },
  image: "everton.jpg",
  description: "One of England’s oldest clubs, Everton is steeped in tradition. Goodison Park offers an old-school football experience with passionate local support.",
  fanZone: [
    {
      name: "The Winslow Hotel",
      description: "Iconic Everton pub right next to Goodison Park.",
      link: "https://www.thewinslowhotel.co.uk/"
    }
  ],
  transport: {
    nearestStation: "Kirkdale",
    planner: "https://www.merseytravel.gov.uk/"
  },
  attractions: [
    {
      name: "Walker Art Gallery",
      type: "Culture",
      link: "https://www.liverpoolmuseums.org.uk/walker-art-gallery"
    }
  ],
  affiliate: {
    tickets: "/bookings.html?club=everton&type=tickets",
    hotels: "/bookings.html?club=everton&type=hotels",
    flights: "/bookings.html?club=everton&type=flights"
  },
  newsFeed: [
    {
      title: "Everton’s new stadium nears completion",
      source: "BBC Sport",
      link: "https://www.bbc.co.uk/sport/football/everton-stadium"
    }
  ]
},

{
  club: "Fulham",
  league: "Premier League",
  country: "England",
  city: "London",
  stadium: {
    name: "Craven Cottage",
    capacity: 25700,
    tourAvailable: true,
    tourLink: "/bookings.html?club=fulham&type=tour"
  },
  image: "fulham.jpg",
  description: "Nestled by the Thames, Craven Cottage is one of the most picturesque grounds in English football. Fulham blends charm with Premier League ambition.",
  fanZone: [
    {
      name: "The Crabtree",
      description: "Riverside pub with great food and Fulham fans.",
      link: "https://www.crabtreefulham.com/"
    }
  ],
  transport: {
    nearestStation: "Putney Bridge",
    planner: "https://tfl.gov.uk/"
  },
  attractions: [
    {
      name: "Bishop’s Park",
      type: "Nature",
      link: "https://www.lbhf.gov.uk/"
    }
  ],
  affiliate: {
    tickets: "/bookings.html?club=fulham&type=tickets",
    hotels: "/bookings.html?club=fulham&type=hotels",
    flights: "/bookings.html?club=fulham&type=flights"
  },
  newsFeed: [
    {
      title: "Fulham extend manager’s contract",
      source: "ESPN",
      link: "https://www.espn.com/soccer/fulham-manager"
    }
  ]
},

{
  club: "Burnley",
  league: "Premier League",
  country: "England",
  city: "Burnley",
  stadium: {
    name: "Turf Moor",
    capacity: 21944,
    tourAvailable: true,
    tourLink: "/bookings.html?club=burnley&type=tour"
  },
  image: "burnley.jpg",
  description: "Burnley returns to the top flight with a mix of tradition and tactical evolution. Turf Moor is one of the oldest stadiums still in use, offering a gritty matchday atmosphere.",
  fanZone: [
    {
      name: "The Royal Dyche",
      description: "Fan-favourite pub named after former manager Sean Dyche.",
      link: "https://www.facebook.com/TheRoyalDyche/"
    }
  ],
  transport: {
    nearestStation: "Burnley Manchester Road",
    planner: "https://www.nationalrail.co.uk/"
  },
  attractions: [
    {
      name: "Towneley Hall",
      type: "Historic Estate",
      link: "https://towneley.org.uk/"
    }
  ],
  affiliate: {
    tickets: "/bookings.html?club=burnley&type=tickets",
    hotels: "/bookings.html?club=burnley&type=hotels",
    flights: "/bookings.html?club=burnley&type=flights"
  },
  newsFeed: [
    {
      title: "Burnley secure Premier League return with final-day win",
      source: "BBC Sport",
      link: "https://www.bbc.co.uk/sport/football/burnley-promotion"
    }
  ]
},

{
  club: "Leeds United",
  league: "Premier League",
  country: "England",
  city: "Leeds",
  stadium: {
    name: "Elland Road",
    capacity: 37892,
    tourAvailable: true,
    tourLink: "/bookings.html?club=leeds-united&type=tour"
  },
  image: "leeds-united.jpg",
  description: "Leeds United returns to the Premier League with its passionate fanbase and attacking style. Elland Road is a fortress of Yorkshire pride.",
  fanZone: [
    {
      name: "The Old Peacock",
      description: "Historic pub opposite Elland Road, buzzing on matchdays.",
      link: "https://www.theoldpeacockleeds.co.uk/"
    }
  ],
  transport: {
    nearestStation: "Leeds",
    planner: "https://www.wymetro.com/"
  },
  attractions: [
    {
      name: "Royal Armouries Museum",
      type: "Culture",
      link: "https://royalarmouries.org/"
    }
  ],
  affiliate: {
    tickets: "/bookings.html?club=leeds-united&type=tickets",
    hotels: "/bookings.html?club=leeds-united&type=hotels",
    flights: "/bookings.html?club=leeds-united&type=flights"
  },
  newsFeed: [
    {
      title: "Leeds confirm new manager ahead of Premier League return",
      source: "Sky Sports",
      link: "https://www.skysports.com/football/news/leeds-united-manager"
    }
  ]
},

{
  club: "Sunderland",
  league: "Premier League",
  country: "England",
  city: "Sunderland",
  stadium: {
    name: "Stadium of Light",
    capacity: 49000,
    tourAvailable: true,
    tourLink: "/bookings.html?club=sunderland&type=tour"
  },
  image: "sunderland.jpg",
  description: "Sunderland’s return to the Premier League brings back one of the most loyal fanbases in English football. The Stadium of Light is a beacon of North East pride.",
  fanZone: [
    {
      name: "The Wheatsheaf",
      description: "Classic pub near the stadium with strong Black Cats support.",
      link: "https://www.facebook.com/TheWheatsheafSunderland/"
    }
  ],
  transport: {
    nearestStation: "Stadium of Light (Tyne & Wear Metro)",
    planner: "https://www.nexus.org.uk/"
  },
  attractions: [
    {
      name: "National Glass Centre",
      type: "Culture",
      link: "https://www.nationalglasscentre.com/"
    }
  ],
  affiliate: {
    tickets: "/bookings.html?club=sunderland&type=tickets",
    hotels: "/bookings.html?club=sunderland&type=hotels",
    flights: "/bookings.html?club=sunderland&type=flights"
  },
  newsFeed: [
    {
      title: "Sunderland seal promotion with playoff final win",
      source: "The Guardian",
      link: "https://www.theguardian.com/football/sunderland-promotion"
    }
  ]
},

{
  club: "Aston Villa",
  league: "Premier League",
  country: "England",
  city: "Birmingham",
  stadium: {
    name: "Villa Park",
    capacity: 42682,
    tourAvailable: true,
    tourLink: "/bookings.html?club=aston-villa&type=tour"
  },
  image: "aston-villa.jpg",
  description: "Aston Villa combines rich history with a modern resurgence. Villa Park is one of England’s classic stadiums, steeped in tradition and roaring with pride.",
  fanZone: [
    {
      name: "The Witton Arms",
      description: "Popular pre-match pub with Villa fans and live screens.",
      link: "https://www.facebook.com/TheWittonArms/"
    }
  ],
  transport: {
    nearestStation: "Witton",
    planner: "https://www.nationalrail.co.uk/"
  },
  attractions: [
    {
      name: "Cadbury World",
      type: "Family Fun",
      link: "https://www.cadburyworld.co.uk/"
    }
  ],
  affiliate: {
    tickets: "/bookings.html?club=aston-villa&type=tickets",
    hotels: "/bookings.html?club=aston-villa&type=hotels",
    flights: "/bookings.html?club=aston-villa&type=flights"
  },
  newsFeed: [
    {
      title: "Villa qualify for European competition",
      source: "BBC Sport",
      link: "https://www.bbc.co.uk/sport/football/aston-villa-europe"
    }
  ]
},

{
  club: "Bournemouth",
  league: "Premier League",
  country: "England",
  city: "Bournemouth",
  stadium: {
    name: "Vitality Stadium",
    capacity: 11329,
    tourAvailable: false,
    tourLink: null
  },
  image: "bournemouth.jpg",
  description: "Bournemouth’s compact stadium and coastal charm make for a unique Premier League experience. The Cherries punch above their weight with flair.",
  fanZone: [
    {
      name: "The Queens Park Hotel",
      description: "Local pub with matchday specials and fan banter.",
      link: "https://www.facebook.com/queensparkhotelbournemouth/"
    }
  ],
  transport: {
    nearestStation: "Pokesdown",
    planner: "https://www.nationalrail.co.uk/"
  },
  attractions: [
    {
      name: "Bournemouth Beach",
      type: "Seaside",
      link: "https://www.bournemouth.co.uk/"
    }
  ],
  affiliate: {
    tickets: "/bookings.html?club=bournemouth&type=tickets",
    hotels: "/bookings.html?club=bournemouth&type=hotels",
    flights: "/bookings.html?club=bournemouth&type=flights"
  },
  newsFeed: [
    {
      title: "Bournemouth announce stadium expansion plans",
      source: "Sky Sports",
      link: "https://www.skysports.com/football/news/bournemouth-stadium"
    }
  ]
},

{
  club: "Brentford",
  league: "Premier League",
  country: "England",
  city: "London",
  stadium: {
    name: "Gtech Community Stadium",
    capacity: 17250,
    tourAvailable: true,
    tourLink: "/bookings.html?club=brentford&type=tour"
  },
  image: "brentford.jpg",
  description: "Brentford’s data-driven rise to the Premier League has earned them respect and admiration. Their west London ground is modern and intimate.",
  fanZone: [
    {
      name: "The Griffin",
      description: "Classic Brentford pub with terrace and matchday buzz.",
      link: "https://www.facebook.com/TheGriffinBrentford/"
    }
  ],
  transport: {
    nearestStation: "Kew Bridge",
    planner: "https://tfl.gov.uk/"
  },
  attractions: [
    {
      name: "Kew Gardens",
      type: "Nature & Science",
      link: "https://www.kew.org/"
    }
  ],
  affiliate: {
    tickets: "/bookings.html?club=brentford&type=tickets",
    hotels: "/bookings.html?club=brentford&type=hotels",
    flights: "/bookings.html?club=brentford&type=flights"
  },
  newsFeed: [
    {
      title: "Brentford extend manager’s contract",
      source: "The Guardian",
      link: "https://www.theguardian.com/football/brentford-manager"
    }
  ]
},

{
  club: "Tottenham Hotspur",
  league: "Premier League",
  country: "England",
  city: "London",
  stadium: {
    name: "Tottenham Hotspur Stadium",
    capacity: 62850,
    tourAvailable: true,
    tourLink: "/bookings.html?club=tottenham&type=tour"
  },
  image: "tottenham.jpg",
  description: "Spurs’ state-of-the-art stadium is a Premier League marvel. With a rich history and modern ambition, Tottenham continues to chase silverware.",
  fanZone: [
    {
      name: "The Bricklayers Arms",
      description: "Lively pub near the stadium with Spurs chants and screens.",
      link: "https://www.facebook.com/bricklayersarmstottenham/"
    }
  ],
  transport: {
    nearestStation: "White Hart Lane",
    planner: "https://tfl.gov.uk/"
  },
  attractions: [
    {
      name: "Alexandra Palace",
      type: "Culture & Views",
      link: "https://www.alexandrapalace.com/"
    }
  ],
  affiliate: {
    tickets: "/bookings.html?club=tottenham&type=tickets",
    hotels: "/bookings.html?club=tottenham&type=hotels",
    flights: "/bookings.html?club=tottenham&type=flights"
  },
  newsFeed: [
    {
      title: "Tottenham unveil new training complex",
      source: "ESPN",
      link: "https://www.espn.com/soccer/tottenham-training"
    }
  ]
},

{
  club: "West Ham United",
  league: "Premier League",
  country: "England",
  city: "London",
  stadium: {
    name: "London Stadium",
    capacity: 62500,
    tourAvailable: true,
    tourLink: "/bookings.html?club=west-ham&type=tour"
  },
  image: "west-ham.jpg",
  description: "The Hammers play in the heart of East London at the London Stadium. With a loyal fanbase and European ambitions, West Ham is a club on the rise.",
  fanZone: [
    {
      name: "The Boleyn Tavern",
      description: "Historic pub with deep West Ham roots and matchday energy.",
      link: "https://www.boleyntavern.co.uk/"
    }
  ],
  transport: {
    nearestStation: "Stratford",
    planner: "https://tfl.gov.uk/"
  },
  attractions: [
    {
      name: "Queen Elizabeth Olympic Park",
      type: "Sport & Leisure",
      link: "https://www.queenelizabetholympicpark.co.uk/"
    }
  ],
  affiliate: {
    tickets: "/bookings.html?club=west-ham&type=tickets",
    hotels: "/bookings.html?club=west-ham&type=hotels",
    flights: "/bookings.html?club=west-ham&type=flights"
  },
  newsFeed: [
    {
      title: "West Ham sign new striker from La Liga",
      source: "BBC Sport",
      link: "https://www.bbc.co.uk/sport/football/west-ham-transfer"
    }
  ]
},

{
  club: "Wolverhampton Wanderers",
  league: "Premier League",
  country: "England",
  city: "Wolverhampton",
  stadium: {
    name: "Molineux Stadium",
    capacity: 31700,
    tourAvailable: true,
    tourLink: "/bookings.html?club=wolves&type=tour"
  },
  image: "wolves.jpg",
  description: "Wolves blend Portuguese flair with Midlands grit. Molineux is a fortress of gold and black, with a fanbase that lives and breathes football.",
  fanZone: [
    {
      name: "The Great Western",
      description: "Classic Wolves pub with real ales and terrace seating.",
      link: "https://www.facebook.com/TheGreatWesternWolves/"
    }
  ],
  transport: {
    nearestStation: "Wolverhampton",
    planner: "https://www.wmnetwork.co.uk/"
  },
  attractions: [
    {
      name: "Wightwick Manor",
      type: "Arts & Heritage",
      link: "https://www.nationaltrust.org.uk/visit/shropshire-staffordshire/wightwick-manor-and-gardens"
    }
  ],
  affiliate: {
    tickets: "/bookings.html?club=wolves&type=tickets",
    hotels: "/bookings.html?club=wolves&type=hotels",
    flights: "/bookings.html?club=wolves&type=flights"
  },
  newsFeed: [
  {
    title: "Wolves confirm new head coach ahead of pre-season tour",
    source: "BBC Sport",
    link: "https://www.bbc.co.uk/sport/football/wolves-coach"
  }
]
},
  //Championships Teams ...
  {
    club: "Leicester City",
    league: "Championship",
    city: "Leicester",
    stadium: "King Power Stadium",
    tour: true,
    fanZonePub: "The Local Hero",
    transport: "Leicester Station + matchday shuttle",
    attractions: ["National Space Centre", "Abbey Park"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho123456/leicester-hotel",
      tickets: "https://ticketmaster.co.uk/leicester-city"
    },
    newsFeed: []
  },
  {
    club: "Southampton",
    league: "Championship",
    city: "Southampton",
    stadium: "St Mary's Stadium",
    tour: true,
    fanZonePub: "The Rockstone",
    transport: "Southampton Central + walk",
    attractions: ["SeaCity Museum", "Titanic Trail"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho234567/southampton-hotel",
      tickets: "https://ticketmaster.co.uk/southampton"
    },
    newsFeed: []
  },
  {
    club: "Ipswich Town",
    league: "Championship",
    city: "Ipswich",
    stadium: "Portman Road",
    tour: true,
    fanZonePub: "The Dove Street Inn",
    transport: "Ipswich Station + walk",
    attractions: ["Christchurch Park", "Waterfront Marina"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho345678/ipswich-hotel",
      tickets: "https://ticketmaster.co.uk/ipswich-town"
    },
    newsFeed: []
  },
  {
    club: "Birmingham City",
    league: "Championship",
    city: "Birmingham",
    stadium: "St Andrew's",
    tour: true,
    fanZonePub: "The Roost",
    transport: "Birmingham Moor Street + bus",
    attractions: ["Cadbury World", "Bullring"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho456789/birmingham-hotel",
      tickets: "https://ticketmaster.co.uk/birmingham-city"
    },
    newsFeed: []
  },
  {
    name: "Wrexham",
    league: "Championship",
    city: "Wrexham",
    stadium: "Racecourse Ground",
    tour: true,
    fanZonePub: "The Fat Boar",
    transport: "Wrexham General + walk",
    attractions: ["Pontcysyllte Aqueduct", "Erddig Hall"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho567890/wrexham-hotel",
      tickets: "https://ticketmaster.co.uk/wrexham"
    },
    newsFeed: []
  },
  {
    name: "Charlton Athletic",
    league: "Championship",
    city: "London",
    stadium: "The Valley",
    tour: true,
    fanZonePub: "The Rose of Denmark",
    transport: "Charlton Station + walk",
    attractions: ["Greenwich Park", "O2 Arena"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho678901/charlton-hotel",
      tickets: "https://ticketmaster.co.uk/charlton-athletic"
    },
    newsFeed: []
  },
  {
    name: "Blackburn Rovers",
    league: "Championship",
    city: "Blackburn",
    stadium: "Ewood Park",
    tour: true,
    fanZonePub: "The Golden Cup",
    transport: "Blackburn Station + bus",
    attractions: ["Blackburn Cathedral", "Witton Country Park"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho789012/blackburn-hotel",
      tickets: "https://ticketmaster.co.uk/blackburn-rovers"
    },
    newsFeed: []
  },
  {
    name: "Bristol City",
    league: "Championship",
    city: "Bristol",
    stadium: "Ashton Gate",
    tour: true,
    fanZonePub: "The Tobacco Factory",
    transport: "Bristol Temple Meads + bus",
    attractions: ["SS Great Britain", "Harbourside"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho890123/bristol-hotel",
      tickets: "https://ticketmaster.co.uk/bristol-city"
    },
    newsFeed: []
  },
  {
    name: "Coventry City",
    league: "Championship",
    city: "Coventry",
    stadium: "Coventry Building Society Arena",
    tour: true,
    fanZonePub: "The Aardvark",
    transport: "Coventry Station + tram",
    attractions: ["Coventry Cathedral", "Transport Museum"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho901234/coventry-hotel",
      tickets: "https://ticketmaster.co.uk/coventry-city"
    },
    newsFeed: []
  },
  {
    name: "Derby County",
    league: "Championship",
    city: "Derby",
    stadium: "Pride Park",
    tour: true,
    fanZonePub: "The Brunswick Inn",
    transport: "Derby Station + walk",
    attractions: ["Derby Museum", "Markeaton Park"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho012345/derby-hotel",
      tickets: "https://ticketmaster.co.uk/derby-county"
    },
    newsFeed: []
  },
  {
    name: "Hull City",
    league: "Championship",
    city: "Hull",
    stadium: "MKM Stadium",
    tour: true,
    fanZonePub: "The Whalebone",
    transport: "Hull Paragon + bus",
    attractions: ["The Deep", "Old Town"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho123456/hull-hotel",
      tickets: "https://ticketmaster.co.uk/hull-city"
    },
    newsFeed: []
  },

  {
    name: "Middlesbrough",
    league: "Championship",
    city: "Middlesbrough",
    stadium: "Riverside Stadium",
    tour: true,
    fanZonePub: "The Dickens Inn",
    transport: "Middlesbrough Station + walk",
    attractions: ["Transporter Bridge", "Dorman Museum"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho234567/middlesbrough-hotel",
      tickets: "https://ticketmaster.co.uk/middlesbrough"
    },
    newsFeed: []
  },
  {
    name: "Norwich City",
    league: "Championship",
    city: "Norwich",
    stadium: "Carrow Road",
    tour: true,
    fanZonePub: "The Coach & Horses",
    transport: "Norwich Station + walk",
    attractions: ["Norwich Castle", "Elm Hill"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho345678/norwich-hotel",
      tickets: "https://ticketmaster.co.uk/norwich-city"
    },
    newsFeed: []
  },
  {
    name: "Preston North End",
    league: "Championship",
    city: "Preston",
    stadium: "Deepdale",
    tour: true,
    fanZonePub: "The Moorbrook",
    transport: "Preston Station + bus",
    attractions: ["Avenham Park", "Harris Museum"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho456789/preston-hotel",
      tickets: "https://ticketmaster.co.uk/preston-north-end"
    },
    newsFeed: []
  },
  {
    name: "Queens Park Rangers",
    league: "Championship",
    city: "London",
    stadium: "Loftus Road",
    tour: true,
    fanZonePub: "The Crown & Sceptre",
    transport: "Shepherd's Bush Station + walk",
    attractions: ["Westfield London", "Holland Park"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho567890/qpr-hotel",
      tickets: "https://ticketmaster.co.uk/qpr"
    },
    newsFeed: []
  },
  {
    name: "Sheffield United",
    league: "Championship",
    city: "Sheffield",
    stadium: "Bramall Lane",
    tour: true,
    fanZonePub: "The Sheaf View",
    transport: "Sheffield Station + walk",
    attractions: ["Kelham Island", "Winter Garden"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho678901/sheffield-hotel",
      tickets: "https://ticketmaster.co.uk/sheffield-united"
    },
    newsFeed: []
  },
  {
    name: "Stoke City",
    league: "Championship",
    city: "Stoke-on-Trent",
    stadium: "bet365 Stadium",
    tour: true,
    fanZonePub: "The Terrace",
    transport: "Stoke Station + bus",
    attractions: ["Potteries Museum", "Trentham Gardens"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho789012/stoke-hotel",
      tickets: "https://ticketmaster.co.uk/stoke-city"
    },
    newsFeed: []
  },
  {
    name: "Sunderland",
    league: "Championship",
    city: "Sunderland",
    stadium: "Stadium of Light",
    tour: true,
    fanZonePub: "The Peacock",
    transport: "Sunderland Station + walk",
    attractions: ["Roker Beach", "National Glass Centre"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho890123/sunderland-hotel",
      tickets: "https://ticketmaster.co.uk/sunderland"
    },
    newsFeed: []
  },
  {
    name: "Swansea City",
    league: "Championship",
    city: "Swansea",
    stadium: "Swansea.com Stadium",
    tour: true,
    fanZonePub: "The Old Inn",
    transport: "Swansea Station + bus",
    attractions: ["Mumbles Pier", "National Waterfront Museum"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho901234/swansea-hotel",
      tickets: "https://ticketmaster.co.uk/swansea-city"
    },
    newsFeed: []
  },
  {
    name: "Watford",
    league: "Championship",
    city: "Watford",
    stadium: "Vicarage Road",
    tour: true,
    fanZonePub: "The Flag",
    transport: "Watford High Street + walk",
    attractions: ["Watford Museum", "Cassiobury Park"],
  },

  // ... Championship clubs above
  // ... La Liga Teams

  {
    name: "Real Madrid",
    league: "La Liga",
    city: "Madrid",
    stadium: "Santiago Bernabéu",
    tour: true,
    fanZonePub: "La Esquina del Bernabéu",
    transport: "Santiago Bernabéu Metro Station",
    attractions: ["Retiro Park", "Prado Museum"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho123456/madrid-hotel",
      tickets: "https://ticketmaster.es/real-madrid"
    },
    newsFeed: []
  },
  {
    name: "Barcelona",
    league: "La Liga",
    city: "Barcelona",
    stadium: "Spotify Camp Nou",
    tour: true,
    fanZonePub: "Futballarium",
    transport: "Collblanc Metro Station",
    attractions: ["Sagrada Família", "Barri Gòtic"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho234567/barcelona-hotel",
      tickets: "https://ticketmaster.es/fc-barcelona"
    },
    newsFeed: []
  },
  {
    name: "Atlético Madrid",
    league: "La Liga",
    city: "Madrid",
    stadium: "Cívitas Metropolitano",
    tour: true,
    fanZonePub: "La Gradona",
    transport: "Estadio Metropolitano Metro Station",
    attractions: ["Plaza Mayor", "Royal Palace"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho345678/madrid-hotel",
      tickets: "https://ticketmaster.es/atletico-madrid"
    },
    newsFeed: []
  },
  {
    name: "Real Sociedad",
    league: "La Liga",
    city: "San Sebastián",
    stadium: "Reale Arena",
    tour: true,
    fanZonePub: "Bar Txirrita",
    transport: "Anoeta Station",
    attractions: ["La Concha Beach", "Old Town"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho456789/sansebastian-hotel",
      tickets: "https://ticketmaster.es/real-sociedad"
    },
    newsFeed: []
  },
  {
    name: "Athletic Club",
    league: "La Liga",
    city: "Bilbao",
    stadium: "San Mamés",
    tour: true,
    fanZonePub: "La Campa de los Ingleses",
    transport: "San Mamés Metro Station",
    attractions: ["Guggenheim Museum", "Casco Viejo"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho567890/bilbao-hotel",
      tickets: "https://ticketmaster.es/athletic-club"
    },
    newsFeed: []
  },
  {
    name: "Valencia",
    league: "La Liga",
    city: "Valencia",
    stadium: "Mestalla",
    tour: true,
    fanZonePub: "Bar Mestalla",
    transport: "Aragón Metro Station",
    attractions: ["City of Arts and Sciences", "Turia Gardens"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho678901/valencia-hotel",
      tickets: "https://ticketmaster.es/valencia-cf"
    },
    newsFeed: []
  },
  {
    name: "Villarreal",
    league: "La Liga",
    city: "Villarreal",
    stadium: "Estadio de la Cerámica",
    tour: true,
    fanZonePub: "Bar El Madrigal",
    transport: "Villarreal Station + walk",
    attractions: ["El Termet", "Museo de la Ciudad"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho789012/villarreal-hotel",
      tickets: "https://ticketmaster.es/villarreal"
    },
    newsFeed: []
  },
  {
    name: "Sevilla",
    league: "La Liga",
    city: "Seville",
    stadium: "Ramón Sánchez-Pizjuán",
    tour: true,
    fanZonePub: "La Bodega",
    transport: "Nervión Metro Station",
    attractions: ["Alcázar", "Plaza de España"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho890123/seville-hotel",
      tickets: "https://ticketmaster.es/sevilla-fc"
    },
    newsFeed: []
  },
  {
    name: "Real Betis",
    league: "La Liga",
    city: "Seville",
    stadium: "Benito Villamarín",
    tour: true,
    fanZonePub: "Bar El Colmao",
    transport: "San Bernardo Station + tram",
    attractions: ["Metropol Parasol", "Triana District"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho901234/seville-hotel",
      tickets: "https://ticketmaster.es/real-betis"
    },
    newsFeed: []
  },
  {
    name: "Celta Vigo",
    league: "La Liga",
    city: "Vigo",
    stadium: "Abanca Balaídos",
    tour: true,
    fanZonePub: "Bar A Roda",
    transport: "Vigo-Urzáiz Station + bus",
    attractions: ["Castro Fortress", "Ría de Vigo"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho012345/vigo-hotel",
      tickets: "https://ticketmaster.es/celta-vigo"
    },
    newsFeed: []
  },
  {
    name: "Osasuna",
    league: "La Liga",
    city: "Pamplona",
    stadium: "El Sadar",
    tour: true,
    fanZonePub: "Bar La Grada",
    transport: "Pamplona Station + bus",
    attractions: ["Plaza del Castillo", "Citadel of Pamplona"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho123457/pamplona-hotel",
      tickets: "https://ticketmaster.es/osasuna"
    },
    newsFeed: []
  },
  {
    name: "Getafe",
    league: "La Liga",
    city: "Getafe",
    stadium: "Coliseum Alfonso Pérez",
    tour: true,
    fanZonePub: "Bar El Coliseo",
    transport: "Getafe Central + walk",
    attractions: ["Parque de la Alhóndiga", "Teatro Federico García Lorca"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho234568/getafe-hotel",
      tickets: "https://ticketmaster.es/getafe"
    },
    newsFeed: []
  },
  {
    name: "Rayo Vallecano",
    league: "La Liga",
    city: "Madrid",
    stadium: "Campo de Fútbol de Vallecas",
    tour: true,
    fanZonePub: "Bar El Rayo",
    transport: "Portazgo Metro Station",
    attractions: ["Vallecas Street Art", "Madrid Río"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho345679/madrid-hotel",
      tickets: "https://ticketmaster.es/rayo-vallecano"
    },
    newsFeed: []
  },
  {
    name: "Almería",
    league: "La Liga",
    city: "Almería",
    stadium: "Power Horse Stadium",
    tour: true,
    fanZonePub: "Bar La Tribuna",
    transport: "Almería Station + bus",
    attractions: ["Alcazaba of Almería", "Cabo de Gata"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho456780/almeria-hotel",
      tickets: "https://ticketmaster.es/almeria"
    },
    newsFeed: []
  },
  {
    name: "Granada",
    league: "La Liga",
    city: "Granada",
    stadium: "Nuevo Estadio de Los Cármenes",
    tour: true,
    fanZonePub: "Bar Los Cármenes",
    transport: "Granada Station + tram",
    attractions: ["Alhambra", "Mirador de San Nicolás"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho567891/granada-hotel",
      tickets: "https://ticketmaster.es/granada"
    },
    newsFeed: []
  },
  {
    name: "Mallorca",
    league: "La Liga",
    city: "Palma",
    stadium: "Estadi Mallorca Son Moix",
    tour: true,
    fanZonePub: "Bar Es Rebost",
    transport: "Palma Intermodal Station + bus",
    attractions: ["Palma Cathedral", "Bellver Castle"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho678912/palma-hotel",
      tickets: "https://ticketmaster.es/mallorca"
    },
    newsFeed: []
  },
  {
    name: "Las Palmas",
    league: "La Liga",
    city: "Las Palmas",
    stadium: "Estadio Gran Canaria",
    tour: true,
    fanZonePub: "Bar El Estadio",
    transport: "San Telmo Bus Station + taxi",
    attractions: ["Las Canteras Beach", "Vegueta Old Town"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho789123/laspalmas-hotel",
      tickets: "https://ticketmaster.es/las-palmas"
    },
    newsFeed: []
  },
  {
    name: "Girona",
    league: "La Liga",
    city: "Girona",
    stadium: "Estadi Montilivi",
    tour: true,
    fanZonePub: "Bar Montilivi",
    transport: "Girona Station + bus",
    attractions: ["Girona Cathedral", "Jewish Quarter"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho890134/girona-hotel",
      tickets: "https://ticketmaster.es/girona"
    },
    newsFeed: []
  },
  {
    name: "Levante",
    league: "La Liga",
    city: "Valencia",
    stadium: "Estadi Ciutat de València",
    tour: true,
    fanZonePub: "Bar Granota",
    transport: "Estadi del Llevant Metro Station",
    attractions: ["Bioparc Valencia", "Central Market"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho901245/valencia-hotel",
      tickets: "https://ticketmaster.es/levante"
    },
    newsFeed: []
  },
  {
    name: "Espanyol",
    league: "La Liga",
    city: "Barcelona",
    stadium: "Stage Front Stadium",
    tour: true,
    fanZonePub: "Bar Perico",
    transport: "Cornellà Centre + tram",
    attractions: ["Montjuïc", "Camp Nou Experience"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho012356/barcelona-hotel",
      tickets: "https://ticketmaster.es/espanyol"
    },
    newsFeed: []
  },


// ... Bundesliga Teams

  {
    name: "Bayern Munich",
    league: "Bundesliga",
    city: "Munich",
    stadium: "Allianz Arena",
    tour: true,
    fanZonePub: "Stadionwirtschaft",
    transport: "Fröttmaning U-Bahn Station",
    attractions: ["Marienplatz", "English Garden"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho123456/munich-hotel",
      tickets: "https://ticketmaster.de/bayern-munich"
    },
    newsFeed: []
  },
  {
    name: "Borussia Dortmund",
    league: "Bundesliga",
    city: "Dortmund",
    stadium: "Signal Iduna Park",
    tour: true,
    fanZonePub: "Strobels",
    transport: "Dortmund Signal Iduna Park Station",
    attractions: ["Westfalenpark", "German Football Museum"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho234567/dortmund-hotel",
      tickets: "https://ticketmaster.de/borussia-dortmund"
    },
    newsFeed: []
  },
  {
    name: "RB Leipzig",
    league: "Bundesliga",
    city: "Leipzig",
    stadium: "Red Bull Arena",
    tour: true,
    fanZonePub: "Bar Seaside",
    transport: "Sportforum Süd Tram Stop",
    attractions: ["Leipzig Zoo", "Monument to the Battle of the Nations"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho345678/leipzig-hotel",
      tickets: "https://ticketmaster.de/rb-leipzig"
    },
    newsFeed: []
  },
  {
    name: "Bayer Leverkusen",
    league: "Bundesliga",
    city: "Leverkusen",
    stadium: "BayArena",
    tour: true,
    fanZonePub: "König von Bayern",
    transport: "Leverkusen Mitte + bus",
    attractions: ["Japanese Garden", "Museum Morsbroich"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho456789/leverkusen-hotel",
      tickets: "https://ticketmaster.de/bayer-leverkusen"
    },
    newsFeed: []
  },
  {
    name: "Eintracht Frankfurt",
    league: "Bundesliga",
    city: "Frankfurt",
    stadium: "Deutsche Bank Park",
    tour: true,
    fanZonePub: "Waldstadion Treff",
    transport: "Frankfurt Stadion Station",
    attractions: ["Römerberg", "Palmengarten"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho567890/frankfurt-hotel",
      tickets: "https://ticketmaster.de/eintracht-frankfurt"
    },
    newsFeed: []
  },
  {
    name: "Borussia Mönchengladbach",
    league: "Bundesliga",
    city: "Mönchengladbach",
    stadium: "Borussia-Park",
    tour: true,
    fanZonePub: "FanHaus",
    transport: "Rheydt Hauptbahnhof + shuttle",
    attractions: ["Abteiberg Museum", "Bunter Garten"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho678901/moenchengladbach-hotel",
      tickets: "https://ticketmaster.de/borussia-moenchengladbach"
    },
    newsFeed: []
  },
  {
    name: "VfB Stuttgart",
    league: "Bundesliga",
    city: "Stuttgart",
    stadium: "MHPArena",
    tour: true,
    fanZonePub: "Palm Beach",
    transport: "Neckarpark Station",
    attractions: ["Mercedes-Benz Museum", "Wilhelma Zoo"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho789012/stuttgart-hotel",
      tickets: "https://ticketmaster.de/vfb-stuttgart"
    },
    newsFeed: []
  },
  {
    name: "SC Freiburg",
    league: "Bundesliga",
    city: "Freiburg",
    stadium: "Europa-Park Stadion",
    tour: true,
    fanZonePub: "Schwarzwald-Stube",
    transport: "Freiburg Messe/Universität Station",
    attractions: ["Freiburg Minster", "Schlossberg"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho890123/freiburg-hotel",
      tickets: "https://ticketmaster.de/sc-freiburg"
    },
    newsFeed: []
  },
  {
    name: "Hamburger SV",
    league: "Bundesliga",
    city: "Hamburg",
    stadium: "Volksparkstadion",
    tour: true,
    fanZonePub: "HSV Fan Treff",
    transport: "Stellingen Station + bus",
    attractions: ["Miniatur Wunderland", "Elbphilharmonie"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho901234/hamburg-hotel",
      tickets: "https://ticketmaster.de/hamburger-sv"
    },
    newsFeed: []
  },
  {
    name: "FC Augsburg",
    league: "Bundesliga",
    city: "Augsburg",
    stadium: "WWK Arena",
    tour: true,
    fanZonePub: "Brauhaus 1516",
    transport: "Augsburg Arena Tram Stop",
    attractions: ["Augsburg Cathedral", "Fuggerei"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho123457/augsburg-hotel",
      tickets: "https://ticketmaster.de/fc-augsburg"
    },
    newsFeed: []
  },
  {
    name: "Union Berlin",
    league: "Bundesliga",
    city: "Berlin",
    stadium: "Stadion An der Alten Försterei",
    tour: true,
    fanZonePub: "Hämmerlingstraße Biergarten",
    transport: "Köpenick Station + walk",
    attractions: ["East Side Gallery", "Museum Island"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho234568/berlin-hotel",
      tickets: "https://ticketmaster.de/union-berlin"
    },
    newsFeed: []
  },
  {
    name: "Werder Bremen",
    league: "Bundesliga",
    city: "Bremen",
    stadium: "Weserstadion",
    tour: true,
    fanZonePub: "Stadionkneipe",
    transport: "Bremen Hauptbahnhof + tram",
    attractions: ["Schnoor Quarter", "Bremen Roland"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho345679/bremen-hotel",
      tickets: "https://ticketmaster.de/werder-bremen"
    },
    newsFeed: []
  },
  {
    name: "1. FC Köln",
    league: "Bundesliga",
    city: "Cologne",
    stadium: "RheinEnergieStadion",
    tour: true,
    fanZonePub: "Gaffel am Dom",
    transport: "Köln Süd Station + tram",
    attractions: ["Cologne Cathedral", "Chocolate Museum"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho456780/cologne-hotel",
      tickets: "https://ticketmaster.de/1fc-koeln"
    },
    newsFeed: []
  },
  {
    name: "1. FC Heidenheim",
    league: "Bundesliga",
    city: "Heidenheim",
    stadium: "Voith-Arena",
    tour: true,
    fanZonePub: "Fan Treff Heidenheim",
    transport: "Heidenheim Station + walk",
    attractions: ["Hellenstein Castle", "Wildpark Eichert"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho567891/heidenheim-hotel",
      tickets: "https://ticketmaster.de/fc-heidenheim"
    },
    newsFeed: []
  },
  {
    name: "TSG Hoffenheim",
    league: "Bundesliga",
    city: "Sinsheim",
    stadium: "PreZero Arena",
    tour: true,
    fanZonePub: "Stadiongaststätte",
    transport: "Sinsheim Museum/Arena Station",
    attractions: ["Auto & Technik Museum", "Thermen & Badewelt"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho678912/sinsheim-hotel",
      tickets: "https://ticketmaster.de/tsg-hoffenheim"
    },
    newsFeed: []
  },
  {
    name: "Mainz 05",
    league: "Bundesliga",
    city: "Mainz",
    stadium: "Mewa Arena",
    tour: true,
    fanZonePub: "Brauhaus Goldener Hirsch",
    transport: "Mainz Hauptbahnhof + bus",
    attractions: ["Mainz Cathedral", "Gutenberg Museum"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho789123/mainz-hotel",
      tickets: "https://ticketmaster.de/mainz-05"
    },
    newsFeed: []
  },
  {
    name: "FC St. Pauli",
    league: "Bundesliga",
    city: "Hamburg",
    stadium: "Millerntor-Stadion",
    tour: true,
    fanZonePub: "Jolly Roger",
    transport: "St. Pauli Station + walk",
    attractions: ["Reeperbahn", "Elbphilharmonie"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho890134/hamburg-hotel",
      tickets: "https://ticketmaster.de/fc-st-pauli"
    },
    newsFeed: []
  },
  {
    name: "VfL Wolfsburg",
    league: "Bundesliga",
    city: "Wolfsburg",
    stadium: "Volkswagen Arena",
    tour: true,
    fanZonePub: "Fanhaus Wolfsburg",
    transport: "Wolfsburg Station + bus",
    attractions:["Autostadt", "Phaeno Science Center"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho901245/wolfsburg-hotel",
      tickets: "https://ticketmaster.de/vfl-wolfsburg"
    },
    newsFeed: []
  },
  
  // ... Serie A Teams

    {
    name: "Inter Milan",
    league: "Serie A",
    city: "Milan",
    stadium: "San Siro",
    tour: true,
    fanZonePub: "Offside Sports Pub",
    transport: "Lotto Metro Station",
    attractions: ["Duomo di Milano", "Navigli District"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho123456/milan-hotel",
      tickets: "https://ticketmaster.it/inter-milan"
    },
    newsFeed: []
  },
  {
    name: "Juventus",
    league: "Serie A",
    city: "Turin",
    stadium: "Juventus Stadium",
    tour: true,
    fanZonePub: "Druid's Rock Pub",
    transport: "Bernini Metro + tram",
    attractions: ["Mole Antonelliana", "Egyptian Museum"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho234567/turin-hotel",
      tickets: "https://ticketmaster.it/juventus"
    },
    newsFeed: []
  },
  {
    name: "Napoli",
    league: "Serie A",
    city: "Naples",
    stadium: "Stadio Diego Armando Maradona",
    tour: true,
    fanZonePub: "Frank Malone Pub",
    transport: "Campi Flegrei Station",
    attractions: ["Pompeii", "Castel dell'Ovo"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho345678/naples-hotel",
      tickets: "https://ticketmaster.it/napoli"
    },
    newsFeed: []
  },
  {
    name: "AC Milan",
    league: "Serie A",
    city: "Milan",
    stadium: "San Siro",
    tour: true,
    fanZonePub: "The Football Pub",
    transport: "San Siro Stadio Metro",
    attractions: ["Sforza Castle", "Brera Art Gallery"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho456789/milan-hotel",
      tickets: "https://ticketmaster.it/ac-milan"
    },
    newsFeed: []
  },
  {
    name: "Atalanta",
    league: "Serie A",
    city: "Bergamo",
    stadium: "Gewiss Stadium",
    tour: true,
    fanZonePub: "Birreria di Bergamo",
    transport: "Bergamo Station + bus",
    attractions: ["Città Alta", "Accademia Carrara"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho567890/bergamo-hotel",
      tickets: "https://ticketmaster.it/atalanta"
    },
    newsFeed: []
  },
  {
    name: "Roma",
    league: "Serie A",
    city: "Rome",
    stadium: "Stadio Olimpico",
    tour: true,
    fanZonePub: "Scholars Lounge",
    transport: "Ottaviano Metro + tram",
    attractions: ["Colosseum", "Vatican Museums"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho678901/rome-hotel",
      tickets: "https://ticketmaster.it/as-roma"
    },
    newsFeed: []
  },
  {
    name: "Bologna",
    league: "Serie A",
    city: "Bologna",
    stadium: "Stadio Renato Dall'Ara",
    tour: true,
    fanZonePub: "Il Punto Pub",
    transport: "Bologna Centrale + bus",
    attractions: ["Two Towers", "Piazza Maggiore"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho789012/bologna-hotel",
      tickets: "https://ticketmaster.it/bologna"
    },
    newsFeed: []
  },
  {
    name: "Fiorentina",
    league: "Serie A",
    city: "Florence",
    stadium: "Stadio Artemio Franchi",
    tour: true,
    fanZonePub: "Red Garter",
    transport: "Campo di Marte Station",
    attractions: ["Uffizi Gallery", "Duomo di Firenze"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho890123/florence-hotel",
      tickets: "https://ticketmaster.it/fiorentina"
    },
    newsFeed: []
  },
  {
    name: "Lazio",
    league: "Serie A",
    city: "Rome",
    stadium: "Stadio Olimpico",
    tour: true,
    fanZonePub: "Finnegan Irish Pub",
    transport: "Flaminio Metro + tram",
    attractions: ["Villa Borghese", "Pantheon"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho901234/rome-hotel",
      tickets: "https://ticketmaster.it/lazio"
    },
    newsFeed: []
  },
  {
    name: "Como",
    league: "Serie A",
    city: "Como",
    stadium: "Stadio Giuseppe Sinigaglia",
    tour: true,
    fanZonePub: "Birrificio di Como",
    transport: "Como Lago Station + walk",
    attractions: ["Lake Como", "Villa Olmo"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho012345/como-hotel",
      tickets: "https://ticketmaster.it/como"
    },
    newsFeed: []
  },
  {
    name: "Torino",
    league: "Serie A",
    city: "Turin",
    stadium: "Stadio Olimpico Grande Torino",
    tour: true,
    fanZonePub: "Bar Norman",
    transport: "Porta Susa + tram",
    attractions: ["Palazzo Madama", "National Cinema Museum"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho123457/turin-hotel",
      tickets: "https://ticketmaster.it/torino"
    },
    newsFeed: []
  },
  {
    name: "Udinese",
    league: "Serie A",
    city: "Udine",
    stadium: "Stadio Friuli",
    tour: true,
    fanZonePub: "Birreria Udinese",
    transport: "Udine Station + bus",
    attractions: ["Udine Castle", "Piazza Libertà"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho234568/udine-hotel",
      tickets: "https://ticketmaster.it/udinese"
    },
    newsFeed: []
  },
  {
    name: "Sassuolo",
    league: "Serie A",
    city: "Sassuolo",
    stadium: "Mapei Stadium – Città del Tricolore",
    tour: true,
    fanZonePub: "Stadio Bar",
    transport: "Reggio Emilia Station + bus",
    attractions: ["Palazzo Ducale", "Museo Ferrari (nearby)"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho345679/sassuolo-hotel",
      tickets: "https://ticketmaster.it/sassuolo"
    },
    newsFeed: []
  },
  {
    name: "Genoa",
    league: "Serie A",
    city: "Genoa",
    stadium: "Stadio Luigi Ferraris",
    tour: true,
    fanZonePub: "Gradinata Nord Bar",
    transport: "Brignole Station + walk",
    attractions: ["Aquarium of Genoa", "Via Garibaldi"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho456780/genoa-hotel",
      tickets: "https://ticketmaster.it/genoa"
    },
    newsFeed: []
  },
  {
    name: "Lecce",
    league: "Serie A",
    city: "Lecce",
    stadium: "Stadio Via del Mare",
    tour: true,
    fanZonePub: "Birra & Blues",
    transport: "Lecce Station + bus",
    attractions: ["Roman Amphitheatre", "Basilica di Santa Croce"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho567891/lecce-hotel",
      tickets: "https://ticketmaster.it/lecce"
    },
    newsFeed: []
  },
  {
    name: "Cagliari",
    league: "Serie A",
    city: "Cagliari",
    stadium: "Unipol Domus",
    tour: true,
    fanZonePub: "Old Square Pub",
    transport: "Cagliari Station + bus",
    attractions: ["Poetto Beach", "Bastione di Saint Remy"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho678912/cagliari-hotel",
      tickets: "https://ticketmaster.it/cagliari"
    },
    newsFeed: []
  },
  {
    name: "Parma",
    league: "Serie A",
    city: "Parma",
    stadium: "Stadio Ennio Tardini",
    tour: true,
    fanZonePub: "Bar Sport Parma",
    transport: "Parma Station + walk",
    attractions: ["Palazzo della Pilotta", "Parma Cathedral"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho789123/parma-hotel",
      tickets: "https://ticketmaster.it/parma"
    },
    newsFeed: []
  },
  {
    name: "Pisa",
    league: "Serie A",
    city: "Pisa",
    stadium: "Arena Garibaldi – Stadio Romeo Anconetani",
    tour: true,
    fanZonePub: "La Borsa Pub",
    transport: "Pisa Centrale + walk",
    attractions: ["Leaning Tower of Pisa", "Piazza dei Miracoli"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho890134/pisa-hotel",
      tickets: "https://ticketmaster.it/pisa"
    },
    newsFeed: []
  },
  {
    name: "Hellas Verona",
    league: "Serie A",
    city: "Verona",
    stadium: "Stadio Marcantonio Bentegodi",
    tour: true,
    fanZonePub: "Birreria Bentegodi",
    transport: "Verona Porta Nuova + bus",
    attractions: ["Verona Arena", "Juliet's House"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho901245/verona-hotel",
      tickets: "https://ticketmaster.it/hellas-verona"
    },
    newsFeed: []
  },
  {
    name: "Cremonese",
    league: "Serie A",
    city: "Cremona",
    stadium: "Stadio Giovanni Zini",
    tour: true,
    fanZonePub: "Bar Stadio",
    transport: "Cremona Station + walk",
    attractions: ["Torrazzo di Cremona", "Violin Museum"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho012346/cremona-hotel",
      tickets: "https://ticketmaster.it/cremonese"
    },
    newsFeed: []
  },

  // ... Ligue 1 Teams

    {
    name: "Paris Saint-Germain",
    league: "Ligue 1",
    city: "Paris",
    stadium: "Parc des Princes",
    tour: true,
    fanZonePub: "The Moose",
    transport: "Porte de Saint-Cloud Metro",
    attractions: ["Eiffel Tower", "Louvre Museum"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho123456/paris-hotel",
      tickets: "https://ticketmaster.fr/psg"
    },
    newsFeed: []
  },
  {
    name: "Olympique Marseille",
    league: "Ligue 1",
    city: "Marseille",
    stadium: "Stade Vélodrome",
    tour: true,
    fanZonePub: "O'Malley's Irish Pub",
    transport: "Rond-Point du Prado Metro",
    attractions: ["Old Port", "Notre-Dame de la Garde"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho234567/marseille-hotel",
      tickets: "https://ticketmaster.fr/om"
    },
    newsFeed: []
  },
  {
    name: "AS Monaco",
    league: "Ligue 1",
    city: "Monaco",
    stadium: "Stade Louis II",
    tour: true,
    fanZonePub: "Brasserie de Monaco",
    transport: "Fontvieille Bus Terminal",
    attractions: ["Monte Carlo Casino", "Oceanographic Museum"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho345678/monaco-hotel",
      tickets: "https://ticketmaster.fr/monaco"
    },
    newsFeed: []
  },
  {
    name: "Lyon",
    league: "Ligue 1",
    city: "Lyon",
    stadium: "Groupama Stadium",
    tour: true,
    fanZonePub: "Wallace Bar",
    transport: "Décines Grand Large Tram",
    attractions: ["Basilica of Notre-Dame de Fourvière", "Parc de la Tête d'Or"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho456789/lyon-hotel",
      tickets: "https://ticketmaster.fr/lyon"
    },
    newsFeed: []
  },
  {
    name: "LOSC Lille",
    league: "Ligue 1",
    city: "Lille",
    stadium: "Stade Pierre-Mauroy",
    tour: true,
    fanZonePub: "La Capsule",
    transport: "Villeneuve-d'Ascq Metro",
    attractions: ["Palais des Beaux-Arts", "Old Lille"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho567890/lille-hotel",
      tickets: "https://ticketmaster.fr/lille"
    },
    newsFeed: []
  },
  {
    name: "OGC Nice",
    league: "Ligue 1",
    city: "Nice",
    stadium: "Allianz Riviera",
    tour: true,
    fanZonePub: "Ma Nolan's",
    transport: "Nice Saint-Augustin Station + tram",
    attractions: ["Promenade des Anglais", "Castle Hill"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho678901/nice-hotel",
      tickets: "https://ticketmaster.fr/nice"
    },
    newsFeed: []
  },
  {
    name: "RC Lens",
    league: "Ligue 1",
    city: "Lens",
    stadium: "Stade Bollaert-Delelis",
    tour: true,
    fanZonePub: "Le Café des Sports",
    transport: "Lens Station + walk",
    attractions: ["Louvre-Lens Museum", "Bassin Minier"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho789012/lens-hotel",
      tickets: "https://ticketmaster.fr/lens"
    },
    newsFeed: []
  },
  {
    name: "Stade Rennais",
    league: "Ligue 1",
    city: "Rennes",
    stadium: "Roazhon Park",
    tour: true,
    fanZonePub: "Fox & Friends",
    transport: "Villejean-Université Metro",
    attractions: ["Parlement de Bretagne", "Thabor Gardens"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho890123/rennes-hotel",
      tickets: "https://ticketmaster.fr/rennes"
    },
    newsFeed: []
  },
  {
    name: "Strasbourg",
    league: "Ligue 1",
    city: "Strasbourg",
    stadium: "Stade de la Meinau",
    tour: true,
    fanZonePub: "Academy Pub",
    transport: "Krimmeri-Meinau Station",
    attractions: ["Strasbourg Cathedral", "Petite France"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho901234/strasbourg-hotel",
      tickets: "https://ticketmaster.fr/strasbourg"
    },
    newsFeed: []
  },
  {
    name: "Toulouse",
    league: "Ligue 1",
    city: "Toulouse",
    stadium: "Stadium de Toulouse",
    tour: true,
    fanZonePub: "The Danu",
    transport: "Empalot Metro Station",
    attractions: ["Capitole de Toulouse", "Canal du Midi"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho012345/toulouse-hotel",
      tickets: "https://ticketmaster.fr/toulouse"
    },
    newsFeed: []
  },
  {
    name: "FC Nantes",
    league: "Ligue 1",
    city: "Nantes",
    stadium: "Stade de la Beaujoire",
    tour: true,
    fanZonePub: "Le Buck Mulligan's",
    transport: "Halvêque Tram Station",
    attractions: ["Machines of the Isle", "Château des Ducs de Bretagne"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho123456/nantes-hotel",
      tickets: "https://ticketmaster.fr/nantes"
    },
    newsFeed: []
  },
  {
    name: "AJ Auxerre",
    league: "Ligue 1",
    city: "Auxerre",
    stadium: "Stade Abbé Deschamps",
    tour: true,
    fanZonePub: "Le Saint-Nicolas",
    transport: "Auxerre Station + walk",
    attractions: ["Auxerre Cathedral", "Clock Tower"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho234567/auxerre-hotel",
      tickets: "https://ticketmaster.fr/auxerre"
    },
    newsFeed: []
  },
  {
    name: "Stade Brestois 29",
    league: "Ligue 1",
    city: "Brest",
    stadium: "Stade Francis-Le Blé",
    tour: true,
    fanZonePub: "Le Tour du Monde",
    transport: "Brest Station + bus",
    attractions: ["Oceanopolis", "Castle of Brest"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho345678/brest-hotel",
      tickets: "https://ticketmaster.fr/brest"
    },
    newsFeed: []
  },
  {
    name: "FC Lorient",
    league: "Ligue 1",
    city: "Lorient",
    stadium: "Stade du Moustoir",
    tour: true,
    fanZonePub: "Le Galway Inn",
    transport: "Lorient Station + bus",
    attractions: ["Submarine Museum", "Île de Groix"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho456789/lorient-hotel",
      tickets: "https://ticketmaster.fr/lorient"
    },
    newsFeed: []
  },
  {
    name: "Paris FC",
    league: "Ligue 1",
    city: "Paris",
    stadium: "Stade Jean-Bouin",
    tour: true,
    fanZonePub: "Le Truskel",
    transport: "Porte de Saint-Cloud Metro",
    attractions: ["Montparnasse Tower", "Bois de Boulogne"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho567890/parisfc-hotel",
      tickets: "https://ticketmaster.fr/paris-fc"
    },
    newsFeed: []
  },
  {
    name: "Angers SCO",
    league: "Ligue 1",
    city: "Angers",
    stadium: "Stade Raymond Kopa",
    tour: true,
    fanZonePub: "Le James Joyce",
    transport: "Angers Saint-Laud Station + tram",
    attractions: ["Château d'Angers", "Terra Botanica"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho678901/angers-hotel",
      tickets: "https://ticketmaster.fr/angers"
    },
    newsFeed: []
  },
  {
    name: "FC Metz",
    league: "Ligue 1",
    city: "Metz",
    stadium: "Stade Saint-Symphorien",
    tour: true,
    fanZonePub: "Le Troubadour",
    transport: "Metz Station + bus",
    attractions: ["Centre Pompidou-Metz", "Cathedral of Saint Stephen"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho789012/metz-hotel",
      tickets: "https://ticketmaster.fr/metz"
    },
    newsFeed: []
  },
  {
    name: "Le Havre AC",
    league: "Ligue 1",
    city: "Le Havre",
    stadium: "Stade Océane",
    tour: true,
    fanZonePub: "Le Pub Le Marais",
    transport: "Le Havre Station + tram",
    attractions: ["MuMa Museum", "Hanging Gardens"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho890123/lehavre-hotel",
      tickets: "https://ticketmaster.fr/le-havre"
    },
    newsFeed: []
  },

  // ... Eredivisie Teams

  {
    name: "Sparta Rotterdam",
    league: "Eredivisie",
    city: "Rotterdam",
    stadium: "Spartastadion Het Kasteel",
    capacity: 11000,
    tour: true,
    fanZonePub: "Café De Oude Sluis",
    transport: "Spangen Metro Station",
    attractions: ["Euromast", "Maritime Museum"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho112233/sparta-hotel",
      tickets: "https://ticketmaster.nl/sparta"
    },
    newsFeed: []
  },
  {
    name: "FC Groningen",
    league: "Eredivisie",
    city: "Groningen",
    stadium: "Euroborg",
    capacity: 22550,
    tour: true,
    fanZonePub: "De Pintelier",
    transport: "Groningen Station",
    attractions: ["Groninger Museum", "Noorderplantsoen"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho223344/groningen-hotel",
      tickets: "https://ticketmaster.nl/groningen"
    },
    newsFeed: []
  },
  {
    name: "Fortuna Sittard",
    league: "Eredivisie",
    city: "Sittard",
    stadium: "Fortuna Sittard Stadion",
    capacity: 10300,
    tour: true,
    fanZonePub: "Café de Gats",
    transport: "Sittard Station + bus",
    attractions: ["Kasteelpark Born", "Sittard Market Square"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho334455/sittard-hotel",
      tickets: "https://ticketmaster.nl/fortuna"
    },
    newsFeed: []
  },
  {
    name: "NAC Breda",
    league: "Eredivisie",
    city: "Breda",
    stadium: "Rat Verlegh Stadion",
    capacity: 19000,
    tour: true,
    fanZonePub: "Café de Beyerd",
    transport: "Breda Station + bus",
    attractions: ["Grote Kerk", "Breda Castle"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho445566/breda-hotel",
      tickets: "https://ticketmaster.nl/nac"
    },
    newsFeed: []
  },
  {
    name: "PEC Zwolle",
    league: "Eredivisie",
    city: "Zwolle",
    stadium: "MAC³PARK Stadion",
    capacity: 13250,
    tour: true,
    fanZonePub: "Café Het Beugeltje",
    transport: "Zwolle Station + walk",
    attractions: ["Museum de Fundatie", "Sassenpoort"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho556677/zwolle-hotel",
      tickets: "https://ticketmaster.nl/pec"
    },
    newsFeed: []
  },
  {
    name: "Heracles Almelo",
    league: "Eredivisie",
    city: "Almelo",
    stadium: "Asito Stadion",
    capacity: 12080,
    tour: true,
    fanZonePub: "Café De Stam",
    transport: "Almelo Station",
    attractions: ["City Park", "Bolletje Museum"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho667788/almelo-hotel",
      tickets: "https://ticketmaster.nl/heracles"
    },
    newsFeed: []
  },
  {
    name: "Excelsior",
    league: "Eredivisie",
    city: "Rotterdam",
    stadium: "Van Donge & De Roo Stadion",
    capacity: 4500,
    tour: true,
    fanZonePub: "Café Walenburg",
    transport: "Kralingse Zoom Metro Station",
    attractions: ["Kralingse Bos", "Cube Houses"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho778899/excelsior-hotel",
      tickets: "https://ticketmaster.nl/excelsior"
    },
    newsFeed: []
  },
  {
    name: "FC Volendam",
    league: "Eredivisie",
    city: "Volendam",
    stadium: "Kras Stadion",
    capacity: 7384,
    tour: true,
    fanZonePub: "Café 't Havengat",
    transport: "Amsterdam + bus to Volendam",
    attractions: ["Volendam Museum", "Harbour Promenade"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho889900/volendam-hotel",
      tickets: "https://ticketmaster.nl/volendam"
    },
    newsFeed: []
  },
  {
    name: "SC Telstar",
    league: "Eredivisie",
    city: "Velsen",
    stadium: "BUKO Stadion",
    capacity: 4200,
    tour: true,
    fanZonePub: "Café De Zon",
    transport: "Driehuis Station + walk",
    attractions: ["Beeckestijn Estate", "North Sea Dunes"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho990011/telstar-hotel",
      tickets: "https://ticketmaster.nl/telstar"
    },
    newsFeed: []
  },

  {
    name: "Sparta Rotterdam",
    league: "Eredivisie",
    city: "Rotterdam",
    stadium: "Spartastadion Het Kasteel",
    capacity: 11000,
    tour: true,
    fanZonePub: "Café De Oude Sluis",
    transport: "Spangen Metro Station",
    attractions: ["Euromast", "Maritime Museum"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho112233/sparta-hotel",
      tickets: "https://ticketmaster.nl/sparta"
    },
    newsFeed: []
  },
  {
    name: "FC Groningen",
    league: "Eredivisie",
    city: "Groningen",
    stadium: "Euroborg",
    capacity: 22550,
    tour: true,
    fanZonePub: "De Pintelier",
    transport: "Groningen Station",
    attractions: ["Groninger Museum", "Noorderplantsoen"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho223344/groningen-hotel",
      tickets: "https://ticketmaster.nl/groningen"
    },
    newsFeed: []
  },
  {
    name: "Fortuna Sittard",
    league: "Eredivisie",
    city: "Sittard",
    stadium: "Fortuna Sittard Stadion",
    capacity: 10300,
    tour: true,
    fanZonePub: "Café de Gats",
    transport: "Sittard Station + bus",
    attractions: ["Kasteelpark Born", "Sittard Market Square"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho334455/sittard-hotel",
      tickets: "https://ticketmaster.nl/fortuna"
    },
    newsFeed: []
  },
  {
    name: "NAC Breda",
    league: "Eredivisie",
    city: "Breda",
    stadium: "Rat Verlegh Stadion",
    capacity: 19000,
    tour: true,
    fanZonePub: "Café de Beyerd",
    transport: "Breda Station + bus",
    attractions: ["Grote Kerk", "Breda Castle"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho445566/breda-hotel",
      tickets: "https://ticketmaster.nl/nac"
    },
    newsFeed: []
  },
  {
    name: "PEC Zwolle",
    league: "Eredivisie",
    city: "Zwolle",
    stadium: "MAC³PARK Stadion",
    capacity: 13250,
    tour: true,
    fanZonePub: "Café Het Beugeltje",
    transport: "Zwolle Station + walk",
    attractions: ["Museum de Fundatie", "Sassenpoort"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho556677/zwolle-hotel",
      tickets: "https://ticketmaster.nl/pec"
    },
    newsFeed: []
  },
  {
    name: "Heracles Almelo",
    league: "Eredivisie",
    city: "Almelo",
    stadium: "Asito Stadion",
    capacity: 12080,
    tour: true,
    fanZonePub: "Café De Stam",
    transport: "Almelo Station",
    attractions: ["City Park", "Bolletje Museum"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho667788/almelo-hotel",
      tickets: "https://ticketmaster.nl/heracles"
    },
    newsFeed: []
  },
  {
    name: "Excelsior",
    league: "Eredivisie",
    city: "Rotterdam",
    stadium: "Van Donge & De Roo Stadion",
    capacity: 4500,
    tour: true,
    fanZonePub: "Café Walenburg",
    transport: "Kralingse Zoom Metro Station",
    attractions: ["Kralingse Bos", "Cube Houses"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho778899/excelsior-hotel",
      tickets: "https://ticketmaster.nl/excelsior"
    },
    newsFeed: []
  },
  {
    name: "FC Volendam",
    league: "Eredivisie",
    city: "Volendam",
    stadium: "Kras Stadion",
    capacity: 7384,
    tour: true,
    fanZonePub: "Café 't Havengat",
    transport: "Amsterdam + bus to Volendam",
    attractions: ["Volendam Museum", "Harbour Promenade"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho889900/volendam-hotel",
      tickets: "https://ticketmaster.nl/volendam"
    },
    newsFeed: []
  },
  {
    name: "SC Telstar",
    league: "Eredivisie",
    city: "Velsen",
    stadium: "BUKO Stadion",
    capacity: 4200,
    tour: true,
    fanZonePub: "Café De Zon",
    transport: "Driehuis Station + walk",
    attractions: ["Beeckestijn Estate", "North Sea Dunes"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho990011/telstar-hotel",
      tickets: "https://ticketmaster.nl/telstar"
    },
    newsFeed: []
  },

// ... Portuguese Primeira Liga Teams


  {
    name: "Sparta Rotterdam",
    league: "Eredivisie",
    city: "Rotterdam",
    stadium: "Spartastadion Het Kasteel",
    capacity: 11000,
    tour: true,
    fanZonePub: "Café De Oude Sluis",
    transport: "Spangen Metro Station",
    attractions: ["Euromast", "Maritime Museum"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho112233/sparta-hotel",
      tickets: "https://ticketmaster.nl/sparta"
    },
    newsFeed: []
  },
  {
    name: "FC Groningen",
    league: "Eredivisie",
    city: "Groningen",
    stadium: "Euroborg",
    capacity: 22550,
    tour: true,
    fanZonePub: "De Pintelier",
    transport: "Groningen Station",
    attractions: ["Groninger Museum", "Noorderplantsoen"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho223344/groningen-hotel",
      tickets: "https://ticketmaster.nl/groningen"
    },
    newsFeed: []
  },
  {
    name: "Fortuna Sittard",
    league: "Eredivisie",
    city: "Sittard",
    stadium: "Fortuna Sittard Stadion",
    capacity: 10300,
    tour: true,
    fanZonePub: "Café de Gats",
    transport: "Sittard Station + bus",
    attractions: ["Kasteelpark Born", "Sittard Market Square"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho334455/sittard-hotel",
      tickets: "https://ticketmaster.nl/fortuna"
    },
    newsFeed: []
  },
  {
    name: "NAC Breda",
    league: "Eredivisie",
    city: "Breda",
    stadium: "Rat Verlegh Stadion",
    capacity: 19000,
    tour: true,
    fanZonePub: "Café de Beyerd",
    transport: "Breda Station + bus",
    attractions: ["Grote Kerk", "Breda Castle"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho445566/breda-hotel",
      tickets: "https://ticketmaster.nl/nac"
    },
    newsFeed: []
  },
  {
    name: "PEC Zwolle",
    league: "Eredivisie",
    city: "Zwolle",
    stadium: "MAC³PARK Stadion",
    capacity: 13250,
    tour: true,
    fanZonePub: "Café Het Beugeltje",
    transport: "Zwolle Station + walk",
    attractions: ["Museum de Fundatie", "Sassenpoort"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho556677/zwolle-hotel",
      tickets: "https://ticketmaster.nl/pec"
    },
    newsFeed: []
  },
  {
    name: "Heracles Almelo",
    league: "Eredivisie",
    city: "Almelo",
    stadium: "Asito Stadion",
    capacity: 12080,
    tour: true,
    fanZonePub: "Café De Stam",
    transport: "Almelo Station",
    attractions: ["City Park", "Bolletje Museum"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho667788/almelo-hotel",
      tickets: "https://ticketmaster.nl/heracles"
    },
    newsFeed: []
  },
  {
    name: "Excelsior",
    league: "Eredivisie",
    city: "Rotterdam",
    stadium: "Van Donge & De Roo Stadion",
    capacity: 4500,
    tour: true,
    fanZonePub: "Café Walenburg",
    transport: "Kralingse Zoom Metro Station",
    attractions: ["Kralingse Bos", "Cube Houses"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho778899/excelsior-hotel",
      tickets: "https://ticketmaster.nl/excelsior"
    },
    newsFeed: []
  },
  {
    name: "FC Volendam",
    league: "Eredivisie",
    city: "Volendam",
    stadium: "Kras Stadion",
    capacity: 7384,
    tour: true,
    fanZonePub: "Café 't Havengat",
    transport: "Amsterdam + bus to Volendam",
    attractions: ["Volendam Museum", "Harbour Promenade"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho889900/volendam-hotel",
      tickets: "https://ticketmaster.nl/volendam"
    },
    newsFeed: []
  },
  {
    name: "SC Telstar",
    league: "Eredivisie",
    city: "Velsen",
    stadium: "BUKO Stadion",
    capacity: 4200,
    tour: true,
    fanZonePub: "Café De Zon",
    transport: "Driehuis Station + walk",
    attractions: ["Beeckestijn Estate", "North Sea Dunes"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho990011/telstar-hotel",
      tickets: "https://ticketmaster.nl/telstar"
    },
    newsFeed: []
  },


  // ... Portuguese Primeira Liga Teams

  
  {
    name: "SL Benfica",
    league: "Primeira Liga",
    city: "Lisbon",
    stadium: "Estádio da Luz",
    capacity: 68100,
    tour: true,
    fanZonePub: "O Magano",
    transport: "Colégio Militar/Luz Metro Station",
    attractions: ["Belém Tower", "Jerónimos Monastery"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho101010/benfica-hotel",
      tickets: "https://ticketmaster.pt/benfica"
    },
    newsFeed: []
  },
  {
    name: "Sporting CP",
    league: "Primeira Liga",
    city: "Lisbon",
    stadium: "Estádio José Alvalade",
    capacity: 50095,
    tour: true,
    fanZonePub: "Café Alvalade",
    transport: "Campo Grande Metro Station",
    attractions: ["Lisbon Zoo", "Eduardo VII Park"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho111111/sporting-hotel",
      tickets: "https://ticketmaster.pt/sporting"
    },
    newsFeed: []
  },
  {
    name: "FC Porto",
    league: "Primeira Liga",
    city: "Porto",
    stadium: "Estádio do Dragão",
    capacity: 50033,
    tour: true,
    fanZonePub: "Café Santiago",
    transport: "Estádio do Dragão Metro Station",
    attractions: ["Clérigos Tower", "Livraria Lello"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho121212/porto-hotel",
      tickets: "https://ticketmaster.pt/porto"
    },
    newsFeed: []
  },
  {
    name: "SC Braga",
    league: "Primeira Liga",
    city: "Braga",
    stadium: "Estádio Municipal de Braga",
    capacity: 30286,
    tour: true,
    fanZonePub: "Bar Sé La Vie",
    transport: "Braga Station + bus",
    attractions: ["Bom Jesus do Monte", "Braga Cathedral"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho131313/braga-hotel",
      tickets: "https://ticketmaster.pt/braga"
    },
    newsFeed: []
  },
  {
    name: "Vitória SC",
    league: "Primeira Liga",
    city: "Guimarães",
    stadium: "Estádio D. Afonso Henriques",
    capacity: 30029,
    tour: true,
    fanZonePub: "Café Milénio",
    transport: "Guimarães Station + walk",
    attractions: ["Guimarães Castle", "Palace of the Dukes"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho141414/vitoria-hotel",
      tickets: "https://ticketmaster.pt/vitoria"
    },
    newsFeed: []
  },
  {
    name: "Casa Pia AC",
    league: "Primeira Liga",
    city: "Lisbon",
    stadium: "Estádio Municipal de Rio Maior",
    capacity: 7000,
    tour: true,
    fanZonePub: "Café Rio",
    transport: "Lisbon + bus to Rio Maior",
    attractions: ["Lisbon Oceanarium", "Alfama District"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho151515/casapia-hotel",
      tickets: "https://ticketmaster.pt/casapia"
    },
    newsFeed: []
  },
  {
    name: "Estoril Praia",
    league: "Primeira Liga",
    city: "Estoril",
    stadium: "Estádio António Coimbra da Mota",
    capacity: 5094,
    tour: true,
    fanZonePub: "Café Londres",
    transport: "Estoril Station + walk",
    attractions: ["Estoril Casino", "Tamariz Beach"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho161616/estoril-hotel",
      tickets: "https://ticketmaster.pt/estoril"
    },
    newsFeed: []
  },
  {
    name: "Estrela da Amadora",
    league: "Primeira Liga",
    city: "Amadora",
    stadium: "Estádio José Gomes",
    capacity: 9288,
    tour: true,
    fanZonePub: "Café Central",
    transport: "Amadora Station + walk",
    attractions: ["KidZania Lisbon", "Amadora Park"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho171717/estrela-hotel",
      tickets: "https://ticketmaster.pt/estrela"
    },
    newsFeed: []
  },
  {
    name: "FC Famalicão",
    league: "Primeira Liga",
    city: "Vila Nova de Famalicão",
    stadium: "Estádio Municipal 22 de Junho",
    capacity: 5186,
    tour: true,
    fanZonePub: "Café Avenida",
    transport: "Famalicão Station + walk",
    attractions: ["House of Arts", "Park of Devesa"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho181818/famalicao-hotel",
      tickets: "https://ticketmaster.pt/famalicao"
    },
    newsFeed: []
  },
{
    name: "Gil Vicente",
    league: "Primeira Liga",
    city: "Barcelos",
    stadium: "Estádio Cidade de Barcelos",
    capacity: 12046,
    tour: true,
    fanZonePub: "Café Gil",
    transport: "Barcelos Station + walk",
    attractions: ["Barcelos Bridge", "Historic Centre"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho191919/gilvicente-hotel",
      tickets: "https://ticketmaster.pt/gil-vicente"
    },
    newsFeed: []
  },
  {
    name: "Moreirense FC",
    league: "Primeira Liga",
    city: "Moreira de Cónegos",
    stadium: "Estádio Comendador Joaquim de Almeida Freitas",
    capacity: 6150,
    tour: true,
    fanZonePub: "Café Central",
    transport: "Guimarães Station + bus",
    attractions: ["Local Vineyards", "Historic Chapel"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho202020/moreirense-hotel",
      tickets: "https://ticketmaster.pt/moreirense"
    },
    newsFeed: []
  },
  {
    name: "CD Nacional",
    league: "Primeira Liga",
    city: "Funchal",
    stadium: "Estádio da Madeira",
    capacity: 5200,
    tour: true,
    fanZonePub: "Café do Mercado",
    transport: "Funchal Station + taxi",
    attractions: ["Botanical Garden", "Monte Palace"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho212121/nacional-hotel",
      tickets: "https://ticketmaster.pt/nacional"
    },
    newsFeed: []
  },
  {
    name: "Santa Clara",
    league: "Primeira Liga",
    city: "Ponta Delgada",
    stadium: "Estádio de São Miguel",
    capacity: 12500,
    tour: true,
    fanZonePub: "Café São Miguel",
    transport: "Ponta Delgada Airport + taxi",
    attractions: ["Sete Cidades", "Portas da Cidade"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho222222/santa-clara-hotel",
      tickets: "https://ticketmaster.pt/santa-clara"
    },
    newsFeed: []
  },
  {
    name: "Rio Ave FC",
    league: "Primeira Liga",
    city: "Vila do Conde",
    stadium: "Estádio dos Arcos",
    capacity: 5300,
    tour: true,
    fanZonePub: "Café Arcos",
    transport: "Vila do Conde Metro Station",
    attractions: ["Santa Clara Aqueduct", "Beachfront Promenade"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho232323/rio-ave-hotel",
      tickets: "https://ticketmaster.pt/rio-ave"
    },
    newsFeed: []
  },
  {
    name: "FC Arouca",
    league: "Primeira Liga",
    city: "Arouca",
    stadium: "Estádio Municipal de Arouca",
    capacity: 5600,
    tour: true,
    fanZonePub: "Café da Vila",
    transport: "Porto + bus to Arouca",
    attractions: ["Arouca Geopark", "516 Arouca Bridge"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho242424/arouca-hotel",
      tickets: "https://ticketmaster.pt/arouca"
    },
    newsFeed: []
  },
  {
    name: "FC Alverca",
    league: "Primeira Liga",
    city: "Alverca do Ribatejo",
    stadium: "Complexo Desportivo FC Alverca",
    capacity: 7705,
    tour: true,
    fanZonePub: "Café Alverca",
    transport: "Alverca Station + walk",
    attractions: ["Tagus Riverside", "Local Market"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho252525/alverca-hotel",
      tickets: "https://ticketmaster.pt/alverca"
    },
    newsFeed: []
  },
  {
    name: "CD Tondela",
    league: "Primeira Liga",
    city: "Tondela",
    stadium: "Estádio João Cardoso",
    capacity: 5000,
    tour: true,
    fanZonePub: "Café Cardoso",
    transport: "Viseu + bus to Tondela",
    attractions: ["Serra do Caramulo", "Historic Town Centre"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho262626/tondela-hotel",
      tickets: "https://ticketmaster.pt/tondela"
    },
    newsFeed: []
  },
  {
    name: "AVS Futebol SAD",
    league: "Primeira Liga",
    city: "Vila das Aves",
    stadium: "Estádio do CD Aves",
    capacity: 6230,
    tour: true,
    fanZonePub: "Café das Aves",
    transport: "Santo Tirso Station + walk",
    attractions: ["Local Gardens", "Historic Church"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho272727/avs-hotel",
      tickets: "https://ticketmaster.pt/avs"
    },
    newsFeed: []
  },

  // ... Brazil Serie A Teams
  
  {
    name: "Flamengo",
    league: "Brasileirão Série A",
    city: "Rio de Janeiro",
    stadium: "Maracanã",
    capacity: 73139,
    tour: true,
    fanZonePub: "Bar do Zico",
    transport: "Maracanã Metro Station",
    attractions: ["Sugarloaf Mountain", "Christ the Redeemer"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho101010/flamengo-hotel",
      tickets: "https://ticketmaster.com.br/flamengo"
    },
    newsFeed: []
  },
  {
    name: "Palmeiras",
    league: "Brasileirão Série A",
    city: "São Paulo",
    stadium: "Allianz Parque",
    capacity: 43713,
    tour: true,
    fanZonePub: "Cervejaria Nacional",
    transport: "Barra Funda Metro Station",
    attractions: ["Ibirapuera Park", "São Paulo Museum of Art"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho111111/palmeiras-hotel",
      tickets: "https://ticketmaster.com.br/palmeiras"
    },
    newsFeed: []
  },
  {
    name: "Botafogo",
    league: "Brasileirão Série A",
    city: "Rio de Janeiro",
    stadium: "Nilton Santos",
    capacity: 44661,
    tour: true,
    fanZonePub: "Café Botafogo",
    transport: "Engenho de Dentro Station",
    attractions: ["Museum of Tomorrow", "Copacabana Beach"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho121212/botafogo-hotel",
      tickets: "https://ticketmaster.com.br/botafogo"
    },
    newsFeed: []
  },
  {
    name: "Corinthians",
    league: "Brasileirão Série A",
    city: "São Paulo",
    stadium: "Neo Química Arena",
    capacity: 47252,
    tour: true,
    fanZonePub: "Bar do Corinthians",
    transport: "Itaquera Metro Station",
    attractions: ["Catavento Museum", "São Paulo Cathedral"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho131313/corinthians-hotel",
      tickets: "https://ticketmaster.com.br/corinthians"
    },
    newsFeed: []
  },
  {
    name: "Internacional",
    league: "Brasileirão Série A",
    city: "Porto Alegre",
    stadium: "Beira-Rio",
    capacity: 50128,
    tour: true,
    fanZonePub: "Bar do Inter",
    transport: "Estádio Beira-Rio Station",
    attractions: ["Usina do Gasômetro", "Farroupilha Park"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho141414/inter-hotel",
      tickets: "https://ticketmaster.com.br/internacional"
    },
    newsFeed: []
  },
  {
    name: "Atlético Mineiro",
    league: "Brasileirão Série A",
    city: "Belo Horizonte",
    stadium: "Arena MRV",
    capacity: 44892,
    tour: true,
    fanZonePub: "Bar Galo Doido",
    transport: "Eldorado Metro Station",
    attractions: ["Pampulha Lagoon", "Inhotim Museum"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho151515/atletico-hotel",
      tickets: "https://ticketmaster.com.br/atletico-mg"
    },
    newsFeed: []
  },
  {
    name: "Bahia",
    league: "Brasileirão Série A",
    city: "Salvador",
    stadium: "Arena Fonte Nova",
    capacity: 47907,
    tour: true,
    fanZonePub: "Bar do Bahia",
    transport: "Campo da Pólvora Metro Station",
    attractions: ["Pelourinho", "Elevador Lacerda"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho161616/bahia-hotel",
      tickets: "https://ticketmaster.com.br/bahia"
    },
    newsFeed: []
  },
  {
    name: "Grêmio",
    league: "Brasileirão Série A",
    city: "Porto Alegre",
    stadium: "Arena do Grêmio",
    capacity: 55225,
    tour: true,
    fanZonePub: "Bar Tricolor",
    transport: "Anchieta Station + bus",
    attractions: ["Fundação Ibere Camargo", "Guaíba Riverfront"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho171717/gremio-hotel",
      tickets: "https://ticketmaster.com.br/gremio"
    },
    newsFeed: []
  },
  {
    name: "Cruzeiro",
    league: "Brasileirão Série A",
    city: "Belo Horizonte",
    stadium: "Mineirão",
    capacity: 61927,
    tour: true,
    fanZonePub: "Bar Celeste",
    transport: "Gameleira Metro Station",
    attractions: ["Liberdade Square", "Central Market"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho181818/cruzeiro-hotel",
      tickets: "https://ticketmaster.com.br/cruzeiro"
    },
    newsFeed: []
  },
  {
    name: "São Paulo",
    league: "Brasileirão Série A",
    city: "São Paulo",
    stadium: "MorumBIS",
    capacity: 66795,
    tour: true,
    fanZonePub: "Bar do Tricolor",
    transport: "São Paulo Morumbi Metro Station",
    attractions: ["Football Museum", "Pinacoteca"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho191919/saopaulo-hotel",
      tickets: "https://ticketmaster.com.br/sao-paulo"
    },
    newsFeed: []
  },
  {
    name: "Fluminense",
    league: "Brasileirão Série A",
    city: "Rio de Janeiro",
    stadium: "Maracanã",
    capacity: 73139,
    tour: true,
    fanZonePub: "Bar do Flu",
    transport: "Maracanã Metro Station",
    attractions: ["Lapa Arches", "Museum of Tomorrow"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho202020/fluminense-hotel",
      tickets: "https://ticketmaster.com.br/fluminense"
    },
    newsFeed: []
  },
  {
    name: "Vasco da Gama",
    league: "Brasileirão Série A",
    city: "Rio de Janeiro",
    stadium: "São Januário",
    capacity: 21880,
    tour: true,
    fanZonePub: "Bar do Vasco",
    transport: "São Cristóvão Station + walk",
    attractions: ["Quinta da Boa Vista", "Rio Zoo"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho212121/vasco-hotel",
      tickets: "https://ticketmaster.com.br/vasco"
    },
    newsFeed: []
  },
  {
    name: "Red Bull Bragantino",
    league: "Brasileirão Série A",
    city: "Bragança Paulista",
    stadium: "Nabi Abi Chedid",
    capacity: 17000,
    tour: true,
    fanZonePub: "Bar do Massa Bruta",
    transport: "Bragança Station + walk",
    attractions: ["Lake Taboão", "Bragança Museum"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho222222/bragantino-hotel",
      tickets: "https://ticketmaster.com.br/bragantino"
    },
    newsFeed: []
  },
  {
    name: "Fortaleza",
    league: "Brasileirão Série A",
    city: "Fortaleza",
    stadium: "Castelão",
    capacity: 63903,
    tour: true,
    fanZonePub: "Bar do Leão",
    transport: "Castelão Station",
    attractions: ["Praia do Futuro", "Dragão do Mar Center"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho232323/fortaleza-hotel",
      tickets: "https://ticketmaster.com.br/fortaleza"
    },
    newsFeed: []
  },
  {
    name: "Ceará",
    league: "Brasileirão Série A",
    city: "Fortaleza",
    stadium: "Castelão",
    capacity: 63903,
    tour: true,
    fanZonePub: "Bar Vozão",
    transport: "Castelão Station",
    attractions: ["Centro Cultural Banco do Nordeste", "Iracema Beach"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho242424/ceara-hotel",
      tickets: "https://ticketmaster.com.br/ceara"
    },
    newsFeed: []
  },
  {
    name: "Vitória",
    league: "Brasileirão Série A",
    city: "Salvador",
    stadium: "Barradão",
    capacity: 34500,
    tour: true,
    fanZonePub: "Bar Rubro-Negro",
    transport: "Salvador Station + bus",
    attractions: ["Mercado Modelo", "Historic Pelourinho"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho252525/vitoria-hotel",
      tickets: "https://ticketmaster.com.br/vitoria"
    },
    newsFeed: []
  },
  {
    name: "Santos",
    league: "Brasileirão Série A",
    city: "Santos",
    stadium: "Vila Belmiro",
    capacity: 16068,
    tour: true,
    fanZonePub: "Bar do Peixe",
    transport: "Santos Station + walk",
    attractions: ["Coffee Museum", "Gonzaga Beach"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho262626/santos-hotel",
      tickets: "https://ticketmaster.com.br/santos"
    },
    newsFeed: []
  },
  {
    name: "Mirassol",
    league: "Brasileirão Série A",
    city: "Mirassol",
    stadium: "Campos Maia",
    capacity: 14534,
    tour: true,
    fanZonePub: "Bar do Leão",
    transport: "São José do Rio Preto + bus",
    attractions: ["Mirassol Park", "Local Artisan Market"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho272727/mirassol-hotel",
      tickets: "https://ticketmaster.com.br/mirassol"
    },
    newsFeed: []
  },
  {
    name: "Sport Recife",
    league: "Brasileirão Série A",
    city: "Recife",
    stadium: "Ilha do Retiro",
    capacity: 32000,
    tour: true,
    fanZonePub: "Bar do Leão",
    transport: "Recife Metro + bus",
    attractions: ["Marco Zero", "Ricardo Brennand Institute"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho282828/sport-hotel",
      tickets: "https://ticketmaster.com.br/sport"
    },
    newsFeed: []
  },
  {
    name: "Juventude",
    league: "Brasileirão Série A",
    city: "Caxias do Sul",
    stadium: "Alfredo Jaconi",
    capacity: 19924,
    tour: true,
    fanZonePub: "Bar Juventude",
    transport: "Caxias Station + walk",
    attractions: ["Parque da Festa da Uva", "Immigrant Museum"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho292929/juventude-hotel",
      tickets: "https://ticketmaster.com.br/juventude"
    },
    newsFeed: []
  },

  // ... Argentina Primera División Teams
  {
    name: "Boca Juniors",
    league: "Primera División",
    city: "Buenos Aires",
    stadium: "La Bombonera",
    capacity: 54000,
    tour: true,
    fanZonePub: "La Boca Bar",
    transport: "Constitución Station + taxi",
    attractions: ["Caminito", "San Telmo Market"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho606060/boca-hotel",
      tickets: "https://ticketmaster.com.ar/boca"
    },
    newsFeed: []
  },
  {
    name: "River Plate",
    league: "Primera División",
    city: "Buenos Aires",
    stadium: "Estadio Monumental",
    capacity: 83000,
    tour: true,
    fanZonePub: "Bar Monumental",
    transport: "Belgrano Station",
    attractions: ["Recoleta Cemetery", "Palermo Parks"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho616161/river-hotel",
      tickets: "https://ticketmaster.com.ar/river"
    },
    newsFeed: []
  },
  {
    name: "San Lorenzo",
    league: "Primera División",
    city: "Buenos Aires",
    stadium: "Estadio Pedro Bidegain",
    capacity: 47000,
    tour: true,
    fanZonePub: "Bar Cuervo",
    transport: "Flores Station + bus",
    attractions: ["Plaza de Mayo", "Obelisco"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho626262/sanlorenzo-hotel",
      tickets: "https://ticketmaster.com.ar/san-lorenzo"
    },
    newsFeed: []
  },
  {
    name: "Racing Club",
    league: "Primera División",
    city: "Avellaneda",
    stadium: "Estadio Presidente Perón",
    capacity: 51000,
    tour: true,
    fanZonePub: "Bar Academia",
    transport: "Avellaneda Station",
    attractions: ["Quilmes Waterfront", "Historic Stadium District"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho636363/racing-hotel",
      tickets: "https://ticketmaster.com.ar/racing"
    },
    newsFeed: []
  },
  {
    name: "Independiente",
    league: "Primera División",
    city: "Avellaneda",
    stadium: "Estadio Libertadores de América",
    capacity: 48000,
    tour: true,
    fanZonePub: "Bar Rojo",
    transport: "Avellaneda Station",
    attractions: ["Museo del Fútbol", "Parque Dominico"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho646464/independiente-hotel",
      tickets: "https://ticketmaster.com.ar/independiente"
    },
    newsFeed: []
  },
  {
    name: "Vélez Sarsfield",
    league: "Primera División",
    city: "Buenos Aires",
    stadium: "José Amalfitani",
    capacity: 49000,
    tour: true,
    fanZonePub: "Bar Fortinero",
    transport: "Liniers Station",
    attractions: ["Parque Avellaneda", "Mataderos Market"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho656565/velez-hotel",
      tickets: "https://ticketmaster.com.ar/velez"
    },
    newsFeed: []
  },
  {
    name: "Huracán",
    league: "Primera División",
    city: "Buenos Aires",
    stadium: "Estadio Tomás Adolfo Ducó",
    capacity: 48000,
    tour: true,
    fanZonePub: "Bar Globo",
    transport: "Parque Patricios Metro",
    attractions: ["Parque Patricios", "Barracas District"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho666666/huracan-hotel",
      tickets: "https://ticketmaster.com.ar/huracan"
    },
    newsFeed: []
  },
  {
    name: "Argentinos Juniors",
    league: "Primera División",
    city: "Buenos Aires",
    stadium: "Diego Armando Maradona",
    capacity: 25000,
    tour: true,
    fanZonePub: "Bar Maradona",
    transport: "La Paternal Station",
    attractions: ["Maradona Museum", "Villa Crespo"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho676767/argentinos-hotel",
      tickets: "https://ticketmaster.com.ar/argentinos"
    },
    newsFeed: []
  },
  {
    name: "Lanús",
    league: "Primera División",
    city: "Lanús",
    stadium: "Estadio Ciudad de Lanús",
    capacity: 47000,
    tour: true,
    fanZonePub: "Bar Granate",
    transport: "Lanús Station",
    attractions: ["Lanús Park", "Local Artisan Market"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho686868/lanus-hotel",
      tickets: "https://ticketmaster.com.ar/lanus"
    },
    newsFeed: []
  },
  {
    name: "Platense",
    league: "Primera División",
    city: "Vicente López",
    stadium: "Estadio Ciudad de Vicente López",
    capacity: 31000,
    tour: true,
    fanZonePub: "Bar Calamar",
    transport: "Vicente López Station",
    attractions: ["Riverfront Walk", "Local Cafés"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho696969/platense-hotel",
      tickets: "https://ticketmaster.com.ar/platense"
    },
    newsFeed: []
  },
  {
    name: "Defensa y Justicia",
    league: "Primera División",
    city: "Florencio Varela",
    stadium: "Norberto Tomaghello",
    capacity: 12000,
    tour: true,
    fanZonePub: "Bar Halcón",
    transport: "Florencio Varela Station",
    attractions: ["Local Plaza", "Nature Reserve"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho707070/defensa-hotel",
      tickets: "https://ticketmaster.com.ar/defensa"
    },
    newsFeed: []
  },
  {
    name: "Banfield",
    league: "Primera División",
    city: "Banfield",
    stadium: "Florencio Sola",
    capacity: 34901,
    tour: true,
    fanZonePub: "Bar Taladro",
    transport: "Banfield Station",
    attractions: ["Historic District", "Local Brewery"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho717171/banfield-hotel",
      tickets: "https://ticketmaster.com.ar/banfield"
    },
    newsFeed: []
  },
  {
    name: "Barracas Central",
    league: "Primera División",
    city: "Buenos Aires",
    stadium: "Claudio Tapia",
    capacity: 4400,
    tour: true,
    fanZonePub: "Bar Barracas",
    transport: "Barracas Station",
    attractions: ["Barracas Murals", "Historic Warehouses"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho727272/barracas-hotel",
      tickets: "https://ticketmaster.com.ar/barracas"
    },
    newsFeed: []
  },
  {
    name: "Deportivo Riestra",
    league: "Primera División",
    city: "Buenos Aires",
    stadium: "Guillermo Laza",
    capacity: 3000,
    tour: true,
    fanZonePub: "Bar Riestra",
    transport: "Villa Lugano Station",
    attractions: ["Local Street Art", "Community Markets"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho737373/riestra-hotel",
      tickets: "https://ticketmaster.com.ar/riestra"
    },
    newsFeed: []
  },
{
    name: "Rosario Central",
    league: "Primera División",
    city: "Rosario",
    stadium: "Estadio Gigante de Arroyito",
    capacity: 41295,
    tour: true,
    fanZonePub: "Bar Canalla",
    transport: "Rosario Norte Station",
    attractions: ["Parque Independencia", "Flag Monument"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho747474/rosario-hotel",
      tickets: "https://ticketmaster.com.ar/rosario"
    },
    newsFeed: []
  },
  {
    name: "Newell's Old Boys",
    league: "Primera División",
    city: "Rosario",
    stadium: "Estadio Marcelo Bielsa",
    capacity: 42000,
    tour: true,
    fanZonePub: "Bar Leproso",
    transport: "Rosario Sur Station",
    attractions: ["Museo Castagnino", "Costanera Rosario"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho757575/newells-hotel",
      tickets: "https://ticketmaster.com.ar/newells"
    },
    newsFeed: []
  },
  {
    name: "Estudiantes de La Plata",
    league: "Primera División",
    city: "La Plata",
    stadium: "Estadio Jorge Luis Hirschi",
    capacity: 30018,
    tour: true,
    fanZonePub: "Bar Pincha",
    transport: "La Plata Station",
    attractions: ["La Plata Cathedral", "Museum of Natural Sciences"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho767676/estudiantes-hotel",
      tickets: "https://ticketmaster.com.ar/estudiantes"
    },
    newsFeed: []
  },
  {
    name: "Gimnasia y Esgrima La Plata",
    league: "Primera División",
    city: "La Plata",
    stadium: "Estadio Juan Carmelo Zerillo",
    capacity: 31000,
    tour: true,
    fanZonePub: "Bar Tripero",
    transport: "La Plata Station + bus",
    attractions: ["Republica de los Niños", "City Zoo"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho777777/gimnasia-hotel",
      tickets: "https://ticketmaster.com.ar/gimnasia"
    },
    newsFeed: []
  },
  {
    name: "Tigre",
    league: "Primera División",
    city: "Victoria",
    stadium: "Estadio José Dellagiovanna",
    capacity: 26000,
    tour: true,
    fanZonePub: "Bar Matador",
    transport: "Tigre Station",
    attractions: ["Delta River Cruise", "Puerto de Frutos"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho787878/tigre-hotel",
      tickets: "https://ticketmaster.com.ar/tigre"
    },
    newsFeed: []
  },
  {
    name: "Godoy Cruz",
    league: "Primera División",
    city: "Mendoza",
    stadium: "Estadio Malvinas Argentinas",
    capacity: 42000,
    tour: true,
    fanZonePub: "Bar Tomba",
    transport: "Mendoza Station + taxi",
    attractions: ["Wine Tours", "Parque General San Martín"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho797979/godoy-hotel",
      tickets: "https://ticketmaster.com.ar/godoy-cruz"
    },
    newsFeed: []
  },
  {
    name: "Belgrano",
    league: "Primera División",
    city: "Córdoba",
    stadium: "Estadio Julio César Villagra",
    capacity: 30000,
    tour: true,
    fanZonePub: "Bar Pirata",
    transport: "Córdoba Station",
    attractions: ["Jesuit Block", "Sarmiento Park"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho808080/belgrano-hotel",
      tickets: "https://ticketmaster.com.ar/belgrano"
    },
    newsFeed: []
  },
  {
    name: "Talleres",
    league: "Primera División",
    city: "Córdoba",
    stadium: "Estadio Mario Alberto Kempes",
    capacity: 57000,
    tour: true,
    fanZonePub: "Bar Albiazul",
    transport: "Córdoba Station + taxi",
    attractions: ["Cerro de las Rosas", "Botanical Garden"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho818181/talleres-hotel",
      tickets: "https://ticketmaster.com.ar/talleres"
    },
    newsFeed: []
  },
  {
    name: "Instituto",
    league: "Primera División",
    city: "Córdoba",
    stadium: "Estadio Presidente Perón (Alta Córdoba)",
    capacity: 30000,
    tour: true,
    fanZonePub: "Bar Glorioso",
    transport: "Alta Córdoba Station",
    attractions: ["Historic Centre", "Museo de la Industria"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho828282/instituto-hotel",
      tickets: "https://ticketmaster.com.ar/instituto"
    },
    newsFeed: []
  },
  {
    name: "Atlético Tucumán",
    league: "Primera División",
    city: "San Miguel de Tucumán",
    stadium: "Estadio Monumental José Fierro",
    capacity: 35000,
    tour: true,
    fanZonePub: "Bar Decano",
    transport: "Tucumán Station",
    attractions: ["Casa Histórica", "Parque 9 de Julio"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho838383/tucuman-hotel",
      tickets: "https://ticketmaster.com.ar/tucuman"
    },
    newsFeed: []
  },
  {
    name: "Central Córdoba (SdE)",
    league: "Primera División",
    city: "Santiago del Estero",
    stadium: "Estadio Único Madre de Ciudades",
    capacity: 30000,
    tour: true,
    fanZonePub: "Bar Ferroviario",
    transport: "Santiago Station",
    attractions: ["Thermal Baths", "Cultural Centre"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho848484/cordoba-hotel",
      tickets: "https://ticketmaster.com.ar/central-cordoba"
    },
    newsFeed: []
  },
  {
    name: "Unión de Santa Fe",
    league: "Primera División",
    city: "Santa Fe",
    stadium: "Estadio 15 de Abril",
    capacity: 28000,
    tour: true,
    fanZonePub: "Bar Tatengue",
    transport: "Santa Fe Station",
    attractions: ["Suspension Bridge", "Historic Waterfront"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho858585/union-hotel",
      tickets: "https://ticketmaster.com.ar/union"
    },
    newsFeed: []
  },
  {
    name: "Colón",
    league: "Primera División",
    city: "Santa Fe",
    stadium: "Estadio Brigadier General Estanislao López",
    capacity: 40000,
    tour: true,
    fanZonePub: "Bar Sabalero",
    transport: "Santa Fe Station + walk",
    attractions: ["Costanera", "Museo Provincial"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho868686/colon-hotel",
      tickets: "https://ticketmaster.com.ar/colon"
    },
    newsFeed: []
  },
  {
    name: "San Martín (SJ)",
    league: "Primera División",
    city: "San Juan",
    stadium: "Estadio Hilario Sánchez",
    capacity: 25000,
    tour: true,
    fanZonePub: "Bar Verdinegro",
    transport: "San Juan Station",
    attractions: ["Wine Route", "Ischigualasto Park"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho878787/sanmartin-hotel",
      tickets: "https://ticketmaster.com.ar/san-martin"
    },
    newsFeed: []
  },
  {
    name: "Aldosivi",
    league: "Primera División",
    city: "Mar del Plata",
    stadium: "Estadio José María Minella",
    capacity: 35000,
    tour: true,
    fanZonePub: "Bar Tiburón",
    transport: "Mar del Plata Station",
    attractions: ["Bristol Beach", "Aquarium"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho888888/aldosivi-hotel",
      tickets: "https://ticketmaster.com.ar/aldosivi"
    },
    newsFeed: []
  },

// ... Rest of the world teams

{
    name: "Inter Miami CF",
    league: "MLS",
    city: "Fort Lauderdale",
    stadium: "Chase Stadium",
    capacity: 21000,
    tour: true,
    fanZonePub: "Vice City Bar",
    transport: "Fort Lauderdale Airport + shuttle",
    attractions: ["South Beach", "Wynwood Walls"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho505050/intermiami-hotel",
      tickets: "https://ticketmaster.com/inter-miami"
    },
    newsFeed: []
  },
  {
    name: "Galatasaray SK",
    league: "Süper Lig",
    city: "Istanbul",
    stadium: "Rams Park",
    capacity: 52650,
    tour: true,
    fanZonePub: "Aslanlar Meyhanesi",
    transport: "Seyrantepe Metro Station",
    attractions: ["Bosphorus Cruise", "Hagia Sophia"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho515151/galatasaray-hotel",
      tickets: "https://ticketmaster.com.tr/galatasaray"
    },
    newsFeed: []
  },
  {
    name: "Fenerbahçe SK",
    league: "Süper Lig",
    city: "Istanbul",
    stadium: "Şükrü Saracoğlu Stadium",
    capacity: 47500,
    tour: true,
    fanZonePub: "Kadıköy Corner",
    transport: "Kadıköy Ferry + Metro",
    attractions: ["Moda Seaside", "Grand Bazaar"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho525252/fenerbahce-hotel",
      tickets: "https://ticketmaster.com.tr/fenerbahce"
    },
    newsFeed: []
  },
  {
    name: "Rangers FC",
    league: "Scottish Premiership",
    city: "Glasgow",
    stadium: "Ibrox Stadium",
    capacity: 50817,
    tour: true,
    fanZonePub: "The Louden Tavern",
    transport: "Ibrox Subway Station",
    attractions: ["Kelvingrove Art Gallery", "Loch Lomond day trip"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho535353/rangers-hotel",
      tickets: "https://ticketmaster.co.uk/rangers"
    },
    newsFeed: []
  },
  {
    name: "Celtic FC",
    league: "Scottish Premiership",
    city: "Glasgow",
    stadium: "Celtic Park",
    capacity: 60411,
    tour: true,
    fanZonePub: "The Brazen Head",
    transport: "Dalmarnock Station",
    attractions: ["Glasgow Cathedral", "Merchant City"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho545454/celtic-hotel",
      tickets: "https://ticketmaster.co.uk/celtic"
    },
    newsFeed: []
  },
  {
    name: "Hibernian FC",
    league: "Scottish Premiership",
    city: "Edinburgh",
    stadium: "Easter Road",
    capacity: 20500,
    tour: true,
    fanZonePub: "The Persevere Bar",
    transport: "Edinburgh Waverley + walk",
    attractions: ["Arthur’s Seat", "Royal Mile"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho555555/hibs-hotel",
      tickets: "https://ticketmaster.co.uk/hibernian"
    },
    newsFeed: []
  },
  {
    name: "Slavia Prague",
    league: "Czech First League",
    city: "Prague",
    stadium: "Fortuna Arena",
    capacity: 19370,
    tour: true,
    fanZonePub: "Café Eden",
    transport: "Vršovice Station",
    attractions: ["Charles Bridge", "Old Town Square"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho565656/slavia-hotel",
      tickets: "https://ticketmaster.cz/slavia"
    },
    newsFeed: []
  },
  {
    name: "Sparta Prague",
    league: "Czech First League",
    city: "Prague",
    stadium: "epet ARENA",
    capacity: 19000,
    tour: true,
    fanZonePub: "Letná Beer Garden",
    transport: "Sparta Tram Stop",
    attractions: ["Prague Castle", "Letná Park"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho575757/sparta-hotel",
      tickets: "https://ticketmaster.cz/sparta"
    },
    newsFeed: []
  },
  {
    name: "Club América",
    league: "Liga MX",
    city: "Mexico City",
    stadium: "Estadio Azteca",
    capacity: 87000,
    tour: true,
    fanZonePub: "Cantina Águila",
    transport: "Estadio Azteca Metro",
    attractions: ["Chapultepec Castle", "Zócalo"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho585858/america-hotel",
      tickets: "https://ticketmaster.com.mx/america"
    },
    newsFeed: []
  },
  
{
    name: "FK Bodø/Glimt",
    league: "Eliteserien",
    city: "Bodø",
    stadium: "Arctic Arena",
    capacity: 10000,
    tour: true,
    fanZonePub: "Bar Glimt",
    transport: "Bodø Airport + walk",
    attractions: ["Northern Lights", "Saltstraumen Maelstrom"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho909090/bodo-hotel",
      tickets: "https://ticketmaster.no/bodoglimt"
    },
    newsFeed: []
  },
  {
    name: "Sogndal Fotball",
    league: "Norwegian First Division",
    city: "Sogndal",
    stadium: "Fosshaugane Campus",
    capacity: 5500,
    tour: true,
    fanZonePub: "Café Fjord",
    transport: "Sogndal Airport + bus",
    attractions: ["Sognefjord", "Jotunheimen National Park"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho919191/sogndal-hotel",
      tickets: "https://ticketmaster.no/sogndal"
    },
    newsFeed: []
  },
  {
    name: "Henningsvær IL",
    league: "Amateur",
    city: "Henningsvær, Lofoten",
    stadium: "Henningsvær Stadion",
    capacity: 500,
    tour: true,
    fanZonePub: "Café Lofoten",
    transport: "Leknes Airport + drive",
    attractions: ["Arctic fishing village", "Midnight sun views"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho929292/lofoten-hotel",
      tickets: "https://ticketmaster.no/henningsvaer"
    },
    newsFeed: []
  },
  {
    name: "HNK Trogir",
    league: "Croatian Third Division",
    city: "Trogir",
    stadium: "Igraliste Batarija",
    capacity: 1000,
    tour: true,
    fanZonePub: "Bar Kamerlengo",
    transport: "Split Airport + bus",
    attractions: ["UNESCO Old Town", "Kamerlengo Fortress"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho939393/trogir-hotel",
      tickets: "https://ticketmaster.hr/trogir"
    },
    newsFeed: []
  },
  {
    name: "Tasiilaq FC",
    league: "Greenlandic Championship",
    city: "Tasiilaq",
    stadium: "Tasiilaq Stadium",
    capacity: 800,
    tour: true,
    fanZonePub: "Café Iceberg",
    transport: "Helicopter from Kulusuk",
    attractions: ["Qimmeertaajaliip Qaqqartivaa Mountain", "Arctic fjords"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho949494/tasiilaq-hotel",
      tickets: "https://ticketmaster.gl/tasiilaq"
    },
    newsFeed: []
  },
  {
    name: "Qeqertarsuaq FC",
    league: "Greenlandic Championship",
    city: "Disko Island",
    stadium: "Qeqertarsuaq Pitch",
    capacity: 600,
    tour: true,
    fanZonePub: "Bar Disko",
    transport: "Boat from Ilulissat",
    attractions: ["Icebergs", "Whale watching"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho959595/disko-hotel",
      tickets: "https://ticketmaster.gl/qeqertarsuaq"
    },
    newsFeed: []
  },
  {
    name: "Adidas Futsal Park",
    league: "Urban Futsal",
    city: "Tokyo",
    stadium: "Adidas Futsal Park Shibuya",
    capacity: 200,
    tour: true,
    fanZonePub: "Café Shibuya",
    transport: "Shibuya Station",
    attractions: ["Shibuya Crossing", "Tokyo Tower"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho969696/tokyo-hotel",
      tickets: "https://ticketmaster.jp/adidas-park"
    },
    newsFeed: []
  },
  {
    name: "The Float @ Marina Bay",
    league: "Multi-use",
    city: "Singapore",
    stadium: "The Float",
    capacity: 30000,
    tour: true,
    fanZonePub: "Café Marina",
    transport: "Bayfront MRT",
    attractions: ["Gardens by the Bay", "Marina Bay Sands"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho979797/singapore-hotel",
      tickets: "https://ticketmaster.sg/marina-float"
    },
    newsFeed: []
  },
  {
    name: "Reethi Rah FC",
    league: "Resort League",
    city: "Malé Atoll",
    stadium: "Reethi Rah Beach Pitch",
    capacity: 100,
    tour: true,
    fanZonePub: "Café Coral",
    transport: "Seaplane from Malé",
    attractions: ["Private beaches", "Snorkeling reefs"],
    affiliate: {
      hotel: "https://uk.hotels.com/ho989898/maldives-hotel",
      tickets: "https://ticketmaster.mv/reethi-rah"
    },
    newsFeed: []
  }
  


];


export { clubs };
// This code defines an array of football clubs with their details such as name, league, city, stadium, capacity, tour availability, fan zone pub, transport options, attractions, affiliate links for hotels and tickets, and an empty news feed.
// The clubs include teams from Brazil's Brasileirão Série A, Argentina's Primera División, and other international teams from leagues like MLS, Süper Lig, Scottish Premiership, and more. Each club has a structured object containing relevant information for fans and tourists.  
// The clubs are exported for use in other parts of the application, allowing for easy access to club information.
// The code is structured to be easily extendable, allowing for the addition of more clubs or modifications to existing club details as needed.

