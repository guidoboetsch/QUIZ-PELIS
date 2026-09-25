const legacyMovies = [
  { id: 'matrix', title: 'The Matrix', year: 1999, genre: 'Ciencia ficción', color: 'linear-gradient(145deg,#103d3b,#0b181c 78%)', facts: [
    ['director','¿Quién dirigió The Matrix?','Lana y Lilly Wachowski',['Lana y Lilly Wachowski','Christopher Nolan','James Cameron','Ridley Scott']],
    ['protagonista','¿Qué personaje es interpretado por Keanu Reeves?','Neo',['Neo','Morpheus','Trinity','El Arquitecto']],
    ['elección','¿Qué pastilla elige Neo?','La roja',['La roja','La azul','La verde','La dorada']],
    ['guía','¿Quién guía a Neo en su despertar?','Morpheus',['Morpheus','Cypher','Agente Smith','Tank']],
    ['agente','¿Cuál es el apellido del agente que persigue a Neo?','Smith',['Smith','Brown','Jones','Miller']],
    ['profecía','¿Quién es la figura que visita Neo para conocer su destino?','El Oráculo',['El Oráculo','La Doctora','La Reina','La Anciana']],
    ['profesión','¿A qué se dedica Neo antes de despertar?','Programador',['Programador','Periodista','Detective','Piloto']],
    ['nave','¿Cómo se llama la nave de Morpheus?','Nabucodonosor',['Nabucodonosor','Ícaro','Enterprise','Pegasus']],
    ['frase','¿Qué frase describe la capacidad de Neo al final?','There is no spoon',['There is no spoon','I see dead people','Hasta la vista, baby','Why so serious?']],
    ['mundo','¿Dónde viven los humanos conectados?','En una simulación',['En una simulación','En Marte','En Zion','En una nave espacial']]
  ]},
  { id: 'lotr', title: 'El Señor de los Anillos', year: 2001, genre: 'Fantasía', color: 'linear-gradient(145deg,#564123,#1d1710 78%)', facts: [
    ['director','¿Quién dirigió la trilogía de El Señor de los Anillos?','Peter Jackson',['Peter Jackson','George Lucas','Tim Burton','Guillermo del Toro']],
    ['hobbit','¿Quién recibe el Anillo Único al inicio?','Frodo Bolsón',['Frodo Bolsón','Bilbo Bolsón','Sam Gamyi','Meriadoc Brandigamo']],
    ['pueblo','¿En qué región viven los hobbits?','La Comarca',['La Comarca','Rivendel','Mordor','Gondor']],
    ['mago','¿Qué mago acompaña a la Comunidad?','Gandalf',['Gandalf','Saruman','Radagast','Alatar']],
    ['montaña','¿Dónde debe destruirse el Anillo?','El Monte del Destino',['El Monte del Destino','La Montaña Solitaria','Caradhras','Minas Tirith']],
    ['criatura','¿Qué criatura llama a Frodo “mi tesoro”?','Gollum',['Gollum','Balrog','Sauron','Gríma']],
    ['reino','¿Cuál es la capital de Gondor?','Minas Tirith',['Minas Tirith','Minas Morgul','Edoras','Bree']],
    ['elfa','¿Qué personaje interpreta Liv Tyler?','Arwen',['Arwen','Galadriel','Éowyn','Rosie']],
    ['guerrero','¿Quién es el heredero de Isildur?','Aragorn',['Aragorn','Boromir','Faramir','Théoden']],
    ['objeto','¿Qué tipo de objeto es el Anillo Único?','Un anillo de poder',['Un anillo de poder','Una corona','Una espada','Un medallón']]
  ]},
  { id: 'godfather', title: 'El Padrino', year: 1972, genre: 'Drama', color: 'linear-gradient(145deg,#5b251d,#191113 78%)', facts: [
    ['director','¿Quién dirigió El Padrino?','Francis Ford Coppola',['Francis Ford Coppola','Martin Scorsese','Brian De Palma','Sidney Lumet']],
    ['familia','¿Qué familia protagoniza la historia?','Los Corleone',['Los Corleone','Los Soprano','Los Capone','Los Barzini']],
    ['patriarca','¿Quién es el patriarca de la familia?','Vito Corleone',['Vito Corleone','Michael Corleone','Sonny Corleone','Tom Hagen']],
    ['actor','¿Quién interpreta a Vito Corleone?','Marlon Brando',['Marlon Brando','Al Pacino','Robert De Niro','Jack Nicholson']],
    ['heredero','¿Qué hijo termina asumiendo el poder?','Michael',['Michael','Fredo','Sonny','Connie']],
    ['isla','¿A dónde escapa Michael después de matar a Sollozzo?','Sicilia',['Sicilia','Cuba','Malta','Grecia']],
    ['boda','¿Quién se casa al comienzo de la película?','Connie Corleone',['Connie Corleone','Kay Adams','Apollonia Vitelli','Lucy Mancini']],
    ['frase','¿Qué pide Vito Corleone en su famosa frase?','Una oferta imposible de rechazar',['Una oferta imposible de rechazar','Un favor pequeño','Una disculpa pública','Un préstamo']],
    ['consigliere','¿Quién es el consigliere de la familia?','Tom Hagen',['Tom Hagen','Luca Brasi','Carlo Rizzi','Rocco Lampone']],
    ['oficio','¿Cuál es la actividad central de la familia?','El crimen organizado',['El crimen organizado','La política','La banca','El periodismo']]
  ]},
  { id: 'pulp', title: 'Pulp Fiction', year: 1994, genre: 'Crimen', color: 'linear-gradient(145deg,#71322a,#251313 78%)', facts: [
    ['director','¿Quién dirigió Pulp Fiction?','Quentin Tarantino',['Quentin Tarantino','David Fincher','Guy Ritchie','Spike Lee']],
    ['actores','¿Quién interpreta a Vincent Vega?','John Travolta',['John Travolta','Samuel L. Jackson','Bruce Willis','Harvey Keitel']],
    ['compañero','¿Quién es el compañero de Vincent?','Jules Winnfield',['Jules Winnfield','Butch Coolidge','Marsellus Wallace','Lance']],
    ['maletín','¿Qué contiene el misterioso maletín?','Nunca se revela',['Nunca se revela','Diamantes','Oro','Documentos secretos']],
    ['boxeador','¿Qué personaje es boxeador?','Butch',['Butch','Jules','Vincent','Lance']],
    ['restaurante','¿Dónde bailan Vincent y Mia?','Jack Rabbit Slim’s',['Jack Rabbit Slim’s','Big Kahuna Burger','Hawthorne Grill','The Diner']],
    ['droga','¿Qué personaje sufre una sobredosis?','Mia Wallace',['Mia Wallace','Fabienne','Honey Bunny','Bonnie']],
    ['arma','¿Qué objeto encuentra Butch para volver al sótano?','Una espada',['Una espada','Un bate','Un martillo','Un cuchillo']],
    ['pareja','¿Cómo se llaman los ladrones del restaurante?','Pumpkin y Honey Bunny',['Pumpkin y Honey Bunny','Vincent y Mia','Jules y Marsellus','Butch y Fabienne']],
    ['hamburguesa','¿Qué hamburguesa menciona Jules?','Big Kahuna Burger',['Big Kahuna Burger','Royale with Cheese','Krusty Burger','Whopper']]
  ]},
  { id: 'spirited', title: 'El viaje de Chihiro', year: 2001, genre: 'Animación', color: 'linear-gradient(145deg,#23636d,#111c29 78%)', facts: [
    ['director','¿Quién dirigió El viaje de Chihiro?','Hayao Miyazaki',['Hayao Miyazaki','Makoto Shinkai','Satoshi Kon','Isao Takahata']],
    ['protagonista','¿Cómo se llama la protagonista?','Chihiro',['Chihiro','Yubaba','Lin','Haku']],
    ['nombre','¿Qué nombre recibe Chihiro en el mundo espiritual?','Sen',['Sen','Rin','Mika','Aki']],
    ['casa','¿Dónde terminan los padres de Chihiro?','En un balneario de espíritus',['En un balneario de espíritus','En un castillo','En un bosque','En una estación']],
    ['dragón','¿Quién puede transformarse en dragón?','Haku',['Haku','Kamaji','Sin Cara','Boh']],
    ['bruja','¿Quién dirige el balneario?','Yubaba',['Yubaba','Zeniba','Lin','Chihiro']],
    ['espíritu','¿Qué personaje se vuelve enorme al comer?','Sin Cara',['Sin Cara','Haku','Boh','Kamaji']],
    ['criatura','¿Qué criaturas pequeñas trabajan con carbón?','Los susuwatari',['Los susuwatari','Los kodama','Los tanuki','Los kappa']],
    ['tren','¿Qué medio usa Chihiro para llegar a Zeniba?','Un tren',['Un tren','Un barco','Un avión','Un dragón']],
    ['tema','¿Qué debe recordar Chihiro para recuperar su identidad?','Su verdadero nombre',['Su verdadero nombre','Su dirección','Su fecha de nacimiento','Su apellido']]
  ]},
  { id: 'interstellar', title: 'Interestelar', year: 2014, genre: 'Ciencia ficción', color: 'linear-gradient(145deg,#352c65,#10131f 78%)', facts: [
    ['director','¿Quién dirigió Interestelar?','Christopher Nolan',['Christopher Nolan','Denis Villeneuve','James Cameron','Alex Garland']],
    ['protagonista','¿Qué personaje interpreta Matthew McConaughey?','Cooper',['Cooper','Brand','Mann','Doyle']],
    ['profesión','¿Cuál era la profesión de Cooper antes de ser piloto?','Ingeniero y piloto',['Ingeniero y piloto','Médico','Astrónomo','Profesor']],
    ['planeta','¿Qué planeta visitan primero?','El planeta de Miller',['El planeta de Miller','El planeta de Mann','La Tierra','Edmunds']],
    ['agencia','¿Qué organización busca salvar a la humanidad?','La NASA',['La NASA','La ESA','La ONU','La SpaceX']],
    ['hija','¿Cómo se llama la hija de Cooper?','Murph',['Murph','Amelia','Lois','Jess']],
    ['robot','¿Cómo se llama uno de los robots?','TARS',['TARS','HAL','K-2SO','R2-D2']],
    ['fenómeno','¿Qué fenómeno conecta distintos puntos del universo?','Un agujero de gusano',['Un agujero de gusano','Un agujero negro','Una supernova','Un cometa']],
    ['científica','¿Quién interpreta a la doctora Amelia Brand?','Anne Hathaway',['Anne Hathaway','Jessica Chastain','Mackenzie Foy','Ellen Burstyn']],
    ['relatividad','¿Qué afecta especialmente al tiempo cerca del planeta de Miller?','La gravedad',['La gravedad','La luz','El sonido','La temperatura']]
  ]},
  { id: 'joker', title: 'Joker', year: 2019, genre: 'Drama', color: 'linear-gradient(145deg,#4c5c37,#171c13 78%)', facts: [
    ['director','¿Quién dirigió Joker?','Todd Phillips',['Todd Phillips','David Ayer','Matt Reeves','James Gunn']],
    ['actor','¿Quién interpreta a Arthur Fleck?','Joaquin Phoenix',['Joaquin Phoenix','Heath Ledger','Jared Leto','Jack Nicholson']],
    ['ciudad','¿En qué ciudad transcurre la historia?','Gotham',['Gotham','Metrópolis','Nueva York','Chicago']],
    ['trabajo','¿A qué se dedica Arthur al comienzo?','Payaso y comediante',['Payaso y comediante','Detective','Músico','Taxista']],
    ['programa','¿Qué presentador de TV admira Arthur?','Murray Franklin',['Murray Franklin','Bruce Wayne','Thomas Wayne','Penny Fleck']],
    ['personaje','¿Quién se convierte en el Joker?','Arthur Fleck',['Arthur Fleck','Murray Franklin','Thomas Wayne','Randall']],
    ['premio','¿Qué premio gana Joaquin Phoenix por su actuación?','El Oscar',['El Oscar','El Emmy','El Globo de Oro únicamente','El BAFTA únicamente']],
    ['color','¿Qué color destaca en el traje del Joker?','Rojo',['Rojo','Azul','Blanco','Naranja']],
    ['familia','¿Qué relación cree Arthur tener con Bruce Wayne?','Ser hermanos',['Ser hermanos','Ser primos','Ser padre e hijo','No se conocen']],
    ['tema','¿Qué profesión quiere ejercer Arthur?','Comediante',['Comediante','Político','Actor de acción','Escritor']]
  ]},
  { id: 'shawshank', title: 'Sueños de libertad', year: 1994, genre: 'Drama', color: 'linear-gradient(145deg,#365873,#121b25 78%)', facts: [
    ['director','¿Quién dirigió Sueños de libertad?','Frank Darabont',['Frank Darabont','Rob Reiner','Peter Weir','Clint Eastwood']],
    ['protagonista','¿Qué actor interpreta a Andy Dufresne?','Tim Robbins',['Tim Robbins','Morgan Freeman','Tom Hanks','Kevin Costner']],
    ['prisión','¿Cómo se llama la prisión?','Shawshank',['Shawshank','Alcatraz','Rikers','Folsom']],
    ['narrador','¿Quién narra la historia?','Red',['Red','Andy','Brooks','Warden Norton']],
    ['actor-red','¿Quién interpreta a Red?','Morgan Freeman',['Morgan Freeman','Samuel L. Jackson','Laurence Fishburne','Danny Glover']],
    ['objeto','¿Qué usa Andy para cavar?','Un martillo de geólogo',['Un martillo de geólogo','Una cuchara','Una pala','Un destornillador']],
    ['música','¿Qué hace sonar Andy por los altavoces?','Una ópera',['Una ópera','Jazz','Rock','Un discurso']],
    ['lugar','¿A dónde sueña con ir Andy?','Zihuatanejo',['Zihuatanejo','Hawái','Alaska','California']],
    ['biblioteca','¿Qué mejora Andy en la prisión?','La biblioteca',['La biblioteca','La enfermería','El comedor','El patio']],
    ['tema','¿Qué palabra resume la esperanza central?','Esperanza',['Esperanza','Venganza','Riqueza','Fama']]
  ]},
  { id: 'goodfellas', title: 'Buenos muchachos', year: 1990, genre: 'Crimen', color: 'linear-gradient(145deg,#70442c,#211713 78%)', facts: [
    ['director','¿Quién dirigió Buenos muchachos?','Martin Scorsese',['Martin Scorsese','Francis Ford Coppola','Quentin Tarantino','Brian De Palma']],
    ['narrador','¿Quién narra gran parte de la película?','Henry Hill',['Henry Hill','Jimmy Conway','Tommy DeVito','Paul Cicero']],
    ['actor','¿Qué actor interpreta a Henry Hill?','Ray Liotta',['Ray Liotta','Robert De Niro','Joe Pesci','Al Pacino']],
    ['mafia','¿A qué grupo quiere pertenecer Henry?','La mafia',['La mafia','La policía','El ejército','El periodismo']],
    ['apodo','¿Cuál es el apodo de Jimmy?','Jimmy the Gent',['Jimmy the Gent','Jimmy Big','The Boss','Jimmy Two']],
    ['tommy','¿Quién interpreta a Tommy DeVito?','Joe Pesci',['Joe Pesci','Robert De Niro','Paul Sorvino','Frank Vincent']],
    ['robo','¿Qué gran robo desencadena parte de la trama?','El robo de Lufthansa',['El robo de Lufthansa','El robo del casino','El robo del banco','El robo del tren']],
    ['esposa','¿Cómo se llama la esposa de Henry?','Karen',['Karen','Janice','Mary','Linda']],
    ['final','¿Qué decide hacer Henry al final?','Entrar al programa de protección de testigos',['Entrar al programa de protección de testigos','Escapar a Italia','Convertirse en policía','Ir a Las Vegas']],
    ['cocina','¿Qué cortan en la famosa escena de la cárcel?','Ajo',['Ajo','Cebolla','Tomate','Carne']]
  ]},
  { id: 'backfuture', title: 'Volver al Futuro', year: 1985, genre: 'Aventura', color: 'linear-gradient(145deg,#614e93,#191426 78%)', facts: [
    ['director','¿Quién dirigió Volver al Futuro?','Robert Zemeckis',['Robert Zemeckis','Steven Spielberg','Joe Dante','John Hughes']],
    ['protagonista','¿Quién interpreta a Marty McFly?','Michael J. Fox',['Michael J. Fox','Christopher Lloyd','Eric Stoltz','Tom Hanks']],
    ['científico','¿Cómo se llama el científico?','Doc Brown',['Doc Brown','Dr. Emmett','Doc Smith','Professor Brown']],
    ['auto','¿Qué auto es la máquina del tiempo?','DeLorean',['DeLorean','Mustang','Chevrolet Bel Air','Porsche']],
    ['fecha','¿A qué año viaja Marty?','1955',['1955','1965','1975','1985']],
    ['energía','¿Cuánta velocidad necesita el auto?','88 millas por hora',['88 millas por hora','66 millas por hora','100 millas por hora','77 millas por hora']],
    ['madre','¿Cómo se llama la madre de Marty?','Lorraine',['Lorraine','Jennifer','Clara','Martha']],
    ['enemigo','¿Quién molesta a Marty y a George?','Biff Tannen',['Biff Tannen','Griff Tannen','Needles','Mr. Strickland']],
    ['familia','¿Qué riesgo corre Marty en 1955?','Borrar su propia existencia',['Borrar su propia existencia','Perder el DeLorean','Envejecer','Quedar atrapado en Marte']],
    ['rayo','¿Qué fenómeno ayuda a volver a 1985?','Un rayo',['Un rayo','Un tornado','Un eclipse','Una erupción']]
  ]},
  { id: 'alien', title: 'Alien', year: 1979, genre: 'Terror', color: 'linear-gradient(145deg,#394b36,#121814 78%)', facts: [
    ['director','¿Quién dirigió Alien?','Ridley Scott',['Ridley Scott','James Cameron','John Carpenter','David Fincher']],
    ['protagonista','¿Quién interpreta a Ripley?','Sigourney Weaver',['Sigourney Weaver','Jamie Lee Curtis','Linda Hamilton','Jodie Foster']],
    ['nave','¿Cómo se llama la nave?','Nostromo',['Nostromo','Sulaco','Prometheus','Covenant']],
    ['criatura','¿Qué criatura invade la nave?','Un xenomorfo',['Un xenomorfo','Un depredador','Un replicante','Un kaiju']],
    ['androide','¿Cómo se llama el androide?','Ash',['Ash','Bishop','David','Walter']],
    ['planeta','¿Dónde investigan la señal?','LV-426',['LV-426','LV-223','Pandora','Tatooine']],
    ['empresa','¿Qué empresa está detrás de la misión?','Weyland-Yutani',['Weyland-Yutani','Tyrell','Cyberdyne','Umbrella']],
    ['arma','¿Qué usa Ripley contra el alien al final?','Una escotilla de aire',['Una escotilla de aire','Un lanzallamas solamente','Una bomba','Un láser']],
    ['gatito','¿Cómo se llama el gato de la nave?','Jones',['Jones','Bishop','Milo','Ash']],
    ['frase','¿Qué frase describe al alien?','En el espacio nadie puede oír tus gritos',['En el espacio nadie puede oír tus gritos','El futuro es ahora','Nunca vuelvas solo','La noche es eterna']]
  ]},
  { id: 'amelie', title: 'Amélie', year: 2001, genre: 'Romance', color: 'linear-gradient(145deg,#8c4436,#241415 78%)', facts: [
    ['director','¿Quién dirigió Amélie?','Jean-Pierre Jeunet',['Jean-Pierre Jeunet','François Truffaut','Wes Anderson','Pedro Almodóvar']],
    ['protagonista','¿Cómo se llama la protagonista?','Amélie Poulain',['Amélie Poulain','Camille Dupont','Colette Martin','Juliette Moreau']],
    ['ciudad','¿En qué ciudad vive Amélie?','París',['París','Lyon','Bruselas','Marsella']],
    ['trabajo','¿Dónde trabaja Amélie?','En un café',['En un café','En una librería','En un cine','En un hotel']],
    ['café','¿Cómo se llama el café?','Café des 2 Moulins',['Café des 2 Moulins','Café de Flore','Le Petit Café','Café Amour']],
    ['actor','¿Quién interpreta a Amélie?','Audrey Tautou',['Audrey Tautou','Marion Cotillard','Juliette Binoche','Eva Green']],
    ['pasatiempo','¿Qué le gusta hacer a Amélie?','Ayudar anónimamente a otros',['Ayudar anónimamente a otros','Pintar retratos','Cantar en bares','Viajar en tren']],
    ['objeto','¿Qué encuentra detrás de un azulejo?','Una caja de recuerdos',['Una caja de recuerdos','Una carta','Una fotografía','Una llave']],
    ['amigo','¿Qué personaje colecciona fotomatones?','Nino Quincampoix',['Nino Quincampoix','Joseph','Bretodeau','Collignon']],
    ['estilo','¿Qué tono domina la fotografía?','Rojo y verde cálidos',['Rojo y verde cálidos','Azul y gris','Blanco y negro','Violeta y dorado']]
  ]},
  { id: 'parasite', title: 'Parásitos', year: 2019, genre: 'Drama', color: 'linear-gradient(145deg,#3d6f5c,#111d19 78%)', facts: [
    ['director','¿Quién dirigió Parásitos?','Bong Joon-ho',['Bong Joon-ho','Park Chan-wook','Lee Chang-dong','Kim Jee-woon']],
    ['país','¿De qué país es la película?','Corea del Sur',['Corea del Sur','Japón','China','Taiwán']],
    ['familia','¿Qué familia busca trabajo en la casa de los Park?','Los Kim',['Los Kim','Los Lee','Los Choi','Los Han']],
    ['hijo','¿Qué enseña Ki-woo?','Inglés',['Inglés','Matemática','Piano','Arte']],
    ['casa','¿Dónde viven inicialmente los Kim?','En un semisótano',['En un semisótano','En una mansión','En un edificio','En un hotel']],
    ['padre','¿Quién interpreta a Kim Ki-taek?','Song Kang-ho',['Song Kang-ho','Choi Woo-shik','Lee Sun-kyun','Park So-dam']],
    ['familia-rica','¿Cómo se apellida la familia rica?','Park',['Park','Kim','Moon','Jang']],
    ['sótano','¿Qué secreto esconde la casa?','Un sótano oculto',['Un sótano oculto','Un tesoro','Un laboratorio','Un pasadizo al exterior']],
    ['premio','¿Qué premio histórico ganó la película?','Mejor película en los Oscar',['Mejor película en los Oscar','Mejor documental','Palma de Oro únicamente','Mejor canción']],
    ['tema','¿Qué tema social atraviesa la película?','La desigualdad de clases',['La desigualdad de clases','La guerra','La inmigración','La fama']]
  ]},
  { id: 'gladiator', title: 'Gladiador', year: 2000, genre: 'Aventura', color: 'linear-gradient(145deg,#87633e,#211a14 78%)', facts: [
    ['director','¿Quién dirigió Gladiador?','Ridley Scott',['Ridley Scott','Oliver Stone','Mel Gibson','Wolfgang Petersen']],
    ['protagonista','¿Quién interpreta a Máximo?','Russell Crowe',['Russell Crowe','Joaquin Phoenix','Eric Bana','Gerard Butler']],
    ['rango','¿Qué rango tiene Máximo al comienzo?','General romano',['General romano','Senador','Gladiador','Emperador']],
    ['emperador','¿Quién interpreta a Cómodo?','Joaquin Phoenix',['Joaquin Phoenix','Jude Law','Colin Farrell','Paul Bettany']],
    ['arena','¿Dónde combate Máximo?','El Coliseo',['El Coliseo','El Foro','La Acrópolis','El Circus Maximus']],
    ['frase','¿Qué pregunta hace Máximo antes de revelar su identidad?','¿No os divertís?',['¿No os divertís?','¿Quién manda aquí?','¿Dónde está Roma?','¿Sois soldados?']],
    ['nombre','¿Cuál es el nombre completo de Máximo?','Maximus Decimus Meridius',['Maximus Decimus Meridius','Marcus Aurelius Maximus','Maximus Romanus','Decimus Meridius']],
    ['emperador2','¿Qué emperador muere al inicio?','Marco Aurelio',['Marco Aurelio','Nerón','Julio César','Trajano']],
    ['premio','¿Qué premio ganó Russell Crowe?','Oscar a mejor actor',['Oscar a mejor actor','Oscar a mejor director','Globo de Oro únicamente','BAFTA a mejor guion']],
    ['objetivo','¿Qué busca Máximo?','Venganza',['Venganza','Riqueza','Fama','El trono']]
  ]},
  { id: 'eternal', title: 'Eterno resplandor', year: 2004, genre: 'Romance', color: 'linear-gradient(145deg,#2e637c,#101a24 78%)', facts: [
    ['director','¿Quién dirigió Eterno resplandor de una mente sin recuerdos?','Michel Gondry',['Michel Gondry','Spike Jonze','Charlie Kaufman','Richard Linklater']],
    ['protagonistas','¿Qué pareja protagoniza la historia?','Joel y Clementine',['Joel y Clementine','Sam y Annie','Elliot y Kate','Mark y Mary']],
    ['actriz','¿Quién interpreta a Clementine?','Kate Winslet',['Kate Winslet','Nicole Kidman','Julianne Moore','Rachel McAdams']],
    ['actor','¿Quién interpreta a Joel?','Jim Carrey',['Jim Carrey','Adam Sandler','Ben Stiller','Ewan McGregor']],
    ['empresa','¿Qué empresa borra recuerdos?','Lacuna',['Lacuna','Memorex','Eternal Inc.','NeuroTech']],
    ['color','¿Qué color identifica al cabello de Clementine?','Azul y verde',['Azul y verde','Rojo y naranja','Negro y violeta','Rubio y rosa']],
    ['procedimiento','¿Qué se borra?','Los recuerdos de una relación',['Los recuerdos de una relación','La personalidad','Los sueños','La memoria de la infancia']],
    ['lugar','¿Dónde se conocen de nuevo?','Montauk',['Montauk','Brooklyn','Boston','New Haven']],
    ['guion','¿Quién escribió el guion?','Charlie Kaufman',['Charlie Kaufman','Aaron Sorkin','Sofia Coppola','Nora Ephron']],
    ['decisión','¿Qué deciden hacer al final?','Intentarlo de todos modos',['Intentarlo de todos modos','Olvidarse otra vez','Separarse para siempre','Mudarse juntos']]
  ]},
  { id: 'silence', title: 'El silencio de los inocentes', year: 1991, genre: 'Terror', color: 'linear-gradient(145deg,#6c5544,#1e1715 78%)', facts: [
    ['director','¿Quién dirigió El silencio de los inocentes?','Jonathan Demme',['Jonathan Demme','David Fincher','Roman Polanski','William Friedkin']],
    ['protagonista','¿Qué agente interpreta Jodie Foster?','Clarice Starling',['Clarice Starling','Dana Scully','Evelyn Salt','Marge Gunderson']],
    ['doctor','¿Quién es el asesino encarcelado?','Hannibal Lecter',['Hannibal Lecter','Norman Bates','John Doe','Patrick Bateman']],
    ['actor','¿Quién interpreta a Hannibal Lecter?','Anthony Hopkins',['Anthony Hopkins','Gary Oldman','Christopher Lee','Jeremy Irons']],
    ['apodo','¿Qué apodo tiene el asesino que busca el FBI?','Buffalo Bill',['Buffalo Bill','Red Dragon','The Ripper','Leatherface']],
    ['agencia','¿En qué agencia trabaja Clarice?','FBI',['FBI','CIA','Interpol','DEA']],
    ['premio','¿Qué premio ganó la película?','Oscar a mejor película',['Oscar a mejor película','Palma de Oro','Emmy a mejor serie','César a mejor película']],
    ['celda','¿Dónde está Lecter?','En una celda de máxima seguridad',['En una celda de máxima seguridad','En un hospital','En una casa','En un sótano']],
    ['mariposa','¿Qué insecto aparece como símbolo?','La polilla esfinge',['La polilla esfinge','La mariposa monarca','El escarabajo','La libélula']],
    ['tema','¿Qué busca Clarice resolver?','El caso de Buffalo Bill',['El caso de Buffalo Bill','Un robo bancario','Una desaparición alienígena','Un asesinato político']]
  ]},
  { id: 'madmax', title: 'Mad Max: Fury Road', year: 2015, genre: 'Aventura', color: 'linear-gradient(145deg,#a34b2d,#26150e 78%)', facts: [
    ['director','¿Quién dirigió Mad Max: Fury Road?','George Miller',['George Miller','James Cameron','Neill Blomkamp','Peter Jackson']],
    ['protagonista','¿Quién interpreta a Furiosa?','Charlize Theron',['Charlize Theron','Emily Blunt','Sigourney Weaver','Jessica Chastain']],
    ['max','¿Quién interpreta a Max?','Tom Hardy',['Tom Hardy','Mel Gibson','Christian Bale','Michael Fassbender']],
    ['villano','¿Quién es el villano?','Immortan Joe',['Immortan Joe','Rictus Erectus','The People Eater','Toecutter']],
    ['vehículo','¿En qué vehículo viajan?','Un war rig',['Un war rig','Un tren blindado','Un helicóptero','Un auto deportivo']],
    ['desierto','¿Dónde transcurre la persecución?','En un desierto postapocalíptico',['En un desierto postapocalíptico','En una ciudad submarina','En una selva','En el espacio']],
    ['esposas','¿A quiénes intenta liberar Furiosa?','A las esposas de Immortan Joe',['A las esposas de Immortan Joe','A prisioneros políticos','A su familia','A niños del refugio']],
    ['color','¿Qué color domina la escena nocturna?','Azul',['Azul','Rojo','Verde','Amarillo']],
    ['música','¿Qué instrumento toca el guitarrista?','Una guitarra eléctrica',['Una guitarra eléctrica','Un violín','Una batería','Una trompeta']],
    ['objetivo','¿A dónde quieren llegar?','Al Lugar Verde',['Al Lugar Verde','A la Ciudadela','A Valhalla','A Gastown']]
  ]},
  { id: 'coco', title: 'Coco', year: 2017, genre: 'Animación', color: 'linear-gradient(145deg,#9a4030,#24121b 78%)', facts: [
    ['estudio','¿Qué estudio realizó Coco?','Pixar',['Pixar','DreamWorks','Ghibli','Illumination']],
    ['protagonista','¿Cómo se llama el protagonista?','Miguel',['Miguel','Héctor','Ernesto','Dante']],
    ['familia','¿Qué actividad está prohibida en su familia?','La música',['La música','El baile','La cocina','El arte']],
    ['celebración','¿Qué festividad aparece?','Día de Muertos',['Día de Muertos','Carnaval','Navidad','Día de la Independencia']],
    ['perro','¿Cómo se llama el perro de Miguel?','Dante',['Dante','Fito','Bobby','Churro']],
    ['músico','¿Quién es el famoso músico que Miguel admira?','Ernesto de la Cruz',['Ernesto de la Cruz','Héctor Rivera','Julio Márquez','Rafael Solís']],
    ['instrumento','¿Qué instrumento toca Miguel?','Guitarra',['Guitarra','Violín','Piano','Trompeta']],
    ['lugar','¿A dónde viaja Miguel?','La Tierra de los Muertos',['La Tierra de los Muertos','La Isla de las Almas','El Cielo Azul','El Mundo de los Sueños']],
    ['canción','¿Qué canción se vuelve central?','Recuérdame',['Recuérdame','Un poco loco','La Llorona','El mundo es mi familia']],
    ['tema','¿Qué mantiene viva la memoria de alguien?','Recordarlo',['Recordarlo','Fotografiarlo','Escribirle','Visitar su casa']]
  ]},
  { id: 'social', title: 'Red social', year: 2010, genre: 'Drama', color: 'linear-gradient(145deg,#345274,#121a26 78%)', facts: [
    ['director','¿Quién dirigió Red social?','David Fincher',['David Fincher','Aaron Sorkin','Danny Boyle','Sam Mendes']],
    ['protagonista','¿Quién interpreta a Mark Zuckerberg?','Jesse Eisenberg',['Jesse Eisenberg','Andrew Garfield','Justin Timberlake','Michael Cera']],
    ['red','¿Qué plataforma se crea?','Facebook',['Facebook','Twitter','MySpace','LinkedIn']],
    ['universidad','¿Dónde estudia Mark?','Harvard',['Harvard','Yale','Stanford','MIT']],
    ['socio','¿Quién es el socio de Mark?','Eduardo Saverin',['Eduardo Saverin','Sean Parker','Cameron Winklevoss','Tyler Winklevoss']],
    ['actor','¿Quién interpreta a Sean Parker?','Justin Timberlake',['Justin Timberlake','Armie Hammer','Andrew Garfield','Joseph Gordon-Levitt']],
    ['guion','¿Quién escribió el guion?','Aaron Sorkin',['Aaron Sorkin','David Fincher','Steve Jobs','Charlie Kaufman']],
    ['demanda','¿Quiénes demandan a Mark?','Los gemelos Winklevoss',['Los gemelos Winklevoss','Los hermanos Olsen','Los gemelos Parker','Los hermanos Zuckerberg']],
    ['premio','¿Qué premio ganó Aaron Sorkin?','Oscar a mejor guion adaptado',['Oscar a mejor guion adaptado','Oscar a mejor actor','Emmy a mejor serie','BAFTA a mejor director']],
    ['tema','¿Qué explora la película?','El nacimiento de una red social',['El nacimiento de una red social','La historia de internet','La vida de Bill Gates','La creación de un videojuego']]
  ]},
  { id: 'whiplash', title: 'Whiplash', year: 2014, genre: 'Drama', color: 'linear-gradient(145deg,#7e642e,#211a12 78%)', facts: [
    ['director','¿Quién dirigió Whiplash?','Damien Chazelle',['Damien Chazelle','Darren Aronofsky','Wes Anderson','Richard Linklater']],
    ['baterista','¿Qué instrumento toca Andrew?','Batería',['Batería','Piano','Saxofón','Trompeta']],
    ['actor','¿Quién interpreta a Andrew Neiman?','Miles Teller',['Miles Teller','Ryan Gosling','Taron Egerton','Logan Lerman']],
    ['profesor','¿Quién es el exigente profesor?','Terence Fletcher',['Terence Fletcher','David Bowman','Robert Ford','Jack Terrence']],
    ['actor-profesor','¿Quién interpreta a Fletcher?','J.K. Simmons',['J.K. Simmons','J.K. Rowling','Paul Giamatti','Edward Norton']],
    ['escuela','¿Dónde estudia Andrew?','Shaffer Conservatory',['Shaffer Conservatory','Juilliard','Berklee','Manhattan School of Music']],
    ['canción','¿Qué tema da título a la película?','Whiplash',['Whiplash','Caravan','Overture','Cherokee']],
    ['meta','¿Qué busca Andrew?','Ser un gran baterista',['Ser un gran baterista','Ser profesor','Formar una banda de rock','Ganar dinero']],
    ['método','¿Cómo enseña Fletcher?','Con presión extrema',['Con presión extrema','Con juegos','Con clases online','Con silencio']],
    ['final','¿Qué ocurre en el concierto final?','Andrew toma el control de la interpretación',['Andrew toma el control de la interpretación','Andrew abandona','Fletcher se disculpa','La banda se retira']]
  ]},
  { id: 'inception', title: 'El origen', year: 2010, genre: 'Ciencia ficción', color: 'linear-gradient(145deg,#496077,#151a23 78%)', facts: [
    ['director','¿Quién dirigió El origen?','Christopher Nolan',['Christopher Nolan','Steven Spielberg','Denis Villeneuve','M. Night Shyamalan']],
    ['protagonista','¿Quién interpreta a Cobb?','Leonardo DiCaprio',['Leonardo DiCaprio','Joseph Gordon-Levitt','Tom Hardy','Cillian Murphy']],
    ['profesión','¿Qué hacen Cobb y su equipo?','Roban secretos en sueños',['Roban secretos en sueños','Viajan en el tiempo','Hackean bancos','Exploran planetas']],
    ['arquitecta','¿Quién diseña los mundos oníricos?','Ariadne',['Ariadne','Mal','Saito','Eames']],
    ['actor-arquitecta','¿Quién interpreta a Ariadne?','Elliot Page',['Elliot Page','Marion Cotillard','Emily Blunt','Rooney Mara']],
    ['objeto','¿Qué objeto usa Cobb para comprobar la realidad?','Un trompo',['Un trompo','Una moneda','Un reloj','Un dado']],
    ['objetivo','¿Qué significa “inception”?','Implantar una idea',['Implantar una idea','Borrar un sueño','Despertar','Cambiar un recuerdo']],
    ['esposa','¿Cómo se llama la esposa de Cobb?','Mal',['Mal','Marie','Molly','Maya']],
    ['música','¿Qué canción funciona como señal?','Non, je ne regrette rien',['Non, je ne regrette rien','Time','Dream a Little Dream','Que sera sera']],
    ['niveles','¿Qué se multiplican dentro del sueño?','Los niveles de realidad',['Los niveles de realidad','Los personajes','Las ciudades','Las horas']]
  ]},
  { id: 'spirited2', title: 'El gran hotel Budapest', year: 2014, genre: 'Comedia', color: 'linear-gradient(145deg,#8f4f73,#211421 78%)', facts: [
    ['director','¿Quién dirigió El gran hotel Budapest?','Wes Anderson',['Wes Anderson','Sofia Coppola','Taika Waititi','Noah Baumbach']],
    ['conserje','¿Quién es el famoso conserje?','Monsieur Gustave',['Monsieur Gustave','M. Zero','M. Moustafa','Henckels']],
    ['actor','¿Quién interpreta a Gustave?','Ralph Fiennes',['Ralph Fiennes','Bill Murray','Adrien Brody','Jude Law']],
    ['ayudante','¿Quién es el joven lobby boy?','Zero',['Zero','Agatha','Dmitri','Jopling']],
    ['hotel','¿Dónde trabaja Gustave?','En el Gran Hotel Budapest',['En el Gran Hotel Budapest','En el Hotel Excelsior','En el Hotel Europa','En el Grand Budapest Palace']],
    ['objeto','¿Qué hereda Gustave?','Un cuadro valioso',['Un cuadro valioso','Una mansión','Una joya','Un tren']],
    ['personaje','¿Qué actriz interpreta a Agatha?','Saoirse Ronan',['Saoirse Ronan','Tilda Swinton','Cate Blanchett','Emma Stone']],
    ['estilo','¿Qué formato visual caracteriza al director?','Composición simétrica',['Composición simétrica','Cámara en mano','Documental','Plano secuencia realista']],
    ['época','¿En qué período imaginario transcurre?','Entre guerras',['Entre guerras','En el futuro','En la Edad Media','En los años 60']],
    ['relato','¿Quién cuenta la historia principal?','M. Moustafa',['M. Moustafa','Zero','Gustave','El autor']]
  ]},
  { id: 'spirited3', title: 'Los Increíbles', year: 2004, genre: 'Animación', color: 'linear-gradient(145deg,#a13a35,#21141b 78%)', facts: [
    ['director','¿Quién dirigió Los Increíbles?','Brad Bird',['Brad Bird','Pete Docter','Andrew Stanton','John Lasseter']],
    ['familia','¿Qué familia protagoniza la historia?','Los Parr',['Los Parr','Los Kent','Los Baxter','Los Richards']],
    ['padre','¿Cuál es el nombre de superhéroe de Bob?','Mr. Increíble',['Mr. Increíble','El Hombre Fuerte','Mr. Fantástico','Capitán Increíble']],
    ['madre','¿Cuál es el nombre de superhéroe de Helen?','Elasticgirl',['Elasticgirl','Superflex','Elastic Woman','Stretch']],
    ['hija','¿Qué poder tiene Violeta?','Volverse invisible',['Volverse invisible','Volar','Controlar el fuego','Correr rápido']],
    ['hijo','¿Qué poder tiene Dash?','Supervelocidad',['Supervelocidad','Telequinesis','Invisibilidad','Superfuerza']],
    ['bebé','¿Cómo se llama el bebé?','Jack-Jack',['Jack-Jack','Dash-Dash','Bob Jr.','Tony']],
    ['diseñadora','¿Quién diseña los trajes?','Edna Moda',['Edna Moda','Mirage','Helen Parr','Violet Mode']],
    ['villano','¿Quién es el villano?','Síndrome',['Síndrome','Screenslaver','Bomb Voyage','Omnidroid']],
    ['robot','¿Qué máquina construye Síndrome?','Omnidroid',['Omnidroid','Incredibot','Omni-X','SyndroMax']]
  ]},
  { id: 'moonlight', title: 'Moonlight', year: 2016, genre: 'Drama', color: 'linear-gradient(145deg,#315b78,#121724 78%)', facts: [
    ['director','¿Quién dirigió Moonlight?','Barry Jenkins',['Barry Jenkins','Jordan Peele','Spike Lee','Steve McQueen']],
    ['protagonista','¿Cómo se llama el protagonista de niño?','Little',['Little','Chiron','Black','Kevin']],
    ['etapas','¿En cuántas etapas se cuenta su vida?','Tres',['Tres','Dos','Cuatro','Cinco']],
    ['adulto','¿Qué apodo usa de adulto?','Black',['Black','Big','Blue','Moon']],
    ['mentor','¿Quién ayuda a Little?','Juan',['Juan','Kevin','Terrel','Paula']],
    ['actor','¿Quién interpreta a Juan?','Mahershala Ali',['Mahershala Ali','Trevante Rhodes','André Holland','Naomie Harris']],
    ['madre','¿Quién es la madre de Chiron?','Paula',['Paula','Teresa','Juanita','Deborah']],
    ['amigo','¿Cómo se llama el amigo de Chiron?','Kevin',['Kevin','Juan','Terrel','Greg']],
    ['premio','¿Qué premio ganó la película?','Oscar a mejor película',['Oscar a mejor película','Oscar a mejor actor','Palma de Oro','Globo de Oro']],
    ['tema','¿Qué explora principalmente?','Identidad y crecimiento',['Identidad y crecimiento','La política','El deporte','La guerra']]
  ]},
  { id: 'spirited4', title: 'El resplandor', year: 1980, genre: 'Terror', color: 'linear-gradient(145deg,#763a3e,#1f1418 78%)', facts: [
    ['director','¿Quién dirigió El resplandor?','Stanley Kubrick',['Stanley Kubrick','Roman Polanski','Alfred Hitchcock','Brian De Palma']],
    ['protagonista','¿Quién interpreta a Jack Torrance?','Jack Nicholson',['Jack Nicholson','Dustin Hoffman','Gene Hackman','Willem Dafoe']],
    ['hotel','¿Cómo se llama el hotel?','Overlook',['Overlook','Bates','Shining Lodge','Mountain View']],
    ['esposa','¿Quién interpreta a Wendy?','Shelley Duvall',['Shelley Duvall','Sissy Spacek','Mia Farrow','Jessica Lange']],
    ['hijo','¿Cómo se llama el hijo de Jack?','Danny',['Danny','Dick','Tony','David']],
    ['poder','¿Qué habilidad tiene Danny?','El resplandor',['El resplandor','Telepatía total','Control del clima','Precognición exacta']],
    ['temporada','¿En qué período queda aislada la familia?','Invierno',['Invierno','Verano','Otoño','Primavera']],
    ['laberinto','¿Qué lugar es clave en el exterior?','Un laberinto de setos',['Un laberinto de setos','Un cementerio','Una pista de hielo','Un bosque']],
    ['frase','¿Qué escribe Jack repetidamente?','All work and no play makes Jack a dull boy',['All work and no play makes Jack a dull boy','Here’s Johnny','Redrum','Come play with us']],
    ['número','¿Qué habitación es famosa?','La 237',['La 237','La 13','La 666','La 101']]
  ]}
].slice(0, 20);

const movies = window.quizMovies || legacyMovies;
const quizConfig = window.quizConfig || { videoQrImage: '' };

const memoItemsByMovie = {
  matrix: [['💊','Pastilla'],['🕶️','Anteojos'],['🐇','Conejo'],['💻','Código'],['☎️','Teléfono'],['🥄','Cuchara'],['🔑','Llave'],['🚪','Puerta'],['🤖','Agente']],
  titanic: [['🚢','Barco'],['💎','Diamante'],['🧊','Iceberg'],['🎻','Violín'],['🚗','Auto'],['🚪','Puerta'],['🌊','Océano'],['🎨','Retrato'],['🚨','Bengala']],
  backfuture: [['🚗','DeLorean'],['⚡','Rayo'],['🕰️','Reloj'],['🛹','Patineta'],['🎸','Guitarra'],['📸','Foto'],['🔥','Huellas'],['🥼','Doc'],['🏫','Escuela']],
  harrypotter: [['⚡','Cicatriz'],['🪄','Varita'],['🦉','Lechuza'],['🚂','Tren'],['🧹','Escoba'],['🏰','Castillo'],['🗝️','Llave'],['🪞','Espejo'],['🎩','Sombrero']],
  jurassic: [['🦖','T-Rex'],['🦕','Braquiosaurio'],['🥚','Huevo'],['🚙','Jeep'],['🧬','ADN'],['🦟','Mosquito'],['🌴','Isla'],['🚧','Cerca'],['🥫','Barbasol']],
  killbill: [['⚔️','Katana'],['🐍','Mamba'],['💛','Traje'],['🏍️','Moto'],['✈️','Avión'],['👁️','Parche'],['❄️','Nieve'],['🩸','Venganza'],['📋','Lista']],
  shrek: [['🧅','Cebolla'],['🏰','Castillo'],['🐉','Dragona'],['🐴','Burro'],['👑','Corona'],['💚','Ogro'],['🔥','Pantano'],['👸','Fiona'],['🪞','Espejo']],
  godfather: [['🍊','Naranjas'],['🐴','Caballo'],['🤵','Traje'],['🌹','Rosa'],['🍝','Pasta'],['🔫','Pistola'],['🚗','Auto'],['🇮🇹','Sicilia'],['💍','Anillo']],
  lotr: [['💍','Anillo'],['🧙','Mago'],['🗡️','Espada'],['🏔️','Montaña'],['👁️','Ojo'],['🌋','Volcán'],['🧝','Elfo'],['🍃','Hoja'],['🚪','Moria']],
  starwars: [['⚔️','Sable'],['🤖','Droide'],['⭐','Estrella'],['🚀','Nave'],['👑','Leia'],['🌑','Vader'],['🏜️','Tatooine'],['🛡️','Trooper'],['🛰️','Estación']],
  avatar: [['🌳','Árbol'],['🔵','Na’vi'],['🪽','Ikran'],['🏹','Arco'],['🌌','Pandora'],['🪶','Pluma'],['🐉','Toruk'],['🔥','Fuego'],['🪨','Montañas']],
  wolf: [['💵','Dinero'],['📞','Teléfono'],['🖊️','Lapicera'],['🚘','Ferrari'],['⌚','Reloj'],['🛥️','Yate'],['📈','Acciones'],['🎤','Micrófono'],['👔','Corbata']],
  interstellar: [['🚀','Nave'],['🕳️','Gargantúa'],['🤖','TARS'],['⌚','Reloj'],['🌽','Maíz'],['📚','Biblioteca'],['🪐','Planeta'],['👨‍🚀','Cooper'],['🌊','Ola']],
  shining: [['🪓','Hacha'],['🚪','Puerta'],['🛎️','Hotel'],['❄️','Nieve'],['🚲','Triciclo'],['⌨️','Máquina'],['🥃','Bourbon'],['🧩','Laberinto'],['👭','Gemelas']],
  forrest: [['🍫','Bombones'],['🪶','Pluma'],['🏃','Carrera'],['🏓','Ping-pong'],['🚌','Colectivo'],['🦐','Camarón'],['🎖️','Medalla'],['👟','Zapatillas'],['🪑','Banco']],
  terminator2: [['🤖','Terminator'],['🏍️','Moto'],['🕶️','Anteojos'],['🔥','Fuego'],['🌹','Rosas'],['🔫','Escopeta'],['🧊','Metal'],['🚚','Camión'],['👍','Pulgar']],
  endgame: [['🛡️','Escudo'],['🔨','Martillo'],['🧤','Guantelete'],['💎','Gema'],['⏳','Tiempo'],['🚀','Nave'],['⚡','Thor'],['🏹','Hawkeye'],['🤖','Armadura']],
  pirates: [['🏴‍☠️','Bandera'],['🧭','Brújula'],['🚢','Perla Negra'],['💰','Tesoro'],['⚔️','Espada'],['🐒','Mono'],['🌊','Mar'],['💀','Calavera'],['🍾','Ron']],
  fastfive: [['🚗','Auto'],['🏦','Bóveda'],['💵','Dinero'],['🚓','Policía'],['🌉','Puente'],['🔧','Motor'],['⛓️','Cadena'],['🏙️','Río'],['🏁','Carrera']],
  nuevereinas: [['📬','Estampillas'],['💼','Valija'],['🏨','Hotel'],['💵','Dólares'],['📰','Diario'],['✍️','Firma'],['🏦','Banco'],['🧾','Cheque'],['👓','Lentes']]
};

const memoExtraItemsByMovie = {
  titanic: [['🛟','Salvavidas'],['🧳','Equipaje'],['⚓','Ancla']],
  harrypotter: [['🐍','Serpiente'],['🧪','Poción'],['🕯️','Vela']],
  lalaland: [['🎹','Piano'],['🎬','Claqueta'],['🌃','Ciudad'],['⭐','Estrella'],['☕','Café'],['🎭','Audición'],['💃','Baile'],['🎷','Jazz'],['🚗','Auto'],['🌌','Observatorio'],['👗','Vestido'],['🎤','Micrófono']],
  prettywoman: [['👗','Vestido'],['💎','Collar'],['🛍️','Compras'],['🏨','Hotel'],['🚗','Auto'],['🌹','Rosa'],['🎭','Ópera'],['💵','Dinero'],['🐎','Polo'],['🛁','Baño'],['👠','Zapato'],['🥂','Champaña']],
  killbill: [['👣','Pasos'],['⛩️','Templo'],['🎶','Silbido']],
  shrek: [['🧚','Hada'],['🍪','Galleta'],['🌙','Luna']],
  up: [['🎈','Globos'],['🏠','Casa'],['👴','Carl'],['👦','Russell'],['🐕','Dug'],['🐦','Kevin'],['🗺️','Mapa'],['🏞️','Cataratas'],['🛩️','Dirigible'],['🎖️','Insignia'],['📖','Libro de aventuras'],['🦯','Bastón']],
  lotr: [['👹','Orco'],['🏹','Arco'],['🌲','Bosque']],
  interstellar: [['🛰️','Estación'],['🧭','Coordenadas'],['🛏️','Sueño']],
  shining: [['🏔️','Montaña'],['🗝️','Llave'],['📺','Televisor']],
  matrix: [['💾','Disco'],['🪞','Espejo'],['🧥','Abrigo']],
  terminator2: [['🦾','Brazo'],['🏭','Fábrica'],['🚔','Policía']],
  godfather: [['🎩','Sombrero'],['🕴️','Don'],['📰','Diario']],
  fast: [['🚗','Auto'],['🏁','Carrera'],['🔧','Motor'],['⛽','Combustible'],['💨','Nitro'],['👨‍👩‍👧','Familia'],['🚓','Policía'],['🏎️','Deportivo'],['🔥','Fuego'],['🔩','Tornillo'],['🛣️','Ruta'],['💵','Dinero']],
  highschoolmusical: [['🏀','Básquet'],['🎤','Micrófono'],['🎭','Teatro'],['🏫','Escuela'],['🎼','Partitura'],['🐾','Wildcat'],['👑','Sharpay'],['📚','Libros'],['🎹','Piano'],['🎉','Fiesta'],['⛷️','Esquí'],['🧢','Gorra']],
  jurassic: [['🐐','Cabra'],['🚁','Helicóptero'],['🟠','Ámbar']],
  forrest: [['🚤','Barco'],['🇺🇸','Bandera'],['🎸','Elvis']],
  backfuture: [['👟','Zapatillas'],['🌩️','Tormenta'],['📅','Calendario']],
  parenttrap: [['👯','Gemelas'],['⛺','Campamento'],['🃏','Póker'],['🦎','Lagartija'],['🍇','Viñedo'],['✈️','Avión'],['🇬🇧','Londres'],['🇺🇸','California'],['💍','Anillo'],['🐕','Perro'],['🧳','Valija'],['🏡','Casa']],
  nuevereinas: [['☕','Café'],['🛗','Ascensor'],['🧤','Guantes']]
};

const releaseTitlesByMovie = {
  titanic: 'Titanic',
  harrypotter: 'Harry Potter y la piedra filosofal, la primera película de la saga',
  lalaland: 'La La Land',
  prettywoman: 'Mujer Bonita',
  killbill: 'Kill Bill: Volumen 1',
  shrek: 'Shrek, la primera película de la saga',
  up: 'Up',
  lotr: 'El Señor de los Anillos: La Comunidad del Anillo',
  interstellar: 'Interestelar',
  shining: 'El resplandor',
  matrix: 'The Matrix',
  terminator2: 'Terminator 2',
  godfather: 'El Padrino, la primera película de la saga',
  fast: 'Rápidos y Furiosos 1, la primera película de la saga',
  highschoolmusical: 'High School Musical, la primera película',
  jurassic: 'Jurassic Park, la primera película de la saga',
  forrest: 'Forrest Gump',
  backfuture: 'Volver al Futuro, la primera película de la saga',
  parenttrap: 'Juego de Gemelas',
  nuevereinas: 'Nueve Reinas'
};

const runtimeByMovie = {
  titanic: { title: 'Titanic', minutes: 195 },
  harrypotter: { title: 'Harry Potter y la piedra filosofal', minutes: 152 },
  lalaland: { title: 'La La Land', minutes: 128 },
  prettywoman: { title: 'Mujer Bonita', minutes: 119 },
  killbill: { title: 'Kill Bill: Volumen 1', minutes: 110 },
  shrek: { title: 'Shrek', minutes: 90 },
  up: { title: 'Up', minutes: 96 },
  lotr: { title: 'El Señor de los Anillos: La Comunidad del Anillo', minutes: 178 },
  interstellar: { title: 'Interestelar', minutes: 169 },
  shining: { title: 'El resplandor (versión estadounidense)', minutes: 144 },
  matrix: { title: 'The Matrix', minutes: 136 },
  terminator2: { title: 'Terminator 2 (versión cinematográfica)', minutes: 137 },
  godfather: { title: 'El Padrino', minutes: 175 },
  fast: { title: 'Rápidos y Furiosos 1', minutes: 107 },
  highschoolmusical: { title: 'High School Musical', minutes: 98 },
  jurassic: { title: 'Jurassic Park', minutes: 127 },
  forrest: { title: 'Forrest Gump', minutes: 142 },
  backfuture: { title: 'Volver al Futuro', minutes: 116 },
  parenttrap: { title: 'Juego de Gemelas', minutes: 128 },
  nuevereinas: { title: 'Nueve Reinas', minutes: 114 }
};

const state = {
  screen: 'home', selectedMovie: null, questions: [], questionIndex: 0, streak: 0, attempts: 0, timer: 10,
  timerId: null, cooldownId: null, lossCount: 0, intermediateQueue: [], answerLocked: false, welcomeShown: false, stats: loadStats()
};

function loadStats() {
  try { return JSON.parse(localStorage.getItem('quiz-pelis-stats')) || { best: 0, wins: 0, plays: 0 }; }
  catch { return { best: 0, wins: 0, plays: 0 }; }
}
function saveStats() { localStorage.setItem('quiz-pelis-stats', JSON.stringify(state.stats)); }
function esc(value) { return String(value).replace(/[&<>'"]/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;' }[c])); }
function shuffle(items) { return [...items].sort(() => Math.random() - .5); }
function createQuestionPool(movie) {
  return movie.facts.map((fact, factIndex) => ({
    id: `${movie.id}-${factIndex}`,
    text: fact[1],
    answer: fact[2],
    options: shuffle(fact[3]),
    kind: 'normal',
    difficulty: factIndex < 6 ? 'easy' : 'intermediate',
    topic: fact[0]
  }));
}
function createReleaseQuestion(movie) {
  const year = Number(movie.year);
  return {
    id: `${movie.id}-release`,
    text: `¿En qué año se estrenó ${releaseTitlesByMovie[movie.id]}?`,
    answer: String(year),
    options: shuffle([year, year - 3, year + 2, year + 5].map(String)),
    kind: 'normal',
    difficulty: 'intermediate',
    topic: 'estreno'
  };
}
function createRuntimeQuestion(movie) {
  const runtime = runtimeByMovie[movie.id];
  const minutes = runtime.minutes;
  return {
    id: `${movie.id}-runtime`,
    text: `¿Cuántos minutos dura ${runtime.title}?`,
    answer: `${minutes} minutos`,
    options: shuffle([minutes, minutes - 9, minutes + 7, minutes + 14].map(value => `${value} minutos`)),
    kind: 'normal',
    difficulty: 'intermediate',
    topic: 'duración'
  };
}
function takeIntermediateVariant(variants) {
  const validIds = new Set(variants.map(question => question.id));
  state.intermediateQueue = state.intermediateQueue.filter(id => validIds.has(id));
  if (!state.intermediateQueue.length) {
    const runtime = variants.find(question => question.topic === 'duración');
    const others = shuffle(variants.filter(question => question !== runtime).map(question => question.id));
    state.intermediateQueue = runtime ? [runtime.id, ...others] : others;
  }
  const nextId = state.intermediateQueue.shift();
  return variants.find(question => question.id === nextId);
}
function buildRoundQuestions(movie) {
  const pool = createQuestionPool(movie);
  const easy = shuffle(pool.filter(question => question.difficulty === 'easy')).slice(0, 6);
  const intermediateVariants = [createRuntimeQuestion(movie), ...pool.filter(question => question.difficulty === 'intermediate').slice(0, 4)];
  const intermediate = shuffle([createReleaseQuestion(movie), takeIntermediateVariant(intermediateVariants)]);
  const hardFact = movie.hardFact;
  const hard = {
    id: `${movie.id}-hard`,
    text: hardFact[1],
    answer: hardFact[2],
    options: shuffle(hardFact[3]),
    kind: 'hard'
  };
  const memoSource = [...(memoItemsByMovie[movie.id] || []), ...(memoExtraItemsByMovie[movie.id] || [])].slice(0, 12);
  const memoCards = memoSource.map((item, index) => ({ symbol: item[0], label: item[1], order: index + 1 }));
  const memory = {
    id: `${movie.id}-memo`,
    kind: 'memo',
    phase: 'preview',
    next: 0,
    solved: [],
    sequence: shuffle(memoCards.map(item => item.order)),
    items: shuffle(memoCards)
  };
  return [...easy, ...intermediate, hard, memory];
}
function render() {
  document.body.classList.toggle('quiz-active', state.screen === 'quiz');
  document.querySelector('#app').innerHTML = state.screen === 'home' ? renderHome() : state.screen === 'quiz' ? renderQuiz() : renderResult();
  bindEvents();
}
function renderHome() {
  return `<section class="screen home-screen">
    <div class="hero"><div><h1><span class="hero-title-line">¿Cuánto saben</span><span class="hero-title-line">de <em>películas?</em></span></h1><p class="hero-copy">Elijan una película y respondan correctamente 10 preguntas seguidas para ganar el acertijo. Cada pregunta tiene tiempo límite; si fallan, vuelven a empezar.</p></div></div>
    <div class="movies-grid">${movies.map(renderMovieCard).join('')}</div>
  </section>`;
}
function renderMovieCard(movie) {
  return `<article class="movie-card poster-only-card" data-movie="${movie.id}" tabindex="0" role="button" aria-label="Elegir una película"><div class="poster" style="background:${movie.color}"><img class="poster-image" src="assets/posters/${movie.id}.jpg" alt="" loading="lazy"></div></article>`;
}
function renderQuiz() {
  const movie = state.selectedMovie, question = state.questions[state.questionIndex];
  const progress = (state.streak / 10) * 100;
  if (question.kind === 'memo') return renderMemoQuiz(movie, question, progress);
  const kicker = question.kind === 'hard'
    ? 'Pregunta 9 · nivel difícil'
    : question.difficulty === 'intermediate'
      ? `Pregunta ${state.streak + 1} · nivel intermedio`
      : `Pregunta ${state.streak + 1} · nivel fácil`;
  return `<section class="screen quiz-screen"><div class="quiz-top"><button class="back-link" data-action="quit-quiz">← Cambiar película</button><span class="quiz-movie">${esc(movie.title)}</span></div><div class="question-progress"><div class="progress-track"><div class="progress-fill" style="width:${progress}%"></div></div><span class="progress-label">${state.streak + 1} / 10</span></div><div class="question-card" id="question-card"><span class="question-kicker">${kicker}</span><h1 class="question-text">${esc(question.text)}</h1><div class="answers">${question.options.map((option, index) => `<button class="answer" data-answer="${esc(option)}"><span class="answer-letter">${String.fromCharCode(65 + index)}</span><span>${esc(option)}</span></button>`).join('')}</div><div class="timer-row"><span>Tiempo restante</span><span class="timer" id="timer">00:${String(state.timer).padStart(2, '0')}</span></div></div></section>`;
}
function renderMemoQuiz(movie, question, progress) {
  const isPreview = question.phase === 'preview';
  const targetOrder = isPreview ? null : question.sequence[question.next];
  const target = isPreview ? null : question.items.find(item => item.order === targetOrder);
  const instruction = isPreview ? 'Memoricen dónde está cada ícono' : '¿Dónde estaba este ícono?';
  const targetMarkup = target ? `<div class="memo-target"><span class="memo-target-symbol" aria-hidden="true">${target.symbol}</span><span>${esc(target.label)}</span></div>` : '';
  const timerMarkup = isPreview
    ? `<div class="timer-row"><span>Tiempo para memorizar</span><span class="timer" id="timer">00:${String(state.timer).padStart(2, '0')}</span></div>`
    : '<div class="timer-row memo-no-limit"><span>Sin límite de tiempo</span><span class="timer">∞</span></div>';
  return `<section class="screen quiz-screen memo-screen"><div class="quiz-top"><button class="back-link" data-action="quit-quiz">← Cambiar película</button><span class="quiz-movie">${esc(movie.title)}</span></div><div class="question-progress"><div class="progress-track"><div class="progress-fill" style="width:${progress}%"></div></div><span class="progress-label">10 / 10</span></div><div class="question-card memo-card ${isPreview ? 'memo-preview' : 'memo-recall'}" id="question-card"><span class="question-kicker">Pregunta 10 · memo-test</span><h1 class="question-text memo-title">${instruction}</h1>${targetMarkup}<p class="memo-copy">${isPreview ? 'Tienen 15 segundos. Después las cartas se dan vuelta y el juego les pedirá los íconos uno por uno.' : 'Toquen la posición donde estaba el ícono indicado. No hay reloj, pero un error reinicia todo el quiz.'}</p><div class="memo-grid">${question.items.map(item => renderMemoTile(item, question)).join('')}</div>${timerMarkup}</div></section>`;
}
function renderMemoTile(item, question) {
  const isPreview = question.phase === 'preview';
  const isSolved = question.solved.includes(item.order);
  const face = isPreview || isSolved
    ? `<span class="memo-symbol" aria-hidden="true">${item.symbol}</span><span class="memo-label">${esc(item.label)}</span>`
    : '<span class="memo-cover" aria-hidden="true">?</span>';
  return `<button class="memo-tile ${isSolved ? 'solved' : ''}" data-memo-order="${item.order}" ${isPreview || isSolved ? 'disabled' : ''} aria-label="${isPreview ? `Ícono ${esc(item.label)}` : 'Carta oculta'}">${face}</button>`;
}
function renderResult() {
  const attemptLabel = state.attempts === 1 ? 'intento' : 'intentos';
  const qrContent = quizConfig.videoQrImage
    ? `<div class="qr-image-frame"><img src="${esc(quizConfig.videoQrImage)}" alt="Código QR del video sorpresa"></div><p>Escaneen el QR con otro celular para ver el video.</p>`
    : `<div class="qr-placeholder" aria-label="Código QR pendiente">QR</div><p>Acá va a aparecer el QR del video.</p>`;
  return `<section class="screen result-screen"><div class="result-layout"><div class="result-celebration"><div class="result-icon">✦</div><p class="eyebrow">Racha completada</p><h1>Perfecto,<br><em>ganaron.</em></h1><p class="puzzle-label">La respuesta de este acertijo es:</p><div class="puzzle-answer">1</div></div><div class="result-side"><div class="result-stats result-stats-single"><div class="result-stat"><strong>${state.attempts}</strong><span>${attemptLabel}</span></div></div><div class="qr-card"><p class="qr-title">El siguiente paso</p>${qrContent}</div><div class="button-row"><button class="primary-button" data-action="go-home">Vuelvan al menú inicial</button></div></div></div></section>`;
}
function startQuiz(movie) {
  clearInterval(state.timerId); clearInterval(state.cooldownId); state.cooldownId = null; state.lossCount = 0; state.intermediateQueue = []; state.selectedMovie = movie; state.questions = buildRoundQuestions(movie); state.questionIndex = 0; state.streak = 0; state.attempts = 1; state.timer = 10; state.answerLocked = false; state.stats.plays += 1; saveStats(); state.screen = 'quiz'; render();
  if (!state.welcomeShown) { state.welcomeShown = true; showWelcomeModal(); }
  else startTimer();
}
function startTimer() {
  clearInterval(state.timerId);
  const question = state.questions[state.questionIndex];
  const isMemoPreview = question?.kind === 'memo' && question.phase === 'preview';
  const isMemoRecall = question?.kind === 'memo' && question.phase === 'recall';
  if (isMemoRecall) {
    state.timer = 0;
    state.timerId = null;
    return;
  }
  state.timer = isMemoPreview || question?.kind === 'hard' ? 15 : 10;
  const timerEl = document.querySelector('#timer'); if (timerEl) timerEl.textContent = `00:${String(state.timer).padStart(2, '0')}`;
  state.timerId = setInterval(() => { state.timer -= 1; const el = document.querySelector('#timer'); if (!el) return; el.textContent = `00:${String(state.timer).padStart(2, '0')}`; el.classList.toggle('urgent', state.timer <= 5); if (state.timer <= 0) showLossModal(); }, 1000);
}
function showWelcomeModal() {
  clearInterval(state.timerId);
  state.answerLocked = true;
  const backdrop = document.querySelector('#modal-backdrop');
  const close = document.querySelector('.modal-close');
  backdrop.dataset.mode = 'welcome';
  close.classList.add('hidden');
  document.querySelector('#modal-content').innerHTML = `<h2 id="modal-title">Respondan las 10 preguntas y ganen el acertijo.</h2><p>Tienen un tiempo límite por pregunta, así que presten atención al contador.</p><div class="button-row welcome-actions"><button class="primary-button" id="start-round">Empezar</button></div>`;
  backdrop.classList.remove('hidden');
  document.querySelector('#start-round').addEventListener('click', () => {
    backdrop.classList.add('hidden');
    backdrop.dataset.mode = '';
    close.classList.remove('hidden');
    state.answerLocked = false;
    startTimer();
  });
}
function showLossModal() {
  if (state.answerLocked || state.screen !== 'quiz') return;
  const question = state.questions[state.questionIndex];
  if (question?.kind === 'memo' && question.phase === 'preview') {
    clearInterval(state.timerId);
    question.phase = 'recall';
    state.timer = 10;
    render();
    startTimer();
    return;
  }
  openLossModal('Tiempo agotado', 'Se durmieron, se les terminó el tiempo.', '😔');
}
function openLossModal(eyebrow, headline, icon = '×') {
  state.answerLocked = true;
  clearInterval(state.timerId);
  clearInterval(state.cooldownId);
  state.lossCount += 1;
  const cooldownSteps = [5, 10, 20, 30, 60];
  let cooldown = cooldownSteps[Math.min(state.lossCount - 1, cooldownSteps.length - 1)];
  const backdrop = document.querySelector('#modal-backdrop');
  const close = document.querySelector('.modal-close');
  backdrop.dataset.mode = 'loss';
  close.classList.add('hidden');
  document.querySelector('#modal-content').innerHTML = `<div class="loss-heading"><div><p class="eyebrow">${esc(eyebrow)}</p><h2 id="modal-title">${esc(headline)}</h2></div><div class="loss-icon">${icon}</div></div><p class="cooldown-copy" id="cooldown-copy">Respiren un poco: pueden volver a jugar en <strong id="cooldown-seconds">${cooldown}</strong> segundos.</p><div class="button-row loss-actions"><button class="primary-button" id="retry-round" disabled>Volver a intentarlo · ${cooldown} s</button><button class="secondary-button" id="choose-another" disabled>Elegir otra película</button></div>`;
  backdrop.classList.remove('hidden');
  const retryButton = document.querySelector('#retry-round');
  const chooseAnotherButton = document.querySelector('#choose-another');
  const cooldownSeconds = document.querySelector('#cooldown-seconds');
  state.cooldownId = setInterval(() => {
    cooldown -= 1;
    if (cooldown > 0) {
      cooldownSeconds.textContent = cooldown;
      retryButton.textContent = `Volver a intentarlo · ${cooldown} s`;
      return;
    }
    clearInterval(state.cooldownId);
    state.cooldownId = null;
    document.querySelector('#cooldown-copy').textContent = '¡Listo! Ya pueden volver a intentarlo.';
    retryButton.textContent = 'Volver a intentarlo';
    retryButton.disabled = false;
    chooseAnotherButton.disabled = false;
  }, 1000);
  retryButton.addEventListener('click', () => {
    clearInterval(state.cooldownId);
    state.cooldownId = null;
    backdrop.classList.add('hidden');
    backdrop.dataset.mode = '';
    close.classList.remove('hidden');
    state.streak = 0;
    state.attempts += 1;
    state.questions = buildRoundQuestions(state.selectedMovie);
    state.questionIndex = 0;
    state.answerLocked = false;
    render();
    startTimer();
  });
  chooseAnotherButton.addEventListener('click', () => {
    clearInterval(state.cooldownId);
    state.cooldownId = null;
    state.lossCount = 0;
    backdrop.classList.add('hidden');
    backdrop.dataset.mode = '';
    close.classList.remove('hidden');
    state.answerLocked = false;
    state.screen = 'home';
    render();
  });
}
function wrongAnswerFeedback(question) {
  if (question?.kind === 'memo') return { eyebrow: 'Memo-test fallido', headline: 'Necesitan sumar más cabezas al equipo para este memo-test.' };
  if (question?.kind === 'hard') return { eyebrow: 'Pregunta difícil', headline: 'Era difícil, sí… pero igual tiraron cualquiera.' };
  if (question?.difficulty === 'intermediate') return { eyebrow: 'Pregunta intermedia', headline: 'Ahí ya había que saber un poquito más.' };
  return { eyebrow: 'Pregunta fácil', headline: '¡Era una de las fáciles! Arrancaron flojitos.' };
}
function failRound() {
  if (state.screen !== 'quiz') return; state.answerLocked = true; clearInterval(state.timerId); const card = document.querySelector('#question-card'); if (card) card.classList.add('shake');
  const feedback = wrongAnswerFeedback(state.questions[state.questionIndex]);
  setTimeout(() => openLossModal(feedback.eyebrow, feedback.headline, '😔'), 450);
}
function answer(option, button) {
  if (state.answerLocked) return; state.answerLocked = true; clearInterval(state.timerId); const question = state.questions[state.questionIndex]; const all = document.querySelectorAll('.answer'); all.forEach(btn => btn.disabled = true);
  if (option === question.answer) { button.classList.add('correct'); state.streak += 1; if (state.streak > state.stats.best) { state.stats.best = state.streak; saveStats(); } if (state.streak === 10) { setTimeout(() => { state.screen = 'result'; state.stats.wins += 1; saveStats(); render(); }, 450); return; } setTimeout(() => { state.questionIndex += 1; state.answerLocked = false; render(); startTimer(); }, 400); }
  else { button.classList.add('wrong'); all.forEach(btn => { if (btn.dataset.answer === question.answer) btn.classList.add('correct'); }); failRound(); }
}
function chooseMemoTile(order) {
  if (state.answerLocked) return;
  const question = state.questions[state.questionIndex];
  if (!question || question.kind !== 'memo' || question.phase !== 'recall') return;
  const chosenOrder = Number(order);
  const targetOrder = question.sequence[question.next];
  const target = question.items.find(item => item.order === targetOrder);
  if (chosenOrder !== targetOrder) {
    failRound();
    return;
  }
  question.solved.push(chosenOrder);
  question.next += 1;
  if (question.next >= question.sequence.length) {
    state.answerLocked = true;
    clearInterval(state.timerId);
    state.streak = 10;
    state.stats.best = Math.max(state.stats.best, state.streak);
    state.stats.wins += 1;
    saveStats();
    setTimeout(() => { state.screen = 'result'; state.answerLocked = false; render(); }, 450);
    return;
  }
  render();
}
function showToast(message) { const toast = document.createElement('div'); toast.className = 'toast'; toast.textContent = message; document.body.appendChild(toast); requestAnimationFrame(() => toast.classList.add('visible')); setTimeout(() => { toast.classList.remove('visible'); setTimeout(() => toast.remove(), 250); }, 2200); }
function bindEvents() {
  document.querySelectorAll('[data-movie]').forEach(card => { const handler = () => startQuiz(movies.find(movie => movie.id === card.dataset.movie)); card.addEventListener('click', handler); card.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); handler(); } }); });
  document.querySelectorAll('[data-answer]').forEach(button => button.addEventListener('click', () => answer(button.dataset.answer, button)));
  document.querySelectorAll('[data-memo-order]').forEach(button => button.addEventListener('click', () => chooseMemoTile(button.dataset.memoOrder)));
  document.querySelectorAll('[data-action="go-home"]').forEach(button => button.addEventListener('click', () => { clearInterval(state.timerId); clearInterval(state.cooldownId); state.cooldownId = null; state.screen = 'home'; render(); }));
  document.querySelector('[data-action="quit-quiz"]')?.addEventListener('click', () => { clearInterval(state.timerId); clearInterval(state.cooldownId); state.cooldownId = null; state.screen = 'home'; render(); });
  document.querySelector('[data-action="play-again"]')?.addEventListener('click', () => startQuiz(state.selectedMovie));
}
document.querySelector('[data-action="close-modal"]').addEventListener('click', () => { const backdrop = document.querySelector('#modal-backdrop'); if (!['loss', 'welcome'].includes(backdrop.dataset.mode)) backdrop.classList.add('hidden'); });
document.querySelector('#modal-backdrop').addEventListener('click', event => { if (event.target.id === 'modal-backdrop' && !['loss', 'welcome'].includes(event.currentTarget.dataset.mode)) event.currentTarget.classList.add('hidden'); });
render();
