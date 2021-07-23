const { Plan, Category, User } = require("../models");
const db = require("../db");

const categories = [
  {
    type: "Fiesta",
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80",
  },
  {
    type: "Negocios",
    img: "https://images.unsplash.com/photo-1612550761236-e813928f7271?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
  },
  {
    type: "Clases",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2250&q=80",
  },
  {
    type: "Concierto",
    img: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2250&q=80",
  },
];

const planes = [
  {
    name: "DJ Agrelo at the Plaza",
    planOwner: "Erika Agrelo",
    creationDate: new Date(),
    planDate: new Date("December 17, 2022 03:24:00"),
    address: "5th Avenue, NYC",
    price: 500,
    capacity: 300,
    comments: [],
    description:
      "World known DJ Agrelo will host a private event at the Hotel Plaza. Invites only. Bring your best attitude!!",
    recommendation: 0,
    users: [],
    private: 1,
    free: 0,
    img: [
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1504704911898-68304a7d2807?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1596131397999-bb01560efcae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    ],
    category: "Fiesta",
  },
  {
    name: "TED Talk",
    planOwner: "Alejandro Zuniga",
    creationDate: new Date(),
    planDate: new Date("November 17, 2021 19:00:00"),
    address: "Entre Rios 2020, Buenos Aires",
    price: 0,
    capacity: 150,
    comments: [],
    description:
      "Charla de transoformacion digital a cargo de Vikingo Zuniga. Hablara sobre los desafios que enfrentan hoy las empresas para el desarrollo de aplicaciones web y sus recomendaciones para poder sortearlos. No olviden asistir! ",
    recommendation: 5,
    users: [],
    private: 0,
    free: 1,
    img: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1560439514-e960a3ef5019?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    ],
    category: "Negocios",
  },
  {
    name: "Clases de cocina con chef Moroni",
    planOwner: "Ivan Moroni",
    creationDate: new Date(),
    planDate: new Date("March 17, 2022 12:00:00"),
    address: "Francisco de Villagra 300, Santiago",
    price: 1000,
    capacity: 25,
    comments: [],
    description:
      "Master class a cargo del reconocido chef Ivan Moroni. Su trayectoria internacional y la dedicacion entregada en cada plato lo llevo a ser el chef mas joven con 5 estrellas Michelin. Degustacion al final de la clase incluida en el precio de la entrada.",
    recommendation: 4.3,
    users: [],
    private: 1,
    free: 0,
    img: [
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    ],
    category: "Clases",
  },
  {
    name: "Entrenamiento Urbano",
    planOwner: "Martina Reboredo",
    creationDate: new Date(),
    planDate: new Date("January 2, 2022 12:00:00"),
    address: "Rca Argentina esq Mcal Lopez, Asuncion",
    price: 0,
    capacity: 15,
    comments: [],
    description:
      "Bota todas las calorias de fin de año con las clases grupales de Martina. Siendo coach nivel 1 de Crossfit, ella te llevara a sudar todo lo que no debiste comer en la cena. Apurante, cupos limitados! ",
    recommendation: 4.5,
    users: [],
    private: 0,
    free: 1,
    img: [
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1587157102540-a1b194ad9c99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    ],
    category: "Clases",
  },
  {
    name: "Concierto a beneficencia",
    planOwner: "Alejandro Romero",
    creationDate: new Date(),
    planDate: new Date("January 15, 2022 12:00:00"),
    address: "La Concepcion 25, Santiago",
    price: 15.0,
    capacity: 200,
    comments: [],
    description: "Concierto a beneficiencia para la fundacion las Rosas.",
    recommendation: 4.0,
    users: [],
    private: 0,
    free: 0,
    img: [
      "https://images.unsplash.com/photo-1579932493892-5a1a5ad55d7a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1503528290183-6e934b7d6981?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1571549442382-5f80ce40c2c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1885&q=80",
    ],
    category: "Concierto",
  },
  {
    name: "Fiesta Post Entrenamiento",
    planOwner: "Martina Reboredo",
    creationDate: new Date(),
    planDate: new Date("January 03, 2022 20:00:00"),
    address: "Cruz del Chaco esq Dugarty, Asuncion",
    price: 500,
    capacity: 150,
    comments: [],
    description:
      "Porque no todo en la vida es entrenar, ahora tambien podes tomar! No faltes a la fiesta del año",
    recommendation: 4.0,
    users: [],
    private: 0,
    free: 0,
    img: [
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1430&q=80",
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1517457452519-3071133d3f0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    ],
    category: "Fiesta",
  },

  {
    name: "Charla de innovacion y liderazgo",
    planOwner: "Alejandro Zuniga",
    creationDate: new Date(),
    planDate: new Date("February 15, 2022 20:00:00"),
    address: "Juana de Arco 37, Buenos Aires",
    price: 150,
    capacity: 25,
    comments: [],
    description:
      "Temas a tratar: 1) Como ser innovador y no morir en el intento 2) Lider de sus mentes y sus corazones 3) Innovar liderando",
    recommendation: 4.0,
    users: ["alejandro", "emilio", "daniel", "navila"],
    private: 0,
    free: 0,
    img: [
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1490&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
    ],
    category: "Negocios",
  },
  {
    name: "Bailando bajo las estrellas",
    planOwner: "Erika Agrelo",
    creationDate: new Date(),
    planDate: new Date("February 16, 2022 20:00:00"),
    address: "Miguel Unamuno 108, Buenos Aires",
    price: 0,
    capacity: 100,
    comments: [],
    description:
      "Ven a bailar bajo las estrellas! Discoteque con pista de baile principal destechada",
    recommendation: 4.0,
    users: [],
    private: 0,
    free: 1,
    img: [
      "https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      "https://images.unsplash.com/photo-1586368931893-d71f3f6fd0cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1599739291127-15c456e459ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    ],
    category: "Fiesta",
  },

  {
    name: "Salud por el año que se va",
    planOwner: "Alejandro Zuniga",
    creationDate: new Date(),
    planDate: new Date("December 31, 2021 20:00:00"),
    address: "Juana de Arco 37, Buenos Aires",
    price: 0,
    capacity: null,
    comments: [],
    description:
      "Ven a relajarte y tomarte unos tragos para cerrar bien el ciclo! Nosotros ponemos el alcohol, vos la diversion",
    recommendation: null,
    users: [],
    private: 0,
    free: 0,
    img: [
      "https://images.unsplash.com/photo-1592419368883-07563ec68c2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1438557068880-c5f474830377?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80",
    ],
    category: "Fiesta",
  },
  {
    name: "Fiesta Retro. 70's, 80's, 90's ",
    planOwner: "Alejandro Romero",
    creationDate: new Date(),
    planDate: new Date("February 15, 2022 20:00:00"),
    address: "Alejandro Galan Romo 2525, Madrid",
    price: 55,
    capacity: 125,
    comments: [],
    description:
      "Fiesta estilo retro con el mejor DJ de Madrid! DJ Oldie but Goldie in the HOUSE!!",
    recommendation: 2.0,
    users: [],
    private: 0,
    free: 0,
    img: [
      "https://images.unsplash.com/photo-1570823968774-4b5a70a2e620?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      "https://images.unsplash.com/photo-1602123149263-0e6a4d084194?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    category: "Fiesta",
  },
  {
    name: "Estrategias de SEO",
    planOwner: "Ivan Moroni",
    creationDate: new Date(),
    planDate: new Date("April 01, 2022 20:00:00"),
    address: "Fernando Belasteguin 111, Buenos Aires",
    price: 0,
    capacity: 35,
    comments: [],
    description:
      "Tips y recomendaciones para que como hacer que mi ecommerce aparezca primero en las busquedas de Google.",
    recommendation: 3.0,
    users: [],
    private: 1,
    free: 1,
    img: [
      "https://images.unsplash.com/photo-1557425529-b1ae9c141e7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    ],
    category: "Negocios",
  },
  {
    name: "Programando en Python",
    planOwner: "Santiago Santucho",
    creationDate: new Date(),
    planDate: new Date("May 15, 2022 20:00:00"),
    address: "La tercera a la izquiera 58, Buenos Aires",
    price: 0,
    capacity: null,
    comments: [],
    description:
      "Principios basicos para la programacion funcional usando Python",
    recommendation: 4.0,
    users: [],
    private: 0,
    free: 1,
    img: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
    ],
    category: "Negocios",
  },
  {
    name: "La importancia del ser",
    planOwner: "Cata Oyarzo",
    creationDate: new Date(),
    planDate: new Date("Septiembre 30, 2021 20:00:00"),
    address: "Natiruts 1205, Sao Paulo",
    price: 0,
    capacity: null,
    comments: [],
    description:
      "Ser o no ser en el siglo XXI. Importancia y consecuencias del reconocimiento personal dentro de una socidedad individualista.",
    recommendation: 4.8,
    users: [],
    private: 0,
    free: 1,
    img: [
      "https://images.unsplash.com/photo-1560523159-4a9692d222ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1563807894768-f28bee0d37b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    category: "Negocios",
  },
  {
    name: "Clases de canto con Dave Grohl",
    planOwner: "Lui Vicenzo",
    creationDate: new Date(),
    planDate: new Date("June 15, 2022 20:00:00"),
    address: "Juan Lebron 85, Andalucia",
    price: 500,
    capacity: 10,
    comments: [],
    description: "Clases de canto con el unico e inigualable Dave Grohl",
    recommendation: 5.0,
    users: [],
    private: 1,
    free: 0,
    img: [
      "https://images.unsplash.com/photo-1534886317787-63ec182818cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1491&q=80",
      "https://images.unsplash.com/photo-1599467556385-48b57868f038?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
      "https://images.unsplash.com/photo-1559519530-ae79fe5bffc8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    ],
    category: "Clases",
  },
  {
    name: "Origami Master",
    planOwner: "Michael Lee",
    creationDate: new Date(),
    planDate: new Date("October 15, 2022 20:00:00"),
    address: "Origami Street 65, Tokyo",
    price: 0,
    capacity: null,
    comments: [],
    description: "Maestro de origami",
    recommendation: 4.0,
    users: [],
    private: 0,
    free: 1,
    img: [
      "https://images.unsplash.com/photo-1581872553286-2746c6a8b295?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
      "https://images.unsplash.com/photo-1558244402-286dd748c593?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80",
    ],
    category: "Clases",
  },
  {
    name: "Compone en solo 5 dias",
    planOwner: "Pau Duhap",
    creationDate: new Date(),
    planDate: new Date("February 15, 2022 20:00:00"),
    address: "Facundo Machain 58, Asuncion",
    price: 100,
    capacity: 20,
    comments: [],
    description:
      "Composicion musical desde lo basico hasta topicos intermedios y avanzados",
    recommendation: 5.0,
    users: [],
    private: 1,
    free: 0,
    img: [
      "https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1593697972679-c4041d132a46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    category: "Clases",
  },
  {
    name: "Rock and Rola",
    planOwner: "Alejandro Moreno",
    creationDate: new Date(),
    planDate: new Date("February 28, 2022 20:00:00"),
    address: "Teatro teatral 150, Buenos Aires",
    price: 75,
    capacity: 500,
    comments: [],
    description: "Concierto pulento en Baires",
    recommendation: 4.0,
    users: [],
    private: 1,
    free: 0,
    img: [
      "https://images.unsplash.com/photo-1572293007244-8b60335d2b7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1524187208855-b6c2f1e78bce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1611898979774-e202e8e9ffbe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    category: "Concierto",
  },
  {
    name: "Jazz y mas",
    planOwner: "Francisca del Estero",
    creationDate: new Date(),
    planDate: new Date("February 15, 2022 20:00:00"),
    address: "Soul 55, NYC",
    price: 100,
    capacity: 100,
    comments: [],
    description: "Jazz para todos",
    recommendation: null,
    users: [],
    private: 1,
    free: 0,
    img: [
      "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1572506634451-4df8fc2f1d3a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    category: "Concierto",
  },
  {
    name: "Linkin Park Tribute Concert",
    planOwner: "Chester55",
    creationDate: new Date(),
    planDate: new Date("July 15, 2022 20:00:00"),
    address: "Julio Verne 5588, Bogota",
    price: 0,
    capacity: 1000,
    comments: [],
    description: "Free and open concert in the memory of Chester",
    recommendation: null,
    users: [],
    private: 0,
    free: 0,
    img: [
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    category: "Concierto",
  },
  {
    name: "Concierto AllStars",
    planOwner: "Alejandro Romero",
    creationDate: new Date(),
    planDate: new Date("February 15, 2022 20:00:00"),
    address: "Juana de Arco 37, Buenos Aires",
    price: 150,
    capacity: 25,
    comments: [],
    description:
      "Concierto dedicado a todas las grandes estrellas del basketball del hoy y el ayer",
    recommendation: 4.0,
    users: [],
    private: 0,
    free: 0,
    img: [
      "https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80",
      "https://images.unsplash.com/photo-1533923156502-be31530547c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    ],
    category: "Concierto",
  },
];

const users = [
  {
    name: "Ale",
    lastName: "Ro",
    age: 31,
    img: null,
    email: "ale@ale.com",
    password: "123",
    contacts: [],
    myPlans: [],
    categories: [],
  },
  {
    name: "ivan",
    lastName: "mo",
    age: 31,
    img: null,
    email: "ivan@ivan.com",
    password: "123",
    contacts: [],
    myPlans: [],
    categories: [],
  },
  {
    name: "marti",
    lastName: "ro",
    age: 31,
    img: null,
    email: "marti@marti.com",
    password: "123",
    contacts: [],
    myPlans: [],
    categories: [],
  },
  {
    name: "ale",
    lastName: "zu",
    age: 31,
    img: null,
    email: "alezu@alezu.com",
    password: "123",
    contacts: [],
    myPlans: [],
    categories: [],
  },
  {
    name: "eri",
    lastName: "ag",
    age: 31,
    img: null,
    email: "eri@eri.com",
    password: "123",
    contacts: [],
    myPlans: [],
    categories: [],
  },
];

// Borrar todo lo que haya en base de datos

/*  deletePlanPromise = Plan.deleteMany({});
 deleteCategoryPromise = Category.deleteMany({});
 deleteUserPromise = User.deleteMany({});

 Promise.all([deletePlanPromise, deleteCategoryPromise, deleteUserPromise])
   .then((deleted) => console.log("Items deleted", deleted))
   .then(() => db.close())
   .catch((err) => console.log(err)); */

// Ingresa todo lo que tenga en base de datos

planPromise = Plan.insertMany(planes);
categoryPromise = Category.insertMany(categories);
userPromise = User.insertMany(users);

Promise.all([planPromise, categoryPromise, userPromise])
  .then(() => console.log("Values inserted"))
  .then(() => db.close())
  .catch((err) => console.log(err));

// Promise.all([deletePlanPromise, deleteCategoryPromise, deleteUserPromise])
//   .then((deleted) => console.log("Items deleted", deleted))
// .then(() => {
//   Promise.all([planPromise, categoryPromise, userPromise])
//     .then(() => console.log("Values inserted"))
// .then(() => db.close());
//     .catch((err) => console.log(err));
// })
// .catch((err) => console.log(err));

//Insertando cada categoria

// Promise.all([planPromise, categoryPromise, userPromise])
//   .then(() => console.log("Values inserted"))
//   .then(() => db.close())
//   .catch((err) => console.log(err));

// Plan.insertMany(planes)
//   .then(() => {
//     console.log("data Inserted");
//     db.close();
//   })
//   .catch((err) => console.log(err));

// Category.insertMany(catergories)
// .then(() => {
//   console.log("data Inserted");
//   db.close();
// })
// .catch((err) => console.log(err));
