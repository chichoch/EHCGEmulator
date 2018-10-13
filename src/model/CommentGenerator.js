'use strict';
import Comment from './Comment';

export default class CommentGenerator {
  getRandomComment() {
    const randomAuthorIndex = getRandomNumberBetween(0, comments.length);
    const randomAuthor = comments[randomAuthorIndex].author;
    const randomCommentIndex = getRandomNumberBetween(0, comments[randomAuthorIndex].comments.length);
    const randomComment = comments[randomAuthorIndex].comments[randomCommentIndex];
    return new Comment(randomAuthor, randomComment);
  }
}

const getRandomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * max) + min;
}

const comments = [
  {
    'author' : {
      'name': 'Fjanton Smuts',
      'img': require('../pictures/fjanton.jpg'),
    },
    'comments': [
      'Äh, kom till Kellys istället!',
      'EDDIE MEDUZA!',
      'Man måste få vila ibland.',
      'Kollade ikapp Westworld och handmaids och åt godis och drack folköl SÅATTEH GANSKA BUSY',
    ]
  },
  {
    'author' : {
      'name': 'Dässi Dolken',
      'img': require('../pictures/dässi.jpg')
    },
    'comments': [
      '🤤🤤🤤',
      '🤠🤠🤠',
      'SÅ OTILLFREDSSTÄLLANDE MED DETTA JÄVLA ANTI-SMÄLL-SKYDD!!!!!!!!!!!!!!',
      'Lyssnar på Skitsystem nu. Känns pyttelite bättre.',
      'SVARA!!!',
    ]
  },
  {
    'author' : {
      'name': 'Danjel Jäller',
      'img': require('../pictures/daniel_jaller.jpg')
    },
    'comments': [
      'Vilka jävla töntar',
      'Hatar veganer. Jag är vegan.',
      'Tänker mig att det är så du låter när du knullar. ”Ja. Kuk. Ja.”',
      'Jag mår fruktansvärt dåligt',
      'Ligga?',
    ]
  },
  {
    'author' : {
      'name': 'bAnna Säger',
      'img': require('../pictures/anna_sager.jpg')
    },
    'comments': [
      'Du är ett prutthål, Charlie.',
      'Stockholm ++++++++!',
      'Tycker ända att Stockholm är världens bästa stad.',
      '🤤',
    ]
  },
  {
    'author' : {
      'name': 'Njonas Masmö',
      'img': require('../pictures/jonas_masmo.jpg')
    },
    'comments': [
      'Blockad.',
      'Jag är en av Sveriges främsta antifascister.',
      'Du är så jävla bölig.',
      'Om ingen diskuterar det här med mig så blockar jag Daniel Jaller igen.',
    ]
  },
  {
    'author' : {
      'name': 'Marinda Mäyer',
      'img': require('../pictures/miranda_mayer.jpg')
    },
    'comments': [
      'ANTIIII CIIIIIIMEEEEEX OCH DÄRMED BASTA!',
      'Jag ska ligga',
      'MJAAAAUUU!!! 😻😻😻',
      'JAG VILL LEKA!!!!!!!!111#',
    ]
  },
  {
    'author' : {
      'name': 'Stoffe Röstlund',
      'img': require('../pictures/christoffer_röstlund.jpg')
    },
    'comments': [
      'Idiot.',
      'Idiot.',
      'JVVF-idot.',
      'Reggae-idiot.',
      'Skinhead-idiot',
    ]
  },
  {
    'author' : {
      'name': 'Tor "Hammarn" Nyman',
      'img': require('../pictures/tor_nyman.jpg')
    },
    'comments': [
      'Stockholm är bäst. Jag är vegan.',
      'Jag älskar fan gitarrsolon och gitarrister.',
      'Någon som behöver underhållning på sitt bröllop?',
      'Jag är vegan.',
    ]
  },
]
