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
  durationInSeconds: number;
  audio: string;
}

export const playlists: Playlist[] = [
  {
    id: 1,
    title: 'Rock Classics',
    color: colors.green,
    cover:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707573243/spotify-clone/playlists/inlfzxzrympwz6rg4tpg.webp',
    artists: ['Bon Jovi', 'AC/DC', 'Queen', 'Metallica'],
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
    title: 'Discover Weekly',
    color: colors.lightblue,
    cover:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709207121/spotify-clone/playlists/lf1mzf3oyzbllowyenpa.webp',
    artists: ['Your weekly mixtape of fresh music'],
    time: '3h 15m',
    likes: 12001654,
  },
  {
    id: 8,
    title: 'Rock Mix',
    color: colors.red,
    cover:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709205917/spotify-clone/playlists/skz9xsbyiuxhq77c9set.webp',
    artists: ['Aerosmith', 'Red Hot Chilli Peppers', 'Nirvana'],
    time: '3h 15m',
    likes: 12001654,
  },
  {
    id: 9,
    title: 'Electronic Mix',
    color: colors.indigo,
    cover:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709206022/spotify-clone/playlists/a3hloejuxdx9sxaxmroh.webp',
    artists: ['Joe Louis Walker', 'Solomon Burke', 'Jade Macrae'],
    time: '3h 15m',
    likes: 12001654,
  },
  {
    id: 10,
    title: "Today's Pop Hits",
    color: colors.red,
    cover:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709206672/spotify-clone/playlists/mbx7fblz5zxhqx3gdznr.webp',
    artists: ['Ariana Grande', 'Billie Eilish', 'Miley Cyrus'],
    time: '3h 15m',
    likes: 12001654,
  },
  {
    id: 11,

    title: 'Hip Hop Drive',
    color: colors.yelloworange,
    cover:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709206787/spotify-clone/playlists/t4zbudgediiyocdkfzzz.webp',
    artists: ['Eminem', '2Pac', '50 Cent', 'Snoop Dogg'],
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
  {
    id: 15,
    name: 'Ariana Grande',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709139387/spotify-clone/artists/bgjt3bflezyykev1pkdy.webp',
    monthlyListeners: 79920382,
    description:
      'With her four-octave vocal acrobatics and iconic image, American singer, songwriter, and actress Ariana Grande has solidified her place as one of the quintessential pop stars of her generation, racking up stacks of awards and chart records in the process.',
  },
  {
    id: 16,
    name: 'Taylor Swift',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709139418/spotify-clone/artists/cjzfoc22fqbce3kopjk0.webp',
    monthlyListeners: 105606227,
    description:
      'Taylor Swift is a globally acclaimed American singer-songwriter and actress. Renowned for her exceptional songwriting skills and versatile musical talent, Swift has left an indelible mark on the pop and country music genres. Beginning her career as a country artist, she transitioned seamlessly into pop music, showcasing her ability to evolve and experiment with different styles.',
  },
  {
    id: 17,
    name: 'Billie Eilish',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709139432/spotify-clone/artists/opkygbq1kdhjibbbbude.webp',
    monthlyListeners: 66902624,
    description:
      'Billie Eilish, born on December 18, 2001, is an American singer-songwriter and global pop sensation. Emerging as a breakthrough artist in the music scene, Eilish quickly captivated audiences with her distinctive sound, characterized by haunting melodies, whispered vocals, and genre-defying compositions. ',
  },
  {
    id: 18,
    name: 'Selenga Gomez',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709139444/spotify-clone/artists/ls4rufk5m2szp4ikidp1.webp',
    monthlyListeners: 47883285,
    description:
      'Selena Gomez, born on July 22, 1992, is an American singer, actress, and producer who has become a prominent figure in the entertainment industry. Rising to fame as the star of Disney Channel\'s "Wizards of Waverly Place", Gomez transitioned seamlessly into a successful music career. ',
  },
  {
    id: 19,
    name: 'Miley Cyrus',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709139472/spotify-clone/artists/uvrxkta0v0p5tehpxeeq.webp',
    monthlyListeners: 64686014,
    description:
      'Miley Cyrus, born Destiny Hope Cyrus on November 23, 1992, is a multi-talented American singer, songwriter, and actress. Her music, ranging from pop and country to rock and hip-hop influences, reflects this evolution, with chart-topping hits like "Wrecking Ball", "Party in the USA", and "Malibu".',
  },
  {
    id: 20,
    name: 'Shawn Mendes',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709139484/spotify-clone/artists/iijfa8kz0ltbtyv9jdtz.webp',
    monthlyListeners: 44228181,
    description:
      "A Juno-winning and Grammy-nominated pop singer/songwriter who broke records with his debut single, Canada's Shawn Mendes became known to international audiences when he was just 15. His mix of 's and 's styles was a hit from his first single, 2014's \"Life of the Party,\" which made him the youngest artist to land a debut single in the Top 25 in the U.S.",
  },
  {
    id: 21,
    name: 'Dua Lipa',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709141913/spotify-clone/artists/fssvqipoarohe8ysv0c8.webp',
    monthlyListeners: 75991817,
    description:
      '3x GRAMMY and 6x Brit Award-winning international pop powerhouse Dua Lipa closed out 2022 as one of the top performers of the year, with both Variety and Billboard naming her Future Nostalgia World Tour among the best live shows of the year.',
  },
  {
    id: 22,
    name: '50 Cent',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709141439/spotify-clone/artists/wem8zbm8hcwglcq1myxh.webp',
    monthlyListeners: 36255887,
    description:
      '50 Cent, born Curtis James Jackson III on July 6, 1975, is an American rapper, actor, and entrepreneur who rose to prominence in the early 2000s. Hailing from Queens, New York, 50 Cent gained widespread recognition with his debut album "Get Rich or Die Tryin\'" in 2003, featuring hit singles like "In Da Club" and "21 Questions." Known for his gritty lyrics, catchy hooks, and unique delivery, he became a central figure in the hip-hop scene.',
  },
  {
    id: 23,
    name: 'Eminem',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709141455/spotify-clone/artists/lx2bzx6ckw3qgwgepgad.webp',
    monthlyListeners: 70635630,
    description:
      'Apart from being one of the best-selling artists in music history, Eminem is one of the greatest rappers of his generation: effortlessly fast, fluid, dexterous, and unpredictable, capable of pulling off long-form narratives or withering asides.',
  },
  {
    id: 24,
    name: '2Pac',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709141468/spotify-clone/artists/vey3gsc4myy1czvlccva.webp',
    monthlyListeners: 23039902,
    description:
      "A natural ability to appeal to hedonists and revolutionaries alike, combined with charismatic star power and unapologetic threat, made 2Pac one of the most fascinating and successful rappers of the '90s.",
  },
  {
    id: 25,
    name: 'Ice Cube',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709141481/spotify-clone/artists/hw0yyjf0gcs98ctarjj9.webp',
    monthlyListeners: 15668503,
    description:
      'Ice Cube is one of the most crucial artists in rap history. A razor-sharp lyricist, alternately furious and humorous MC, and accomplished producer, Cube laid the foundation for the legacy of pioneering gangsta rap group  by writing "Boyz-N-the-Hood" for partner  and making his first big splash as an MC with the subsequent "Dope Man".',
  },
  {
    id: 26,
    name: 'Snoop Dogg',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709141492/spotify-clone/artists/tp5cs4c0g1ei9ynier6a.webp',
    monthlyListeners: 29367742,
    description:
      "One of the most iconic figures to emerge from the early-'90s G-funk era, Snoop Dogg evolved beyond his gangsta rap beginnings to become a lovable pop culture fixture with forays into television, movies, football coaching, and wrestling while expanding his musical reach far beyond his primary genre. ",
  },
  {
    id: 27,
    name: 'Avicii',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709143016/spotify-clone/artists/ga1hjmexm0bymsppp1zt.webp',
    monthlyListeners: 37891804,
    description:
      'With his melodic songs and inspirational lyrics Swedish house producer Avicii was one of the defining artists of modern pop. The genre-bending tracks captivated audiences worldwide and are widely considered the soundtrack of a generation.',
  },
  {
    id: 28,
    name: 'David Guetta',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709143048/spotify-clone/artists/kkvdbn21a7eqovamjrnl.webp',
    monthlyListeners: 71226736,
    description:
      'DJ. Producer. Artist. David Guetta is a musical trailblazer and an international icon. With 2x Grammys awards, 11x Grammy nominations, 7x UK number 1 singles, over 40 billion global streams, 50 million records sold worldwide, and is currently the 4th most streamed artist on Spotify with over 75 million monthly global followers.',
  },
  {
    id: 29,
    name: 'Calvin Harris',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709143036/spotify-clone/artists/gr9pdkcpcm5qjxxxjkuz.webp',
    monthlyListeners: 63260921,
    description:
      "Producer, DJ and songwriter Calvin Harris stands as the figurehead for modern dance music, having broken world records and dominated the charts. He has over 35 billion combined audio and video streams in his career history, making him one of the most viewed artists on YouTube and one of Sony Music's biggest streaming artists.",
  },
  {
    id: 30,
    name: 'LoFi Dreamer',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709209533/spotify-clone/artists/pacqsxwxeduyywbsqwlx.webp',
    monthlyListeners: 625713,
    description:
      'LoFi Dreamer is a modern lofi / chillhop music producer heavily inspired by Japanese and Chinese culture as well as their instruments',
  },
  {
    id: 31,
    name: 'Tenno',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709208959/spotify-clone/artists/eqn6ee8r8l3bphoh3res.webp',
    monthlyListeners: 634295,
    description:
      'Egor Tuchin aka Tenno is originally from Russia, Tyumen. But is currently based in Hungary. He\'s been producing music as Tenno since April 2019. Before that he\'s had different projects which were more focused on Drum & Bass and Melodic Dubstep / Chillstep genres. He now mostly makes chill music inspired by Japanese and Chinese cultures. His track "Journey" was the first where he incorporated Asian instruments and it helped him shape his sound.',
  },
  {
    id: 32,
    name: 'Urban Nocturne',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709209420/spotify-clone/artists/sdls5egphqpvnh3f1sij.webp',
    monthlyListeners: 585145,
    description:
      'Urban Nocturne is a modern lofi / chillhop music producer heavily inspired by Japanese and Chinese culture as well as their instruments.',
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
    duration: '3:52',
    durationInSeconds: 232,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1707935054/spotify-clone/audios/pdj6fhasdlb2l6zxfsjh.mp3',
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
    durationInSeconds: 292,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1707997301/spotify-clone/audios/lzbjtpy1cvrythn8v20o.mp3',
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
    duration: '5:59',
    durationInSeconds: 359,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1707997343/spotify-clone/audios/eoovcleuxmw9lerqd5pn.mp3',
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
    duration: '4:28',
    durationInSeconds: 268,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1707997396/spotify-clone/audios/w656irqzwktb4zzikvao.mp3',
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
    duration: '5:21',
    durationInSeconds: 321,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1707997443/spotify-clone/audios/wrjlipcn30naqg5wzhin.mp3',
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
    duration: '3:44',
    durationInSeconds: 224,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1707997470/spotify-clone/audios/r3tccgbgd5yexktcvg9p.mp3',
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
    duration: '5:02',
    durationInSeconds: 302,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1707997503/spotify-clone/audios/t9kz8tssezb21ydg5h1v.mp3',
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
    duration: '5:31',
    durationInSeconds: 331,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1707997529/spotify-clone/audios/h8qbsromtjtdfrexqby5.mp3',
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
    duration: '4:08',
    durationInSeconds: 248,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1707997576/spotify-clone/audios/iuhzyposbivge47ujyxm.mp3',
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
    durationInSeconds: 264,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1707997596/spotify-clone/audios/iqnqqphznffrompkffoj.mp3',
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
    duration: '3:18',
    durationInSeconds: 198,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1707997619/spotify-clone/audios/qsuemxxro40qp4kebybm.mp3',
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
    durationInSeconds: 162,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1707997641/spotify-clone/audios/gvxdiv91gmsusvxwhyfz.mp3',
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
    duration: '3:08',
    durationInSeconds: 188,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1707997663/spotify-clone/audios/ywn02jlosm2bvl4tem5l.mp3',
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
    durationInSeconds: 172,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1707997686/spotify-clone/audios/hwdxjfsaii9ck1mcas9u.mp3',
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
    duration: '2:24',
    durationInSeconds: 144,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1707997718/spotify-clone/audios/f7z45nabkeb8a6j7zroj.mp3',
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
    durationInSeconds: 196,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1707997747/spotify-clone/audios/p4ulb9eoxaidy4vy3y24.mp3',
  },
  {
    id: 17,
    playlistId: 3,
    title: 'yes, and?',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709127939/spotify-clone/songs/szusxqbkqr5lmsk1zp7l.webp',
    creator: artists[14],
    artists: ['Ariana Grande'],
    album: 'yes, and?',
    duration: '3:35',
    durationInSeconds: 215,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709138107/spotify-clone/audios/yok4km5le6f48vg871af.mp3',
  },
  {
    id: 18,
    playlistId: 3,
    title: 'Cruel Summer',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709128781/spotify-clone/songs/hp2tesncplirm51dztjz.webp',
    creator: artists[15],
    artists: ['Taylor Swift'],
    album: 'Lover',
    duration: '2:59',
    durationInSeconds: 179,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709138296/spotify-clone/audios/wkgfgqblyvzsyxwnpdez.mp3',
  },
  {
    id: 19,
    playlistId: 3,
    title: 'What Was I Made For?',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709128759/spotify-clone/songs/vqxmh6bqnrbkmkrsjdjm.webp',
    creator: artists[16],
    artists: ['Billie Eilish'],
    album: 'What Was I Made For?',
    duration: '3:42',
    durationInSeconds: 222,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709138147/spotify-clone/audios/mgh2vzroawcjn3n7udoy.mp3',
  },
  {
    id: 20,
    playlistId: 3,
    title: 'Love On',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709128738/spotify-clone/songs/dymjstxrpwkuthdac1jy.webp',
    creator: artists[17],
    artists: ['Selena Gomez'],
    album: 'Love On',
    duration: '3:10',
    durationInSeconds: 190,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709138245/spotify-clone/audios/gqle3jdaspwzu8vnsyqi.mp3',
  },
  {
    id: 22,
    playlistId: 3,
    title: 'Flowers',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709128710/spotify-clone/songs/j5wdf4nkiulqqx5kpvq2.webp',
    creator: artists[18],
    artists: ['Miley Cyrus'],
    album: 'Endless Summer Vacation',
    duration: '3:21',
    durationInSeconds: 201,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709138217/spotify-clone/audios/rxnifk8vv9vjqnyqhmnq.mp3',
  },
  {
    id: 23,
    playlistId: 3,
    title: "There's Nothing Holdin' Me Back",
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709128722/spotify-clone/songs/silccuabdvymqkxsqdts.webp',
    creator: artists[19],
    artists: ['Shawn Mendes'],
    album: 'Illuminate',
    duration: '3:25',
    durationInSeconds: 205,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709138274/spotify-clone/audios/ddpjfe4nv9ahrfqebcmg.mp3',
  },
  {
    id: 24,
    playlistId: 3,
    title: 'Houdini',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709141936/spotify-clone/songs/vpmeugih02jtul06hvxk.webp',
    creator: artists[20],
    artists: ['Dua Lipa'],
    album: 'Houdini',
    duration: '3:08',
    durationInSeconds: 188,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709141967/spotify-clone/audios/krnukoyqdjz0cxlbkdas.mp3',
  },
  {
    id: 25,
    playlistId: 4,
    title: 'In Da Club',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709140548/spotify-clone/songs/xxbuu8jenricegdlw8sf.webp',
    creator: artists[21],
    artists: ['50 Cent'],
    album: "Get Rich Or Die Tryin'",
    duration: '3:14',
    durationInSeconds: 194,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709140816/spotify-clone/audios/ufw3rbxecit4uti0md36.mp3',
  },
  {
    id: 26,
    playlistId: 4,
    title: 'Lose Yourself',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709140563/spotify-clone/songs/u6gccb93ibn5itlemkxx.webp',
    creator: artists[22],
    artists: ['Eminem'],
    album: 'Curtain Call',
    duration: '5:20',
    durationInSeconds: 320,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709140845/spotify-clone/audios/vtdshyym6vok5757imdc.mp3',
  },
  {
    id: 27,
    playlistId: 4,
    title: 'All Eyez On Me',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709140577/spotify-clone/songs/lamqbqy74suwx9mmgit3.webp',
    creator: artists[23],
    artists: ['2Pac'],
    album: 'All Eyez On Me',
    duration: '5:07',
    durationInSeconds: 307,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709140762/spotify-clone/audios/lfboszmuaq9dblaynpu4.mp3',
  },
  {
    id: 28,
    playlistId: 4,
    title: 'It Was A Good Day',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709140589/spotify-clone/songs/ldarbbjmfcpyhxyswmst.webp',
    creator: artists[24],
    artists: ['Ice Cube'],
    album: 'The Predator',
    duration: '4:26',
    durationInSeconds: 266,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709140790/spotify-clone/audios/miip04hlsf6modtxgnq9.mp3',
  },
  {
    id: 29,
    playlistId: 4,
    title: 'Mockingbird',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709140563/spotify-clone/songs/u6gccb93ibn5itlemkxx.webp',
    creator: artists[22],
    artists: ['Eminem'],
    album: 'Curtain Call',
    duration: '4:17',
    durationInSeconds: 257,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709140866/spotify-clone/audios/rpp9ep8rcvxi3cqg1eza.mp3',
  },
  {
    id: 30,
    playlistId: 4,
    title: 'Gin And Juice',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709140601/spotify-clone/songs/iwjju83hyxq3rmkntqlv.webp',
    creator: artists[25],
    artists: ['Snoop Dogg', 'Daz Dillinger'],
    album: 'Doggystyle',
    duration: '3:31',
    durationInSeconds: 211,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709140894/spotify-clone/audios/tj4jgfcc0ybim3rftei3.mp3',
  },
  {
    id: 31,
    playlistId: 5,
    title: 'Hey Brother',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709142354/spotify-clone/songs/mnrbsdluqrwulhc4qkme.webp',
    creator: artists[26],
    artists: ['Avicii'],
    album: 'True',
    duration: '4:23',
    durationInSeconds: 263,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709142492/spotify-clone/audios/w9dseapib2ycc8dq4nef.mp3',
  },
  {
    id: 32,
    playlistId: 5,
    title: "I'm Good",
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709142370/spotify-clone/songs/zcpn79qfxcyed7g7b4fk.webp',
    creator: artists[27],
    artists: ['David Guetta', 'Bebe Rexha'],
    album: "I'm good (Blue)",
    duration: '2:57',
    durationInSeconds: 177,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709142638/spotify-clone/audios/nlu9aogmwxjimtur9zw4.mp3',
  },
  {
    id: 33,
    playlistId: 5,
    title: 'Wake Me Up',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709142354/spotify-clone/songs/mnrbsdluqrwulhc4qkme.webp',
    creator: artists[26],
    artists: ['Avicii'],
    album: 'True',
    duration: '4:11',
    durationInSeconds: 251,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709142514/spotify-clone/audios/kjd2z22jhutr0jtt0gho.mp3',
  },
  {
    id: 34,
    playlistId: 5,
    title: 'Feel So Close',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709142380/spotify-clone/songs/catc6o1a4lqxm0pxywpu.webp',
    creator: artists[28],
    artists: ['Calvin Harris'],
    album: '18 Months',
    duration: '3:27',
    durationInSeconds: 207,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709142536/spotify-clone/audios/l60hva3miuokvez1yfzb.mp3',
  },
  {
    id: 35,
    playlistId: 5,
    title: 'Outside',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709142391/spotify-clone/songs/knoiotxqai3ik1xlrm6g.webp',
    creator: artists[28],
    artists: ['Calvin Harris', 'Ellie Goulding'],
    album: 'Motion',
    duration: '3:46',
    durationInSeconds: 226,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709142605/spotify-clone/audios/pho6b5miihssk4o2pe2a.mp3',
  },
  {
    id: 36,
    playlistId: 6,
    title: 'Moonlit Walk',
    image: 'https://f4.bcbits.com/img/a1435058381_65.jpg',
    creator: artists[29],
    artists: ['LoFi Dreamer'],
    album: 'Chill Lo-Fi Music',
    duration: '2:57',
    durationInSeconds: 177,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709208349/spotify-clone/audios/vxcywwl3eaqzhlh0wd8v.mp3',
  },
  {
    id: 37,
    playlistId: 6,
    title: 'Coffee Daze',
    image: 'https://f4.bcbits.com/img/a1435058381_65.jpg',
    creator: artists[29],
    artists: ['LoFi Dreamer'],
    album: 'Chill Lo-Fi Music',
    duration: '3:40',
    durationInSeconds: 220,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709208388/spotify-clone/audios/rihyexmtqgcefw61gfm9.mp3',
  },
  {
    id: 38,
    playlistId: 6,
    title: 'Lunar',
    image: 'https://f4.bcbits.com/img/a1962013209_16.jpg',
    creator: artists[30],
    artists: ['Tenno'],
    album: 'Study Session',
    duration: '3:06',
    durationInSeconds: 186,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709208460/spotify-clone/audios/kn13knsxfego07yrqan3.mp3',
  },
  {
    id: 39,
    playlistId: 6,
    title: 'Go go go!',
    image: 'https://f4.bcbits.com/img/a1962013209_16.jpg',
    creator: artists[30],
    artists: ['Tenno'],
    album: 'Study Session',
    duration: '1:30',
    durationInSeconds: 90,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709208494/spotify-clone/audios/kuxiqtoyuu9hh8utklpj.mp3',
  },
  {
    id: 40,
    playlistId: 6,
    title: 'Lost Pages',
    image:
      'https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187',
    creator: artists[31],
    artists: ['Urban Nocturne'],
    album: 'Midnight Tales',
    duration: '2:40',
    durationInSeconds: 160,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709208533/spotify-clone/audios/kdt2wlhaev74qk8xa3sz.mp3',
  },
  {
    id: 41,
    playlistId: 6,
    title: 'Silent Rain',
    image:
      'https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187',
    creator: artists[31],
    artists: ['Urban Nocturne'],
    album: 'Midnight Tales',
    duration: '2:38',
    durationInSeconds: 158,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709208574/spotify-clone/audios/xdz5js2hr1qxxddqbvlk.mp3',
  },

  {
    id: 42,
    playlistId: 7,
    title: 'Coffee Daze',
    image: 'https://f4.bcbits.com/img/a1435058381_65.jpg',
    creator: artists[29],
    artists: ['LoFi Dreamer'],
    album: 'Chill Lo-Fi Music',
    duration: '3:40',
    durationInSeconds: 220,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709208388/spotify-clone/audios/rihyexmtqgcefw61gfm9.mp3',
  },
  {
    id: 43,
    playlistId: 7,
    title: 'Lost Pages',
    image:
      'https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187',
    creator: artists[31],
    artists: ['Urban Nocturne'],
    album: 'Midnight Tales',
    duration: '2:40',
    durationInSeconds: 160,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709208533/spotify-clone/audios/kdt2wlhaev74qk8xa3sz.mp3',
  },
  {
    id: 44,
    playlistId: 7,
    title: 'PERREO NEGRO',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707240873/spotify-clone/songs/ftnxttvw8wx8tyi4qfav.webp',
    creator: artists[9],
    artists: ['Bad Bunny', 'Feid'],
    album: 'nadie sabe lo que va a pasar mañana',
    duration: '2:42',
    durationInSeconds: 162,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1707997641/spotify-clone/audios/gvxdiv91gmsusvxwhyfz.mp3',
  },
  {
    id: 45,
    playlistId: 7,
    title: 'Dream On',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707221136/spotify-clone/songs/d86jnm7odfnoglvqtdii.webp',
    creator: artists[3],
    artists: ['Aerosmith'],
    album: 'Aerosmith',
    duration: '4:28',
    durationInSeconds: 268,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1707997396/spotify-clone/audios/w656irqzwktb4zzikvao.mp3',
  },
  {
    id: 46,
    playlistId: 7,
    title: 'Houdini',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709141936/spotify-clone/songs/vpmeugih02jtul06hvxk.webp',
    creator: artists[20],
    artists: ['Dua Lipa'],
    album: 'Houdini',
    duration: '3:08',
    durationInSeconds: 188,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709141967/spotify-clone/audios/krnukoyqdjz0cxlbkdas.mp3',
  },
  {
    id: 47,
    playlistId: 7,
    title: 'Mockingbird',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709140563/spotify-clone/songs/u6gccb93ibn5itlemkxx.webp',
    creator: artists[22],
    artists: ['Eminem'],
    album: 'Curtain Call',
    duration: '4:17',
    durationInSeconds: 257,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709140866/spotify-clone/audios/rpp9ep8rcvxi3cqg1eza.mp3',
  },
  {
    id: 48,
    playlistId: 7,
    title: 'Cruel Summer',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709128781/spotify-clone/songs/hp2tesncplirm51dztjz.webp',
    creator: artists[15],
    artists: ['Taylor Swift'],
    album: 'Lover',
    duration: '2:59',
    durationInSeconds: 179,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709138296/spotify-clone/audios/wkgfgqblyvzsyxwnpdez.mp3',
  },
  {
    id: 49,
    playlistId: 7,
    title: 'Enter Sandman',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707221502/spotify-clone/songs/m3kwrqhspqtaixwhydtk.webp',
    creator: artists[7],
    artists: ['Metallica'],
    album: 'Metallica',
    duration: '5:31',
    durationInSeconds: 331,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1707997529/spotify-clone/audios/h8qbsromtjtdfrexqby5.mp3',
  },
  {
    id: 50,
    playlistId: 7,
    title: 'QLONA',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707241096/spotify-clone/songs/idfzssclqy8lyuj5aqwj.webp',
    creator: artists[11],
    artists: ['Karol G', 'Peso Pluma'],
    album: 'MAÑANA SERÁ BONITO',
    duration: '2:52',
    durationInSeconds: 172,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1707997686/spotify-clone/audios/hwdxjfsaii9ck1mcas9u.mp3',
  },
  {
    id: 51,
    playlistId: 7,
    title: 'Lose Yourself',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709140563/spotify-clone/songs/u6gccb93ibn5itlemkxx.webp',
    creator: artists[22],
    artists: ['Eminem'],
    album: 'Curtain Call',
    duration: '5:20',
    durationInSeconds: 320,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709140845/spotify-clone/audios/vtdshyym6vok5757imdc.mp3',
  },
  {
    id: 52,
    playlistId: 8,
    title: 'Runaway',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707220841/spotify-clone/songs/txgl3slvmqgbsgakjfkb.webp',
    creator: artists[0],
    artists: ['Bon Jovi'],
    album: 'Bon Jovi',
    duration: '3:52',
    durationInSeconds: 232,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1707935054/spotify-clone/audios/pdj6fhasdlb2l6zxfsjh.mp3',
  },
  {
    id: 53,
    playlistId: 8,
    title: 'Dream On',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707221136/spotify-clone/songs/d86jnm7odfnoglvqtdii.webp',
    creator: artists[3],
    artists: ['Aerosmith'],
    album: 'Aerosmith',
    duration: '4:28',
    durationInSeconds: 268,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1707997396/spotify-clone/audios/w656irqzwktb4zzikvao.mp3',
  },
  {
    id: 54,
    playlistId: 8,
    title: 'Californication',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707221239/spotify-clone/songs/o1kpplxbgjn8nmwwpnzb.webp',
    creator: artists[4],
    artists: ['Red Hot Chilli Peppers'],
    album: 'Californication',
    duration: '5:21',
    durationInSeconds: 321,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1707997443/spotify-clone/audios/wrjlipcn30naqg5wzhin.mp3',
  },
  {
    id: 55,
    playlistId: 8,
    title: 'Come As You Are',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707221308/spotify-clone/songs/dbtifmdsaciwnrarw9n4.webp',
    creator: artists[5],
    artists: ['Nirvana'],
    album: 'Nevermind',
    duration: '3:44',
    durationInSeconds: 224,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1707997470/spotify-clone/audios/r3tccgbgd5yexktcvg9p.mp3',
  },
  {
    id: 56,
    playlistId: 8,
    title: "Livin' On A Prayer",
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707221561/spotify-clone/songs/mvzomfdibazjxumfl7od.webp',
    creator: artists[0],
    artists: ['Bon Jovi'],
    album: 'Slippery When Wet',
    duration: '4:08',
    durationInSeconds: 248,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1707997576/spotify-clone/audios/iuhzyposbivge47ujyxm.mp3',
  },
  {
    id: 57,
    playlistId: 8,
    title: 'Bohemian Rhapsody',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1707221036/spotify-clone/songs/dgxyyi8isxkqsajfyrzo.webp',
    creator: artists[2],
    artists: ['Queen'],
    album: 'A Night At The Opera',
    duration: '5:59',
    durationInSeconds: 359,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1707997343/spotify-clone/audios/eoovcleuxmw9lerqd5pn.mp3',
  },

  {
    id: 58,
    playlistId: 9,
    title: "I'm Good",
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709142370/spotify-clone/songs/zcpn79qfxcyed7g7b4fk.webp',
    creator: artists[27],
    artists: ['David Guetta', 'Bebe Rexha'],
    album: "I'm good (Blue)",
    duration: '2:57',
    durationInSeconds: 177,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709142638/spotify-clone/audios/nlu9aogmwxjimtur9zw4.mp3',
  },
  {
    id: 59,
    playlistId: 9,
    title: 'Feel So Close',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709142380/spotify-clone/songs/catc6o1a4lqxm0pxywpu.webp',
    creator: artists[28],
    artists: ['Calvin Harris'],
    album: '18 Months',
    duration: '3:27',
    durationInSeconds: 207,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709142536/spotify-clone/audios/l60hva3miuokvez1yfzb.mp3',
  },
  {
    id: 60,
    playlistId: 9,
    title: 'Wake Me Up',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709142354/spotify-clone/songs/mnrbsdluqrwulhc4qkme.webp',
    creator: artists[26],
    artists: ['Avicii'],
    album: 'True',
    duration: '4:11',
    durationInSeconds: 251,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709142514/spotify-clone/audios/kjd2z22jhutr0jtt0gho.mp3',
  },
  {
    id: 61,
    playlistId: 9,
    title: 'Outside',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709142391/spotify-clone/songs/knoiotxqai3ik1xlrm6g.webp',
    creator: artists[28],
    artists: ['Calvin Harris', 'Ellie Goulding'],
    album: 'Motion',
    duration: '3:46',
    durationInSeconds: 226,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709142605/spotify-clone/audios/pho6b5miihssk4o2pe2a.mp3',
  },
  {
    id: 62,
    playlistId: 9,
    title: 'Hey Brother',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709142354/spotify-clone/songs/mnrbsdluqrwulhc4qkme.webp',
    creator: artists[26],
    artists: ['Avicii'],
    album: 'True',
    duration: '4:23',
    durationInSeconds: 263,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709142492/spotify-clone/audios/w9dseapib2ycc8dq4nef.mp3',
  },

  {
    id: 63,
    playlistId: 10,
    title: 'yes, and?',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709127939/spotify-clone/songs/szusxqbkqr5lmsk1zp7l.webp',
    creator: artists[14],
    artists: ['Ariana Grande'],
    album: 'yes, and?',
    duration: '3:35',
    durationInSeconds: 215,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709138107/spotify-clone/audios/yok4km5le6f48vg871af.mp3',
  },
  {
    id: 64,
    playlistId: 10,
    title: 'Houdini',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709141936/spotify-clone/songs/vpmeugih02jtul06hvxk.webp',
    creator: artists[20],
    artists: ['Dua Lipa'],
    album: 'Houdini',
    duration: '3:08',
    durationInSeconds: 188,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709141967/spotify-clone/audios/krnukoyqdjz0cxlbkdas.mp3',
  },
  {
    id: 65,
    playlistId: 10,
    title: 'What Was I Made For?',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709128759/spotify-clone/songs/vqxmh6bqnrbkmkrsjdjm.webp',
    creator: artists[16],
    artists: ['Billie Eilish'],
    album: 'What Was I Made For?',
    duration: '3:42',
    durationInSeconds: 222,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709138147/spotify-clone/audios/mgh2vzroawcjn3n7udoy.mp3',
  },
  {
    id: 66,
    playlistId: 10,
    title: 'Cruel Summer',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709128781/spotify-clone/songs/hp2tesncplirm51dztjz.webp',
    creator: artists[15],
    artists: ['Taylor Swift'],
    album: 'Lover',
    duration: '2:59',
    durationInSeconds: 179,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709138296/spotify-clone/audios/wkgfgqblyvzsyxwnpdez.mp3',
  },
  {
    id: 67,
    playlistId: 10,
    title: 'Flowers',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709128710/spotify-clone/songs/j5wdf4nkiulqqx5kpvq2.webp',
    creator: artists[18],
    artists: ['Miley Cyrus'],
    album: 'Endless Summer Vacation',
    duration: '3:21',
    durationInSeconds: 201,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709138217/spotify-clone/audios/rxnifk8vv9vjqnyqhmnq.mp3',
  },
  {
    id: 68,
    playlistId: 10,
    title: "There's Nothing Holdin' Me Back",
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709128722/spotify-clone/songs/silccuabdvymqkxsqdts.webp',
    creator: artists[19],
    artists: ['Shawn Mendes'],
    album: 'Illuminate',
    duration: '3:25',
    durationInSeconds: 205,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709138274/spotify-clone/audios/ddpjfe4nv9ahrfqebcmg.mp3',
  },
  {
    id: 69,
    playlistId: 10,
    title: 'Love On',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709128738/spotify-clone/songs/dymjstxrpwkuthdac1jy.webp',
    creator: artists[17],
    artists: ['Selena Gomez'],
    album: 'Love On',
    duration: '3:10',
    durationInSeconds: 190,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709138245/spotify-clone/audios/gqle3jdaspwzu8vnsyqi.mp3',
  },

  {
    id: 70,
    playlistId: 11,
    title: 'Lose Yourself',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709140563/spotify-clone/songs/u6gccb93ibn5itlemkxx.webp',
    creator: artists[22],
    artists: ['Eminem'],
    album: 'Curtain Call',
    duration: '5:20',
    durationInSeconds: 320,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709140845/spotify-clone/audios/vtdshyym6vok5757imdc.mp3',
  },
  {
    id: 71,
    playlistId: 11,
    title: 'All Eyez On Me',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709140577/spotify-clone/songs/lamqbqy74suwx9mmgit3.webp',
    creator: artists[23],
    artists: ['2Pac'],
    album: 'All Eyez On Me',
    duration: '5:07',
    durationInSeconds: 307,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709140762/spotify-clone/audios/lfboszmuaq9dblaynpu4.mp3',
  },
  {
    id: 72,
    playlistId: 11,
    title: 'Gin And Juice',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709140601/spotify-clone/songs/iwjju83hyxq3rmkntqlv.webp',
    creator: artists[25],
    artists: ['Snoop Dogg', 'Daz Dillinger'],
    album: 'Doggystyle',
    duration: '3:31',
    durationInSeconds: 211,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709140894/spotify-clone/audios/tj4jgfcc0ybim3rftei3.mp3',
  },
  {
    id: 73,
    playlistId: 11,
    title: 'In Da Club',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709140548/spotify-clone/songs/xxbuu8jenricegdlw8sf.webp',
    creator: artists[21],
    artists: ['50 Cent'],
    album: "Get Rich Or Die Tryin'",
    duration: '3:14',
    durationInSeconds: 194,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709140816/spotify-clone/audios/ufw3rbxecit4uti0md36.mp3',
  },

  {
    id: 74,
    playlistId: 11,
    title: 'Mockingbird',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709140563/spotify-clone/songs/u6gccb93ibn5itlemkxx.webp',
    creator: artists[22],
    artists: ['Eminem'],
    album: 'Curtain Call',
    duration: '4:17',
    durationInSeconds: 257,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709140866/spotify-clone/audios/rpp9ep8rcvxi3cqg1eza.mp3',
  },
  {
    id: 75,
    playlistId: 11,
    title: 'It Was A Good Day',
    image:
      'https://res.cloudinary.com/dtozxzg7o/image/upload/v1709140589/spotify-clone/songs/ldarbbjmfcpyhxyswmst.webp',
    creator: artists[24],
    artists: ['Ice Cube'],
    album: 'The Predator',
    duration: '4:26',
    durationInSeconds: 266,
    audio:
      'https://res.cloudinary.com/dtozxzg7o/video/upload/v1709140790/spotify-clone/audios/miip04hlsf6modtxgnq9.mp3',
  },
];
