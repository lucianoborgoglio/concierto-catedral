// =====================================================================
//  DATOS DEL CONCIERTO: lo único que hay que editar para cambiar contenido
//  (espejo de DATOS_CONCIERTO.md en Drive)
// =====================================================================

// Versión que se ve al escanear el QR (sin ?v=). Después de la votación,
// poner acá el número ganador (1, 2, 3 o 4).
window.VERSION_POR_DEFECTO = 2;

// Mientras dure la votación se muestra una etiqueta "Versión N" arriba.
// Poner en false cuando haya ganadora.
window.VOTACION = true;

window.DATOS = {
  marco: 'En el marco de La Noche de los Templos',
  titulo: 'Música de cámara',
  dia: 'Sábado', fecha: '28 de noviembre', hora: '19.30 h',
  lugar: 'Catedral Anglicana San Juan Bautista',
  dir: '25 de Mayo 276, CABA',
  catedra: 'Estudiantes de la cátedra de Música de Cámara del prof.&nbsp;Omar&nbsp;Cyrulnik',
  conser: 'Conservatorio Superior de Música Manuel de Falla',
  entrada: 'Entrada libre y gratuita',

  interpretes: [
    ['Lorena Venegas Saavedra', 'soprano'],
    ['Giselle Capurro', 'mezzosoprano'],
    ['Ge Guo', 'bandoneón y piano'],
    ['Aylen Gutiérrez', 'flauta'],
    ['Gabriel Ibañez', 'contrabajo'],
    ['Luciano Borgoglio', 'piano'],
    ['Javier Hönig', 'bandoneón'],
    ['Ernesto González', 'violonchelo'],
    ['Carlos Pérez', 'guitarra'],
  ],

  // Orden del programa. obra/detalle aceptan HTML (<i> para títulos en cursiva).
  programa: [
    { comp: 'Giovanni Battista Pergolesi', fechas: '1710–1736',
      obra: '<i>Stabat Mater</i>', detalle: 'n.º 1: <i>Stabat mater dolorosa</i>',
      int: [['Lorena Venegas Saavedra','soprano'],['Giselle Capurro','mezzosoprano'],['Aylen Gutiérrez','flauta'],['Ge Guo','bandoneón'],['Gabriel Ibañez','contrabajo']] },
    { comp: 'Claudio Monteverdi', fechas: '1567–1643',
      obra: '<i>Pur ti miro</i>', detalle: 'de <i>L’incoronazione di Poppea</i>',
      int: [['Lorena Venegas Saavedra','soprano'],['Giselle Capurro','mezzosoprano'],['Aylen Gutiérrez','flauta'],['Ge Guo','piano']] },
    { comp: 'Antonio Vivaldi', fechas: '1678–1741',
      obra: 'Sonata en fa mayor', detalle: 'Siciliana · Allegro · Giga',
      int: [['Aylen Gutiérrez','flauta'],['Ge Guo','bandoneón'],['Gabriel Ibañez','contrabajo']] },
    { comp: 'Ludwig van Beethoven', fechas: '1770–1827',
      obra: 'Dúos para clarinete y fagot, WoO 27', detalle: '',
      int: [['Aylen Gutiérrez','flauta'],['Gabriel Ibañez','contrabajo']] },
    { comp: 'Anton Diabelli', fechas: '1781–1858',
      obra: 'Piezas para guitarra y piano', detalle: 'n.º 13 y n.º 14',
      int: [['Javier Hönig','bandoneón'],['Carlos Pérez','guitarra']] },
    { comp: 'Friedrich Burgmüller', fechas: '1806–1874',
      obra: 'Nocturnos n.º 1 y n.º 2', detalle: '',
      int: [['Carlos Pérez','guitarra'],['Ernesto González','violonchelo']] },
    { comp: 'Camille Saint-Saëns', fechas: '1835–1921',
      obra: '<i>Une flûte invisible</i>', detalle: '',
      int: [['Lorena Venegas Saavedra','soprano'],['Aylen Gutiérrez','flauta'],['Ge Guo','piano']] },
    { comp: 'Maurice Ravel', fechas: '1875–1937',
      obra: '<i>Berceuse sur le nom de Gabriel Fauré</i>', detalle: '',
      int: [['Ernesto González','violonchelo'],['Javier Hönig','bandoneón']] },
    { comp: 'Manuel de Falla', fechas: '1876–1946',
      obra: '<i>Siete canciones populares españolas</i>', detalle: 'Nana · Asturiana',
      int: [['Ernesto González','violonchelo'],['Luciano Borgoglio','piano']] },
    { comp: 'Sergei Rachmaninoff', fechas: '1873–1943',
      obra: '12 Romances, op. 21', detalle: 'n.º 7: <i>Zdes’ khorosho</i> (Aquí es hermoso)',
      int: [['Ernesto González','violonchelo'],['Luciano Borgoglio','piano']] },
    { comp: 'Jacques Offenbach', fechas: '1819–1880',
      obra: '<i>Belle nuit, ô nuit d’amour</i>', detalle: 'de <i>Los cuentos de Hoffmann</i>',
      int: [['Lorena Venegas Saavedra','soprano'],['Giselle Capurro','mezzosoprano'],['Ge Guo','piano']] },
  ],
};

// Dibujo de línea de la fachada de la Catedral (frente hexástilo), compartido.
window.fachada = function (sw = 1.6) {
  const L = [];
  const line = (x1,y1,x2,y2) => L.push(`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`);
  const rect = (x,y,w,h) => L.push(`<rect x="${x}" y="${y}" width="${w}" height="${h}"/>`);
  const arch = (cx, w, top, bot) => L.push(`<path d="M${cx-w/2},${bot} V${top+w/2} A${w/2},${w/2} 0 0 1 ${cx+w/2},${top+w/2} V${bot}"/>`);
  L.push(`<polygon points="62,138 538,138 300,52"/>`);
  L.push(`<polygon points="92,130 508,130 300,66"/>`);
  line(300,82,300,120); line(289,94,311,94);
  rect(56,138,488,10); rect(70,148,460,24);
  for (let x = 82; x <= 512; x += 30.6) rect(x.toFixed(1),151,9,18);
  rect(76,172,448,18);
  arch(224.8, 20, 222, 300); arch(300, 30, 236, 362); arch(375.2, 20, 222, 300);
  const cw = 38;
  [112,187.2,262.4,337.6,412.8,488].forEach(cx => {
    const x = cx - cw/2;
    rect(x-6, 190, cw+12, 7);
    L.push(`<path d="M${x-2},197 Q${cx},206 ${x+cw+2},197"/>`);
    line(x+1, 204, x+1, 362); line(x+cw-1, 204, x+cw-1, 362);
    for (let k = 1; k <= 3; k++) { const fx = (x + k*cw/4).toFixed(1); line(fx, 210, fx, 358); }
  });
  rect(66,362,468,8);
  line(52,382,548,382); line(40,396,560,396); line(28,410,572,410);
  line(66,370,52,382); line(534,370,548,382); line(52,382,40,396);
  line(548,382,560,396); line(40,396,28,410); line(560,396,572,410);
  return `<svg class="fachada" viewBox="0 0 600 420" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true">${L.join('')}</svg>`;
};
