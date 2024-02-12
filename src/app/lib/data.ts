import { colors } from './colors';

export interface Playlist {
  id: number;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
  time: string;
  likes: number;
}

export interface Artist {
  id: number;
  name: string;
  image: string;
  monthlyListeners: number;
  description: string;
}

export interface Song {
  id: number;
  playlistId: number;
  title: string;
  image: string;
  creator: Artist;
  artists: string[];
  album: string;
  duration: string;
}

export const playlists: Playlist[] = [
  {
    id: 1,
    title: 'Rock Classics',
    color: colors.green,
    cover:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707573243/spotify-clone/playlists/inlfzxzrympwz6rg4tpg.webp',
    artists: ['Bon Jovi', 'AC/DC', 'Queen'],
    time: '3h 15m',
    likes: 12001654,
  },
  {
    id: 2,
    title: 'Viva Latino',
    color: colors.yellow,
    cover:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707220626/spotify-clone/playlists/yciffnsphjo2y80qd5lu.webp',
    artists: ['J Balvin', 'Bad Bunny', 'Maluma', 'Peso Pluma'],
    time: '3h 15m',
    likes: 12001654,
  },
  {
    id: 3,
    title: 'Pop Hits',
    color: colors.fiord,
    cover:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707220626/spotify-clone/playlists/qbj6hkxwnxdaygdv9blx.webp',
    artists: ['Dua Lipa', 'Ariana Grande', 'Justin Bieber'],
    time: '3h 15m',
    likes: 12001654,
  },
  {
    id: 4,
    title: "Hip Hop 90's & 2000's",
    color: colors.blue,
    cover:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707220625/spotify-clone/playlists/jiql4ig7hjzn0f7iylmr.webp',
    artists: ['Eminem', '50 Cent', 'Snoop Dogg', 'Dr. Dre'],
    time: '3h 15m',
    likes: 12001654,
  },
  {
    id: 5,
    title: 'Electronic Dance',
    color: colors.darkblue,
    cover:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707220625/spotify-clone/playlists/ukj1fguapq8lszujozms.webp',
    artists: ['David Guetta', 'Avicii', 'TWENTY SIX', 'BENNETT'],
    time: '3h 15m',
    likes: 12001654,
  },
  {
    id: 6,
    title: 'Lofi Beats',
    color: colors.pink,
    cover:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707220625/spotify-clone/playlists/h0xxlzdfm3nf0y1d5rzl.webp',
    artists: ['nrg', 'Wun Two', 'Clloinsworthy', 'Aurora 10'],
    time: '3h 15m',
    likes: 12001654,
  },
];

export const morePlaylists: Playlist[] = [
  {
    id: 7,
    title: 'Essential Indie',
    color: colors.yellow,
    cover:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707220625/spotify-clone/playlists/ffjxma92cgibpz9gewww.webp',
    artists: ['Dijon', 'Beach House', 'Clairo', 'Phoebe Bridgers'],
    time: '3h 15m',
    likes: 12001654,
  },
  {
    id: 8,
    title: 'Classical Essentials',
    color: colors.indigo,
    cover:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707220625/spotify-clone/playlists/ijo477nl97rgimrntf9t.webp',
    artists: ['Johann Sebastian Bach', 'Ludwig van Beethoven', 'Yo-Yo Ma'],
    time: '3h 15m',
    likes: 12001654,
  },
  {
    id: 9,
    title: 'Soul Blues',
    color: colors.gray,
    cover:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707220625/spotify-clone/playlists/i4prkpvee6mpzdllyktt.webp',
    artists: ['Joe Louis Walker', 'Solomon Burke', 'Jade Macrae'],
    time: '3h 15m',
    likes: 12001654,
  },
  {
    id: 10,
    title: "Today's Top Hits",
    color: colors.red,
    cover:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707220625/spotify-clone/playlists/ijeo71h7pkczvdxokdby.webp',
    artists: ['Jack Harlow', 'Ariana Grande', 'SZA'],
    time: '3h 15m',
    likes: 12001654,
  },
  {
    id: 11,
    title: "Today's Top Hits",
    color: colors.yellow,
    cover:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707220624/spotify-clone/playlists/k8vopi9ysvqud5izwvgu.webp',
    artists: ['Eminem', 'Wu-Tang Clan', 'Big Tymers'],
    time: '3h 15m',
    likes: 12001654,
  },
];

export const allPlaylists = [...playlists, ...morePlaylists];

export const artists: Artist[] = [
  {
    id: 1,
    name: 'Bon Jovi',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707241662/spotify-clone/artists/hrdis1vszljttcqjtu3f.webp',
    monthlyListeners: 28127100,
    description:
      'After ushering in the era of pop-metal with their 1986 blockbuster Slippery When Wet and its hit singles "You Give Love a Bad Name," "Wanted Dead or Alive," and "Living on a Prayer," Bon Jovi wound up transcending the big-haired \'80s, withstanding changes in style and sound to become one of the biggest American rock bands of their time. Unlike a lot of their big-haired pop-metal peers, Bon Jovi\'s appeal wasn\'t limited to the States. Slippery When Wet, its 1988 sequel New Jersey, and 1992\'s Keep the Faith were all international smashes, each selling over ten million copies worldwide. Another way they differed from other MTV favorites of the late \'80s lies in how Bon Jovi cannily and subtly changed their sound to fit the time. First, the group slowly lessened their reliance on arena rock guitars, emphasizing melody and ballads without rejecting hard rock. They incorporated elements of soft rock and country, moves that helped the band sustain their popularity into the 21st century.',
  },
  {
    id: 2,
    name: 'AC/DC',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707241920/spotify-clone/artists/xwv5trdequakwmxc0d5m.webp',
    monthlyListeners: 29338464,
    description:
      "With a limitless supply of dirty riffs, snarling vocals, and timelessly catchy, anthemic choruses, AC/DC is one of the most important and most lasting forces in hard rock. Founded in the early '70s by Scottish-born brothers  and , the Aussie band exploded onto the international stage in 1979 with the release of their multi-platinum-selling sixth album, Highway to Hell. The death of charismatic frontman  in 1980 threatened to derail the group, but AC/DC powered through. They recruited  vocalist  and unleashed their most successful effort to date, Back in Black, which has become the second best-selling album in history. The band continued to help define the sound of hard rock and metal throughout the '80s, '90s, and beyond, spawning countless imitators and enjoying steady, consistent commercial success. They also became one of the best examples of arena rock, playing to enormous crowds as the years went on, and rocking as hard as ever on studio albums like 1990's pop-glinted The Razor's Edge and 2020's Power Up, both of which reached the upper tiers of multiple charts.",
  },
  {
    id: 3,
    name: 'Queen',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707242047/spotify-clone/artists/lqpa6jdcd3kivr1kahau.webp',
    monthlyListeners: 50356546,
    description:
      "Queen epitomized all the glittery excess of album-oriented rock in the 1970s, marrying the crunch of heavy metal to the pomp of prog rock then leavening the heady mixture with camp humor. It was an eccentric blend that proved surprisingly versatile, allowing for the mock-operatic \"Bohemian Rhapsody,\" soaring arena rock like \"Somebody to Love,\" thumping rockers like \"Fat Bottomed Girls,\" the neo-rockabilly \"Crazy Little Thing Called Love,\" and the disco excursion \"Another One Bites the Dust.\" Queen's range proved that they were a deceptively egalitarian band: they're the only classic rock group where each member wrote at least one of the group's signature songs. Despite this division of labor, frontman  commanded attention both during his life and after his death. A powerful singer with a penchant for drama,  possessed an exaggerated charisma and a devilish sense of humor, qualities that made him one of the great rock stars of his generation. Queen's reign began in earnest with 1975's A Night at the Opera and lasted through The Game in 1980, a half-decade filled with big hits that turned into enduring standards. Although the hits weren't as big in the '80s, the group retained its international popularity through 's death in 1991. After his passing, Queen's original LPs found a new audience, partially cultivated by surviving members  and  tending to archival releases and staying on the road, either with  or  as 's replacement. Queen's legacy also was assisted by the 2018 release of Bohemian Rhapsody, a biopic of the band featuring Rami Malek in an Oscar-winning turn as.",
  },
  {
    id: 4,
    name: 'Aerosmith',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707242140/spotify-clone/artists/r5n4ulh3kaq2w2fydaep.webp',
    monthlyListeners: 22621564,
    description:
      "Specializing in raunchy, sleazy boogie and melodramatic ballads, Aerosmith were one of the biggest hard rock bands to emerge in the 1970s, shaping the sound and style of hard rock and metal in the decades to come. The Boston-based quintet found the middle ground between the menace of  and the campy, sleazy flamboyance of , developing a lean, dirty riff-oriented boogie that was loose and swinging and as hard as a diamond. In the meantime, they developed a prototype for power ballads with \"Dream On\" using a piano orchestrated with strings and distorted guitars. Aerosmith's ability to pull off both ballads and rock & roll made them extremely popular during the mid-'70s, when they had a string of gold and platinum albums. By the early '80s, the group's audience had declined as the band fell prey to drug and alcohol abuse, setting the stage for one of the most remarkable comebacks in rock history. A cleaned-up Aerosmith happily adapted to an era of MTV and corporate rock without losing their cheerfully trashy essence, giving them a series of smashes in the late '80s and '90s that helped sustain their popularity into the 2020s, when they launched a farewell tour on their 50th anniversary.",
  },
  {
    id: 5,
    name: 'Red Hot Chilli Peppers',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707242215/spotify-clone/artists/pa0xe1i7r2ndgxk4te2j.webp',
    monthlyListeners: 33792569,
    description:
      "We went in search of ourselves as the band that we have somehow always been. Just for the fun of it we jammed and learned some old songs. Before long we started the mysterious process of building new songs. A beautiful bit of chemistry meddling that had befriended us hundreds of times along the way. Once we found that slip stream of sound and vision, we just kept mining. With time turned into an elastic waist band of oversized underwear, we had no reason to stop writing and rocking. It felt like a dream. When all was said and done, our moody love for each other and the magic of music had gifted us with more songs than we knew what to do with. Well we figured it out. 2 double albums released back to back. The second of which is easily as meaningful as the first or should that be reversed. 'Return of the Dream Canteen' is everything we are and ever dreamed of being. It's packed. Made with the blood of our hearts, yours truly, the Red Hot Chili Peppers.",
  },
  {
    id: 6,
    name: 'Nirvana',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707242325/spotify-clone/artists/vuj58zjc0kjmo5zo28kc.webp',
    monthlyListeners: 30665518,
    description:
      "Nothing was ever quite the same after Nirvana. The band's second album, 1991's Nevermind, revolutionized popular music by bringing alternative rock above ground, introducing mainstream audiences to sounds and concepts that had previously existed only in shadowy record store corners and on low-frequency college radio airwaves. Nevermind's noisy, dissonant guitar rock, mumbled or howled surrealistic lyrics, and generally angsty punk attitudes were unlikely candidates for chart success, but the band undercut their grungy songs with enough pop melodicism to create a sound unlike anything average listeners had ever heard before, striking at the exact right moment to become an unprecedented success.",
  },
  {
    id: 7,
    name: "Guns N' Roses",
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707242487/spotify-clone/artists/rvpjkd3awvgr8zglfpne.webp',
    monthlyListeners: 29059781,
    description:
      "Guns N' Roses are the bridge separating 1980s and 1990s hard rock, the band responsible for ushering in an era of grim, gritty rock & roll. Where such peers as  reveled in the decadence of Sunset Strip sleaze, Guns N' Roses focused on the grimy underbelly of the urban jungle, with guitarists  and  cranking out mean riffs that matched the dark fantasies of , the vocalist who led GNR with a serpentine charm.",
  },
  {
    id: 8,
    name: 'Metallica',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707242637/spotify-clone/artists/ifmcdjwsffg1qmu5fpmm.webp',
    monthlyListeners: 25141751,
    description:
      'Metallica formed in 1981 by drummer Lars Ulrich and guitarist and vocalist James Hetfield and has become one of the most influential and commercially successful rock bands in history, having sold 120 million albums worldwide and generating more than 15 billion streams while playing to millions of fans on literally all seven continents. They have scored several multi-platinum albums, including 1991’s Metallica (commonly referred to as The Black Album), with sales of nearly 18 million copies in the United States alone, making it the best-selling album in the history of Soundscan.',
  },
  {
    id: 9,
    name: 'Peso Pluma',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707242754/spotify-clone/artists/r2eqt2luauifaoc3qghc.webp',
    monthlyListeners: 59026062,
    description:
      'Born and raised in Guadalajara, Mexico, Peso Pluma is paving the way for the next generation of Mexican artists. The young up-and-comer has been making a name for himself with his unparalleled style and authenticity. Drawing inspiration from a variety of musical genres including Regional Mexican and Latin Urban, Peso Pluma is reinventing the genre with his sultry vocals and eclectic sounds.',
  },
  {
    id: 10,
    name: 'Bad Bunny',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707242855/spotify-clone/artists/cbjvig2tlbdw2ujzakpg.webp',
    monthlyListeners: 72528244,
    description:
      'Bad Bunny is a young urban music singer, rapper and producer originally from Puerto Rico. This talented artist has demonstrated his already overwhelming power, influence and demand with completely sold-out concerts all over Europe, Latin America and the U.S. Some of his most recognized singles include "Soy Peor," "Diles," "Tu No Metes Cabra" "Chambea" and Mia thats out with Drake. Bad Bunny has had a short but stunning career with colossal amounts of success',
  },
  {
    id: 11,
    name: 'Bizarrap',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707243044/spotify-clone/artists/s5zqyhcgmx9vxlse4uf1.webp',
    monthlyListeners: 42477851,
    description:
      'Argentine artist and music producer, winner of three Latin Grammy Awards in 2023 in the categories "Song of the Year", "Best Urban Song" and "Best Pop Song". Recognized as the most listened-to artist globally in recent years and a pioneer in the Latin music scene, in the past year, he further solidified his impact on the global music industry.',
  },
  {
    id: 12,
    name: 'Karol G',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707243126/spotify-clone/artists/lpojnsnq9n6zvhb2iqom.webp',
    monthlyListeners: 50357345,
    description:
      "Colombia's Karol G is a best-selling, chart-topping, award-winning vocalist known for her soulful mix of reggaeton, pop, and dance-oriented R&B. Her many collaborative singles appearances with other urbano stars including , Anuel AA, , , , and , regularly placed inside the Top 100, while their accompanying videos garnered hundreds of millions of views.",
  },
  {
    id: 13,
    name: 'Emilia',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707243198/spotify-clone/artists/dn3dy0vhr7qesrrmzwzm.webp',
    monthlyListeners: 18824983,
    description:
      'Emilia Mernes is a young Argentine singer-songwriter, musician, dancer, and actress whose tireless pursuit of excellence in the arts has led her to become an exceptional figure in the entertainment industry. From her first release as a solo artist, Emilia is known worldwide with such hits as: "Recalienta", "No Soy Yo" featuring Darell, "Billion", "Bendición" alongside Alex Rose, "Perreito Salvaje" with Boza, "Rápido Lento" FT Tiago PZK, "De Enero a Diciembre" together with Rusherking, "Como Si No Importara" and "Esto recién empieza" alongside Duki, among others.',
  },
  {
    id: 14,
    name: 'Feid',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707243288/spotify-clone/artists/tctikfeziqfneadffkos.webp',
    monthlyListeners: 45675335,
    description:
      'Feid, whose real name is Salomón Villada Hoyos, is a Colombian singer and songwriter known for his vibrant and eclectic approach to reggaeton and Latin pop music. Born on August 19, 1992, in Medellín, Colombia, Feid has made a significant impact on the Latin music scene with his catchy tunes and versatile style.',
  },
];

export const songs: Song[] = [
  {
    id: 1,
    playlistId: 1,
    title: 'Runaway',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707220841/spotify-clone/songs/txgl3slvmqgbsgakjfkb.webp',
    creator: artists[0],
    artists: ['Bon Jovi'],
    album: 'Bon Jovi',
    duration: '3:51',
  },
  {
    id: 2,
    playlistId: 1,
    title: 'Thunderstruck',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707220978/spotify-clone/songs/etjvvqe68dudu3lbxjxv.webp',
    creator: artists[1],
    artists: ['AC/DC'],
    album: 'The Razors Edge',
    duration: '4:52',
  },
  {
    id: 3,
    playlistId: 1,
    title: 'Bohemian Rhapsody',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707221036/spotify-clone/songs/dgxyyi8isxkqsajfyrzo.webp',
    creator: artists[2],
    artists: ['Queen'],
    album: 'A Night At The Opera',
    duration: '5:54',
  },
  {
    id: 4,
    playlistId: 1,
    title: 'Dream On',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707221136/spotify-clone/songs/d86jnm7odfnoglvqtdii.webp',
    creator: artists[3],
    artists: ['Aerosmith'],
    album: 'Aerosmith',
    duration: '5:54',
  },
  {
    id: 5,
    playlistId: 1,
    title: 'Californication',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707221239/spotify-clone/songs/o1kpplxbgjn8nmwwpnzb.webp',
    creator: artists[4],
    artists: ['Red Hot Chilli Peppers'],
    album: 'Californication',
    duration: '5:29',
  },
  {
    id: 6,
    playlistId: 1,
    title: 'Come As You Are',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707221308/spotify-clone/songs/dbtifmdsaciwnrarw9n4.webp',
    creator: artists[5],
    artists: ['Nirvana'],
    album: 'Nevermind',
    duration: '3:38',
  },
  {
    id: 7,
    playlistId: 1,
    title: "Sweet Child O' Mine",
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707221365/spotify-clone/songs/dumsgm0updxupaovhxxt.webp',
    creator: artists[6],
    artists: ["Guns N' Roses"],
    album: 'Appetite For Destruction',
    duration: '5:56',
  },
  {
    id: 8,
    playlistId: 1,
    title: 'Enter Sandman',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707221502/spotify-clone/songs/m3kwrqhspqtaixwhydtk.webp',
    creator: artists[7],
    artists: ['Metallica'],
    album: 'Metallica',
    duration: '5:56',
  },
  {
    id: 9,
    playlistId: 1,
    title: "Livin' On A Prayer",
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707221561/spotify-clone/songs/mvzomfdibazjxumfl7od.webp',
    creator: artists[0],
    artists: ['Bon Jovi'],
    album: 'Slippery When Wet',
    duration: '4:09',
  },
  {
    id: 10,
    playlistId: 1,
    title: 'Under the Bridge',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707221699/spotify-clone/songs/u7zes52ycrhkkf1ahu5s.webp',
    creator: artists[4],
    artists: ['Red Hot Chilli Peppers'],
    album: 'Blood Sugar',
    duration: '4:24',
  },
  {
    id: 11,
    playlistId: 2,
    title: 'BELLAKEO',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707240758/spotify-clone/songs/nayihpg4ewg97aiqig1d.webp',
    creator: artists[8],
    artists: ['Peso Pluma', 'Anitta'],
    album: 'BELLAKEO',
    duration: '3:17',
  },
  {
    id: 12,
    playlistId: 2,
    title: 'PERREO NEGRO',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707240873/spotify-clone/songs/ftnxttvw8wx8tyi4qfav.webp',
    creator: artists[9],
    artists: ['Bad Bunny', 'Feid'],
    album: 'nadie sabe lo que va a pasar mañana',
    duration: '2:42',
  },
  {
    id: 13,
    playlistId: 2,
    title: 'Young Miko: Bzrp Music Sessions, Vol. 58',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707241024/spotify-clone/songs/nqbhgog87mpsmwke8k3j.webp',
    creator: artists[10],
    artists: ['Bizarrap', 'Young Miko'],
    album: 'Young Miko: Bzrp Music Sessions, Vol. 58',
    duration: '3:07',
  },
  {
    id: 14,
    playlistId: 2,
    title: 'QLONA',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707241096/spotify-clone/songs/idfzssclqy8lyuj5aqwj.webp',
    creator: artists[11],
    artists: ['Karol G', 'Peso Pluma'],
    album: 'MAÑANA SERÁ BONITO',
    duration: '2:52',
  },
  {
    id: 15,
    playlistId: 2,
    title: 'La_Original.mp3',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707241483/spotify-clone/songs/lvs8aotz6faaihf9nomf.webp',
    creator: artists[12],
    artists: ['Emilia', 'Tini'],
    album: 'La_Original.mp3',
    duration: '2:20',
  },
  {
    id: 16,
    playlistId: 2,
    title: 'LUNA',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707241320/spotify-clone/songs/g7zlevfi1abl4m50nrno.webp',
    creator: artists[13],
    artists: ['Feid', 'ATL Jacob'],
    album: 'FERXXOCALIPSIS',
    duration: '3:16',
  },
];
