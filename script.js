// A Certain Kind of Cinema: my film collection and the main website functions.
// I keep the movie data first, then the matching rules, then the page controls.
// I add the big screen, DVD shelf and audience in the sections below.
// I keep my films together in this array. Each one has a title, year, genres,
// moods, language, platforms and a short recommendation in note.
// I use the same spelling for these values as the inputs in index.html.
// The platform lists are a saved snapshot for Spain, so they can become outdated.
const movies = [
  {
    title: "Parasite",
    note: "A class satire that turns into a thriller you won't see coming.",
    year: 2019,
    genres: ["thriller", "drama"],
    moods: ["tense", "thoughtful"],
    language: "Korean",
    platforms: ["Netflix", "Prime Video"]
  },
  {
    title: "Mad Max: Fury Road",
    note: "Two hours of pure adrenaline, and the stunts are mostly real.",
    year: 2015,
    genres: ["action", "sci-fi"],
    moods: ["tense"],
    language: "English",
    platforms: ["Prime Video", "Apple TV", "HBO Max", "Movistar Plus+"]
  },
  {
    title: "Die Hard",
    note: "The perfect action movie, and yes, it counts as a Christmas film.",
    year: 1988,
    genres: ["action", "thriller"],
    moods: ["tense", "funny"],
    language: "English",
    platforms: ["Disney+"]
  },
  {
    title: "The Shining",
    note: "Slow, creepy and beautifully shot. Watch it with the lights on.",
    year: 1980,
    genres: ["horror"],
    moods: ["dark", "tense"],
    language: "English",
    platforms: ["Netflix", "Movistar Plus+"]
  },
  {
    title: "Get Out",
    note: "A horror movie that is also sharp, smart and funny.",
    year: 2017,
    genres: ["horror", "thriller"],
    moods: ["tense", "thoughtful"],
    language: "English",
    platforms: ["Prime Video", "Movistar Plus+", "SkyShowtime"]
  },
  {
    title: "Spirited Away",
    note: "Pure magic. Every frame looks like a painting.",
    year: 2001,
    genres: ["animation", "fantasy", "family"],
    moods: ["emotional"],
    language: "Japanese",
    platforms: ["Netflix"]
  },
  {
    title: "Coco",
    note: "Colourful, musical, and it will make you call your family.",
    year: 2017,
    genres: ["animation", "family"],
    moods: ["emotional", "feel-good"],
    language: "English",
    platforms: ["Disney+"]
  },
  {
    title: "Up",
    note: "The first ten minutes alone are worth it. Bring tissues.",
    year: 2009,
    genres: ["animation", "family"],
    moods: ["emotional", "feel-good"],
    language: "English",
    platforms: ["Disney+"]
  },
  {
    title: "La La Land",
    note: "Songs, colour and a love story that stays with you.",
    year: 2016,
    genres: ["romance", "drama"],
    moods: ["emotional"],
    language: "English",
    platforms: ["Prime Video"]
  },
  {
    title: "Mar adentro",
    note: "A quiet, powerful Spanish drama about choosing how to live.",
    year: 2004,
    genres: ["drama"],
    moods: ["emotional", "thoughtful"],
    language: "Spanish",
    platforms: ["Netflix", "HBO Max", "Movistar Plus+"]
  },
  {
    title: "Ocho apellidos vascos",
    note: "The Spanish comedy everyone quotes. Easy, silly fun.",
    year: 2014,
    genres: ["comedy"],
    moods: ["funny", "feel-good"],
    language: "Spanish",
    platforms: ["Netflix", "Prime Video"]
  },
  {
    title: "Campeones",
    note: "A feel-good Spanish comedy about a very special basketball team.",
    year: 2018,
    genres: ["comedy", "drama"],
    moods: ["feel-good"],
    language: "Spanish",
    platforms: ["Netflix", "Prime Video", "HBO Max", "Movistar Plus+", "SkyShowtime"]
  },
  {
    title: "La sociedad de la nieve",
    note: "An incredible true survival story, hard to watch but unforgettable.",
    year: 2023,
    genres: ["drama", "thriller"],
    moods: ["emotional", "tense"],
    language: "Spanish",
    platforms: ["Netflix"]
  },
  {
    title: "El hoyo",
    note: "A dark Spanish sci-fi that leaves you thinking for days.",
    year: 2019,
    genres: ["sci-fi", "horror"],
    moods: ["dark", "tense"],
    language: "Spanish",
    platforms: ["Netflix"]
  },
  {
    title: "Arrival",
    note: "Smart, calm sci-fi with an ending that changes everything.",
    year: 2016,
    genres: ["sci-fi", "drama"],
    moods: ["thoughtful"],
    language: "English",
    platforms: ["Netflix"]
  },
  {
    title: "Blade Runner",
    note: "The classic that shaped every sci-fi city you've seen since.",
    year: 1982,
    genres: ["sci-fi"],
    moods: ["dark", "thoughtful"],
    language: "English",
    platforms: ["Prime Video", "HBO Max", "Movistar Plus+"]
  },
  {
    title: "Interstellar",
    note: "Space, time and a father's love. Huge and emotional.",
    year: 2014,
    genres: ["sci-fi", "drama"],
    moods: ["emotional"],
    language: "English",
    platforms: ["Prime Video", "HBO Max", "Movistar Plus+"]
  },
  {
    title: "My Octopus Teacher",
    note: "A gentle documentary about a man's friendship with an octopus.",
    year: 2020,
    genres: ["documentary"],
    moods: ["thoughtful"],
    language: "English",
    platforms: ["Netflix"]
  },
  {
    title: "Free Solo",
    note: "A climber, a 900-metre wall and no ropes. Your palms will sweat.",
    year: 2018,
    genres: ["documentary"],
    moods: ["tense"],
    language: "English",
    platforms: ["Disney+"]
  },
  {
    title: "Groundhog Day",
    note: "The same day over and over, and it never gets old.",
    year: 1993,
    genres: ["comedy", "romance"],
    moods: ["funny"],
    language: "English",
    platforms: ["Movistar Plus+"]
  },
  {
    title: "Rear Window",
    note: "Hitchcock at his best: suspense from one apartment window.",
    year: 1954,
    genres: ["thriller"],
    moods: ["tense"],
    language: "English",
    platforms: ["Movistar Plus+", "SkyShowtime"]
  },
  {
    title: "Roma",
    note: "A beautiful, slow black-and-white portrait of a family in Mexico City.",
    year: 2018,
    genres: ["drama"],
    moods: ["thoughtful"],
    language: "Spanish",
    platforms: ["Netflix"]
  },
  {
    title: "Oldboy",
    note: "Dark, wild and shocking. Not for a relaxed night.",
    year: 2003,
    genres: ["thriller"],
    moods: ["dark"],
    language: "Korean",
    platforms: ["Movistar Plus+"]
  },
  {
    title: "Intouchables",
    note: "A true friendship story that is both funny and moving.",
    year: 2011,
    genres: ["comedy", "drama"],
    moods: ["feel-good", "funny"],
    language: "French",
    platforms: ["Prime Video"]
  },
  {
    title: "Sound of Metal",
    note: "A drummer losing his hearing. The sound design puts you in his head.",
    year: 2019,
    genres: ["drama"],
    moods: ["emotional"],
    language: "English",
    platforms: ["Prime Video", "Movistar Plus+"]
  },

  {
    title: "Wolfwalkers",
    note: "Hand-drawn Irish folklore, full of wolves and magic.",
    year: 2020,
    genres: ["animation", "fantasy", "family"],
    moods: ["emotional", "feel-good"],
    language: "English",
    platforms: ["Apple TV"]
  },
  {
    title: "Greyhound",
    note: "Tense war action at sea, almost in real time.",
    year: 2020,
    genres: ["action", "drama"],
    moods: ["tense"],
    language: "English",
    platforms: ["Apple TV"]
  },
  {
    title: "Killers of the Flower Moon",
    note: "A long, dark true crime story told by Scorsese.",
    year: 2023,
    genres: ["drama", "thriller"],
    moods: ["dark", "thoughtful"],
    language: "English",
    platforms: ["Apple TV"]
  },
  {
    title: "Top Gun: Maverick",
    note: "The rare sequel that's better than the original. Pure fun.",
    year: 2022,
    genres: ["action"],
    moods: ["tense", "feel-good"],
    language: "English",
    platforms: ["Movistar Plus+", "SkyShowtime"]
  },
  {
    title: "Shrek",
    note: "Still one of the funniest animated movies ever made.",
    year: 2001,
    genres: ["animation", "comedy", "fantasy", "family"],
    moods: ["funny", "feel-good"],
    language: "English",
    platforms: ["Netflix", "Prime Video", "Movistar Plus+", "SkyShowtime"]
  },
  {
    title: "Gladiator",
    note: "Epic battles, a great villain and a soundtrack you'll remember.",
    year: 2000,
    genres: ["action", "drama"],
    moods: ["tense", "emotional"],
    language: "English",
    platforms: ["Prime Video", "Movistar Plus+", "SkyShowtime"]
  },
  {
    title: "Back to the Future",
    note: "The ultimate time-travel adventure. Perfect for any age.",
    year: 1985,
    genres: ["sci-fi", "comedy", "family"],
    moods: ["funny", "feel-good"],
    language: "English",
    platforms: ["Prime Video", "Movistar Plus+", "SkyShowtime"]
  },
  {
    title: "Encanto",
    note: "A magical family, great songs, and we don't talk about Bruno.",
    year: 2021,
    genres: ["animation", "fantasy", "family"],
    moods: ["feel-good", "emotional"],
    language: "English",
    platforms: ["Disney+"]
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    note: "Where the greatest fantasy journey begins.",
    year: 2001,
    genres: ["fantasy", "action"],
    moods: ["tense", "emotional"],
    language: "English",
    platforms: ["Prime Video", "Disney+", "Movistar Plus+", "HBO Max"]
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    note: "The cosy start of the magic. Perfect for a rewatch.",
    year: 2001,
    genres: ["fantasy", "family"],
    moods: ["feel-good"],
    language: "English",
    platforms: ["Prime Video", "Movistar Plus+", "HBO Max"]
  },
  {
    title: "Fire of Love",
    note: "A love story between two scientists and the volcanoes they filmed.",
    year: 2022,
    genres: ["documentary"],
    moods: ["thoughtful", "emotional"],
    language: "English",
    platforms: ["Disney+"]
  },
  {
    title: "Pride & Prejudice",
    note: "Rain, glances and slow-burn romance at its finest.",
    year: 2005,
    genres: ["romance", "drama"],
    moods: ["emotional", "feel-good"],
    language: "English",
    platforms: ["Prime Video", "Movistar Plus+"]
  },
  {
    title: "Portrait of a Lady on Fire",
    note: "A quiet, stunning French love story. Every shot is a painting.",
    year: 2019,
    genres: ["romance", "drama"],
    moods: ["emotional", "thoughtful"],
    language: "French",
    platforms: ["Prime Video"]
  },
  {
    title: "Anatomy of a Fall",
    note: "A courtroom drama where you keep changing your mind.",
    year: 2023,
    genres: ["drama", "thriller"],
    moods: ["tense", "thoughtful"],
    language: "French",
    platforms: ["Movistar Plus+", "HBO Max"]
  },
  {
    title: "My Neighbor Totoro",
    note: "The cosiest movie ever made. Instant comfort.",
    year: 1988,
    genres: ["animation", "fantasy", "family"],
    moods: ["feel-good"],
    language: "Japanese",
    platforms: ["Netflix"]
  },
  {
    title: "Your Name",
    note: "A body-swap romance with a twist and a gorgeous sky.",
    year: 2016,
    genres: ["animation", "romance", "fantasy"],
    moods: ["emotional"],
    language: "Japanese",
    platforms: ["Prime Video"]
  },

  {
    title: "When Harry Met Sally...",
    note: "The rom-com that started it all. Can men and women just be friends?",
    year: 1989,
    genres: ["comedy", "romance"],
    moods: ["funny", "feel-good"],
    language: "English",
    platforms: ["Prime Video"]
  },
  {
    title: "10 Things I Hate About You",
    note: "Witty, 90s and iconic. That song on the bleachers!",
    year: 1999,
    genres: ["comedy", "romance"],
    moods: ["funny", "feel-good"],
    language: "English",
    platforms: ["Prime Video", "Disney+", "Movistar Plus+"]
  },
  {
    title: "The Proposal",
    note: "A fake engagement, Alaska, and perfect comedy chemistry.",
    year: 2009,
    genres: ["comedy", "romance"],
    moods: ["funny", "feel-good"],
    language: "English",
    platforms: ["Disney+"]
  },
  {
    title: "Crazy, Stupid, Love",
    note: "Funny, sweet, and that twist at the end is so good.",
    year: 2011,
    genres: ["comedy", "romance", "drama"],
    moods: ["funny", "feel-good"],
    language: "English",
    platforms: ["Movistar Plus+"]
  },
  {
    title: "Crazy Rich Asians",
    note: "Glamorous, funny and very romantic. A total treat.",
    year: 2018,
    genres: ["comedy", "romance"],
    moods: ["funny", "feel-good"],
    language: "English",
    platforms: ["Netflix"]
  },
  {
    title: "How to Lose a Guy in 10 Days",
    note: "Two people trying to win a bet, and losing at love.",
    year: 2003,
    genres: ["comedy", "romance"],
    moods: ["funny", "feel-good"],
    language: "English",
    platforms: ["Movistar Plus+", "HBO Max"]
  },
  {
    title: "Love Actually",
    note: "Many love stories at Christmas. A cosy tradition.",
    year: 2003,
    genres: ["comedy", "romance", "drama"],
    moods: ["feel-good", "emotional"],
    language: "English",
    platforms: ["Prime Video", "Movistar Plus+"]
  },
  {
    title: "Bridget Jones's Diary",
    note: "Messy, relatable and very British. Big diary energy.",
    year: 2001,
    genres: ["comedy", "romance"],
    moods: ["funny", "feel-good"],
    language: "English",
    platforms: ["Netflix", "Prime Video", "Movistar Plus+"]
  },
  {
    title: "13 Going on 30",
    note: "Wake up at 30 and still feel 13. So sweet and nostalgic.",
    year: 2004,
    genres: ["comedy", "romance", "fantasy"],
    moods: ["funny", "feel-good"],
    language: "English",
    platforms: ["Prime Video"]
  },
  {
    title: "Pretty Woman",
    note: "The classic Cinderella rom-com. Still charming.",
    year: 1990,
    genres: ["comedy", "romance"],
    moods: ["feel-good"],
    language: "English",
    platforms: ["Prime Video", "Disney+"]
  },
  {
    title: "Mamma Mia!",
    note: "ABBA songs, a Greek island and pure joy. Sing along.",
    year: 2008,
    genres: ["comedy", "romance"],
    moods: ["funny", "feel-good"],
    language: "English",
    platforms: ["Apple TV"]
  },
  {
    title: "The Holiday",
    note: "Two women swap houses for Christmas. Cosy and romantic.",
    year: 2006,
    genres: ["comedy", "romance"],
    moods: ["feel-good", "emotional"],
    language: "English",
    platforms: ["Movistar Plus+", "SkyShowtime"]
  },
  {
    title: "Anyone But You",
    note: "Enemies to lovers in Australia. Fun, modern and light.",
    year: 2023,
    genres: ["comedy", "romance"],
    moods: ["funny", "feel-good"],
    language: "English",
    platforms: ["Prime Video", "Movistar Plus+"]
  },
  {
    title: "To All the Boys I've Loved Before",
    note: "Secret love letters get sent out. Sweet teen romance.",
    year: 2018,
    genres: ["comedy", "romance"],
    moods: ["feel-good"],
    language: "English",
    platforms: ["Netflix"]
  },
  {
    title: "Clueless",
    note: "Iconic 90s fashion and lines. As if!",
    year: 1995,
    genres: ["comedy", "romance"],
    moods: ["funny", "feel-good"],
    language: "English",
    platforms: ["Netflix", "Prime Video"]
  },

  {
    title: "A Quiet Place",
    note: "Not a single sound allowed. You'll hold your breath the whole time.",
    year: 2018,
    genres: ["horror", "sci-fi", "thriller"],
    moods: ["tense"],
    language: "English",
    platforms: ["Netflix", "Disney+"]
  },
  {
    title: "Hereditary",
    note: "A family drama that slowly turns into a nightmare. Truly disturbing.",
    year: 2018,
    genres: ["horror", "drama"],
    moods: ["dark", "tense"],
    language: "English",
    platforms: ["Prime Video", "Movistar Plus+"]
  },
  {
    title: "The Conjuring",
    note: "Classic haunted-house scares done perfectly. Don't play hide-and-clap.",
    year: 2013,
    genres: ["horror", "thriller"],
    moods: ["tense", "dark"],
    language: "English",
    platforms: ["Prime Video", "Movistar Plus+", "HBO Max"]
  },
  {
    title: "It",
    note: "Scary clown, great group of friends. Scary and fun at the same time.",
    year: 2017,
    genres: ["horror", "fantasy"],
    moods: ["tense", "dark"],
    language: "English",
    platforms: ["Prime Video", "Movistar Plus+", "HBO Max"]
  },
  {
    title: "Scream",
    note: "The slasher that makes fun of slashers. Smart, scary and iconic.",
    year: 1996,
    genres: ["horror", "thriller"],
    moods: ["tense", "funny"],
    language: "English",
    platforms: ["Netflix", "Movistar Plus+", "SkyShowtime"]
  },
  {
    title: "The Others",
    note: "An elegant ghost story with one of the best twists ever.",
    year: 2001,
    genres: ["horror", "thriller"],
    moods: ["tense", "dark"],
    language: "English",
    platforms: ["Netflix", "Movistar Plus+", "HBO Max"]
  },
  {
    title: "[REC]",
    note: "Spanish found-footage terror in one building. Pure panic.",
    year: 2007,
    genres: ["horror"],
    moods: ["tense", "dark"],
    language: "Spanish",
    platforms: ["Prime Video"]
  },
  {
    title: "El orfanato",
    note: "A Spanish ghost story that is scary and heartbreaking.",
    year: 2007,
    genres: ["horror", "drama"],
    moods: ["tense", "emotional"],
    language: "Spanish",
    platforms: ["Netflix", "Prime Video", "Movistar Plus+"]
  },
  {
    title: "Alien",
    note: "In space, no one can hear you scream. The original and the best.",
    year: 1979,
    genres: ["horror", "sci-fi"],
    moods: ["tense", "dark"],
    language: "English",
    platforms: ["Disney+", "Movistar Plus+"]
  },
  {
    title: "The Exorcist",
    note: "The classic that still scares people 50 years later.",
    year: 1973,
    genres: ["horror"],
    moods: ["dark", "tense"],
    language: "English",
    platforms: ["Prime Video", "Movistar Plus+", "HBO Max"]
  },
  {
    title: "Midsommar",
    note: "Horror in broad daylight. Beautiful flowers, very wrong vibes.",
    year: 2019,
    genres: ["horror", "drama"],
    moods: ["dark", "thoughtful"],
    language: "English",
    platforms: ["Prime Video"]
  },
  {
    title: "Nope",
    note: "Something is hiding in the clouds. Original, big and strange.",
    year: 2022,
    genres: ["horror", "sci-fi"],
    moods: ["tense", "thoughtful"],
    language: "English",
    platforms: ["Movistar Plus+"]
  },
  {
    title: "Talk to Me",
    note: "Teens play with a haunted hand. A modern horror hit.",
    year: 2022,
    genres: ["horror", "thriller"],
    moods: ["tense", "dark"],
    language: "English",
    platforms: ["Prime Video"]
  },
  {
    title: "The Substance",
    note: "Wild, gross and bold. You won't forget it.",
    year: 2024,
    genres: ["horror", "sci-fi", "drama"],
    moods: ["dark", "thoughtful"],
    language: "English",
    platforms: ["Prime Video", "Movistar Plus+", "HBO Max"]
  },
  {
    title: "Smile",
    note: "A smile has never been this creepy. Jump scares guaranteed.",
    year: 2022,
    genres: ["horror", "thriller"],
    moods: ["tense", "dark"],
    language: "English",
    platforms: ["Disney+", "Movistar Plus+", "SkyShowtime"]
  },


  {
    title: "The Dark Knight",
    note: "The best superhero movie ever made, mostly thanks to the Joker.",
    year: 2008,
    genres: ["action", "thriller", "drama"],
    moods: ["dark", "tense"],
    language: "English",
    platforms: ["Netflix", "Prime Video", "Movistar Plus+", "HBO Max"]
  },
  {
    title: "Mission: Impossible – Fallout",
    note: "Real stunts, helicopters and non-stop chases. Pure action.",
    year: 2018,
    genres: ["action", "thriller"],
    moods: ["tense"],
    language: "English",
    platforms: ["Disney+", "Movistar Plus+", "SkyShowtime"]
  },
  {
    title: "Kill Bill: Vol. 1",
    note: "Stylish, bloody and very Tarantino. Revenge has never looked this cool.",
    year: 2003,
    genres: ["action", "thriller"],
    moods: ["tense", "dark"],
    language: "English",
    platforms: ["Netflix"]
  },
  {
    title: "The Matrix",
    note: "Red pill or blue pill? It changed action movies forever.",
    year: 1999,
    genres: ["action", "sci-fi"],
    moods: ["tense", "thoughtful"],
    language: "English",
    platforms: ["Prime Video", "Movistar Plus+", "HBO Max"]
  },
  {
    title: "Raiders of the Lost Ark",
    note: "The ultimate adventure movie. Hat, whip and a giant rolling boulder.",
    year: 1981,
    genres: ["action", "family"],
    moods: ["feel-good", "tense"],
    language: "English",
    platforms: ["Movistar Plus+", "SkyShowtime"]
  },
  {
    title: "Avengers: Endgame",
    note: "The huge finale of ten years of Marvel. Epic and emotional.",
    year: 2019,
    genres: ["action", "sci-fi", "fantasy"],
    moods: ["emotional", "tense"],
    language: "English",
    platforms: ["Disney+"]
  },
  {
    title: "Jurassic Park",
    note: "Dinosaurs that still look real today. A true classic.",
    year: 1993,
    genres: ["action", "sci-fi", "family"],
    moods: ["tense", "feel-good"],
    language: "English",
    platforms: ["Prime Video", "Apple TV", "Movistar Plus+", "SkyShowtime"]
  },
  {
    title: "Spider-Man: Into the Spider-Verse",
    note: "Looks like a comic book come to life. Fresh, funny and stylish.",
    year: 2018,
    genres: ["animation", "action", "family"],
    moods: ["feel-good", "funny"],
    language: "English",
    platforms: ["Disney+", "Movistar Plus+", "HBO Max"]
  },
  {
    title: "Toy Story",
    note: "The movie that started Pixar. Still funny at any age.",
    year: 1995,
    genres: ["animation", "family", "comedy"],
    moods: ["feel-good", "funny"],
    language: "English",
    platforms: ["Disney+"]
  },
  {
    title: "Inside Out",
    note: "A trip inside a girl's emotions. Smart and very moving.",
    year: 2015,
    genres: ["animation", "family", "comedy"],
    moods: ["emotional", "feel-good"],
    language: "English",
    platforms: ["Disney+"]
  },
  {
    title: "Ratatouille",
    note: "A rat who wants to be a chef in Paris. Pure charm.",
    year: 2007,
    genres: ["animation", "family", "comedy"],
    moods: ["feel-good", "funny"],
    language: "English",
    platforms: ["Disney+"]
  },
  {
    title: "Howl's Moving Castle",
    note: "A walking castle, a curse and a lot of magic. Ghibli at its best.",
    year: 2004,
    genres: ["animation", "fantasy", "romance"],
    moods: ["emotional", "feel-good"],
    language: "Japanese",
    platforms: ["Netflix"]
  },
  {
    title: "Finding Nemo",
    note: "Just keep swimming. Funny, colourful and full of heart.",
    year: 2003,
    genres: ["animation", "family", "comedy"],
    moods: ["feel-good", "funny"],
    language: "English",
    platforms: ["Disney+"]
  },
  {
    title: "The Social Dilemma",
    note: "You'll want to put your phone down after watching this.",
    year: 2020,
    genres: ["documentary"],
    moods: ["thoughtful"],
    language: "English",
    platforms: ["Netflix"]
  },
  {
    title: "Icarus",
    note: "Starts as a cycling experiment and turns into a real spy story.",
    year: 2017,
    genres: ["documentary", "thriller"],
    moods: ["tense", "thoughtful"],
    language: "English",
    platforms: ["Netflix"]
  },
  {
    title: "American Factory",
    note: "A Chinese company opens a factory in Ohio. Fascinating culture clash.",
    year: 2019,
    genres: ["documentary"],
    moods: ["thoughtful"],
    language: "English",
    platforms: ["Netflix"]
  },
  {
    title: "Seaspiracy",
    note: "What really happens in our oceans. Hard to forget.",
    year: 2021,
    genres: ["documentary"],
    moods: ["thoughtful", "dark"],
    language: "English",
    platforms: ["Netflix"]
  },
  {
    title: "Fyre",
    note: "The luxury festival that turned into a disaster. Unbelievable but true.",
    year: 2019,
    genres: ["documentary", "comedy"],
    moods: ["funny", "thoughtful"],
    language: "English",
    platforms: ["Netflix"]
  },
  {
    title: "Amy",
    note: "Amy Winehouse in her own words and songs. Beautiful and sad.",
    year: 2015,
    genres: ["documentary", "drama"],
    moods: ["emotional"],
    language: "English",
    platforms: ["Prime Video", "Movistar Plus+"]
  },
  {
    title: "Miss Americana",
    note: "Taylor Swift behind the scenes, finding her own voice.",
    year: 2020,
    genres: ["documentary"],
    moods: ["thoughtful", "feel-good"],
    language: "English",
    platforms: ["Netflix"]
  },
  {
    title: "March of the Penguins",
    note: "Penguins walking miles for their babies. Perfect for the whole family.",
    year: 2005,
    genres: ["documentary", "family"],
    moods: ["feel-good", "emotional"],
    language: "French",
    platforms: ["Prime Video"]
  },
  {
    title: "Becoming",
    note: "Michelle Obama's story on her book tour. Inspiring and warm.",
    year: 2020,
    genres: ["documentary"],
    moods: ["thoughtful", "feel-good"],
    language: "English",
    platforms: ["Netflix"]
  },
  {
    title: "Navalny",
    note: "Plays like a spy thriller, but it all really happened.",
    year: 2022,
    genres: ["documentary", "thriller"],
    moods: ["tense", "thoughtful"],
    language: "English",
    platforms: ["Movistar Plus+", "HBO Max"]
  },
  {
    title: "20 Days in Mariupol",
    note: "Oscar-winning reporting from inside a city at war. Very hard but important.",
    year: 2023,
    genres: ["documentary"],
    moods: ["emotional", "dark"],
    language: "Ukrainian",
    platforms: ["Movistar Plus+"]
  },
  {
    title: "The Great Hack",
    note: "How your data was used to change elections. Eye-opening.",
    year: 2019,
    genres: ["documentary", "thriller"],
    moods: ["tense", "thoughtful"],
    language: "English",
    platforms: ["Netflix"]
  },


  {
    title: "Little Miss Sunshine",
    note: "A chaotic family road trip that is hilarious and heartwarming.",
    year: 2006,
    genres: ["comedy", "drama", "family"],
    moods: ["funny", "emotional", "feel-good"],
    language: "English",
    platforms: ["Disney+"]
  },
  {
    title: "Everything Everywhere All at Once",
    note: "Kung fu, multiverses and a mother-daughter story. It has everything.",
    year: 2022,
    genres: ["action", "comedy", "sci-fi", "fantasy"],
    moods: ["funny", "emotional", "thoughtful"],
    language: "English",
    platforms: ["Prime Video"]
  },
  {
    title: "Jojo Rabbit",
    note: "A funny, brave and surprisingly moving satire about growing up in WWII.",
    year: 2019,
    genres: ["comedy", "drama"],
    moods: ["funny", "emotional", "thoughtful"],
    language: "English",
    platforms: ["Disney+"]
  },
  {
    title: "Barbie",
    note: "Pink, funny and smarter than you expect.",
    year: 2023,
    genres: ["comedy", "fantasy"],
    moods: ["funny", "thoughtful", "feel-good"],
    language: "English",
    platforms: ["Netflix", "Prime Video", "Movistar Plus+", "HBO Max"]
  },
  {
    title: "The Grand Budapest Hotel",
    note: "Every frame looks like a pastel postcard. Quirky and delightful.",
    year: 2014,
    genres: ["comedy", "drama"],
    moods: ["funny", "thoughtful"],
    language: "English",
    platforms: ["Disney+", "Movistar Plus+"]
  },
  {
    title: "Good Will Hunting",
    note: "A genius who needs a friend more than a job. It's not your fault.",
    year: 1997,
    genres: ["drama"],
    moods: ["emotional", "feel-good", "thoughtful"],
    language: "English",
    platforms: ["Netflix", "Movistar Plus+"]
  },
  {
    title: "Dead Poets Society",
    note: "The teacher everyone wishes they had. Carpe diem.",
    year: 1989,
    genres: ["drama"],
    moods: ["emotional", "thoughtful", "feel-good"],
    language: "English",
    platforms: ["Prime Video", "Disney+"]
  },
  {
    title: "Big Fish",
    note: "A father's tall tales become a beautiful, magical goodbye.",
    year: 2003,
    genres: ["fantasy", "drama", "comedy"],
    moods: ["emotional", "thoughtful", "feel-good"],
    language: "English",
    platforms: ["Movistar Plus+"]
  },
  {
    title: "Life of Pi",
    note: "A boy and a tiger lost at sea. Stunning to look at.",
    year: 2012,
    genres: ["fantasy", "drama"],
    moods: ["thoughtful", "emotional"],
    language: "English",
    platforms: ["Disney+"]
  },
  {
    title: "Guardians of the Galaxy",
    note: "Space misfits and a great 70s soundtrack. Pure fun.",
    year: 2014,
    genres: ["action", "sci-fi", "comedy"],
    moods: ["funny", "feel-good"],
    language: "English",
    platforms: ["Disney+"]
  },
  {
    title: "Deadpool",
    note: "The superhero who never stops joking. Very rude, very funny.",
    year: 2016,
    genres: ["action", "comedy"],
    moods: ["funny"],
    language: "English",
    platforms: ["Disney+"]
  },
  {
    title: "Kung Fu Panda",
    note: "A clumsy panda becomes a kung fu master. Skadoosh!",
    year: 2008,
    genres: ["animation", "action", "comedy", "family"],
    moods: ["funny", "feel-good"],
    language: "English",
    platforms: ["Prime Video", "Movistar Plus+", "SkyShowtime"]
  },
  {
    title: "Thor: Ragnarok",
    note: "The funniest Marvel movie. Colourful and full of jokes.",
    year: 2017,
    genres: ["action", "comedy", "fantasy"],
    moods: ["funny", "feel-good"],
    language: "English",
    platforms: ["Disney+"]
  },
  {
    title: "Dune",
    note: "Huge desert worlds and an epic story. Watch it on the biggest screen.",
    year: 2021,
    genres: ["sci-fi", "action", "drama"],
    moods: ["thoughtful", "tense"],
    language: "English",
    platforms: ["Prime Video", "Movistar Plus+", "HBO Max"]
  },
  {
    title: "Inception",
    note: "Dreams inside dreams. You'll be talking about the ending for days.",
    year: 2010,
    genres: ["action", "sci-fi", "thriller"],
    moods: ["tense", "thoughtful"],
    language: "English",
    platforms: ["Prime Video", "Movistar Plus+", "HBO Max"]
  },
  {
    title: "The Shape of Water",
    note: "A strange and beautiful fairy tale for adults.",
    year: 2017,
    genres: ["fantasy", "romance", "drama"],
    moods: ["emotional", "thoughtful"],
    language: "English",
    platforms: ["Disney+", "Movistar Plus+"]
  },
  {
    title: "E.T. the Extra-Terrestrial",
    note: "A boy and his alien friend. A classic that still makes people cry.",
    year: 1982,
    genres: ["sci-fi", "family"],
    moods: ["emotional", "feel-good"],
    language: "English",
    platforms: ["Prime Video", "SkyShowtime"]
  },
  {
    title: "WALL-E",
    note: "A lonely robot falls in love. Almost no words, all heart.",
    year: 2008,
    genres: ["animation", "sci-fi", "family", "romance"],
    moods: ["feel-good", "emotional", "thoughtful"],
    language: "English",
    platforms: ["Disney+"]
  }
];








// I check whether a value is already in a list.
function hasItem(list, item) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) {
      return true;
    }
  }
  return false;
}





// I only recommend a film if at least one of its platforms is selected.
function isAvailable(movie, answers) {
  for (let i = 0; i < movie.platforms.length; i++) {
    if (hasItem(answers.platforms, movie.platforms[i])) {
      return true;
    }
  }
  return false;
}




// I accept any genre when none is selected. Otherwise, I need at least one match.
function hasChosenGenre(movie, answers) {
  if (answers.genres.length === 0) {
    return true;
  }
  for (let i = 0; i < answers.genres.length; i++) {
    if (hasItem(movie.genres, answers.genres[i])) {
      return true;
    }
  }
  return false;
}




// I match the chosen mood, unless the visitor leaves it on Surprise me.
function hasChosenMood(movie, answers) {
  if (answers.mood === "any") {
    return true;
  }
  return hasItem(movie.moods, answers.mood);
}


// I use 2010 as the dividing line between older and newer films.
const NEWER_FROM_YEAR = 2010;







// I give two points for each matching genre and two for the mood.
// The era and original language can each add one more point.
function scoreMovie(movie, answers) {
  let score = 0;

  for (let i = 0; i < answers.genres.length; i++) {
    if (hasItem(movie.genres, answers.genres[i])) {
      score = score + 2;
    }
  }

  if (answers.mood === "any" || hasItem(movie.moods, answers.mood)) {
    score = score + 2;
  }

  if (answers.era === "any") {
    score = score + 1;
  } else if (answers.era === "newer" && movie.year >= NEWER_FROM_YEAR) {
    score = score + 1;
  } else if (answers.era === "older" && movie.year < NEWER_FROM_YEAR) {
    score = score + 1;
  }

  if (answers.language === "any" || movie.language === answers.language) {
    score = score + 1;
  }

  return score;
}


// I show six films at a time so the results stay manageable.
const MAX_RESULTS = 6;



// I leave out films with fewer than three points.
const MIN_SCORE = 3;



// I filter the collection and put the strongest matches first.
function getRecommendations(answers) {


  // First I keep the films that fit the platforms, genres and mood.
  const scored = [];
  for (let i = 0; i < movies.length; i++) {
    if (isAvailable(movies[i], answers) && hasChosenGenre(movies[i], answers) && hasChosenMood(movies[i], answers)) {
      scored.push({ movie: movies[i], score: scoreMovie(movies[i], answers) });
    }
  }


  // I work out the highest possible score for these answers.
  const maxScore = answers.genres.length * 2 + 4;




  // I collect the films from the highest score down to the minimum score.
  const results = [];
  for (let s = maxScore; s >= MIN_SCORE; s--) {
    for (let i = 0; i < scored.length; i++) {
      if (scored[i].score === s) {
        results.push(scored[i]);
      }
    }
  }

  return results;
}








// I connect each platform name to its colour class in the stylesheet.
const PLATFORM_CLASS = {
  "Netflix": "brand-netflix",
  "Prime Video": "brand-prime",
  "Disney+": "brand-disney",
  "HBO Max": "brand-hbo",
  "Movistar Plus+": "brand-movistar",
  "Apple TV": "brand-apple",
  "SkyShowtime": "brand-sky"
};




// I collect the values of the checked inputs with this name.
function getCheckedValues(name) {
  const checked = document.querySelectorAll("input[name='" + name + "']:checked");
  const values = [];
  for (let i = 0; i < checked.length; i++) {
    values.push(checked[i].value);
  }
  return values;
}


// I put the current form choices into one object for the matching functions.
function getAnswers() {
  return {
    platforms: getCheckedValues("platform"),
    genres: getCheckedValues("genre"),

    mood: getCheckedValues("mood")[0],
    era: getCheckedValues("era")[0],
    language: document.querySelector("#language").value
  };
}


// I turn an array into a readable list with commas.
function joinList(list) {
  let text = "";
  for (let i = 0; i < list.length; i++) {
    if (i > 0) {
      text = text + ", ";
    }
    text = text + list[i];
  }
  return text;
}


// I show the platforms the visitor selected that also have this film.
function getUserPlatforms(movie, answers) {
  const shared = [];
  for (let i = 0; i < movie.platforms.length; i++) {
    if (hasItem(answers.platforms, movie.platforms[i])) {
      shared.push(movie.platforms[i]);
    }
  }
  return shared;
}

// I use this order when several genres could set a card colour.
const GENRE_PRIORITY = ["horror", "documentary", "animation", "fantasy", "action",
                        "sci-fi", "thriller", "romance", "comedy", "family", "drama"];










// I choose the card colour from the selected genres.
// For a romantic comedy, I use the romcom colour if comedy or romance was selected.
function getMainGenre(movie, answers) {
  const isRomcom = hasItem(movie.genres, "comedy") && hasItem(movie.genres, "romance");
  if (isRomcom && (hasItem(answers.genres, "comedy") || hasItem(answers.genres, "romance"))) {
    return "romcom";
  }
  for (let i = 0; i < GENRE_PRIORITY.length; i++) {
    const genre = GENRE_PRIORITY[i];
    if (hasItem(answers.genres, genre) && hasItem(movie.genres, genre)) {
      return genre;
    }
  }
  if (isRomcom) {
    return "romcom";
  }
  for (let i = 0; i < GENRE_PRIORITY.length; i++) {
    if (hasItem(movie.genres, GENRE_PRIORITY[i])) {
      return GENRE_PRIORITY[i];
    }
  }
  return movie.genres[0];
}







// I use this TMDB key to look up posters and ratings.
// If it is empty, the cards can still use local photos or their colour backgrounds.
const TMDB_KEY = "3f89392a1938b99726e414367aaecf6f";

// I remember successful TMDB searches to avoid repeating the same request.
const posterCache = {};


// I search for the film by title and year, then retry with just the title if needed.
function searchTmdb(movie, showFound) {

  if (TMDB_KEY === "") {
    return;
  }

  if (posterCache[movie.title]) {
    showFound(posterCache[movie.title]);
    return;
  }

  const base = "https://api.themoviedb.org/3/search/movie?api_key=" + TMDB_KEY + "&query=" + encodeURIComponent(movie.title);

  fetch(base + "&year=" + movie.year)
    .then(function (response) { return response.json(); })
    .then(function (data) {
      if (data.results && data.results.length > 0) {

        return data;
      }

      return fetch(base).then(function (response) { return response.json(); });
    })
    .then(function (data) {
      if (data.results && data.results.length > 0) {

        posterCache[movie.title] = data.results[0];
        showFound(data.results[0]);
      }
    })
    .catch(function () {

    });
}



// I turn the title into a lowercase filename with dashes for the assets folder.
function getPhotoFile(title) {


  return "assets/" + title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") + ".jpg";
}


// I try a photo in assets first. If it is missing, I ask TMDB for a poster.
function addPhoto(movie, card) {
  const poster = card.querySelector(".poster");
  const file = getPhotoFile(movie.title);


  const test = new Image();

  test.onload = function () {
    poster.style.backgroundImage = "url(" + file + ")";
    poster.classList.add("has-photo");
  };
  test.onerror = function () {
    addTmdbPhoto(movie, card);
  };

  test.src = file;
}

// I add the poster and rating when the TMDB search finds them.
function addTmdbPhoto(movie, card) {
  searchTmdb(movie, function (found) {
    const poster = card.querySelector(".poster");
    if (found.poster_path) {
      poster.style.backgroundImage = "url(https://image.tmdb.org/t/p/w500" + found.poster_path + ")";
      poster.classList.add("has-photo");
    }
    if (found.vote_average > 0) {
      card.querySelector(".rating").textContent = found.vote_average.toFixed(1);
    }
  });
}


// I remember the results, answers and current page while the visitor browses.
let currentResults = [];
let currentAnswers = {};
let startIndex = 0;
// I keep the mystery game separate from the recommendations and their automatic previews.
let mysteryRound = null;
let mysteryBag = [];
let mysteryRevealing = false;
let mysteryRevealTimer = null;
// I remember watched films in this browser without mixing them with the saved shelf.
let watchedSpotlightTitle = null;
let watchedFilms = [];
try {
  const remembered = JSON.parse(localStorage.getItem('cinema-watched-films') || '[]');
  if (Array.isArray(remembered)) watchedFilms = remembered.filter(function (title) { return typeof title === 'string'; });
} catch (error) { watchedFilms = []; }



// I load the saved film titles when the page opens.
let watchlist = loadWatchlist();


// I read the saved list from this browser, or start with an empty list.
function loadWatchlist() {
  const saved = localStorage.getItem("moviesnow-watchlist");
  if (saved === null) {
    return [];
  }

  return JSON.parse(saved);
}

// I turn the list into text because localStorage only stores strings.
function saveWatchlist() {

  localStorage.setItem("moviesnow-watchlist", JSON.stringify(watchlist));
}

// I add a film if it is new, or remove it if it is already saved.
function toggleWatchlist(title) {
  const position = watchlist.indexOf(title);
  if (position === -1) {
    watchlist.push(title);
  } else {
    watchlist.splice(position, 1);
  }
  saveWatchlist();
  showWatchlist();
}

// I fill the hearts for saved films and update their accessible labels.
function refreshHearts() {
  const hearts = document.querySelectorAll(".heart-button");
  for (let i = 0; i < hearts.length; i++) {
    const title = hearts[i].dataset.title;
    const isSaved = hasItem(watchlist, title);
    hearts[i].classList.toggle("saved", isSaved);
    hearts[i].setAttribute("aria-pressed", isSaved);
    if (isSaved) {
      hearts[i].setAttribute("aria-label", "Remove " + title + " from watchlist");
    } else {
      hearts[i].setAttribute("aria-label", "Save " + title + " to watchlist");
    }
  }
}

// I build the base watchlist here, then add the DVD shelf later in this file.
function showWatchlist() {
  const section = document.querySelector("#watchlist");
  const list = document.querySelector("#watchlist-list");
  list.innerHTML = "";

  for (let i = 0; i < watchlist.length; i++) {
    const title = watchlist[i];
    const button = document.createElement("button");
    button.type = "button";
    button.className = "watchlist-item";
    button.textContent = title + " ×";
    button.setAttribute("aria-label", "Remove " + title + " from watchlist");
    button.addEventListener("click", function () {
      toggleWatchlist(title);
    });
    list.appendChild(button);
  }

  document.querySelector("#watchlist-count").textContent = watchlist.length;
  if (watchlist.length === 0) {
    section.classList.add("hidden");
  } else {
    section.classList.remove("hidden");
  }
  refreshHearts();
}

// I compare the film score with the best possible score to show a percentage.
function getMatchPercent(movie) {


  const maxScore = currentAnswers.genres.length * 2 + 4;
  let percent = Math.round(scoreMovie(movie, currentAnswers) / maxScore * 100);

  if (percent > 100) {
    percent = 100;
  }
  return percent;
}

// I build a card with the poster, details on the back and a separate save button.
function buildCard(movie) {

  const mine = getUserPlatforms(movie, currentAnswers);

  let badges = "";
  for (let i = 0; i < mine.length; i++) {
    badges = badges + '<span class="badge ' + PLATFORM_CLASS[mine[i]] + '">' + mine[i] + "</span>";
  }


  const card = document.createElement("article");
  card.className = "result-card genre-" + getMainGenre(movie, currentAnswers);
  card.dataset.movieTitle = movie.title;
  card.innerHTML =
    '<div class="dvd-case">' +
    '<button type="button" class="poster" aria-label="Open DVD case for ' + movie.title + '" aria-expanded="false">' +
      '<span class="rating"></span>' +
      '<span class="poster-bottom">' +
        '<span class="poster-info">' + movie.year + " · " + joinList(movie.genres) + "</span>" +
        '<span class="poster-title">' + movie.title + "</span>" +
        '<span class="badges">' + badges + "</span>" +
      "</span>" +
    "</button>" +
    '<div class="card-back" aria-hidden="true" inert>' +
      '<span class="case-insert-label">FROM VALENTINA’S FILM COLLECTION</span>' +
      '<h3 tabindex="-1">' + movie.title + "</h3>" +
      '<p class="small">' + movie.year + " · " + movie.language + "</p>" +
      "<p>" + movie.note + "</p>" +
      '<div class="match-label"><span>Match</span><span>' + getMatchPercent(movie) + "%</span></div>" +
      '<div class="match-bar"><div style="width: ' + getMatchPercent(movie) + '%"></div></div>' +
      '<p class="small">Watch on</p>' +
      '<div class="badges">' + badges + "</div>" +
      '<button type="button" class="secondary-button flip-back">Close case</button>' +
    "</div>" +
    '<button type="button" class="heart-button" data-title="' + movie.title + '">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>' +
    "</button></div>";

  // I open the poster like a hinged DVD cover and move keyboard focus into its paper insert.
  const cover = card.querySelector('.poster');
  const insert = card.querySelector('.card-back');
  insert.inert = true;
  function setCaseOpen(open) {
    card.classList.toggle('flipped', open);
    cover.setAttribute('aria-expanded', String(open));
    cover.tabIndex = open ? -1 : 0;
    insert.inert = !open;
    insert.setAttribute('aria-hidden', String(!open));
    if (open) insert.querySelector('h3').focus({preventScroll:true});
    else cover.focus({preventScroll:true});
  }
  cover.addEventListener('click', function () { setCaseOpen(true); });
  card.querySelector('.flip-back').addEventListener('click', function () { setCaseOpen(false); });
  // I let Escape close the case too, without affecting the separate save button.
  card.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && card.classList.contains('flipped')) {
      event.preventDefault();
      setCaseOpen(false);
    }
  });

  // I keep saving a film separate from flipping its card.
  card.querySelector(".heart-button").addEventListener("click", function () {
    toggleWatchlist(movie.title);
  });

  // I make the watch options clickable while keeping the poster button free of nested links.
  const watchOptions = card.querySelector('.card-back .badges');
  watchOptions.replaceChildren();
  mine.forEach(function (platform) { watchOptions.appendChild(createPlatformLink(movie, platform)); });
  const linkHint = document.createElement('p');
  linkHint.className = 'platform-link-hint';
  linkHint.textContent = 'Opens in a new tab. You may need to sign in or search the film title. Availability can change.';
  watchOptions.insertAdjacentElement('afterend', linkHint);

  // I load the real poster after creating the card elements.
  addPhoto(movie, card);

  // I stamp the photo when a visitor marks a film as watched, with the option to undo it.
  const seenStamp = document.createElement('span');
  seenStamp.className = 'seen-stamp';
  seenStamp.textContent = 'SEEN IT';
  seenStamp.setAttribute('aria-hidden', 'true');
  card.querySelector('.poster').appendChild(seenStamp);
  const seenButton = document.createElement('button');
  seenButton.type = 'button';
  seenButton.className = 'seen-button';
  function syncWatched() {
    const seen = watchedFilms.includes(movie.title);
    card.classList.toggle('is-watched', seen);
    seenStamp.hidden = !seen;
    seenButton.textContent = seen ? 'Watched ✓ · undo' : 'Mark as watched';
    seenButton.setAttribute('aria-pressed', String(seen));
    seenButton.setAttribute('aria-label', (seen ? 'Undo watched status for ' : 'Mark as watched: ') + movie.title);
  }
  seenButton.addEventListener('click', function () {
    if (watchedFilms.includes(movie.title)) watchedFilms = watchedFilms.filter(function (title) { return title !== movie.title; });
    else watchedFilms.push(movie.title);
    // I keep the button working even if this browser cannot save local data.
    try { localStorage.setItem('cinema-watched-films', JSON.stringify(watchedFilms)); } catch (error) {}
    syncWatched();
    updateCinemaHeart();
    if (!document.querySelector('#watched-view').hidden) renderWatchedFilms();
  });
  syncWatched();
  card.appendChild(seenButton);
  return card;
}

// I rebuild the current group of cards and update the result counter.
function showResults() {
  const container = document.querySelector("#cards");
  const message = document.querySelector("#message");
  const moreButton = document.querySelector("#more-button");

  container.innerHTML = "";
  for (let i = startIndex; i < startIndex + MAX_RESULTS && i < currentResults.length; i++) {
    container.appendChild(buildCard(currentResults[i].movie));
  }


  const total = currentResults.length;
  let lastShown = startIndex + MAX_RESULTS;
  if (lastShown > total) {
    lastShown = total;
  }

  if (currentAnswers.platforms.length === 0) {
    message.textContent = "Choose your platforms and your movies will appear here.";
  } else if (total === 0) {
    message.textContent = "No exact match in Valentina’s collection—let’s try something close.";
  } else if (total === 1) {
    message.textContent = "Found 1 movie for you:";
  } else if (total <= MAX_RESULTS) {
    message.textContent = "Found " + total + " movies for you:";
  } else {
    message.textContent = "Found " + total + " movies for you. Showing " + (startIndex + 1) + "–" + lastShown + ":";
  }

  document.querySelector("#match-count").textContent = total;
  if (total === 1) {
    document.querySelector("#match-text").textContent = "movie matches your answers";
  } else {
    document.querySelector("#match-text").textContent = "movies match your answers";
  }

  if (total > MAX_RESULTS) {
    moreButton.classList.remove("hidden");
  } else {
    moreButton.classList.add("hidden");
  }

  refreshHearts();
  updateNoMatchOptions();
}

// I read the form again whenever an answer changes.
// Then I reset the results page and refresh the matching films.
function update() {
  // I hide the old results while the visitor adjusts their choices.
  document.querySelector('.results').hidden = true;

  currentAnswers = getAnswers();
  startIndex = 0;

  // I keep the palette fixed; the selected mood still filters the films.

  if (currentAnswers.platforms.length === 0) {
    currentResults = [];
  } else {
    currentResults = getRecommendations(currentAnswers);
  }

  document.querySelector("#spotlight").classList.add("hidden");
  showResults();
}

// I pick a random film from the current matches and put it on the cinema screen.
function surpriseMe() {
  if (currentResults.length === 0) {
    document.querySelector('.results').hidden = false;
    document.querySelector("#message").textContent = currentAnswers.platforms.length ? 'No exact match in Valentina’s collection—let’s try something close.' : 'Choose at least one platform first, then press Surprise me.';
    return;
  }


  const randomNumber = Math.floor(Math.random() * currentResults.length);
  const movie = currentResults[randomNumber].movie;
  setCinemaMovie(movie, true);
}

// I calculate the current matches while keeping them hidden until the visitor asks to see them.
document.querySelector("#form").addEventListener("change", update);

document.querySelector("#surprise-button").addEventListener("click", surpriseMe);

// I reset the questionnaire when Start over is clicked.
document.querySelector("#reset-button").addEventListener("click", function () {
  document.querySelector("#form").reset();
  update();
});

// I show the next six results, then return to the beginning after the last group.
document.querySelector("#more-button").addEventListener("click", function () {
  startIndex = startIndex + MAX_RESULTS;
  if (startIndex >= currentResults.length) {
    startIndex = 0;
  }
  showResults();
});

// I draw the saved list and initial page state when this file finishes loading.
showWatchlist();
update();


// I add my cinema interactions after the initial page setup.
// I use this section for the cinema screen, personal comments, DVD shelf and curtains.
// I keep the matching rules and movie data in the first section above.
// I remember the featured film, the selected DVD case and the latest poster request.
// The image cache lets the screen and shelf share posters that are already loaded.
let cinemaMovie = null;
// I change the opening suggestions every fifteen seconds until a visitor projects a film.
let cinemaRotationTimer = null;
let cinemaPinned = false;
let cinemaRotationPaused = false;
// I keep a shuffled queue so the previews explore the whole collection before repeating.
let cinemaPreviewQueue = [];
let cinemaPreviewPool = '';
let shelfSelection = null;
// I keep only the latest DVD selection while its case slides out.
let shelfPullTimer = null;
let shelfPullAnimation = null;
let cinemaPosterRequest = 0;
const cinemaImageCache = new Map();

// I reuse a cached poster or try the local photo before searching TMDB.
function cinemaPhoto(movie, onPhoto) {
  if (cinemaImageCache.has(movie.title)) {
    onPhoto(cinemaImageCache.get(movie.title));
    return;
  }
  const localFile = getPhotoFile(movie.title);
  const test = new Image();
  test.onload = function () {
    cinemaImageCache.set(movie.title, localFile);
    onPhoto(localFile);
  };
  test.onerror = function () {
    searchTmdb(movie, function (found) {
      if (found.poster_path) {
        const url = 'https://image.tmdb.org/t/p/w500' + found.poster_path;
        cinemaImageCache.set(movie.title, url);
        onPhoto(url);
      }
    });
  };
  test.src = localFile;
}

// I use a wide film still on the screen and keep portrait posters in the collection.
function cinemaWidePhoto(movie, onPhoto) {
  // I use the same upright poster as the film cards on phones, keeping wide stills for laptops.
  if (window.matchMedia('(max-width: 700px)').matches) {
    cinemaPhoto(movie, onPhoto);
    return;
  }
  let hasWideImage = false;
  cinemaPhoto(movie, function (url) { if (!hasWideImage) onPhoto(url); });
  searchTmdb(movie, function (found) {
    if (found.backdrop_path) {
      hasWideImage = true;
      onPhoto('https://image.tmdb.org/t/p/w1280' + found.backdrop_path);
    }
  });
}

// I make the screen save button match the film's current watchlist status.
function updateCinemaHeart() {
  const button = document.querySelector('#cinema-save');
  const saved = cinemaMovie && watchlist.includes(cinemaMovie.title);
  button.textContent = saved ? '✓ On your shelf · remove' : '+ Save for another night';
  document.querySelector('#ticket-stamp').hidden = !saved;
  document.querySelector('.cinema-ticket').classList.toggle('is-saved', Boolean(saved));
  button.setAttribute('aria-pressed', String(Boolean(saved)));
  // I do not try to convince visitors to watch a film they have already seen.
  if (cinemaMovie) {
    const seen = watchedFilms.includes(cinemaMovie.title);
    document.querySelector('#convince-feature').classList.toggle('hidden', seen);
    if (seen) {
      document.querySelector('#cinema-note').hidden = true;
      document.querySelector('#convince-feature').setAttribute('aria-expanded', 'false');
    }
  }
}

// I put the chosen film on the big screen. If requested, I open the curtains and scroll to it.
function setCinemaMovie(movie, scrollToScreen) {
  if (scrollToScreen) cinemaPinned = true;
  // I offer the same way back to automatic movies after any deliberate screen selection.
  document.querySelector('#continue-previews').hidden = !cinemaPinned;
  cinemaMovie = movie;
  drawFeatureNumbers();
  if (scrollToScreen) {
    showCinemaView('cinema', false);
    if (window.location.hash !== '#cinema') window.history.pushState(null, '', '#cinema');
    setCurtainsClosed(false);
  }
  updateCinemaLighting();
  // I give each poster request a number so an older image cannot replace a newer film.
  const request = ++cinemaPosterRequest;
  document.querySelector('#cinema-label').textContent = 'Tonight’s feature / No. ' + String(movies.indexOf(movie) + 1).padStart(3, '0');
  document.querySelector('#cinema-title').textContent = cinemaPinned ? movie.title : 'Valentina’s favourites. Your next movie night.';
  document.querySelector('#cinema-screen').classList.add('has-feature');
  document.querySelector('#cinema-screen').classList.toggle('is-preview', !cinemaPinned);
  document.querySelector('#ticket-title').textContent = movie.title;
  document.querySelector('#ticket-number').textContent = String(movies.indexOf(movie) + 1).padStart(3, '0');
  document.querySelector('#cinema-note').textContent = movie.note;
  // I hide the personal note until Convince me is clicked for this film.
  document.querySelector('#cinema-note').hidden = true;
  const convinceButton = document.querySelector('#convince-feature');
  convinceButton.classList.remove('hidden');
  convinceButton.setAttribute('aria-expanded', 'false');
  convinceButton.textContent = 'Convince me';
  document.querySelector('#cinema-meta').textContent = movie.year + ' · ' + movie.language + ' · ' + joinList(movie.genres);
  // I rebuild the platform badges using the visitor's current selections.
  const platforms = document.querySelector('#cinema-platforms');
  platforms.replaceChildren();
  // I show every listed platform for the featured film, including automatic previews.
  for (const platform of movie.platforms) {
    platforms.appendChild(createPlatformLink(movie, platform));
  }
  const image = document.querySelector('#cinema-poster');
  document.querySelector('#cinema-poster-fallback').textContent = movie.title;
  let photoVersion = 0;
  // I load the next picture before replacing the current one so the screen does not go blank.
  cinemaWidePhoto(movie, function (url) {
    const version = ++photoVersion;
    const nextImage = new Image();
    nextImage.onload = function () {
      if (request !== cinemaPosterRequest || version !== photoVersion) return;
      image.onload = function () {
        if (request !== cinemaPosterRequest || version !== photoVersion) return;
        image.hidden = false;
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && typeof image.animate === 'function') {
          image.animate([{opacity:0}, {opacity:1}], {duration:800, easing:'ease-out'});
        }
      };
      image.alt = movie.title + ' featured film image';
      image.src = url;
    };
    // I keep the current photo if the next image cannot load.
    nextImage.onerror = function () {};
    nextImage.src = url;
  });
  document.querySelector('#cinema-save').classList.remove('hidden');
  updateCinemaHeart();
  scheduleCinemaPreview();
  if (scrollToScreen) {
    scrollToSectionStart(document.querySelector('#cinema-view'));
  }
}

// I keep the featured film while it still matches, or switch to the first new result.
// If no films match, I show a helpful message instead.
function syncCinema() {
  // I introduce the film in the opening image, even before any platforms are selected.
  if (cinemaPinned) return;
  if (!currentAnswers.platforms.length) {
    if (!cinemaMovie) setCinemaMovie(nextCinemaPreview(movies), false);
    return;
  }
  if (currentResults.length) {
    if (!cinemaMovie || !currentResults.some(function (item) { return item.movie.title === cinemaMovie.title; })) {
      setCinemaMovie(nextCinemaPreview(currentResults.map(function (item) { return item.movie; })), false);
    } else {
      drawFeatureNumbers();
    }
  } else {
    clearTimeout(cinemaRotationTimer);
    cinemaMovie = null;
    document.querySelector('#feature-numbers').replaceChildren();
    document.querySelector('#cinema-screen').classList.remove('has-feature');
    document.querySelector('#ticket-title').textContent = 'A night at the movies';
    document.querySelector('#ticket-number').textContent = '—';
    document.querySelector('#ticket-stamp').hidden = true;
    document.querySelector('.cinema-ticket').classList.remove('is-saved');
    updateCinemaLighting();
    cinemaPosterRequest++;
    document.querySelector('#cinema-label').textContent = currentAnswers.platforms.length ? 'Let’s try another scene' : 'Your seat is waiting';
    document.querySelector('#cinema-title').textContent = currentAnswers.platforms.length ? 'A different mood, perhaps?' : 'Valentina’s favourites. Your next movie night.';
    document.querySelector('#cinema-note').textContent = currentAnswers.platforms.length ? 'No films match this combination. Try another genre, a different mood, or more platforms.' : 'Grab a blanket and some popcorn. Choose your platforms below to find something from Valentina’s favourites.';
    document.querySelector('#cinema-meta').textContent = 'Set the scene below';
    document.querySelector('#cinema-platforms').replaceChildren();
    document.querySelector('#cinema-poster').hidden = true;
    document.querySelector('#cinema-poster-fallback').textContent = 'Your next favourite film.';
    document.querySelector('#cinema-save').classList.add('hidden');
    document.querySelector('#cinema-note').hidden = false;
    document.querySelector('#convince-feature').classList.add('hidden');
    document.querySelector('#convince-feature').setAttribute('aria-expanded', 'false');
    document.querySelector('#convince-feature').textContent = 'Convince me';

  }
}


// I use movie.note as the spoiler-free comment for each film.
// I can change these recommendations in script.js.
function buildConvinceMe(movie) {
  const wrapper = document.createElement('div');
  wrapper.className = 'convince-card';
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'convince-toggle';
  button.textContent = 'Convince me';
  button.setAttribute('aria-label', 'Convince me to watch ' + movie.title);
  button.setAttribute('aria-expanded', 'false');
  const panel = document.createElement('div');
  panel.className = 'convince-comment';
  // I give each note a different ID so its button opens the right comment.
  panel.id = 'convince-movie-' + movies.indexOf(movie);
  panel.hidden = true;
  button.setAttribute('aria-controls', panel.id);
  const label = document.createElement('span');
  label.className = 'convince-label';
  label.textContent = 'A note from Valentina’s collection';
  const text = document.createElement('p');
  text.textContent = movie.note;
  panel.appendChild(label);
  panel.appendChild(text);
  // I toggle the comment and update aria-expanded so its open state is accessible.
  button.addEventListener('click', function () {
    panel.hidden = !panel.hidden;
    button.setAttribute('aria-expanded', String(!panel.hidden));
    button.textContent = panel.hidden ? 'Convince me' : 'Say less · hide note';
    button.setAttribute('aria-label', (panel.hidden ? 'Convince me to watch ' : 'Hide recommendation for ') + movie.title);
  });
  wrapper.appendChild(button);
  wrapper.appendChild(panel);
  return wrapper;
}

// I give the main screen its own Convince me toggle too.
document.querySelector('#convince-feature').addEventListener('click', function () {
  if (!cinemaMovie) return;
  const panel = document.querySelector('#cinema-note');
  panel.hidden = !panel.hidden;
  this.setAttribute('aria-expanded', String(!panel.hidden));
  this.textContent = panel.hidden ? 'Convince me' : 'Say less · hide note';
});

// I keep the base results function, then add comments and a screen button to its cards.
const originalShowResults = showResults;
showResults = function () {
  originalShowResults();
  syncCinema();
  document.querySelectorAll('.result-card').forEach(function (card) {
    const movie = movies.find(function (item) { return item.title === card.dataset.movieTitle; });
    if (!movie) return;
    // I explain the actual choices that led to this recommendation.
    card.appendChild(buildMatchExplanation(movie, currentAnswers));
    // I place the comment below the card so the photo poster stays visible.
    card.appendChild(buildConvinceMe(movie));
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'project-button';
    button.textContent = 'Show on the cinema';
    // I show the chosen film on the big screen and scroll up to it.
    button.addEventListener('click', function () { setCinemaMovie(movie, true); });
    card.querySelector('.card-back').insertBefore(button, card.querySelector('.flip-back'));
  });
};

// I show saved films as DVD cases, with the selected case expanded.
showWatchlist = function () {
  const section = document.querySelector('#watchlist');
  section.classList.remove('hidden');
  const list = document.querySelector('#watchlist-list');
  list.replaceChildren();
  // If a selected film was removed, I select the first saved film instead.
  if (!watchlist.includes(shelfSelection)) shelfSelection = watchlist[0] || null;
  if (!watchlist.length) {
    const empty = document.createElement('p');
    empty.className = 'hint';
    empty.textContent = 'Save films using the heart—they’ll appear here.';
    list.appendChild(empty);
  }
  // I build a case for each saved title and load its poster when available.
  for (const title of watchlist) {
    const movie = movies.find(function (item) { return item.title === title; });
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'shelf-case';
    button.setAttribute('aria-label', 'Select ' + title + ' on your shelf');
    button.setAttribute('aria-pressed', String(shelfSelection === title));
    const image = document.createElement('img');
    image.alt = '';
    image.hidden = true;
    button.appendChild(image);
    const spine = document.createElement('span');
    spine.className = 'shelf-spine';
    spine.textContent = title;
    button.appendChild(spine);
    if (movie) cinemaPhoto(movie, function (url) {
      image.onload = function () { image.hidden = false; };
      image.src = url;
    });
    button.addEventListener('click', function () {
      clearTimeout(shelfPullTimer);
      if (shelfPullAnimation) shelfPullAnimation.cancel();
      shelfSelection = title;
      // I pull the clicked case towards the viewer before taking them up to the screen.
      function finishSelection() {
        showWatchlist();
        if (movie) {
          setCinemaMovie(movie, true);
          document.querySelector('#continue-previews').hidden = false;
        }
      }
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || typeof button.animate !== 'function') {
        finishSelection();
      } else {
        shelfPullAnimation = button.animate([
          {transform:'translateY(-8px) scale(1) rotate(-2deg)'},
          {transform:'translateY(-28px) scale(1.13) rotate(-6deg)'}
        ], {duration:420, easing:'cubic-bezier(.2,.7,.2,1)', fill:'forwards'});
        shelfPullTimer = setTimeout(finishSelection, 450);
      }
    });
    list.appendChild(button);
  }
  document.querySelector('#watchlist-count').textContent = watchlist.length;
  document.querySelector('#shelf-selected').textContent = shelfSelection || 'Save a movie with the heart to start your collection.';
  document.querySelector('#shelf-remove').classList.toggle('hidden', !watchlist.length);
  renderShelfManager();
  refreshHearts();
  updateCinemaHeart();
};

// I reuse the same watchlist toggle for the screen save button.
document.querySelector('#cinema-save').addEventListener('click', function () {
  if (cinemaMovie) toggleWatchlist(cinemaMovie.title);
});
// I let visitors choose a specific title to remove, without projecting it first.
document.querySelector('#shelf-remove').addEventListener('click', function () {
  const manager = document.querySelector('#shelf-manager');
  manager.hidden = !manager.hidden;
  this.setAttribute('aria-expanded', String(!manager.hidden));
  this.textContent = manager.hidden ? 'Manage saved films' : 'Done editing';
});

// I redraw these sections once the cinema versions of the functions are ready.
showResults();
showWatchlist();

// I open or close both curtains together.
// I make the covered screen inert so its hidden controls cannot receive focus.
function setCurtainsClosed(closed) {
  const cinema = document.querySelector('.cinema');
  const screen = document.querySelector('#cinema-screen');
  const button = document.querySelector('#curtain-toggle');
  cinema.classList.remove('is-entering');
  cinema.classList.toggle('curtains-closed', closed);
  screen.inert = closed;
  screen.setAttribute('aria-hidden', String(closed));
  button.setAttribute('aria-expanded', String(!closed));
  button.textContent = closed ? 'Open curtains' : 'Close curtains';
  updateCinemaLighting();
}
// I leave the curtain button outside the screen so it always stays reachable.
document.querySelector('#curtain-toggle').addEventListener('click', function () {
  setCurtainsClosed(!document.querySelector('.cinema').classList.contains('curtains-closed'));
});
// I remove the opening class once the first curtain animation has finished.
document.querySelector('.cinema-curtain-left').addEventListener('animationend', function (event) {
  if (event.animationName === 'cinema-curtain-open') {
    document.querySelector('.cinema').classList.remove('is-entering');
  }
});


// I dim the room when a film is featured, then bring the lights back up if I close the curtains.
function updateCinemaLighting() {
  const cinema = document.querySelector('.cinema');
  const showing = Boolean(cinemaMovie) && !cinema.classList.contains('curtains-closed');
  cinema.classList.toggle('is-showing', showing);
  document.body.classList.toggle('cinema-lights-dimmed', showing);
}

// I keep the projector light faint and move just a few dust specks through it.
(function () {
  const cinema = document.querySelector('.cinema');
  const dust = document.querySelector('.cinema-projector-dust');
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  let inView = true;
  let dustAnimations = [];

  // I stop background work while the cinema is offscreen or the tab is hidden.
  function syncProjector() {
    const paused = document.hidden || !inView || cinema.classList.contains('curtains-closed');
    dustAnimations.forEach(function (animation) {
      if (paused) animation.pause();
      else animation.play();
    });
  }

  function makeDust() {
    dustAnimations.forEach(function (animation) { animation.cancel(); });
    dustAnimations = [];
    dust.replaceChildren();
    if (motionPreference.matches || typeof dust.animate !== 'function') return;
    for (let i = 0; i < 16; i++) {
      const speck = document.createElement('span');
      speck.className = 'projector-speck';
      speck.style.left = (12 + i * 29 % 76) + '%';
      speck.style.top = (8 + i * 17 % 68) + '%';
      dust.appendChild(speck);
      dustAnimations.push(speck.animate([
        {transform: 'translate(-4px, 7px)', opacity: 0},
        {transform: 'translate(1px, 0)', opacity: 0.35, offset: 0.4},
        {transform: 'translate(11px, -13px)', opacity: 0}
      ], {duration: 10500 + i % 4 * 1500, delay: -i * 710, iterations: Infinity, easing: 'linear'}));
    }
    syncProjector();
  }
  document.addEventListener('visibilitychange', syncProjector);
  document.querySelector('#curtain-toggle').addEventListener('click', syncProjector);
  document.querySelector('#form').addEventListener('change', syncProjector);
  motionPreference.addEventListener('change', makeDust);
  // I also resume the projector if a film choice opens the curtains automatically.
  if (typeof MutationObserver !== 'undefined') {
    const curtainObserver = new MutationObserver(syncProjector);
    curtainObserver.observe(cinema, {attributes: true, attributeFilter: ['class']});
  }
  if (typeof IntersectionObserver !== 'undefined') {
    const observer = new IntersectionObserver(function (entries) {
      inView = entries[0].isIntersecting;
      syncProjector();
    });
    observer.observe(cinema);
  }
  makeDust();
})();


// I put the clickable snack beside Surprise me, so the theatre stays uncluttered.
(function () {
  const button = document.querySelector('#popcorn-button');
  const burst = document.querySelector('.popcorn-burst');
  const status = document.querySelector('.snack-status');
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  let pops = [];
  // I use the same burst when either the bucket or Surprise me is clicked.
  function popPopcorn(event) {
    // I clear the last burst before popping another small handful.
    pops.forEach(function (animation) { animation.cancel(); });
    pops = [];
    burst.replaceChildren();
    if (event !== false) status.textContent = status.textContent === 'Fresh popcorn!' ? 'Another handful, ready for movie night.' : 'Fresh popcorn!';
    if (motionPreference.matches || typeof button.animate !== 'function') return;
    pops.push(button.animate([
      {transform: 'rotate(-5deg)'},
      {transform: 'translateY(-4px) rotate(5deg)'},
      {transform: 'rotate(-5deg)'}
    ], {duration: 320, easing: 'ease-in-out'}));
    for (let i = 0; i < 10; i++) {
      const kernel = document.createElement('span');
      kernel.className = 'popcorn-kernel';
      burst.appendChild(kernel);
      const x = (i - 4.5) * 11;
      const rise = 32 + i % 4 * 13;
      const animation = kernel.animate([
        {transform: 'translate(0, 0) rotate(0deg)', opacity: 1},
        {transform: 'translate(' + x * 0.5 + 'px, -' + rise + 'px) rotate(' + i * 19 + 'deg)', opacity: 1, offset: 0.5},
        {transform: 'translate(' + x + 'px, 16px) rotate(' + i * 35 + 'deg)', opacity: 0}
      ], {duration: 1000 + i % 3 * 100, easing: 'ease-out'});
      pops.push(animation);
      animation.finished.then(function () { kernel.remove(); }).catch(function () {});
    }
  }
  button.addEventListener('click', popPopcorn);
  // I start the popcorn before the movie picker scrolls back to the cinema screen.
  document.querySelector('#surprise-button').addEventListener('click', popPopcorn, true);
  // I pop a small handful every fifteen seconds while the visitor is using the film finder.
  setInterval(function () {
    if (document.hidden || document.querySelector('#programme-view').hidden || motionPreference.matches) return;
    popPopcorn(false);
  }, 15000);
})();


// I keep the audience animation in the same submission file.
// I add a small audience that walks in, sits, chats and leaves in a relaxed loop.
// These figures are decorative. I keep them below the screen and respect reduced motion.
(function () {
  const room = document.querySelector('.cinema-auditorium');
  const audience = document.querySelector('#cinema-audience');
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  // I use a thirty-second cycle, including a long pause in the seats.
  const cycleDuration = 30000;
  let animations = [];
  let resizeTimer;
  let inView = true;

  // I pause the animation while the tab is hidden or the cinema is offscreen.
  function syncPlayback() {
    const pause = document.hidden || !inView;
    animations.forEach(function (animation) {
      if (pause) animation.pause();
      else animation.play();
    });
  }

  // I give the body parts the same cycle length so their movements stay together.
  function animate(element, frames, delay) {
    const animation = element.animate(frames, {
      duration: cycleDuration,
      delay: delay,
      iterations: Infinity,
      fill: 'both',
      easing: 'linear'
    });
    animations.push(animation);
  }

  // I describe the arm and leg positions at points between 0 and 1 in the cycle.
  function limbFrames(angle, direction, restingAngle, personIndex, isPair) {
    const frames = [];
    for (let step = 0; step <= 32; step++) {
      frames.push({offset: step / 32 * 0.15, transform: 'rotate(' + Math.sin(step * Math.PI / 2) * angle * direction + 'deg)'});
    }
    frames.push({offset: 0.18, transform: 'rotate(' + restingAngle + 'deg)'});
    // I let the two friends take turns gesturing with the arm nearest their neighbour.
    if (isPair && restingAngle && direction === (personIndex === 0 ? -1 : 1)) {

      const start = personIndex === 0 ? 0.29 : 0.44;
      frames.push({offset: start, transform: 'rotate(' + restingAngle + 'deg)', easing: 'ease-in-out'});
      frames.push({offset: start + 0.025, transform: 'rotate(' + (restingAngle + direction * 30) + 'deg)'});
      frames.push({offset: start + 0.045, transform: 'rotate(' + (restingAngle + direction * 19) + 'deg)'});
      frames.push({offset: start + 0.065, transform: 'rotate(' + (restingAngle + direction * 26) + 'deg)', easing: 'ease-in-out'});
      frames.push({offset: start + 0.09, transform: 'rotate(' + restingAngle + 'deg)'});
    } else if (!isPair && restingAngle && direction === (personIndex % 2 ? -1 : 1)) {
      // I give the other guests their own timing for small arm movements.
      const phase = personIndex * 0.009;
      frames.push({offset: 0.32 + phase, transform: 'rotate(' + restingAngle + 'deg)'});
      frames.push({offset: 0.36 + phase, transform: 'rotate(' + (restingAngle + direction * 18) + 'deg)', easing: 'ease-in-out'});
      frames.push({offset: 0.39 + phase, transform: 'rotate(' + (restingAngle + direction * 18) + 'deg)'});
      frames.push({offset: 0.43 + phase, transform: 'rotate(' + restingAngle + 'deg)', easing: 'ease-in-out'});
    }
    frames.push({offset: 0.68, transform: 'rotate(' + restingAngle + 'deg)'});
    for (let step = 0; step <= 32; step++) {
      frames.push({offset: 0.72 + step / 32 * 0.15, transform: 'rotate(' + Math.sin(step * Math.PI / 2) * angle * direction + 'deg)'});
    }
    frames.push({offset: 1, transform: 'rotate(0deg)'});
    return frames;
  }

  // I rebuild the audience when the layout or motion preference changes.
  function takeSeats() {
    // I cancel the previous animations first so they do not build up after resizing.
    animations.forEach(function (animation) { animation.cancel(); });
    animations = [];
    audience.replaceChildren();
    const bounds = room.getBoundingClientRect();
    if (!bounds.width) return;
    // I use only seats that fit fully inside the visible row, including on a phone.
    const visibleSeats = Array.from(room.querySelectorAll('.cinema-seats > span')).filter(function (seat) {
      const rect = seat.getBoundingClientRect();
      return rect.left >= bounds.left + 3 && rect.right <= bounds.right - 3;
    });

    // I reserve two adjacent seats near the middle for the pair who chat.
    const pairStart = Math.max(0, Math.floor((visibleSeats.length - 2) / 2));
    const seatPlan = visibleSeats.length >= 2 ? [pairStart, pairStart + 1] : [0];
    // I spread the other guests out and avoid assigning a seat twice.
    [0.12, 0.74, 0.94].forEach(function (position) {
      const seatIndex = Math.round((visibleSeats.length - 1) * position);
      if (!seatPlan.includes(seatIndex)) seatPlan.push(seatIndex);
    });
    const occupied = new Set();
    // I leave the guests seated and still when reduced motion is enabled.
    const canAnimate = !motionPreference.matches && typeof audience.animate === 'function';
    seatPlan.forEach(function (seatIndex, index) {
      if (!visibleSeats[seatIndex] || occupied.has(seatIndex)) return;
      occupied.add(seatIndex);
      const seat = visibleSeats[seatIndex].getBoundingClientRect();
      const x = seat.left + seat.width / 2 - bounds.left;
      const guest = document.createElement('div');
      const isLate = seatPlan.length >= 3 && index === seatPlan.length - 1;
      guest.className = 'audience-guest audience-guest-' + index + (isLate ? ' audience-late-arrival' : '');
      guest.style.left = x + 'px';
      const figure = document.createElement('div');
      figure.className = 'audience-figure';
      // I build each silhouette from a head, body, two arms and two legs.
      const parts = {};
      ['head', 'body', 'arm-left', 'arm-right', 'leg-left', 'leg-right'].forEach(function (part) {
        const piece = document.createElement('span');
        piece.className = 'audience-' + part;
        parts[part] = piece;
        figure.appendChild(piece);
      });
      // I give the last guest a striped popcorn bucket for their late entrance.
      if (isLate) {
        const bucket = document.createElement('span');
        bucket.className = 'audience-popcorn';
        figure.appendChild(bucket);
      }
      guest.appendChild(figure);
      audience.appendChild(guest);
      if (!canAnimate) return;
      // I bring the two friends in from the same side, one shortly after the other.
      const isPair = index < 2 && visibleSeats.length >= 2;
      const from = isPair ? -x - 40 : (index % 2 ? bounds.width - x + 40 : -x - 40);
      const delay = isLate ? 10500 : (isPair ? 1050 + index * 600 : 1050 + index * 1500);
      const seated = getComputedStyle(figure).transform;
      // I move the whole guest along the aisle, hold them at their seat, then move them out.
      // Both ends of the loop are offscreen, so the next arrival does not jump into view.
      animate(guest, [
        {offset: 0, transform: 'translateX(' + from + 'px)'},
        {offset: 0.15, transform: 'translateX(0)'},
        {offset: 0.72, transform: 'translateX(0)'},
        {offset: 0.87, transform: 'translateX(' + from + 'px)'},
        {offset: 1, transform: 'translateX(' + from + 'px)'}
      ], delay);
      // I add a small walking bounce, followed by sitting down and posture changes.
      const poses = [];
      for (let step = 0; step <= 16; step++) {
        // I make the late visitor duck as they pass in front of the seated guests.
        const duck = isLate && step >= 4 && step <= 12;
        poses.push({offset: step / 16 * 0.15, transform: duck ? 'translateY(9px) rotate(-10deg)' : 'translateY(' + (step % 2 ? -1.5 : 0) + 'px)'});
      }

      const phase = isPair ? (index === 1 ? -0.02 : 0) : index * 0.009;
      const side = isPair ? (index === 0 ? 1 : -1) : (index % 2 ? -1 : 1);
      const lean = seated + ' translateX(' + side * (isPair ? 6 : 3) + 'px) rotate(' + side * (isPair ? 6 : 3.5 + index * 0.4) + 'deg)';
      const shift = isPair ? seated + ' translateX(' + side * 4 + 'px) rotate(' + side * 4 + 'deg)' : seated + ' translateX(' + -side * 2 + 'px) translateY(-1.5px) rotate(' + -side * 2.5 + 'deg)';
      poses.push({offset: 0.18, transform: seated});
      poses.push({offset: 0.24 + phase, transform: seated, easing: 'ease-in-out'});
      poses.push({offset: 0.28 + phase, transform: lean});
      poses.push({offset: (isPair ? 0.35 : 0.32) + phase, transform: lean, easing: 'ease-in-out'});
      poses.push({offset: (isPair ? 0.4 : 0.37) + phase, transform: seated});
      poses.push({offset: 0.46 + phase, transform: seated, easing: 'ease-in-out'});
      poses.push({offset: 0.49 + phase, transform: shift});
      poses.push({offset: 0.53 + phase, transform: shift, easing: 'ease-in-out'});
      poses.push({offset: 0.58 + phase, transform: seated});
      poses.push({offset: 0.68, transform: seated});
      poses.push({offset: 0.72, transform: 'translateY(0)'});
      for (let step = 1; step <= 16; step++) {
        poses.push({offset: 0.72 + step / 16 * 0.15, transform: 'translateY(' + (step % 2 ? -1.5 : 0) + 'px)'});
      }
      poses.push({offset: 1, transform: 'translateY(0px)'});
      animate(figure, poses, delay);
      // I pivot the heads near the neck so the turns look more natural.
      parts.head.style.transformOrigin = '50% 90%';
      // I give the friends facing turns and listening nods, while other guests move independently.
      const headFrames = isPair ? [
        {offset: 0, transform: 'rotate(0deg)'},
        {offset: 0.23 + phase, transform: 'rotate(0deg)', easing: 'ease-in-out'},
        {offset: 0.27 + phase, transform: 'rotate(' + side * 12 + 'deg) scaleX(.82)'},
        {offset: 0.31 + phase, transform: 'rotate(' + side * 12 + 'deg) scaleX(.82)'},
        {offset: 0.33 + phase, transform: 'translateY(' + (index === 1 ? 1.7 : -0.8) + 'px) rotate(' + side * 15 + 'deg) scaleX(.82)'},
        {offset: 0.35 + phase, transform: 'rotate(' + side * 12 + 'deg) scaleX(.82)'},
        {offset: 0.39 + phase, transform: 'rotate(' + side * 12 + 'deg) scaleX(.82)', easing: 'ease-in-out'},
        {offset: 0.42 + phase, transform: 'rotate(0deg)'},
        {offset: 0.46 + phase, transform: 'rotate(0deg)', easing: 'ease-in-out'},
        {offset: 0.49 + phase, transform: 'rotate(' + side * 12 + 'deg) scaleX(.82)'},
        {offset: 0.51 + phase, transform: 'translateY(' + (index === 0 ? 1.7 : -0.8) + 'px) rotate(' + side * 15 + 'deg) scaleX(.82)'},
        {offset: 0.53 + phase, transform: 'rotate(' + side * 12 + 'deg) scaleX(.82)'},
        {offset: 0.58 + phase, transform: 'rotate(0deg)'},
        {offset: 1, transform: 'rotate(0deg)'}
      ] : [
        {offset: 0, transform: 'rotate(0deg)'},
        {offset: 0.25 + phase, transform: 'rotate(0deg)', easing: 'ease-in-out'},
        {offset: 0.28 + phase, transform: 'rotate(' + side * 9 + 'deg) scaleX(.92)'},
        {offset: 0.33 + phase, transform: 'rotate(' + side * 9 + 'deg) scaleX(.92)', easing: 'ease-in-out'},
        {offset: 0.38 + phase, transform: 'rotate(0deg)'},
        {offset: 0.5 + phase, transform: 'rotate(0deg)', easing: 'ease-in-out'},
        {offset: 0.53 + phase, transform: 'rotate(' + -side * 6 + 'deg)'},
        {offset: 0.59 + phase, transform: 'rotate(0deg)'},
        {offset: 1, transform: 'rotate(0deg)'}
      ];
      animate(parts.head, headFrames, delay);
      // I animate the limbs separately from the body to create the walking and hand gestures.
      ['arm-left', 'arm-right', 'leg-left', 'leg-right'].forEach(function (part, partIndex) {
        const direction = partIndex % 2 ? -1 : 1;
        const arm = part.startsWith('arm');
        // I keep one arm steady while the late guest carries their popcorn.
        const frames = isLate && part === 'arm-right' ? [
          {offset: 0, transform: 'rotate(-28deg)'},
          {offset: 1, transform: 'rotate(-28deg)'}
        ] : limbFrames(arm ? 14 : 19, direction, arm ? direction * 6 : 0, index, isPair);
        animate(parts[part], frames, delay);
      });
    });
    syncPlayback();
  }

  // I wait briefly after a resize before finding the visible seats again.
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(takeSeats, 150);
  });
  // I keep playback in sync with tab visibility and reduced-motion settings.
  document.addEventListener('visibilitychange', syncPlayback);
  motionPreference.addEventListener('change', takeSeats);
  // I watch whether the cinema is visible so the audience can rest when it is not.
  if (typeof IntersectionObserver !== 'undefined') {
    const observer = new IntersectionObserver(function (entries) {
      inView = entries[0].isIntersecting;
      syncPlayback();
    });
    observer.observe(room);
  }
  // I wait for the fonts before measuring the seats, because loading fonts can change the layout.
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(takeSeats);
  else takeSeats();
})();


// I show one section at a time, with the active destination marked in the top menu.
function showCinemaView(view, focusHeading) {
  const sections = {cinema:'#cinema-view', programme:'#programme-view', saved:'#saved-view', watched:'#watched-view', mystery:'#mystery-view', secrets:'#secret-seats-view'};
  if (!sections[view]) view = 'cinema';
  Object.keys(sections).forEach(function (key) {
    const section = document.querySelector(sections[key]);
    // I reset the two experiences only when the visitor actually leaves them.
    if (key !== view && !section.hidden) {
      if (key === 'mystery') resetMysteryExperience();
      if (key === 'secrets' && typeof section.resetExperience === 'function') section.resetExperience();
    }
    section.hidden = key !== view;
  });
  document.querySelectorAll('.main-menu a').forEach(function (link) {
    if (link.dataset.view === view) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  if (view === 'watched') renderWatchedFilms();
  if (view === 'mystery' && !mysteryRound) startMysteryRound();
  if (focusHeading && view === 'programme') document.querySelector('#programme-title').focus({preventScroll:true});
  const panel = document.querySelector(sections[view]);
  // I sweep a warm projector light across each destination without moving its heading.
  panel.classList.remove('scene-arriving');
  void panel.offsetWidth;
  panel.classList.add('scene-arriving');
  if (focusHeading && !window.matchMedia('(prefers-reduced-motion: reduce)').matches && typeof panel.animate === 'function') {
    panel.animate([{opacity:0},{opacity:1}], {duration:400,easing:'ease-out'});
  }
}
// I measure the menu each time so every destination starts below it on any screen.
function scrollToSectionStart(target) {
  if (!target) return;
  const menu = document.querySelector('.main-menu');
  const menuHeight = menu ? menu.getBoundingClientRect().height : 0;
  const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - menuHeight - 16);
  window.scrollTo({top:top, behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
}
// I use the same starting position for all five sections and browser history.
function followCinemaRoute(initialEntry) {
  const hash = window.location.hash;
  const view = hash === '#secret-seats' ? 'secrets' : hash === '#mystery' ? 'mystery' : hash === '#find-a-film' ? 'programme' : hash === '#watchlist' ? 'saved' : hash === '#watched' ? 'watched' : 'cinema';
  showCinemaView(view, true);
  if (initialEntry === true) window.scrollTo({top:0, behavior:'instant'});
  else if (hash === '#watchlist') revealMovieShelf();
  else if (hash) {
    const destinations = {cinema:'#cinema-view', programme:'#programme-view', saved:'#watchlist', watched:'#watched-view', mystery:'#mystery-view', secrets:'#secret-seats-view'};
    scrollToSectionStart(document.querySelector(hash === '#film-invitation' ? '#film-invitation' : destinations[view]));
  }
}
window.addEventListener('hashchange', followCinemaRoute);
// I start the first visit above the title, even when the URL still contains a section hash.
if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
followCinemaRoute(true);
(function keepFirstEntryAtTop() {
  let untouched = true;
  function visitorStarted() { untouched = false; }
  window.addEventListener('pointerdown', visitorStarted, {once:true});
  window.addEventListener('keydown', visitorStarted, {once:true});
  window.addEventListener('pageshow', function (event) {
    if (untouched && !event.persisted) window.scrollTo({top:0, behavior:'instant'});
  }, {once:true});
})();


// I let visitors switch the screen using the numbered films below the seats.
function drawFeatureNumbers() {
  const navigation = document.querySelector('#feature-numbers');
  const available = currentResults.length ? currentResults.map(function (item) { return item.movie; }) : movies;
  const choices = available.slice(0, 6);
  if (cinemaMovie && !choices.includes(cinemaMovie)) choices[choices.length ? choices.length - 1 : 0] = cinemaMovie;
  navigation.replaceChildren();
  choices.forEach(function (movie) {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = String(movies.indexOf(movie) + 1).padStart(2, '0');
    button.setAttribute('aria-label', 'Feature ' + movie.title);
    button.setAttribute('aria-pressed', String(cinemaMovie === movie));
    button.addEventListener('click', function () { setCinemaMovie(movie, false); });
    navigation.appendChild(button);
  });
}


// I give each film fifteen seconds and pause changes while the screen or its note is not available.
function scheduleCinemaPreview() {
  clearTimeout(cinemaRotationTimer);
  if (cinemaPinned || cinemaRotationPaused || !cinemaMovie) return;
  cinemaRotationTimer = setTimeout(function () {
    const screenUnavailable = document.hidden || document.querySelector('#cinema-view').hidden ||
      document.querySelector('.cinema').classList.contains('curtains-closed') || !document.querySelector('#cinema-note').hidden;
    if (screenUnavailable) { scheduleCinemaPreview(); return; }
    const pool = currentAnswers.platforms.length && currentResults.length ? currentResults.map(function (item) { return item.movie; }) : movies;
    if (pool.length < 2) { scheduleCinemaPreview(); return; }
    setCinemaMovie(nextCinemaPreview(pool), false);
  }, 15000);
}



// I shuffle a fresh copy for each round and whenever the visitor changes the available films.
function nextCinemaPreview(pool) {
  const signature = pool.map(function (movie) { return movie.title; }).join('|');
  if (signature !== cinemaPreviewPool || cinemaPreviewQueue.length === 0) {
    cinemaPreviewPool = signature;
    cinemaPreviewQueue = pool.slice();
    // I use a Fisher-Yates shuffle so every film can appear anywhere in the round.
    for (let i = cinemaPreviewQueue.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temporary = cinemaPreviewQueue[i];
      cinemaPreviewQueue[i] = cinemaPreviewQueue[j];
      cinemaPreviewQueue[j] = temporary;
    }
    // I avoid repeating the previous image at the boundary between two rounds.
    if (cinemaPreviewQueue.length > 1 && cinemaPreviewQueue[0] === cinemaMovie) {
      const last = cinemaPreviewQueue.length - 1;
      const first = cinemaPreviewQueue[0];
      cinemaPreviewQueue[0] = cinemaPreviewQueue[last];
      cinemaPreviewQueue[last] = first;
    }
  }
  return cinemaPreviewQueue.shift();
}


// I resume the random movies when asked, then hide the control until another movie is selected.
document.querySelector('#continue-previews').addEventListener('click', function () {
  cinemaPinned = false;
  cinemaRotationPaused = false;
  const pool = currentAnswers.platforms.length && currentResults.length
    ? currentResults.map(function (item) { return item.movie; }) : movies;
  let next = nextCinemaPreview(pool);
  if (next === cinemaMovie && pool.length > 1) next = nextCinemaPreview(pool);
  setCinemaMovie(next, false);
});


// I give the shelf shortcut a small press, then light up the collection as it comes into view.
function revealMovieShelf() {
  const shelf = document.querySelector('#watchlist');
  const shortcut = document.querySelector('.watchlist-counter');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  scrollToSectionStart(shelf);
  shelf.setAttribute('tabindex', '-1');
  shelf.focus({preventScroll:true});
  if (reduced) return;
  if (typeof shortcut.animate === 'function') shortcut.animate([
    {transform:'scale(1)', boxShadow:'0 0 0 0 #d6ba8200'},
    {transform:'scale(.95)', boxShadow:'0 0 0 8px #d6ba8222', offset:.4},
    {transform:'scale(1)', boxShadow:'0 0 0 16px #d6ba8200'}
  ], {duration:480, easing:'ease-out'});
  // I restart the sweep on every click, even when the shelf link is already active.
  shelf.classList.remove('shelf-arriving');
  void shelf.offsetWidth;
  shelf.classList.add('shelf-arriving');
}
// I keep repeated clicks working without adding duplicate browser-history entries.
document.querySelector('.watchlist-counter').addEventListener('click', function (event) {
  event.preventDefault();
  // I update the link without triggering the browser's instant jump on the first click.
  if (window.location.hash !== '#watchlist') window.history.pushState(null, '', '#watchlist');
  showCinemaView('saved', false);
  revealMovieShelf();
});








// I welcome visitors with falling popcorn, then open the curtains once the last kernel has cleared.
function popcornWelcome() {
  const cinema = document.querySelector('.cinema');
  const screen = document.querySelector('#cinema-screen');
  const curtainButton = document.querySelector('#curtain-toggle');
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (preference.matches) {
    cinema.classList.remove('is-waiting');
    cinema.classList.remove('is-entering');
    return;
  }
  const rain = document.createElement('div');
  rain.className = 'popcorn-welcome';
  rain.setAttribute('aria-hidden', 'true');
  document.body.appendChild(rain);
  const falling = [];
  screen.inert = true;
  screen.setAttribute('aria-hidden', 'true');
  curtainButton.disabled = true;
  function finishWelcome() {
    falling.forEach(function (animation) { animation.cancel(); });
    rain.remove();
    cinema.classList.remove('is-waiting');
    screen.inert = false;
    screen.setAttribute('aria-hidden', 'false');
    curtainButton.disabled = false;
  }
  // I fill the window with fluffy kernels, using a lighter shower on phones.
  const count = window.matchMedia('(max-width: 700px)').matches ? 180 : 420;
  for (let i = 0; i < count; i++) {
    const kernel = document.createElement('span');
    kernel.className = 'welcome-kernel';
    kernel.style.left = ((i % 30 + Math.random()) / 30 * 100) + '%';
    kernel.style.width = (22 + Math.random() * 24) + 'px';
    kernel.style.borderRadius = (35 + Math.random() * 20) + '% 60% 44% 55%';
    rain.appendChild(kernel);
    if (typeof kernel.animate !== 'function') continue;
    const drift = Math.random() * 110 - 55;
    falling.push(kernel.animate([
      {transform:'translate3d(0,-50px,0) rotate(0deg)', opacity:0},
      {opacity:1, offset:.08},
      {opacity:1, offset:.85},
      {transform:'translate3d(' + drift + 'px,110dvh,0) rotate(' + (Math.random() * 600 - 300) + 'deg)', opacity:0}
    ], {duration:1900 + Math.random() * 500, delay:Math.random() * 1100, easing:'cubic-bezier(.4,0,.8,.6)', fill:'both'}));
  }
  // I also finish cleanly if the visitor switches to reduced motion during the welcome.
  preference.addEventListener('change', function (event) { if (event.matches) finishWelcome(); }, {once:true});
  Promise.allSettled(falling.map(function (animation) { return animation.finished; })).then(finishWelcome);
}


// I reveal the matching films only after Find movies is pressed, including keyboard submission.
document.querySelector('#form').addEventListener('submit', function (event) {
  event.preventDefault();
  update();
  const results = document.querySelector('.results');
  results.hidden = false;
  results.focus({preventScroll:true});
  scrollToSectionStart(results);
});


// I show real watched films from this browser, with the same DVD details and controls.
function renderWatchedFilms() {
  renderWatchedSpotlight();
  const list = document.querySelector('#watched-cards');
  list.replaceChildren();
  const watched = movies.filter(function (movie) { return watchedFilms.includes(movie.title); });
  if (!watched.length) {
    const empty = document.createElement('p');
    empty.className = 'hint watched-empty';
    empty.textContent = 'Mark a film as watched and it will appear here. Your next great watch is waiting in Find your film.';
    list.appendChild(empty);
  }
  watched.forEach(function (movie) {
    const card = buildCard(movie);
    const project = document.createElement('button');
    project.type = 'button';
    project.className = 'project-button';
    project.textContent = 'Show on the cinema';
    project.addEventListener('click', function () { setCinemaMovie(movie, true); });
    card.querySelector('.card-back').insertBefore(project, card.querySelector('.flip-back'));
    list.appendChild(card);
  });
  refreshHearts();
}
// I let menu navigation change sections without an instant anchor jump.
document.querySelector('.main-menu').addEventListener('click', function (event) {
  const link = event.target.closest('a[data-view]');
  if (!link) return;
  event.preventDefault();
  if (window.location.hash !== link.getAttribute('href')) window.history.pushState(null, '', link.getAttribute('href'));
  followCinemaRoute();
});


// I give watched films the poster-and-stamp presentation from my preview.
function renderWatchedSpotlight() {
  const movie = movies.find(function (film) { return film.title === watchedSpotlightTitle; });
  const spotlight = document.querySelector('.watched-spotlight');
  spotlight.hidden = !movie;
  if (!movie) return;
  document.querySelector('#watched-film-title').textContent = movie.title;
  const image = document.querySelector('#watched-photo');
  image.hidden = true;
  document.querySelector('#watched-photo-fallback').textContent = movie.title;
  cinemaPhoto(movie, function (url) {
    if (watchedSpotlightTitle !== movie.title) return;
    image.onload = function () { if (watchedSpotlightTitle === movie.title) image.hidden = false; };
    image.src = url;
    image.alt = movie.title + ' movie poster';
  });
  const seen = watchedFilms.includes(movie.title);
  document.querySelector('#watched-spotlight-stamp').hidden = !seen;
  const button = document.querySelector('#watched-mark-button');
  button.textContent = seen ? 'Undo watched stamp' : 'Mark as watched';
  button.setAttribute('aria-pressed', String(seen));
  document.querySelector('#watched-film-status').textContent = seen ? 'Added to your watched films' : 'Not watched yet';
}
// I search titles as they are typed instead of making visitors scroll through the whole collection.
function searchWatchedFilms() {
  const input = document.querySelector('#watched-film-search');
  const results = document.querySelector('#watched-search-results');
  const status = document.querySelector('#watched-search-count');
  function clean(text) { return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim(); }
  const query = clean(input.value);
  results.replaceChildren();
  results.hidden = !query;
  if (!query) { status.textContent = 'Search Valentina’s collection to mark a film as watched.'; return; }
  const matches = movies.filter(function (movie) { return clean(movie.title).includes(query); });
  status.textContent = matches.length ? matches.length + ' matching film' + (matches.length === 1 ? '' : 's') + (matches.length > 6 ? ' · Keep typing to narrow the list.' : ' · Choose one below.') : 'No films found. Try another title from Valentina’s collection.';
  matches.slice(0, 6).forEach(function (movie) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'watched-search-match';
    button.textContent = movie.title + ' · ' + movie.year + (watchedFilms.includes(movie.title) ? ' · Watched ✓' : '');
    button.addEventListener('click', function () {
      watchedSpotlightTitle = movie.title;
      document.querySelector('#watched-film-list').value = movie.title;
      input.value = movie.title;
      results.hidden = true;
      status.textContent = 'Selected: ' + movie.title;
      renderWatchedSpotlight();
      document.querySelector('#watched-mark-button').focus({preventScroll:true});
    });
    results.appendChild(button);
  });
}
document.querySelector('#watched-film-search').addEventListener('input', searchWatchedFilms);
document.querySelector('#watched-film-search').addEventListener('keydown', function (event) {
  const results = document.querySelector('#watched-search-results');
  if (event.key === 'Escape') results.hidden = true;
  if (event.key === 'ArrowDown' && !results.hidden && results.firstElementChild) {
    event.preventDefault();
    results.firstElementChild.focus();
  }
});
// I save and undo the same watched status from both the spotlight and the movie cards.
document.querySelector('#watched-mark-button').addEventListener('click', function () {
  if (watchedFilms.includes(watchedSpotlightTitle)) watchedFilms = watchedFilms.filter(function (title) { return title !== watchedSpotlightTitle; });
  else watchedFilms.push(watchedSpotlightTitle);
  try { localStorage.setItem('cinema-watched-films', JSON.stringify(watchedFilms)); } catch (error) {}
  showResults();
  renderWatchedFilms();
});


// I give every saved title its own clearly labelled removal button.
function renderShelfManager() {
  const manager = document.querySelector('#shelf-manager');
  manager.replaceChildren();
  if (!watchlist.length) {
    manager.hidden = true;
    const toggle = document.querySelector('#shelf-remove');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = 'Manage saved films';
    return;
  }
  watchlist.forEach(function (title) {
    const row = document.createElement('div');
    row.className = 'shelf-manage-row';
    const name = document.createElement('span');
    name.textContent = title;
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.textContent = 'Remove';
    remove.setAttribute('aria-label', 'Remove ' + title + ' from saved films');
    remove.addEventListener('click', function () {
      clearTimeout(shelfPullTimer);
      if (shelfPullAnimation) shelfPullAnimation.cancel();
      toggleWatchlist(title);
      document.querySelector('#cinema-status').textContent = '';
      const next = manager.querySelector('button');
      if (next) next.focus({preventScroll:true});
      else document.querySelector('.watchlist-header h2').setAttribute('tabindex', '-1');
    });
    row.appendChild(name);
    row.appendChild(remove);
    manager.appendChild(row);
  });
}


// I offer the full alphabetised collection as an alternative to typing a title.
(function fillWatchedList() {
  const list = document.querySelector('#watched-film-list');
  movies.slice().sort(function (a, b) { return a.title.localeCompare(b.title); }).forEach(function (movie) {
    const option = document.createElement('option');
    option.value = movie.title;
    option.textContent = movie.title + ' (' + movie.year + ')';
    list.appendChild(option);
  });
  list.addEventListener('change', function () {
    if (!this.value) return;
    watchedSpotlightTitle = this.value;
    document.querySelector('#watched-film-search').value = this.value;
    document.querySelector('#watched-search-results').hidden = true;
    document.querySelector('#watched-search-count').textContent = 'Selected: ' + this.value;
    renderWatchedSpotlight();
    document.querySelector('#watched-mark-button').focus({preventScroll:true});
  });
})();


// I use platform search links where possible, and label platform home links honestly.
function createPlatformLink(movie, platform) {
  const query = encodeURIComponent(movie.title);
  const destinations = {
    'Netflix': {url:'https://www.netflix.com/search?q=' + query, search:true},
    'Prime Video': {url:'https://www.primevideo.com/search?phrase=' + query, search:true},
    'Apple TV': {url:'https://tv.apple.com/es/search?term=' + query, search:true},
    'Disney+': {url:'https://www.disneyplus.com/'},
    'HBO Max': {url:'https://www.hbomax.com/es/es'},
    'Movistar Plus+': {url:'https://ver.movistarplus.es/'},
    'SkyShowtime': {url:'https://www.skyshowtime.com/es'}
  };
  const destination = destinations[platform];
  const link = document.createElement('a');
  link.className = 'badge platform-watch-link';
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  // I can add a verified film-specific link to watchLinks in that movie's data later.
  const direct = movie.watchLinks && movie.watchLinks[platform];
  let verified = false;
  if (direct && destination) {
    try {
      const candidate = new URL(direct);
      const official = new URL(destination.url);
      verified = candidate.protocol === 'https:' && candidate.hostname.replace(/^www\./, '') === official.hostname.replace(/^www\./, '');
    } catch (error) {}
  }
  link.href = verified ? direct : destination.url;
  link.textContent = (verified ? 'Watch on ' : destination.search ? 'Search ' : 'Open ') + platform;
  // I draw the arrow so phones cannot replace it with a coloured emoji.
  const arrow = document.createElement('span');
  arrow.className = 'platform-arrow';
  arrow.setAttribute('aria-hidden', 'true');
  arrow.innerHTML = '<svg class="arrow-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14"/></svg>';
  link.appendChild(arrow);
  link.setAttribute('aria-label', (verified ? 'Watch ' : destination.search ? 'Search for ' : 'Open the platform for ') + movie.title + ' on ' + platform + ' (new tab)');
  return link;
}


// I explain only the preferences a film really matches, without inventing missing facts.
function getMovieMatchReasons(movie, answers) {
  const reasons = [];
  const platforms = movie.platforms.filter(function (platform) { return (answers.platforms || []).includes(platform); });
  if (platforms.length) reasons.push('On your platforms: ' + platforms.join(' · '));
  const genres = movie.genres.filter(function (genre) { return (answers.genres || []).includes(genre); });
  if (genres.length) reasons.push('Matches your genres: ' + genres.join(' · '));
  if (answers.mood && answers.mood !== 'any' && movie.moods.includes(answers.mood)) reasons.push('Matches your mood: ' + answers.mood.replace(/-/g, ' '));
  if (answers.era === 'newer' && movie.year >= NEWER_FROM_YEAR) reasons.push('Your era: ' + NEWER_FROM_YEAR + ' onwards (' + movie.year + ')');
  if (answers.era === 'older' && movie.year < NEWER_FROM_YEAR) reasons.push('Your era: before ' + NEWER_FROM_YEAR + ' (' + movie.year + ')');
  if (answers.language && answers.language !== 'any' && movie.language === answers.language) reasons.push('Your language: ' + movie.language);
  // I only mention the running time if it is explicitly included in my film data.
  if (Number.isFinite(movie.runtime) && movie.runtime > 0 && movie.runtime < 120) reasons.push('Under two hours: ' + movie.runtime + ' minutes');
  return reasons;
}
// I let visitors open the explanation without hiding the poster or opening its DVD case.
function buildMatchExplanation(movie, answers) {
  const details = document.createElement('details');
  details.className = 'why-match';
  const summary = document.createElement('summary');
  summary.textContent = 'Why this match?';
  details.appendChild(summary);
  const list = document.createElement('ul');
  const reasons = getMovieMatchReasons(movie, answers);
  if (!reasons.length) reasons.push('A film from Valentina’s personal collection. Choose your platforms and preferences for a personalised match.');
  reasons.forEach(function (reason) {
    const item = document.createElement('li');
    item.textContent = reason;
    list.appendChild(item);
  });
  details.appendChild(list);
  return details;
}


// I give every film three easy, progressive clues: its type and year, its premise, then a recognisable detail.
function mysteryFilms() {
  const easyClues = {
  "Parasite": [
    "A struggling family starts working for a much wealthier family.",
    "A South Korean story about rich and poor people living very different lives."
  ],
  "Mad Max: Fury Road": [
    "People race across a desert in heavily modified vehicles.",
    "Furiosa and Max try to escape a warlord in a huge truck."
  ],
  "Die Hard": [
    "A police officer faces criminals inside a skyscraper.",
    "John McClane is trapped in a Los Angeles office building at Christmas."
  ],
  "The Shining": [
    "A writer takes his family to an isolated hotel for the winter.",
    "Jack Nicholson plays the father at the enormous Overlook Hotel."
  ],
  "Get Out": [
    "A young man visits his girlfriend's family for the first time.",
    "Daniel Kaluuya notices something very wrong during a weekend with her parents."
  ],
  "Spirited Away": [
    "A girl enters a strange world full of spirits.",
    "Chihiro works in a magical bathhouse after her parents turn into pigs."
  ],
  "Coco": [
    "A boy who loves music visits the Land of the Dead.",
    "Miguel carries a guitar on a colourful Día de los Muertos adventure."
  ],
  "Up": [
    "An elderly man sets off on an adventure with a young scout.",
    "A house flies through the sky, lifted by thousands of colourful balloons."
  ],
  "La La Land": [
    "An actress and a jazz musician fall in love in Los Angeles.",
    "Emma Stone and Ryan Gosling dance together under the stars."
  ],
  "Mar adentro": [
    "A Spanish man fights for the right to decide how his life ends.",
    "Javier Bardem plays Ramón Sampedro, a man paralysed after a diving accident."
  ],
  "Ocho apellidos vascos": [
    "A man from southern Spain pretends to belong somewhere very different.",
    "A Sevillian tries to pass himself off as Basque to impress a woman."
  ],
  "Campeones": [
    "A basketball coach must work with a team he initially underestimates.",
    "A Spanish comedy about a coach and a team of players with intellectual disabilities."
  ],
  "La sociedad de la nieve": [
    "A group must survive together after a devastating journey.",
    "A rugby team's plane crashes in the snowy Andes mountains."
  ],
  "El hoyo": [
    "People live on different levels of a mysterious prison.",
    "Food travels down through the building on one moving platform."
  ],
  "Arrival": [
    "A language expert tries to communicate with visitors from space.",
    "Amy Adams studies circular alien writing beside enormous floating spacecraft."
  ],
  "Blade Runner": [
    "A detective searches for artificial humans in a futuristic city.",
    "Harrison Ford plays Rick Deckard, who hunts beings called replicants."
  ],
  "Interstellar": [
    "A father leaves Earth to look for a future for humanity.",
    "Matthew McConaughey travels through space while his daughter Murph stays on Earth."
  ],
  "My Octopus Teacher": [
    "A filmmaker keeps returning to the ocean to meet the same animal.",
    "A documentary about a man's bond with an octopus in a South African kelp forest."
  ],
  "Free Solo": [
    "A climber attempts a dangerous challenge without safety ropes.",
    "Alex Honnold climbs the enormous El Capitan rock face with no rope."
  ],
  "Groundhog Day": [
    "A man keeps waking up to exactly the same day.",
    "Bill Murray relives February 2 over and over in a small town."
  ],
  "Rear Window": [
    "A man stuck at home starts watching the neighbours across his courtyard.",
    "A photographer in a wheelchair thinks he has witnessed a murder through his window."
  ],
  "Roma": [
    "A black-and-white story follows everyday life in a Mexican household.",
    "Cleo works for a family in Mexico City in this Alfonso Cuarón film."
  ],
  "Oldboy": [
    "A man suddenly becomes free after years of unexplained imprisonment.",
    "A South Korean revenge thriller about a man held captive for fifteen years."
  ],
  "Intouchables": [
    "Two men from very different backgrounds become unlikely friends.",
    "A wealthy French man who is paralysed hires Driss as his caregiver."
  ],
  "Sound of Metal": [
    "A musician has to rethink his life when his hearing changes.",
    "Riz Ahmed plays a heavy-metal drummer who starts losing his hearing."
  ],
  "Wolfwalkers": [
    "A young girl discovers a secret in the forest outside her town.",
    "Two girls meet in an Irish animated story about people who can become wolves."
  ],
  "Greyhound": [
    "A naval commander protects ships on a dangerous ocean crossing.",
    "Tom Hanks commands a destroyer fighting German submarines in World War II."
  ],
  "Killers of the Flower Moon": [
    "A series of deaths threatens a wealthy Native American community.",
    "Leonardo DiCaprio and Lily Gladstone star in a story about the Osage murders."
  ],
  "Top Gun: Maverick": [
    "An experienced pilot returns to train a younger generation.",
    "Tom Cruise is back as Maverick, preparing fighter pilots for a dangerous mission."
  ],
  "Shrek": [
    "A grumpy outsider goes on a quest with a very talkative companion.",
    "A green ogre and Donkey set out to rescue Princess Fiona."
  ],
  "Gladiator": [
    "A betrayed soldier is forced to fight for survival in an arena.",
    "Russell Crowe plays Maximus, a Roman general who becomes a gladiator."
  ],
  "Back to the Future": [
    "A teenager accidentally travels to the time when his parents were young.",
    "Marty McFly and Doc Brown use a DeLorean car as a time machine."
  ],
  "Encanto": [
    "One girl feels left out in a family where almost everyone has a special gift.",
    "Mirabel lives with the magical Madrigal family in a colourful house in Colombia."
  ],
  "The Lord of the Rings: The Fellowship of the Ring": [
    "A small traveller leaves home carrying a very dangerous object.",
    "Frodo, Gandalf and their companions begin a journey involving the One Ring."
  ],
  "Harry Potter and the Philosopher's Stone": [
    "A boy discovers that he belongs to a hidden magical world.",
    "Harry meets Ron and Hermione during his first year at Hogwarts."
  ],
  "Fire of Love": [
    "Two scientists share a love of each other and a dangerous natural phenomenon.",
    "A documentary about Katia and Maurice Krafft filming erupting volcanoes."
  ],
  "Pride & Prejudice": [
    "A young woman and a wealthy man misunderstand each other in the English countryside.",
    "Keira Knightley plays Elizabeth Bennet opposite Mr Darcy."
  ],
  "Portrait of a Lady on Fire": [
    "An artist is asked to paint a woman on an isolated island.",
    "A female painter and her subject fall in love in eighteenth-century France."
  ],
  "Anatomy of a Fall": [
    "A writer faces questions about a death at her family home.",
    "A woman stands trial after her husband falls from their snowy mountain chalet."
  ],
  "My Neighbor Totoro": [
    "Two sisters discover something magical near their new country home.",
    "A huge furry forest spirit waits at a bus stop with a little girl and an umbrella."
  ],
  "Your Name": [
    "Two teenagers find themselves living parts of each other's lives.",
    "A boy in Tokyo and a girl in the countryside mysteriously swap bodies."
  ],
  "When Harry Met Sally...": [
    "Two friends keep meeting over the years and question whether friendship is enough.",
    "Billy Crystal and Meg Ryan play Harry and Sally in a New York romantic comedy."
  ],
  "10 Things I Hate About You": [
    "Dating rules create complications for two sisters at high school.",
    "Heath Ledger tries to win over Julia Stiles, with a famous song in the school stands."
  ],
  "The Proposal": [
    "A boss asks her assistant to help her avoid an immigration problem.",
    "Sandra Bullock and Ryan Reynolds pretend to be engaged and visit his family in Alaska."
  ],
  "Crazy, Stupid, Love": [
    "A newly single man gets help changing his dating life.",
    "Ryan Gosling gives Steve Carell dating lessons in this ensemble romantic comedy."
  ],
  "Crazy Rich Asians": [
    "A woman visits her boyfriend's family and discovers how wealthy they are.",
    "An American woman meets her boyfriend's extraordinarily rich family in Singapore."
  ],
  "How to Lose a Guy in 10 Days": [
    "Two people begin dating while secretly trying to prove different things.",
    "Kate Hudson writes a dating experiment while Matthew McConaughey makes a romantic bet."
  ],
  "Love Actually": [
    "Several different love stories take place in the same city.",
    "Hugh Grant is among a large cast celebrating Christmas in London."
  ],
  "Bridget Jones's Diary": [
    "A London woman records her romantic mishaps and attempts at self-improvement.",
    "Renée Zellweger plays Bridget, caught between Daniel Cleaver and Mark Darcy."
  ],
  "13 Going on 30": [
    "A teenager wishes she could skip ahead to adulthood.",
    "Jennifer Garner plays a thirteen-year-old who wakes up in her thirty-year-old body."
  ],
  "Pretty Woman": [
    "Two people from very different worlds make an unusual arrangement.",
    "Julia Roberts and Richard Gere meet in a romantic comedy set in Beverly Hills."
  ],
  "Mamma Mia!": [
    "A young woman wants to discover who her father is before her wedding.",
    "Three possible fathers arrive on a Greek island in a musical full of ABBA songs."
  ],
  "The Holiday": [
    "Two women decide to escape their romantic troubles by swapping homes.",
    "Cameron Diaz and Kate Winslet trade a Los Angeles house for an English cottage."
  ],
  "Anyone But You": [
    "Two people who do not get along are thrown together at a wedding.",
    "Sydney Sweeney and Glen Powell pretend to be a couple at an Australian wedding."
  ],
  "To All the Boys I've Loved Before": [
    "A teenager's private romantic letters suddenly stop being private.",
    "Lara Jean's old love letters get sent out, leading to a pretend relationship with Peter."
  ],
  "Clueless": [
    "A fashionable teenager loves giving people makeovers and matchmaking advice.",
    "Alicia Silverstone plays Cher, a stylish Beverly Hills high-school student."
  ],
  "A Quiet Place": [
    "A family has to be extremely careful about making noise.",
    "Creatures hunt by sound, so the family communicates using sign language."
  ],
  "Hereditary": [
    "A grieving family starts experiencing increasingly frightening events.",
    "Toni Collette plays a mother who makes miniature houses in an Ari Aster horror film."
  ],
  "The Conjuring": [
    "A family asks experts for help with terrifying events in their new home.",
    "Paranormal investigators Ed and Lorraine Warren visit a haunted farmhouse."
  ],
  "It": [
    "A group of children confronts something frightening in their town.",
    "The Losers' Club faces Pennywise, a clown associated with red balloons."
  ],
  "Scream": [
    "Teenagers find themselves living through something like a horror film.",
    "A killer wearing the Ghostface mask makes frightening phone calls."
  ],
  "The Others": [
    "A mother cares for her children in a dark, isolated house.",
    "Nicole Kidman plays a mother whose children cannot tolerate sunlight."
  ],
  "[REC]": [
    "A television crew follows emergency workers into a building.",
    "A Spanish found-footage horror film about an apartment block placed under quarantine."
  ],
  "El orfanato": [
    "A woman returns to a place connected with her childhood.",
    "Belén Rueda plays a mother who moves into a former orphanage with her son."
  ],
  "Alien": [
    "A spaceship crew encounters a dangerous creature far from Earth.",
    "Ripley and the crew of the Nostromo face a terrifying alien aboard their ship."
  ],
  "The Exorcist": [
    "A mother looks for help when her daughter behaves in terrifying ways.",
    "Two priests try to help a possessed girl named Regan."
  ],
  "Midsommar": [
    "A group of visitors joins a festival in a remote community.",
    "Florence Pugh attends a Swedish midsummer celebration full of flowers and daylight."
  ],
  "Nope": [
    "Two siblings notice something strange above their family property.",
    "A brother and sister at a horse ranch try to film something mysterious in the sky."
  ],
  "Talk to Me": [
    "A group of teenagers turns a supernatural activity into a party game.",
    "An embalmed hand lets people contact spirits when they hold it and speak."
  ],
  "The Substance": [
    "A performer is offered an unusual way to change her appearance.",
    "Demi Moore plays a celebrity who tries a mysterious treatment promising a younger version of herself."
  ],
  "Smile": [
    "A woman notices a disturbing pattern after a traumatic event.",
    "A horror film where an unnaturally wide smile becomes a sign of danger."
  ],
  "The Dark Knight": [
    "A city's masked protector faces an unpredictable new enemy.",
    "Christian Bale's Batman confronts Heath Ledger's Joker in Gotham City."
  ],
  "Mission: Impossible – Fallout": [
    "A spy and his team race to stop a major disaster.",
    "Tom Cruise returns as Ethan Hunt, with helicopters, stolen plutonium and a famous bathroom fight."
  ],
  "Kill Bill: Vol. 1": [
    "A woman sets out to take revenge on people from her past.",
    "Uma Thurman plays the Bride, carrying a katana and wearing a yellow suit."
  ],
  "The Matrix": [
    "A man begins to question whether the world around him is real.",
    "Neo meets Morpheus and chooses between a red pill and a blue pill."
  ],
  "Raiders of the Lost Ark": [
    "An adventurer races to find a powerful ancient object.",
    "Indiana Jones, with his fedora and whip, searches for the Ark of the Covenant."
  ],
  "Avengers: Endgame": [
    "A team of superheroes tries to put things right after a devastating defeat.",
    "Iron Man, Captain America and the Avengers face the consequences of Thanos's snap."
  ],
  "Jurassic Park": [
    "Visitors arrive at an extraordinary new attraction on an island.",
    "Scientists have brought dinosaurs back to life for a theme park."
  ],
  "Spider-Man: Into the Spider-Verse": [
    "A teenager meets other people who have powers like his.",
    "Miles Morales meets Spider-people from different universes in an animated adventure."
  ],
  "Toy Story": [
    "The inhabitants of a child's bedroom have secret lives.",
    "Woody the cowboy meets a new toy called Buzz Lightyear."
  ],
  "Inside Out": [
    "A big life change is shown through what happens inside a child's mind.",
    "Joy, Sadness, Anger, Fear and Disgust guide a girl named Riley."
  ],
  "Ratatouille": [
    "An unlikely cook dreams of working in a famous food city.",
    "Remy is a rat who helps a young man cook in a Paris restaurant."
  ],
  "Howl's Moving Castle": [
    "A young woman affected by magic finds shelter in a very unusual home.",
    "Sophie meets a wizard whose enormous walking castle is powered by Calcifer."
  ],
  "Finding Nemo": [
    "A worried parent crosses the ocean looking for his child.",
    "Marlin and the forgetful Dory search for a little clownfish with one small fin."
  ],
  "The Social Dilemma": [
    "People who helped build online products discuss their consequences.",
    "A documentary about social media, persuasive design and the algorithms behind your feed."
  ],
  "Icarus": [
    "An amateur sporting experiment leads to a much bigger investigation.",
    "A documentary that begins with cycling and uncovers Russian sports doping."
  ],
  "American Factory": [
    "A workplace brings together people with very different working cultures.",
    "A Chinese company opens a factory in a former General Motors plant in Ohio."
  ],
  "Seaspiracy": [
    "A filmmaker investigates what happens behind the seafood industry.",
    "A documentary about commercial fishing and its impact on the oceans."
  ],
  "Fyre": [
    "An exclusive event is advertised as the ultimate luxury escape.",
    "A documentary about the disastrous music festival promoted on a Bahamian island."
  ],
  "Amy": [
    "Archive footage and interviews tell the story of a famous singer.",
    "A documentary about Amy Winehouse, the singer of Back to Black."
  ],
  "Miss Americana": [
    "A musician shares a closer look at her career and public life.",
    "A documentary following Taylor Swift, both onstage and away from the spotlight."
  ],
  "March of the Penguins": [
    "Animals make a difficult journey to raise their young.",
    "Emperor penguins cross Antarctica and protect their eggs from the cold."
  ],
  "Becoming": [
    "A public figure meets people while travelling to discuss her life.",
    "A documentary following Michelle Obama during her memoir book tour."
  ],
  "Navalny": [
    "An investigation follows an opposition politician and an attempt on his life.",
    "A documentary about Russian opposition figure Alexei Navalny and the investigation into his poisoning."
  ],
  "20 Days in Mariupol": [
    "Journalists document life inside a city under attack.",
    "A documentary filmed during the siege of Mariupol in Ukraine."
  ],
  "The Great Hack": [
    "A data scandal raises questions about influence and elections.",
    "A documentary about Cambridge Analytica, Facebook data and political campaigns."
  ],
  "Little Miss Sunshine": [
    "A very unconventional family takes a road trip together.",
    "A yellow van carries a young girl and her family towards a beauty pageant."
  ],
  "Everything Everywhere All at Once": [
    "An overwhelmed woman discovers many possible versions of her life.",
    "Michelle Yeoh plays a laundromat owner in a multiverse adventure with a very important bagel."
  ],
  "Jojo Rabbit": [
    "A boy's view of the world changes in wartime Germany.",
    "A young boy has an imaginary Hitler as a friend in a Taika Waititi film."
  ],
  "Barbie": [
    "A character leaves her colourful home to discover a very different world.",
    "Margot Robbie and Ryan Gosling play Barbie and Ken as they visit the real world."
  ],
  "The Grand Budapest Hotel": [
    "A hotel employee remembers adventures with an unforgettable colleague.",
    "A concierge named Gustave and a lobby boy named Zero work at a pink hotel."
  ],
  "Good Will Hunting": [
    "A young man has an extraordinary talent that others begin to notice.",
    "Matt Damon plays a janitor at MIT who is secretly brilliant at mathematics."
  ],
  "Dead Poets Society": [
    "An unconventional teacher encourages students to think differently.",
    "Robin Williams plays an English teacher who tells his students to seize the day."
  ],
  "Big Fish": [
    "A son tries to understand the larger-than-life stories his father tells.",
    "A Tim Burton film mixing a travelling circus, fantastic tales and a father-son relationship."
  ],
  "Life of Pi": [
    "A young survivor has an extraordinary companion far from land.",
    "A boy shares a lifeboat with a Bengal tiger named Richard Parker."
  ],
  "Guardians of the Galaxy": [
    "A group of unlikely outsiders has to work together in space.",
    "Star-Lord teams up with Gamora, Drax, Rocket the raccoon and Groot."
  ],
  "Deadpool": [
    "An unconventional superhero tells jokes while getting into violent trouble.",
    "Ryan Reynolds plays the red-suited, wisecracking antihero Wade Wilson."
  ],
  "Kung Fu Panda": [
    "An unlikely student dreams of becoming a martial-arts hero.",
    "Po is a food-loving panda who trains with Master Shifu."
  ],
  "Thor: Ragnarok": [
    "A superhero ends up far from home and has to find a way back.",
    "Thor meets the Hulk on a gladiator planet while Hela threatens Asgard."
  ],
  "Dune": [
    "A young man travels with his family to a politically important world.",
    "Paul Atreides arrives on Arrakis, a desert planet with giant sandworms and precious spice."
  ],
  "Inception": [
    "A specialist enters other people's minds to carry out a dangerous job.",
    "Leonardo DiCaprio leads a team through dreams within dreams."
  ],
  "The Shape of Water": [
    "A lonely woman forms a bond with someone kept in a secret facility.",
    "A mute cleaner befriends an amphibious creature in a Guillermo del Toro film."
  ],
  "E.T. the Extra-Terrestrial": [
    "A child secretly helps a visitor who is very far from home.",
    "Elliott befriends a small alien who wants to phone home."
  ],
  "WALL-E": [
    "A lonely worker continues a daily routine on a nearly empty planet.",
    "A little rubbish-collecting robot meets the sleek white robot EVE."
  ]
};
  return movies.map(function (movie) {
    const genres = movie.genres.map(function (genre) { return genre.replace(/-/g, ' '); }).join(' / ');
    return {movie:movie, clues:['A ' + movie.year + ' film: ' + genres + '.'].concat(easyClues[movie.title])};
  });
}
// I clear a departed mystery, including a reveal that may still be opening its curtains.
function resetMysteryExperience() {
  clearTimeout(mysteryRevealTimer);
  mysteryRevealTimer = null;
  mysteryRevealing = false;
  mysteryRound = null;
  document.querySelector('#mystery-stage').classList.remove('is-revealed');
  document.querySelector('#mystery-question').hidden = false;
  document.querySelector('#mystery-game-controls').hidden = false;
  document.querySelector('#mystery-result').hidden = true;
  const image = document.querySelector('#mystery-poster');
  image.onload = null; image.hidden = true; image.removeAttribute('src'); image.alt = '';
  document.querySelector('#mystery-guess').value = '';
  document.querySelector('#mystery-feedback').textContent = '';
  document.querySelector('#mystery-title').textContent = '';
  document.querySelector('#mystery-note').textContent = '';
  document.querySelector('#mystery-platforms').replaceChildren();
  document.querySelector('#mystery-celebration').replaceChildren();
  document.querySelector('#mystery-clues').replaceChildren();
  document.querySelector('#mystery-clue-button').disabled = false;
  document.querySelector('#mystery-clue-button').textContent = 'Uncover clue 1';
}
// I explore all 114 films in random order before repeating a mystery.
function startMysteryRound() {
  if (mysteryRevealing) return;
  if (!mysteryBag.length) {
    mysteryBag = mysteryFilms();
    for (let i = mysteryBag.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const swap = mysteryBag[i]; mysteryBag[i] = mysteryBag[j]; mysteryBag[j] = swap;
    }
    if (mysteryBag.length > 1 && mysteryRound && mysteryBag[0].movie === mysteryRound.movie) mysteryBag.push(mysteryBag.shift());
  }
  const pick = mysteryBag.shift();
  if (!pick) return;
  mysteryRound = {movie:pick.movie, clues:pick.clues, opened:0, revealed:false, photo:null};
  document.querySelector('#mystery-guess').value = '';
  document.querySelector('#mystery-feedback').textContent = '';
  document.querySelector('#mystery-celebration').replaceChildren();
  document.querySelector('#mystery-poster').removeAttribute('src');
  renderMysteryRound();
  const round = mysteryRound;
  // I preload the photo without revealing the film name or poster to the player.
  cinemaPhoto(round.movie, function (url) {
    round.photo = url;
    if (mysteryRound === round && round.revealed) setMysteryPhoto(round);
  });
}
function setMysteryPhoto(round) {
  const image = document.querySelector('#mystery-poster');
  if (!round.photo) return;
  image.onload = function () { if (mysteryRound === round && round.revealed) image.hidden = false; };
  image.alt = round.movie.title + ' movie poster';
  image.src = round.photo;
}
// I keep unrevealed clue text and the answer out of the page until the player asks for them.
function renderMysteryRound() {
  const round = mysteryRound;
  if (!round) return;
  document.querySelector('#mystery-stage').classList.toggle('is-revealed', round.revealed);
  document.querySelector('#mystery-question').hidden = round.revealed;
  document.querySelector('#mystery-game-controls').hidden = round.revealed;
  document.querySelector('#mystery-result').hidden = !round.revealed || mysteryRevealing;
  if (!round.revealed) document.querySelector('#mystery-poster').hidden = true;
  const list = document.querySelector('#mystery-clues');
  list.replaceChildren();
  round.clues.forEach(function (clue, index) {
    const item = document.createElement('li');
    const number = document.createElement('span');
    number.textContent = '0' + (index + 1);
    const text = document.createElement('span');
    text.textContent = index < round.opened ? clue : 'Clue not uncovered yet';
    item.className = index < round.opened ? 'is-uncovered' : '';
    item.appendChild(number); item.appendChild(text); list.appendChild(item);
  });
  const button = document.querySelector('#mystery-clue-button');
  button.disabled = round.opened === 3;
  button.textContent = round.opened === 3 ? 'All clues uncovered' : 'Uncover clue ' + (round.opened + 1);
  if (round.revealed) {
    document.querySelector('#mystery-title').textContent = round.movie.title;
    document.querySelector('#mystery-note').textContent = round.movie.note;
    // I offer the revealed film's platform links as well as showing it in my cinema.
    const platforms = document.querySelector('#mystery-platforms');
    platforms.replaceChildren();
    round.movie.platforms.forEach(function (platform) { platforms.appendChild(createPlatformLink(round.movie, platform)); });
  }
}
// I animate each clue like a paper strip being turned over.
document.querySelector('#mystery-clue-button').addEventListener('click', function () {
  if (!mysteryRound || mysteryRound.revealed || mysteryRound.opened === 3) return;
  mysteryRound.opened++;
  renderMysteryRound();
  const clue = document.querySelector('#mystery-clues').children[mysteryRound.opened - 1];
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && typeof clue.animate === 'function') {
    clue.animate([{transform:'perspective(700px) rotateX(-80deg)',opacity:.25},{transform:'perspective(700px) rotateX(0deg)',opacity:1}], {duration:550,easing:'cubic-bezier(.2,.7,.2,1)'});
  }
  document.querySelector('#mystery-feedback').textContent = 'Clue ' + mysteryRound.opened + ': ' + mysteryRound.clues[mysteryRound.opened - 1];
});
// I open the miniature curtains and celebrate with a small shower of gold ticket pieces.
function revealMysteryFilm(message) {
  if (!mysteryRound || mysteryRound.revealed || mysteryRevealing) return;
  const round = mysteryRound;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  mysteryRevealing = true;
  round.revealed = true;
  setMysteryPhoto(round);
  renderMysteryRound();
  document.querySelector('#mystery-feedback').textContent = message || 'Opening tonight’s mystery film…';
  function finish() {
    if (mysteryRound !== round) return;
    mysteryRevealTimer = null;
    mysteryRevealing = false;
    renderMysteryRound();
    document.querySelector('#mystery-feedback').textContent = message || 'Tonight’s pick is ' + round.movie.title + '.';
    if (!document.querySelector('#mystery-view').hidden) document.querySelector('#mystery-title').focus({preventScroll:true});
    if (reduced) return;
    const celebration = document.querySelector('#mystery-celebration');
    for (let i = 0; i < 18; i++) {
      const piece = document.createElement('span');
      piece.style.left = (i * 5.5) + '%';
      celebration.appendChild(piece);
      if (typeof piece.animate !== 'function') { piece.remove(); continue; }
      const animation = piece.animate([{transform:'translateY(-20px) rotate(0deg)',opacity:0},{opacity:1,offset:.12},{transform:'translateY(380px) rotate(' + (i % 2 ? -220 : 220) + 'deg)',opacity:0}], {duration:1000+i%4*130,delay:i%5*45,easing:'ease-in'});
      animation.finished.then(function () { piece.remove(); }).catch(function () { piece.remove(); });
    }
  }
  if (reduced) finish(); else mysteryRevealTimer = setTimeout(finish, 1050);
}
document.querySelector('#mystery-reveal-button').addEventListener('click', function () { revealMysteryFilm(); });
document.querySelector('#mystery-guess-form').addEventListener('submit', function (event) {
  event.preventDefault();
  if (!mysteryRound || mysteryRound.revealed) return;
  const input = document.querySelector('#mystery-guess');
  if (!input.value.trim()) { document.querySelector('#mystery-feedback').textContent = 'Type a film title or choose Reveal tonight’s pick.'; return; }
  if (isCorrectMysteryGuess(input.value, mysteryRound.movie)) revealMysteryFilm('You got it! ' + mysteryRound.movie.title + '.');
  else {
    document.querySelector('#mystery-feedback').textContent = 'Not this time. Try another clue, or reveal the film whenever you like.';
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && typeof input.animate === 'function') input.animate([{transform:'translateX(0)'},{transform:'translateX(-4px)'},{transform:'translateX(4px)'},{transform:'translateX(0)'}], {duration:250});
  }
});
document.querySelector('#mystery-next').addEventListener('click', startMysteryRound);
document.querySelector('#mystery-project').addEventListener('click', function () { if (mysteryRound && mysteryRound.revealed) setCinemaMovie(mysteryRound.movie, true); });


// I accept familiar short titles and a few common translations, not just exact punctuation.
function isCorrectMysteryGuess(guess, movie) {
  function clean(text) { return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim().replace(/^(the|a|an)\s+/, '').replace(/[^a-z0-9]/g, ''); }
  const aliases = {
    'Parasite':['Parasitos'],
    'The Shining':['El resplandor'],
    'Spirited Away':['El viaje de Chihiro'],
    'My Neighbor Totoro':['Totoro','Mi vecino Totoro'],
    'Your Name':['Kimi no Na wa'],
    'Intouchables':['The Intouchables','Intocable'],
    'Groundhog Day':['Atrapado en el tiempo'],
    'Back to the Future':['Regreso al futuro','Volver al futuro'],
    "Harry Potter and the Philosopher's Stone":['Harry Potter',"Harry Potter and the Sorcerer's Stone",'Harry Potter y la piedra filosofal'],
    'The Lord of the Rings: The Fellowship of the Ring':['The Fellowship of the Ring','El señor de los anillos','La comunidad del anillo'],
    'The Dark Knight':['Batman The Dark Knight','El caballero oscuro'],
    'Little Miss Sunshine':['Pequeña Miss Sunshine'],
    'Everything Everywhere All at Once':['Everything Everywhere','Todo a la vez en todas partes','Todo en todas partes al mismo tiempo'],
    'E.T. the Extra-Terrestrial':['ET','El extraterrestre'],
    'Finding Nemo':['Buscando a Nemo'],
    'Inside Out':['Del reves','Intensamente'],
    'The Shape of Water':['La forma del agua'],
    'The Conjuring':['Expediente Warren','The Warren Files'],
    'The Exorcist':['El exorcista'],
    'Pride & Prejudice':['Pride and Prejudice','Orgullo y prejuicio'],
    'How to Lose a Guy in 10 Days':['Como perder a un chico en 10 dias'],
    'The Grand Budapest Hotel':['Gran Hotel Budapest'],
    'Raiders of the Lost Ark':['Indiana Jones','En busca del arca perdida']
  };
  const accepted = [movie.title].concat(aliases[movie.title] || []);
  if (movie.title.includes(':')) accepted.push(movie.title.split(':')[0]);
  return accepted.some(function (title) { return clean(title) === clean(guess); });
}


// I show honest recovery choices only when the selected platforms have no exact match.
function updateNoMatchOptions() {
  const panel = document.querySelector('#no-match-options');
  panel.hidden = !currentAnswers.platforms.length || currentResults.length > 0;
  const hint = document.querySelector('.results > .hint');
  if (hint) hint.hidden = currentResults.length === 0;
  if (panel.hidden) return;
  const withoutMood = Object.assign({}, currentAnswers, {mood:'any'});
  const withoutGenres = Object.assign({}, currentAnswers, {genres:[]});
  const moodCount = getRecommendations(withoutMood).length;
  const genreCount = getRecommendations(withoutGenres).length;
  const moodButton = document.querySelector('#relax-mood');
  const genreButton = document.querySelector('#relax-genre');
  moodButton.hidden = !currentAnswers.mood || currentAnswers.mood === 'any';
  genreButton.hidden = !currentAnswers.genres.length;
  moodButton.disabled = moodCount === 0;
  genreButton.disabled = genreCount === 0;
  moodButton.textContent = 'Keep the genre, change the mood (' + moodCount + ')';
  genreButton.textContent = 'Keep the mood, explore other genres (' + genreCount + ')';
  document.querySelector('#no-match-help').textContent = moodCount || genreCount ? 'Choose an option to broaden one preference. Your platforms stay selected.' : 'Try adding another platform or changing your era or language preferences.';
}
// I update the visible form as well as the recommendations, so the explanation stays accurate.
function broadenMovieMatch(preference) {
  if (preference === 'mood') document.querySelector('input[name="mood"][value="any"]').checked = true;
  else document.querySelectorAll('input[name="genre"]').forEach(function (input) { input.checked = false; });
  update();
  const results = document.querySelector('.results');
  results.hidden = false;
  results.focus({preventScroll:true});
  scrollToSectionStart(results);
}
document.querySelector('#relax-mood').addEventListener('click', function () { broadenMovieMatch('mood'); });
document.querySelector('#relax-genre').addEventListener('click', function () { broadenMovieMatch('genres'); });


// I bring cards and questions into view as visitors reach them, including freshly found films.
(function animateCinemaDetails() {
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (typeof IntersectionObserver === 'undefined' || typeof MutationObserver === 'undefined') return;
  const watched = new WeakSet();
  const running = new Set();
  const observer = new IntersectionObserver(function (entries) {
    let stagger = 0;
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      if (preference.matches || typeof entry.target.animate !== 'function') return;
      const animation = entry.target.animate([
        {opacity:0, transform:'translateY(22px)'},
        {opacity:1, transform:'translateY(0)'}
      ], {duration:600, delay:Math.min(stagger++ * 80, 240), easing:'cubic-bezier(.2,.7,.25,1)', fill:'backwards'});
      running.add(animation);
      animation.onfinish = function () { running.delete(animation); };
      animation.oncancel = function () { running.delete(animation); };
    });
  }, {threshold:0.08});
  function watchDetails() {
    document.querySelectorAll('.result-card, .questionnaire fieldset, .watched-spotlight').forEach(function (element) {
      if (watched.has(element)) return;
      watched.add(element);
      observer.observe(element);
    });
  }
  // I batch new cards into one scan and leave every control usable throughout the entrance.
  let pending = false;
  const changes = new MutationObserver(function () {
    if (pending) return;
    pending = true;
    requestAnimationFrame(function () { pending = false; watchDetails(); });
  });
  changes.observe(document.querySelector('main'), {childList:true, subtree:true});
  preference.addEventListener('change', function () {
    if (preference.matches) running.forEach(function (animation) { animation.cancel(); });
  });
  watchDetails();
})();


// I keep these notes in third person, alongside the real films already in the collection.
(function setUpSecretSeats() {
  const stories = {
    A2: {title:'10 Things I Hate About You', label:'The comfort film with a special place in Valentina’s heart', note:'One of Valentina’s favourite romantic comedies, and a comfort film she can always come back to. The humour and the love story are part of the magic, but so is the person she watched it with. That memory gives this film a special place in her heart—some favourites are about more than what happens on screen.'},
    A4: {title:'Interstellar', label:'The one that stays after the credits', note:'What stayed with Valentina was not just space, but the thought of time passing while the people you love carry on without you. It makes her think about her own family, growing up, and how quickly ordinary days become memories. The galaxies are beautiful, but the moments between a parent and a child are what make this film personal to her.'},
    A6: {title:'Ratatouille', label:'A little warmth for a rainy Sunday', note:'For Valentina, Ratatouille feels like a little piece of childhood: watching films with her family, the smell of something cooking, and having nowhere else she needed to be. The scene where one bite takes someone straight back to being a child captures why this film means so much to her. It brings back that feeling of home—being younger, being together, and finding happiness in something as simple as a meal shared with family.'}
  };
  const room = document.querySelector('#secret-seats-view');
  const story = document.querySelector('#secret-story');
  const photo = document.querySelector('#secret-film-photo');
  let selectedMovie = null;
  let photoRequest = 0;
  // I restore the unopened seats and ignore photo requests from the previous visit.
  const unopenedStory = story.innerHTML;
  room.resetExperience = function () {
    selectedMovie = null;
    photoRequest++;
    room.querySelectorAll('[data-secret-seat]').forEach(function (seat) { seat.setAttribute('aria-pressed', 'false'); });
    room.querySelector('.secret-cinema').classList.remove('has-secret');
    story.innerHTML = unopenedStory;
    document.querySelector('#secret-film-actions').hidden = true;
    document.querySelector('#secret-film-meta').textContent = '';
    document.querySelector('#secret-platforms').replaceChildren();
    document.querySelector('#secret-photo-fallback').textContent = '';
    photo.onload = null; photo.onerror = null; photo.hidden = true; photo.removeAttribute('src'); photo.alt = '';
  };
  room.querySelectorAll('[data-secret-seat]').forEach(function (button) {
    button.addEventListener('click', function () {
      const entry = stories[button.dataset.secretSeat];
      const movie = movies.find(function (candidate) { return candidate.title === entry.title; });
      if (!movie) return;
      selectedMovie = movie;
      room.querySelectorAll('[data-secret-seat]').forEach(function (seat) {
        seat.setAttribute('aria-pressed', String(seat === button));
      });
      room.querySelector('.secret-cinema').classList.add('has-secret');
      story.replaceChildren();
      const label = document.createElement('p'); label.className = 'brand-eyebrow'; label.textContent = 'Seat ' + button.dataset.secretSeat + ' · ' + entry.label;
      const title = document.createElement('h3'); title.textContent = entry.title;
      const note = document.createElement('p'); note.textContent = entry.note;
      story.appendChild(label); story.appendChild(title); story.appendChild(note);
      document.querySelector('#secret-film-actions').hidden = false;
      document.querySelector('#secret-film-meta').textContent = movie.year + ' · ' + movie.genres.map(function (genre) { return genre.charAt(0).toUpperCase() + genre.slice(1); }).join(', ');
      const platforms = document.querySelector('#secret-platforms'); platforms.replaceChildren();
      movie.platforms.forEach(function (platform) { platforms.appendChild(createPlatformLink(movie, platform)); });
      photo.hidden = true; photo.removeAttribute('src');
      document.querySelector('#secret-photo-fallback').textContent = movie.title;
      const request = ++photoRequest;
      cinemaPhoto(movie, function (url) {
        if (request !== photoRequest || !url) return;
        photo.onload = function () { if (request === photoRequest) photo.hidden = false; };
        photo.onerror = function () { if (request === photoRequest) photo.hidden = true; };
        photo.alt = movie.title + ' poster'; photo.src = url;
      });
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && typeof story.animate === 'function') {
        story.animate([{opacity:0,transform:'translateY(14px)'},{opacity:1,transform:'translateY(0)'}], {duration:550,easing:'ease-out'});
        button.animate([{transform:'translateY(0)'},{transform:'translateY(-12px)'},{transform:'translateY(-6px)'}], {duration:450,easing:'ease-out'});
      }
      // I keep the chosen seat in view and bring its story just below the sticky menu.
      scrollToSectionStart(story);
    });
  });
  document.querySelector('#secret-project').addEventListener('click', function () {
    if (selectedMovie) setCinemaMovie(selectedMovie, true);
  });
})();


// I show the entrance once per page opening; switching sections never brings it back.
(function setUpCinemaEntrance() {
  const entrance = document.querySelector('#cinema-entrance');
  const button = document.querySelector('#enter-cinema');
  const website = document.querySelector('#film-website');
  let entered = false;
  website.inert = true;
  function openWebsite() {
    entrance.hidden = true;
    website.inert = false;
    website.removeAttribute('aria-hidden');
    document.body.classList.remove('entrance-pending');
    // I begin at the homepage header before the popcorn falls and the curtains open.
    if (window.location.hash) window.history.replaceState(null, '', window.location.pathname + window.location.search);
    showCinemaView('cinema', false);
    window.scrollTo({top:0, behavior:'instant'});
    const heading = document.querySelector('.site-header h1');
    heading.setAttribute('tabindex', '-1');
    heading.focus({preventScroll:true});
    popcornWelcome();
  }
  button.addEventListener('click', function () {
    if (entered) return;
    entered = true;
    button.disabled = true;
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && typeof entrance.animate === 'function') {
      const fade = entrance.animate([{opacity:1},{opacity:0}], {duration:350,easing:'ease-out',fill:'forwards'});
      fade.finished.then(openWebsite).catch(openWebsite);
    } else openWebsite();
  });
  button.focus({preventScroll:true});
})();
