const peliculas = [
  {
    nombre: "The Good, the Bad, and the Ugly",
    sinopsis:
      "Durante la guerra civil norteamericana (1861-1865), tres cazadores de recompensas buscan un tesoro que ninguno de ellos puede encontrar sin la ayuda de los otros dos. Así que colaboran entre sí para conseguir el botín.",
    anio: 1966,
    genero: "Spaghetti Western",
    director: "Sergio Leone",
    enlacePelicula: "https://www.youtube.com/embed/4oCdwxmeM2A",
    estado: "activo",
    actores: ["Clint Eastwood", "Lee Van Cleef", "Eli Wallach"],
    rutaPoster: "il_buono_il_brutto_il_cattivo-589330734-large.jpg",
  },
  {
    nombre: "Once Upon a Time in the West",
    sinopsis:
      "Brett McBain, un granjero viudo de origen irlandés, vive con sus hijos en una zona pobre y desértica del Oeste americano. Ha preparado una fiesta de bienvenida para Jill, su futura esposa, que viene desde Nueva Orleáns. Pero cuando Jill llega se encuentra con que una banda de pistoleros los ha asesinado a todos.",
    anio: 1968,
    genero: "Spaghetti Western",
    director: "Sergio Leone",
    enlacePelicula: "https://www.dailymotion.com/embed/video/x2c770m",
    estado: "activo",
    actores: ["Henry Fonda", "Charles Bronson", "Claudia Cardinale"],
    rutaPoster:
      "c_era_una_volta_il_west_once_upon_a_time_in_the_west-555536330-large.jpg",
  },
  {
    nombre: "Per qualche dollaro in più",
    sinopsis:
      "Dos cazadores de recompensas que buscan al mismo hombre deciden unir sus fuerzas para encontrarlo, aunque las razones que los mueven son completamente diferentes. Su título original (Per qualche dollaro in più) ya sugiere que es la continuación natural de Por un puñado de dólares (Per un pugno di dollari), dirigida por Leone un año antes.",
    anio: 1965,
    genero: "Spaghetti Western",
    director: "Sergio Leone",
    enlacePelicula: "https://www.youtube.com/embed/h1VGUcyWVIE",
    estado: "activo",
    actores: ["CLint Eastwood", "Lee Van Cleef", "Gian Maria Volonté"],
    rutaPoster: "per_qualche_dollaro_in_piu-587045376-large.jpg",
  },
  {
    nombre: "Per un pugno di dollari",
    sinopsis:
      "Tras la muerte de Juárez, en México dominan la injusticia y el terror. Joe (Clint Eastwood), un pistolero vagabundo, llega al pueblo fronterizo de San Miguel, donde dos familias se disputan el control del territorio, y entra al servicio del clan Rojo. Una noche, es testigo del intercambio de oro por armas entre mexicanos y soldados de la Unión. Remake en clave de western de Yojimbo, de Akira Kurosawa.",
    anio: 1964,
    genero: "Spaghetti Western",
    director: "Sergio Leone",
    enlacePelicula: "https://www.youtube.com/embed/Wox6_3D48Tc",
    estado: "activo",
    actores: ["CLint Eastwood", "Marianne Koch", "Gian Maria Volonté"],
    rutaPoster: "per_un_pugno_di_dollari-229570319-large.jpg",
  },
  {
    nombre: "Once Upon a Time in the Revolution",
    sinopsis:
      "Juan Miranda y John Mallory, un veterano del IRA, se conocen en México y planean trabajar juntos robando bancos. Un día dinamitan una prisión creyendo que era un banco. La explosión libera a los revolucionarios presos, y ambos se convierten en héroes de la revolución. Poco tiempo después, las tropas del gobierno, comandadas por el coronel Gutiérrez, comienzan a seguirles los pasos.",
    anio: 1971,
    genero: "Spaghetti Western",
    director: "Sergio Leone",
    enlacePelicula: "https://www.youtube.com/embed/nerb0n35Nrs",
    estado: "activo",
    actores: ["James Coburn", "Rod Steiger", "Romolo Valli"],
    rutaPoster:
      "giu_la_testa_once_upon_a_time_in_the_revolution-344548480-large.jpg",
  },
  {
    nombre: "The Man Who Shot Liberty Valance",
    sinopsis:
      "Ransom Stoddard (James Stewart), un anciano senador del Congreso de los Estados Unidos, explica a un periodista por qué ha viajado con su mujer (Vera Miles) para asistir al funeral de su viejo amigo Tom Doniphon (John Wayne). La historia empieza muchos años antes, cuando Ransom era un joven abogado del este que se dirigía en diligencia a Shinbone, un pequeño pueblo del Oeste, para ejercer la abogacía e imponer la ley. Poco antes de llegar, fue atracado y golpeado brutalmente por el temido pistolero Liberty Valance (Lee Marvin).",
    anio: 1962,
    genero: "Clásicas",
    director: "John Ford",
    enlacePelicula:
      "http://str5.movies123.yt/remote/TTRHRHV3RVJBeUxwN19vUEZUYjIsUzheQkRnbFVeZkEx-22.mp4",
    estado: "activo",
    actores: ["John Wayne", "James Stewart", "Vera Miles"],
    rutaPoster: "the_man_who_shot_liberty_valance-414918328-large.jpg",
  },
  {
    nombre: "The Treasure of the Sierra Madre",
    sinopsis:
      "Año 1925. Fred C. Dobbs (Humphrey Bogart) decide ir a Tampico en busca de oro para salir de la miseria. Emprende el viaje con otros dos vagabundos (Walter Huston y Tim Holt), pero la codicia y la envidia que surge entre ellos les creará más problemas que cualquier dificultad del camino.",
    anio: 1948,
    genero: "Clásicas",
    director: "John Huston",
    enlacePelicula: "https://www.youtube.com/embed/h0g3Vt5iafI",
    estado: "activo",
    actores: ["Humphrey Bogart", "Walter Huston", "Tim Holt"],
    rutaPoster: "the_treasure_of_the_sierra_madre-240833935-large.jpg",
  },
  {
    nombre: "Rio Bravo",
    sinopsis:
      "El sheriff Chance (John Wayne) encarcela por asesinato al hermano de un poderoso terrateniente que intentará liberarlo por todos los medios. Para impedirlo, Chance cuenta con la colaboración de dos ayudantes: un alcohólico (Dean Martin) y un viejo tullido (Walter Brennan), a los que se une un joven y hábil pistolero llamado Colorado (Ricky Nelson). Todos ellos se encierran en la oficina del sheriff para impedir que el preso pueda ser liberado antes de que llegue la autoridad estatal para llevárselo.",
    anio: 1959,
    genero: "Clásicas",
    director: "Howard Hawks",
    enlacePelicula: "https://www.dailymotion.com/embed/video/x4bchx8",
    estado: "activo",
    actores: ["John Wayne", "Dean Martin", "Ricky Nelson"],
    rutaPoster: "rio_bravo-584127850-large.jpg",
  },
  {
    nombre: "Stagecoach",
    sinopsis:
      "Personajes muy variopintos emprenden un largo, duro y peligroso viaje en diligencia. Entre ellos, un fuera de la ley en busca de venganza, una prostituta a la que han echado del pueblo, un jugador, un médico, la mujer embarazada de un militar, un sheriff. Las relaciones entre ellos serán difíciles y tensas. Además, durante el viaje, tendrán que afrontar el ataque de una partida de indios apaches.",
    anio: 1939,
    genero: "Clásicas",
    director: "John Ford",
    enlacePelicula: "https://www.youtube.com/embed/D0w_d3aiUnU",
    estado: "activo",
    actores: ["John Wayne", "Claire Trevor", "Thomas Mitchell"],
    rutaPoster: "stagecoach-479896236-large.jpg",
  },
  {
    nombre: "Duel in the Sun",
    sinopsis:
      "Pearl Chavez (Jennifer Jones), una joven mestiza, es enviada a vivir a Texas, al rancho del estricto senador McCandless (Lionel Barrymore). La joven llama la atención de los hijos del senador: el siempre educado y cortés Jesse (Joseph Cotten) y el impetuoso e impulsivo Lewton (Gregory Peck). Pronto los dos hermanos rivalizan por el amor de la atractiva muchacha.",
    anio: 1946,
    genero: "Clásicas",
    director: "King Vidor",
    enlacePelicula: "https://www.youtube.com/embed/UwxB-mtkmA0?start=126",
    estado: "activo",
    actores: ["Jennifer Jones", "Gregory Peck", "Joseph Cotten"],
    rutaPoster: "duel_in_the_sun-760184126-large.jpg",
  },
  {
    nombre: "3:10 to Yuma",
    sinopsis:
      "Arizona. Con la esperanza de conseguir una recompensa que le permita evitar la ruina de su rancho, Dan Evans (Christian Bale) decide colaborar en el traslado del peligroso forajido Ben Wade (Russell Crowe) hasta un pueblo, donde deberán coger el tren de las 3:10 para llegar a la prisión de Yuma. Remake del film de 1957 de Delmer Daves.",
    anio: 2007,
    genero: "Contemporaneas",
    director: "James Mangold",
    enlacePelicula: "https://streamvid.co/player/k3AXfTpZ9gT03iP/",
    estado: "activo",
    actores: ["Russell Crowe", "Christian Bale", "Peter Fonda"],
    rutaPoster: "3_10_to_yuma-651067870-large.jpg",
  },
  {
    nombre: "The Homesman",
    sinopsis:
      "Nebraska, 1855. Mary Bee Cuddy (Hilary Swank), una mujer solitaria que vive en un remoto pueblo del Medio Oeste, es elegida por la Iglesia para hacer regresar al mundo civilizado a tres mujeres que han perdido la razón. Para ello, cuenta con Briggs (Tommy Lee Jones), un delincuente al que salva de la horca con la condición de que la ayude a ejecutar su misión. Juntos emprenden un largo y peligroso viaje a través del desierto, desde Nebraska hasta Iowa, en el que tendrán que enfrentarse a toda clase de peligros.",
    anio: 2014,
    genero: "Contemporaneas",
    director: "Tommy Lee Jones",
    enlacePelicula: "https://streamvid.co/player/GQaKMlo2IwAoABl/",
    estado: "activo",
    actores: ["Hilary Swank", "Tommy Lee Jones", "Grace Gummer"],
    rutaPoster: "the_homesman-413033135-large.jpg",
  },
  {
    nombre: "Django Unchained",
    sinopsis:
      "En Texas, dos años antes de estallar la Guerra Civil Americana, King Schultz (Christoph Waltz), un cazarrecompensas alemán que sigue la pista a unos asesinos para cobrar por sus cabezas, le promete al esclavo negro Django (Jamie Foxx) dejarlo en libertad si le ayuda a atraparlos. Él acepta, pues luego quiere ir a buscar a su esposa Broomhilda (Kerry Washington), esclava en una plantación del terrateniente Calvin Candie (Leonardo DiCaprio).",
    anio: 2012,
    genero: "Contemporaneas",
    director: "Quentin Tarantino",
    enlacePelicula: "https://streamvid.co/player/UQClq7jIXHyolZG/",
    estado: "activo",
    actores: ["Jamie Foxx", "Christoph Waltz", "Leonardo DiCaprio"],
    rutaPoster: "django_unchained-956246347-large.jpg",
  },
  {
    nombre: "The Hateful Eight",
    sinopsis:
      "Pocos años después de la Guerra de Secesión, una diligencia avanza por el invernal paisaje de Wyoming. Los pasajeros, el cazarrecompensas John Ruth (Kurt Russell) y su fugitiva Daisy Domergue (Jennifer Jason Leigh), intentan llegar al pueblo de Red Rock, donde Ruth entregará a Domergue a la justicia.",
    anio: 2015,
    genero: "Contemporaneas",
    director: "Quentin Tarantino",
    enlacePelicula:
      "https://videospider.stream/getvideo?key=ZP9c7C7vg9zTkv7v&video_id=tt3460252&ticket=4fz2esg2931eldjz0fdox6xi42hloa",
    estado: "activo",
    actores: ["Samuel L. Jackson", "Kurt Russell", "Jennifer Jason Leigh"],
    rutaPoster: "the_hateful_eight-549467052-large.jpg",
  },
  {
    nombre: "Unforgiven",
    sinopsis:
      "William Munny (Clint Eastwood) es un pistolero retirado, viudo y padre de familia, que tiene dificultades económicas para sacar adelante a su hijos. Su única salida es hacer un último trabajo. En compañía de un viejo colega (Morgan Freeman) y de un joven inexperto (Jaimz Woolvett), Munny tendrá que matar a dos hombres que cortaron la cara a una prostituta.",
    anio: 1992,
    genero: "Contemporaneas",
    director: "Clint Eastwood",
    enlacePelicula:
      "https://oload.party/loadsource.php?server=16&id=6186812&token=WDNLeUZNbjBjVUU5QlM3SXNnR3NUaTFkSk9ZYmd0c0w5Nm5FUnNUNGQyN0pQWlVOQWhPRjE3cnU4Sk1Ec3RhQ0p2eVlKbW9QMFFWdDQ5MXBLRGttVjNPcXFhZzBGMXhvRTh5LzFYWVRUeExVS3VPeFN3T3k0bEtxSTl0aENPYWI1NCtZZThlcVVIM2prdnVDSVFtL1FJSGphamFVNjhJZENBWmE0OENqNi9ERGVvVGVockpyTmZJQU9yKzhIWTN0",
    estado: "activo",
    actores: ["Clint Eastwood", "Gene Hackman", "Morgan Freeman"],
    rutaPoster: "unforgiven-854755790-large.jpg",
  },
  {
    nombre: "Dead Man",
    sinopsis:
      "William Blake decide abandonar su puesto de contable en Cleveland (Ohio) después de recibir una oferta de trabajo en Machine, una inhóspita ciudad industrial en el Oeste de los EEUU.",
    anio: 1995,
    genero: "Culto",
    director: "Jim Jarmusch",
    enlacePelicula:
      "https://videospider.stream/getvideo?key=ZP9c7C7vg9zTkv7v&video_id=tt0112817&ticket=k7ifubvnk1baoxilcu5vu85kdpnst3",
    estado: "activo",
    actores: ["Johnny Depp", "Gary Farmer", "Lance Henriksen"],
    rutaPoster: "dead_man-768259523-large.jpg",
  },
  {
    nombre: "Wild Wild West",
    sinopsis:
      "Jim West es un viejo héroe de la guerra de Secesión (1861-1865). Artemus Gordon es un imaginativo sheriff que lo supera en el arte del disfraz. Cuando los Estados Unidos se ven amenazados por Arliss Loveless, un lunático confederado, el presidente Ulysses Grant encarga a esta excéntrica pareja que se ocupe de él. En un movido viaje desde Washington a Utah, nuestros héroes deberán enfrentarse a los diabólicos artilugios de Loveless.",
    anio: 1999,
    genero: "Culto",
    director: "Barry Sonnenfeld",
    enlacePelicula:
      "https://videospider.stream/getvideo?key=ZP9c7C7vg9zTkv7v&video_id=tt0120891&ticket=aan3ggp21ltlyn46e8pdfn9y3tmmh9",
    estado: "activo",
    actores: ["Will Smith", "Kevin Kline", "Kenneth Branagh"],
    rutaPoster: "wild_wild_west-819408797-large.jpg",
  },
  {
    nombre: "Johnny Guitar",
    sinopsis:
      "La relación sentimental entre Vienna, la propietaria de un salón situado en las afueras de una ciudad del Oeste, y Johnny Guitar, un pistolero con el que se vuelve a encontrar en un difícil momento, constituye todo un clásico que alcanzó un gran éxito de taquilla.",
    anio: 1954,
    genero: "Culto",
    director: "Nicholas Ray",
    enlacePelicula:
      "http://str2.movies123.yt/remote/YUAzVGZuZFV4eVh8VH1UbkBZSVd7dl8$c2h0dn8zR2Ux-22.mp4",
    estado: "activo",
    actores: ["Joan Crawford", "Sterling Hayden", "Scott Brady"],
    rutaPoster: "johnny_guitar-578954420-large.jpg",
  },
  {
    nombre: "El Topo",
    sinopsis:
      "En un Oeste imaginario, el pistolero Topo se enfrenta a una banda de fetichistas, dirigida por un coronel lascivo, que tiene atemorizada a una congregación franciscana.",
    anio: 1970,
    genero: "Culto",
    director: "Alejandro Jodorowsky",
    enlacePelicula:
      "https://m4ufree.yt/public/dist/index.html?id=8e2a5751fa8b014b2ceb00f7ff7acb4a",
    estado: "activo",
    actores: ["Alejandro Jodorowsky", "Brontis Jodorowsky", "Mara Lorenzio"],
    rutaPoster: "el_topo-214714021-large.jpg",
  },
  {
    nombre: "The Shooting",
    sinopsis:
      "Dos hombres aceptan guiar a través del desierto a una misteriosa desconocida que, aparentemente, viaja sola, aunque no saben a dónde se dirige.",
    anio: 1966,
    genero: "Culto",
    director: "Monte Hellman",
    enlacePelicula:
      "http://str5.movies123.yt/remote/YkFPVmlqW2NwRmZhcWlvdkkwMGB6TmI$T0FAbTdAV3Qx-22.mp4",
    estado: "activo",
    actores: ["Warren Oates", "Jack Nicholson", "Will Hutchins"],
    rutaPoster: "the_shooting-442992031-large.jpg",
  },
];
