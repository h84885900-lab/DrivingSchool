/* ==========================================================================
   مكتبة الأيقونات — كل الرسومات أصلية (SVG) خاصة بمنصة حسام أبو علي.
   ========================================================================== */

const ICONS = {
  law: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 6L10 12v10c0 10 6 16.5 14 20 8-3.5 14-10 14-20V12L24 6Z" stroke="#e3c465" stroke-width="2.4" stroke-linejoin="round"/>
    <path d="M18 24l4 4 8-9" stroke="#e3c465" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  signs: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4l6.9 6.9H41v10.2L47 24l-6 2.9v10.2h-10L24 44l-6.9-6.9H7V27L1 24l6-3V10.9h10.1L24 4Z" stroke="#e3c465" stroke-width="2" stroke-linejoin="round"/>
    <path d="M24 16v11" stroke="#e3c465" stroke-width="2.6" stroke-linecap="round"/>
    <circle cx="24" cy="31.5" r="1.6" fill="#e3c465"/>
  </svg>`,
  taxi: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 27l2.8-9.2A4 4 0 0 1 15.6 15h16.8a4 4 0 0 1 3.8 2.8L39 27" stroke="#e3c465" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="6" y="27" width="36" height="9" rx="3" stroke="#e3c465" stroke-width="2.4"/>
    <circle cx="14" cy="38" r="3" fill="#e3c465"/>
    <circle cx="34" cy="38" r="3" fill="#e3c465"/>
    <rect x="19" y="10" width="10" height="6" rx="1.5" stroke="#e3c465" stroke-width="2"/>
  </svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  cross: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5c0-.6.4-1 1-1h3.2c.5 0 .9.3 1 .8l1 4a1 1 0 0 1-.3 1L7.6 11c1.1 2.5 3 4.4 5.5 5.5l1.2-1.3a1 1 0 0 1 1-.3l4 1c.5.1.8.5.8 1V20c0 .6-.4 1-1 1h-1.5C9.9 21 3 14.1 3 5.5V5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 6.7A7.6 7.6 0 0 0 6.2 16.9L5 20l3.2-1.2A7.6 7.6 0 1 0 17 6.7Z" stroke="currentColor" stroke-width="1.7"/><path d="M9.4 9.8c.2-.5.5-.5.8-.5h.5c.2 0 .4 0 .6.4l.6 1.4c.1.2 0 .4-.1.6l-.4.5c-.1.2-.1.4 0 .5.4.7 1.4 1.7 2.1 2.1.2.1.4.1.5 0l.5-.5c.2-.1.4-.2.6-.1l1.3.6c.3.2.3.4.3.6v.5c0 .3 0 .6-.5.8-.8.3-2 .3-3.6-.7-1.3-.8-2.6-2.1-3.4-3.4-1-1.6-1-2.8-.7-3.6Z" fill="currentColor"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.7"/><path d="M4 6.5l8 6 8-6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21s7-6.3 7-11.6A7 7 0 0 0 5 9.4C5 14.7 12 21 12 21Z" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="9.4" r="2.4" stroke="currentColor" stroke-width="1.7"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.7"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 9h2.5V6H14c-1.9 0-3.3 1.5-3.3 3.4V11H9v3h1.7v6h3v-6h2.3l.5-3h-2.8V9.7c0-.4.3-.7.3-.7Z" fill="currentColor"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  arrowBack: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6l-6 6 6 6M4 12h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  car: `<svg viewBox="0 0 40 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 16l2-7a4 4 0 0 1 3.8-2.7h13a4 4 0 0 1 3.9 3.1L28 16" fill="none" stroke="#0d1b32" stroke-width="1.6"/><rect x="2" y="15" width="32" height="6.5" rx="2.6" fill="#c9a227" stroke="#0d1b32" stroke-width="1.2"/><circle cx="9" cy="21.5" r="2.3" fill="#0d1b32"/><circle cx="27" cy="21.5" r="2.3" fill="#0d1b32"/></svg>`,
  book: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5.5c2-1 5-1 8 .5v13c-3-1.5-6-1.5-8-.5v-13Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M20 5.5c-2-1-5-1-8 .5v13c3-1.5 6-1.5 8-.5v-13Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
  target: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="1" fill="currentColor"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3l7 3v5.5c0 5-3 8.3-7 9.5-4-1.2-7-4.5-7-9.5V6l7-3Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`
};

/* -------------------  رسومات إشارات السير (تصميم أصلي)  ------------------- */
function signSVG(type) {
  const navy = "#122644";
  const red = "#c8382c";
  const blue = "#1a3560";
  const white = "#ffffff";
  const gold = "#c9a227";

  const wrap = (inner) =>
    `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img">${inner}</svg>`;

  switch (type) {
    case "stop":
      return wrap(`
        <polygon points="70,15 130,15 185,70 185,130 130,185 70,185 15,130 15,70" fill="${red}" stroke="${white}" stroke-width="5"/>
        <text x="100" y="118" text-anchor="middle" font-family="Tajawal,Arial" font-size="46" font-weight="800" fill="${white}">قف</text>
      `);
    case "noEntry":
      return wrap(`
        <circle cx="100" cy="100" r="88" fill="${red}" stroke="${navy}" stroke-width="4"/>
        <circle cx="100" cy="100" r="72" fill="${white}"/>
        <rect x="42" y="86" width="116" height="28" rx="4" fill="${red}"/>
      `);
    case "yield":
      return wrap(`
        <polygon points="100,20 185,175 15,175" fill="${white}" stroke="${red}" stroke-width="12" stroke-linejoin="round"/>
      `);
    case "noParking":
      return wrap(`
        <circle cx="100" cy="100" r="88" fill="${blue}" stroke="${navy}" stroke-width="4"/>
        <text x="100" y="128" text-anchor="middle" font-family="Tajawal,Arial" font-size="92" font-weight="800" fill="${white}">P</text>
        <line x1="34" y1="166" x2="166" y2="34" stroke="${red}" stroke-width="14"/>
      `);
    case "speedLimit":
      return wrap(`
        <circle cx="100" cy="100" r="88" fill="${white}" stroke="${red}" stroke-width="14"/>
        <text x="100" y="122" text-anchor="middle" font-family="Tajawal,Arial" font-size="56" font-weight="800" fill="${navy}">50</text>
      `);
    case "pedestrian":
      return wrap(`
        <rect x="14" y="14" width="172" height="172" rx="14" fill="${blue}"/>
        <polygon points="100,45 155,155 45,155" fill="${white}"/>
        <circle cx="82" cy="90" r="9" fill="${navy}"/>
        <path d="M82 100v22l-10 24M82 112l16 6 4 20M82 112l-14 8" stroke="${navy}" stroke-width="6" stroke-linecap="round" fill="none"/>
      `);
    case "roundabout":
      return wrap(`
        <circle cx="100" cy="100" r="88" fill="${white}" stroke="${red}" stroke-width="12"/>
        <circle cx="100" cy="100" r="34" fill="none" stroke="${navy}" stroke-width="9"/>
        <path d="M100 66a34 34 0 0 1 34 34" fill="none" stroke="${navy}" stroke-width="9" marker-end="url(#arrow)"/>
        <polygon points="130,58 148,68 128,78" fill="${navy}"/>
      `);
    case "oneWay":
      return wrap(`
        <rect x="14" y="14" width="172" height="172" rx="14" fill="${blue}"/>
        <rect x="34" y="88" width="100" height="24" fill="${white}"/>
        <polygon points="134,68 178,100 134,132" fill="${white}"/>
      `);
    case "noUTurn":
      return wrap(`
        <circle cx="100" cy="100" r="88" fill="${white}" stroke="${red}" stroke-width="12"/>
        <path d="M70 130V90a30 30 0 0 1 60 0v8" fill="none" stroke="${navy}" stroke-width="10" stroke-linecap="round"/>
        <polygon points="112,80 148,86 122,108" fill="${navy}"/>
        <line x1="30" y1="170" x2="170" y2="30" stroke="${red}" stroke-width="12"/>
      `);
    case "hospital":
      return wrap(`
        <rect x="14" y="14" width="172" height="172" rx="14" fill="${blue}"/>
        <rect x="88" y="46" width="24" height="108" fill="${white}"/>
        <rect x="46" y="88" width="108" height="24" fill="${white}"/>
      `);
    case "schoolZone":
      return wrap(`
        <polygon points="100,18 182,164 18,164" fill="${white}" stroke="${red}" stroke-width="10" stroke-linejoin="round"/>
        <circle cx="82" cy="108" r="10" fill="${navy}"/>
        <circle cx="120" cy="112" r="8" fill="${navy}"/>
        <path d="M82 118v20M72 130l10 8 10-8M120 120v16M112 130l8 6 8-6" stroke="${navy}" stroke-width="6" stroke-linecap="round" fill="none"/>
      `);
    case "trafficLight":
      return wrap(`
        <polygon points="100,18 182,164 18,164" fill="${white}" stroke="${gold}" stroke-width="10" stroke-linejoin="round"/>
        <rect x="86" y="86" width="28" height="58" rx="8" fill="${navy}"/>
        <circle cx="100" cy="98" r="6" fill="${red}"/>
        <circle cx="100" cy="115" r="6" fill="${gold}"/>
        <circle cx="100" cy="132" r="6" fill="#1c8a56"/>
      `);
    case "noHorn":
      return wrap(`
        <circle cx="100" cy="100" r="88" fill="${white}" stroke="${red}" stroke-width="12"/>
        <path d="M70 96h18l30-20v50l-30-20H70a8 8 0 0 1 0-10Z" fill="${navy}"/>
        <line x1="30" y1="170" x2="170" y2="30" stroke="${red}" stroke-width="12"/>
      `);
    case "narrowRoad":
      return wrap(`
        <polygon points="100,18 182,164 18,164" fill="${white}" stroke="${red}" stroke-width="10" stroke-linejoin="round"/>
        <path d="M70 150 L90 70 M130 150 L110 70" stroke="${navy}" stroke-width="8" fill="none" stroke-linecap="round"/>
      `);
    case "slippery":
      return wrap(`
        <polygon points="100,18 182,164 18,164" fill="${white}" stroke="${red}" stroke-width="10" stroke-linejoin="round"/>
        <path d="M55 120c15-30 30 10 45-15s30 10 45-15" fill="none" stroke="${navy}" stroke-width="7" stroke-linecap="round"/>
      `);
    case "noOvertake":
      return wrap(`
        <circle cx="100" cy="100" r="88" fill="${white}" stroke="${red}" stroke-width="12"/>
        <rect x="55" y="70" width="26" height="42" rx="4" fill="${navy}"/>
        <rect x="105" y="70" width="26" height="42" rx="4" fill="${red}"/>
        <line x1="30" y1="170" x2="170" y2="30" stroke="${red}" stroke-width="12"/>
      `);
    case "parking":
      return wrap(`
        <rect x="14" y="14" width="172" height="172" rx="14" fill="${blue}"/>
        <text x="100" y="132" text-anchor="middle" font-family="Tajawal,Arial" font-size="96" font-weight="800" fill="${white}">P</text>
      `);
    case "gasStation":
      return wrap(`
        <rect x="14" y="14" width="172" height="172" rx="14" fill="${blue}"/>
        <rect x="60" y="60" width="50" height="80" rx="4" fill="${white}"/>
        <path d="M112 90h14a8 8 0 0 1 8 8v30a7 7 0 0 1-14 0v-16h-8" stroke="${white}" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      `);
    case "mandatoryRight":
      return wrap(`
        <circle cx="100" cy="100" r="88" fill="${blue}" stroke="${navy}" stroke-width="4"/>
        <path d="M60 100h56" stroke="${white}" stroke-width="12" stroke-linecap="round"/>
        <polygon points="112,80 148,100 112,120" fill="${white}"/>
      `);
    case "crossroad":
      return wrap(`
        <polygon points="100,18 182,164 18,164" fill="${white}" stroke="${red}" stroke-width="10" stroke-linejoin="round"/>
        <path d="M100 90v50M75 115h50" stroke="${navy}" stroke-width="9" stroke-linecap="round"/>
      `);
    default: {
      // Generic renderer for the extended sign set (frame shape + simple glyph).
      const green = "#1c7a4a";
      const black = "#10182a";

      const frameTriangle = (inner) => `
        <polygon points="100,18 182,164 18,164" fill="${white}" stroke="${red}" stroke-width="10" stroke-linejoin="round"/>
        ${inner}`;
      const frameProhib = (inner, slash) => `
        <circle cx="100" cy="100" r="88" fill="${white}" stroke="${red}" stroke-width="12"/>
        ${inner}
        ${slash ? `<line x1="32" y1="168" x2="168" y2="32" stroke="${red}" stroke-width="12"/>` : ""}`;
      const frameMandatory = (inner) => `
        <circle cx="100" cy="100" r="88" fill="${blue}" stroke="${navy}" stroke-width="4"/>
        ${inner}`;
      const frameInfo = (inner) => `
        <rect x="14" y="14" width="172" height="172" rx="14" fill="${blue}"/>
        ${inner}`;
      const frameWhiteInfo = (inner) => `
        <rect x="14" y="14" width="172" height="172" rx="14" fill="${white}" stroke="${navy}" stroke-width="4"/>
        ${inner}`;
      const frameDiamond = (inner) => `
        <polygon points="100,10 190,100 100,190 10,100" fill="${gold}" stroke="${white}" stroke-width="10"/>
        <polygon points="100,34 166,100 100,166 34,100" fill="${gold}" stroke="${navy}" stroke-width="3"/>
        ${inner}`;
      const frameGreen = (inner) => `
        <rect x="14" y="14" width="172" height="172" rx="14" fill="${green}"/>
        ${inner}`;

      const carGlyph = (fill) => `<rect x="55" y="95" width="90" height="26" rx="8" fill="${fill}"/><path d="M65 95l10-16h50l10 16" fill="none" stroke="${fill}" stroke-width="5"/><circle cx="70" cy="121" r="7" fill="${fill}"/><circle cx="130" cy="121" r="7" fill="${fill}"/>`;
      const truckGlyph = (fill) => `<rect x="45" y="80" width="70" height="38" rx="3" fill="${fill}"/><rect x="118" y="92" width="32" height="26" rx="3" fill="${fill}"/><circle cx="65" cy="122" r="8" fill="${fill}"/><circle cx="130" cy="122" r="8" fill="${fill}"/>`;
      const busGlyph = (fill) => `<rect x="50" y="72" width="100" height="44" rx="6" fill="${fill}"/><circle cx="68" cy="120" r="8" fill="${fill}"/><circle cx="132" cy="120" r="8" fill="${fill}"/>`;
      const bikeGlyph = (fill) => `<circle cx="72" cy="128" r="18" fill="none" stroke="${fill}" stroke-width="6"/><circle cx="128" cy="128" r="18" fill="none" stroke="${fill}" stroke-width="6"/><path d="M72 128l24-46h20l14 46M92 82h26" stroke="${fill}" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
      const motoGlyph = (fill) => `<circle cx="70" cy="128" r="16" fill="none" stroke="${fill}" stroke-width="6"/><circle cx="130" cy="128" r="16" fill="none" stroke="${fill}" stroke-width="6"/><path d="M70 128h30l16-30h20M100 128l16-30" stroke="${fill}" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
      const tractorGlyph = (fill) => `<circle cx="72" cy="126" r="22" fill="none" stroke="${fill}" stroke-width="7"/><circle cx="138" cy="132" r="12" fill="none" stroke="${fill}" stroke-width="6"/><path d="M72 104V78h30M100 122h40" stroke="${fill}" stroke-width="6" fill="none" stroke-linecap="round"/>`;
      const handcartGlyph = (fill) => `<circle cx="100" cy="128" r="16" fill="none" stroke="${fill}" stroke-width="6"/><path d="M100 112V80h34M134 80l14 10" stroke="${fill}" stroke-width="6" fill="none" stroke-linecap="round"/>`;
      const animalGlyph = (fill) => `<path d="M60 130q10-38 40-38t40 38M75 92l-8-14M125 92l8-14" stroke="${fill}" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="60" cy="132" r="6" fill="${fill}"/><circle cx="140" cy="132" r="6" fill="${fill}"/>`;
      const pedestrianGlyph = (fill) => `<circle cx="100" cy="72" r="12" fill="${fill}"/><path d="M100 86v34l-18 30M100 120l18 30M82 100l-14 20M118 100l14 20" stroke="${fill}" stroke-width="7" fill="none" stroke-linecap="round"/>`;
      const wheelchairGlyph = (fill) => `<circle cx="90" cy="130" r="26" fill="none" stroke="${fill}" stroke-width="6"/><circle cx="100" cy="68" r="10" fill="${fill}"/><path d="M100 82v28h30M100 110l24 30" stroke="${fill}" stroke-width="6" fill="none" stroke-linecap="round"/>`;
      const phoneGlyph = (fill) => `<path d="M78 66c0-4 3-7 7-7h12c4 0 7 3 7 6l4 16c1 3-1 6-3 7l-9 5c5 12 13 20 25 25l5-9c1-2 4-4 7-3l16 4c3 1 6 4 6 7v12c0 4-3 7-7 7h-6c-40 0-72-32-72-72Z" fill="${fill}"/>`;
      const forkGlyph = (fill) => `<rect x="70" y="62" width="7" height="76" fill="${fill}"/><rect x="86" y="62" width="7" height="34" fill="${fill}"/><rect x="70" y="62" width="23" height="10" fill="${fill}"/><rect x="123" y="62" width="7" height="76" rx="3" fill="${fill}"/>`;
      const bedGlyph = (fill) => `<rect x="58" y="96" width="84" height="30" rx="4" fill="${fill}"/><rect x="58" y="80" width="26" height="20" rx="4" fill="${fill}"/><path d="M58 126v14M142 96v44" stroke="${fill}" stroke-width="6" stroke-linecap="round"/>`;
      const tentGlyph = (fill) => `<polygon points="100,64 150,138 50,138" fill="none" stroke="${fill}" stroke-width="7" stroke-linejoin="round"/><path d="M100 64v74" stroke="${fill}" stroke-width="5"/>`;
      const chainGlyph = (fill) => Array.from({length:4}).map((_,i)=>`<circle cx="${64+i*26}" cy="100" r="12" fill="none" stroke="${fill}" stroke-width="6"/>`).join("");
      const rockGlyph = (fill) => `<path d="M60 138l14-30 16 10 14-26 20 18 16-14 12 42Z" fill="${fill}"/>`;
      const arrow = (fill, rot) => `<g transform="rotate(${rot} 100 100)"><path d="M100 55v70M100 55l-20 20M100 55l20 20" stroke="${fill}" stroke-width="14" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`;
      const arrowDiag = (fill, rot) => `<g transform="rotate(${rot} 100 100)"><path d="M65 65l70 70M135 60l0 40M135 60l-40 0" stroke="${fill}" stroke-width="12" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`;
      const bendGlyph = (fill, mirror) => `<g transform="${mirror ? 'scale(-1,1) translate(-200,0)' : ''}"><path d="M60 145c0-55 40-70 80-70" stroke="${fill}" stroke-width="9" fill="none" stroke-linecap="round"/><polygon points="130,68 150,75 132,90" fill="${fill}"/></g>`;
      const doubleBendGlyph = (fill, mirror) => `<g transform="${mirror ? 'scale(-1,1) translate(-200,0)' : ''}"><path d="M50 150c30-10 10-45 40-55s10-45 45-45" stroke="${fill}" stroke-width="8" fill="none" stroke-linecap="round"/></g>`;
      const bumpGlyph = (fill) => `<path d="M55 130q15-35 45-35t45 35" stroke="${fill}" stroke-width="9" fill="none" stroke-linecap="round"/>`;
      const unevenGlyph = (fill) => `<path d="M50 135l25-40 20 25 20-35 20 30 15-15" stroke="${fill}" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
      const narrowGlyph = (fill, side) => side === "both" ? `<path d="M70 150L90 70M130 150L110 70" stroke="${fill}" stroke-width="8" fill="none" stroke-linecap="round"/>` : side === "right" ? `<path d="M130 150L150 70M90 150L90 70" stroke="${fill}" stroke-width="8" fill="none" stroke-linecap="round"/>` : `<path d="M70 150L50 70M110 150L110 70" stroke="${fill}" stroke-width="8" fill="none" stroke-linecap="round"/>`;
      const exclaim = (fill) => `<rect x="93" y="80" width="14" height="42" rx="6" fill="${fill}"/><circle cx="100" cy="140" r="8" fill="${fill}"/>`;
      const barLimit = (fill,label) => `<path d="M50 90h100" stroke="${fill}" stroke-width="10" stroke-linecap="round"/><path d="M50 90l-8 14M150 90l8 14" stroke="${fill}" stroke-width="8" stroke-linecap="round"/><text x="100" y="135" text-anchor="middle" font-family="Tajawal,Arial" font-size="30" font-weight="800" fill="${fill}">${label}</text>`;
      const label = (text, fill, size) => `<text x="100" y="${size>40?128:118}" text-anchor="middle" font-family="Tajawal,Arial" font-size="${size}" font-weight="800" fill="${fill}">${text}</text>`;
      const roundaboutGlyph = (fill) => `<circle cx="100" cy="100" r="34" fill="none" stroke="${fill}" stroke-width="9"/><polygon points="130,68 148,76 130,86" fill="${fill}"/>`;

      const table = {
        unevenRoad: () => frameTriangle(unevenGlyph(navy)),
        bendRight: () => frameTriangle(bendGlyph(navy, false)),
        bendLeft: () => frameTriangle(bendGlyph(navy, true)),
        doubleBendRight: () => frameTriangle(doubleBendGlyph(navy, false)),
        doubleBendLeft: () => frameTriangle(doubleBendGlyph(navy, true)),
        animals: () => frameTriangle(animalGlyph(navy)),
        twoWayTraffic: () => frameTriangle(arrow(navy,0) + arrow(navy,180)),
        oncomingPriority: () => frameTriangle(arrow(navy,0) + arrow(red,180)),
        sideRoadRight: () => frameTriangle(`<path d="M60 100h80M140 100l-16-14M140 100l-16 14" stroke="${navy}" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/><line x1="60" y1="60" x2="60" y2="140" stroke="${navy}" stroke-width="8" stroke-linecap="round"/>`),
        priorityRoad: () => frameDiamond(""),
        cyclistWarning: () => frameTriangle(bikeGlyph(navy)),
        narrowRoadRight: () => frameTriangle(narrowGlyph(navy,"right")),
        narrowRoadLeft: () => frameTriangle(narrowGlyph(navy,"left")),
        fallingRocks: () => frameTriangle(rockGlyph(navy)),
        generalDanger: () => frameTriangle(exclaim(navy)),
        endPriority: () => frameDiamond(`<line x1="60" y1="140" x2="140" y2="60" stroke="${navy}" stroke-width="8"/>`),
        oncomingPriorityBlue: () => frameMandatory(arrow(white,0) + arrow(red,180)),
        noEntryOneway: () => wrap(`<circle cx="100" cy="100" r="88" fill="${red}" stroke="${navy}" stroke-width="4"/><rect x="42" y="86" width="116" height="28" rx="4" fill="${white}"/>`),
        noOvertakeTrucks: () => frameProhib(truckGlyph(navy), true),
        noAnimalCarts: () => frameProhib(handcartGlyph(navy) + animalGlyph(navy), true),
        noPedestrians: () => frameProhib(pedestrianGlyph(navy), true),
        noBicycles: () => frameProhib(bikeGlyph(navy), true),
        noMotorcycles: () => frameProhib(motoGlyph(navy), true),
        noHandcarts: () => frameProhib(handcartGlyph(navy), true),
        noCars: () => frameProhib(carGlyph(navy), false),
        widthLimit: () => frameProhib(barLimit(navy,"2,3ᵐ"), false),
        heightLimit: () => frameProhib(barLimit(navy,"3,5ᵐ"), false),
        lengthLimit: () => frameProhib(barLimit(navy,"10ᵐ"), false),
        weightLimit: () => frameProhib(label("7ᵗ",navy,64), false),
        weightLimit2: () => frameProhib(label("6,5ᵗ",navy,52), false),
        endRestrictions: () => wrap(`<circle cx="100" cy="100" r="88" fill="${white}" stroke="${navy}" stroke-width="3"/><line x1="60" y1="140" x2="140" y2="60" stroke="${navy}" stroke-width="10"/>`),
        endSpeedLimit: () => wrap(`<circle cx="100" cy="100" r="88" fill="${white}" stroke="${navy}" stroke-width="3"/>${label("50",navy,58)}<line x1="55" y1="145" x2="145" y2="55" stroke="${red}" stroke-width="10"/>`),
        mandatoryLeft: () => frameMandatory(arrow(white,270)),
        mandatoryLeftOrRight: () => frameMandatory(arrow(white,90) + arrow(white,270)),
        mandatoryStraightOrRight: () => frameMandatory(arrow(white,0) + arrow(white,90)),
        mandatoryStraightOrLeft: () => frameMandatory(arrow(white,0) + arrow(white,270)),
        passLeft: () => frameMandatory(arrowDiag(white,180)),
        passRight: () => frameMandatory(arrowDiag(white,0)),
        passEither: () => frameMandatory(arrowDiag(white,0) + arrowDiag(white,180)),
        endBikeLane: () => frameProhib(bikeGlyph(navy), true),
        pedestrianAndBikePath: () => frameMandatory(pedestrianGlyph(white) + `<g transform="translate(36 0)">${bikeGlyph(white)}</g>`),
        noRightTurn: () => frameProhib(arrow(navy,90), true),
        noBuses: () => frameProhib(busGlyph(navy), false),
        noTrucks: () => frameProhib(truckGlyph(navy), false),
        noHazmatTrucks: () => frameProhib(truckGlyph(navy) + `<rect x="120" y="70" width="20" height="20" fill="${gold}"/>`, false),
        noTractors: () => frameProhib(tractorGlyph(navy), false),
        endNoOvertake: () => wrap(`<circle cx="100" cy="100" r="88" fill="${white}" stroke="${navy}" stroke-width="3"/><rect x="55" y="70" width="26" height="42" rx="4" fill="#9aa3af"/><rect x="105" y="70" width="26" height="42" rx="4" fill="${navy}"/><line x1="55" y1="145" x2="145" y2="55" stroke="${navy}" stroke-width="6"/>`),
        endNoOvertakeTrucks: () => wrap(`<circle cx="100" cy="100" r="88" fill="${white}" stroke="${navy}" stroke-width="3"/>${truckGlyph("#9aa3af")}<line x1="55" y1="145" x2="145" y2="55" stroke="${navy}" stroke-width="6"/>`),
        noStoppingParking: () => wrap(`<circle cx="100" cy="100" r="88" fill="${white}" stroke="${red}" stroke-width="12"/><line x1="32" y1="32" x2="168" y2="168" stroke="${red}" stroke-width="12"/><line x1="32" y1="168" x2="168" y2="32" stroke="${red}" stroke-width="12"/>`),
        mandatoryStraight: () => frameMandatory(arrow(white,0)),
        directionLeft: () => frameMandatory(arrow(white,270)),
        directionRight: () => frameMandatory(arrow(white,90)),
        mandatoryRoundabout: () => frameMandatory(roundaboutGlyph(white) + arrow(white,45)),
        minSpeed: () => frameMandatory(label("30",white,64)),
        endMinSpeed: () => wrap(`<circle cx="100" cy="100" r="88" fill="${white}" stroke="${navy}" stroke-width="3"/>${label("30",navy,58)}<line x1="55" y1="145" x2="145" y2="55" stroke="${red}" stroke-width="8"/>`),
        chainsRequired: () => frameMandatory(chainGlyph(white)),
        pedestrianPath: () => frameMandatory(pedestrianGlyph(white)),
        endPedestrianPath: () => wrap(`<rect x="14" y="14" width="172" height="172" rx="14" fill="${blue}"/>${pedestrianGlyph(white)}<line x1="30" y1="170" x2="170" y2="30" stroke="${red}" stroke-width="8"/>`),
        bikeLaneMandatory: () => frameMandatory(bikeGlyph(white)),
        noLeftTurn: () => frameProhib(arrow(navy,270), true),
        bikePathInfo: () => frameWhiteInfo(bikeGlyph(navy)),
        deadEnd: () => frameWhiteInfo(`<path d="M60 60v60h80M100 60v50" stroke="${navy}" stroke-width="9" fill="none" stroke-linecap="round"/>`),
        motorway: () => frameGreen(`<rect x="50" y="70" width="100" height="60" rx="8" fill="none" stroke="${white}" stroke-width="8"/><line x1="100" y1="70" x2="100" y2="130" stroke="${white}" stroke-width="6"/>`),
        endMotorway: () => wrap(`<rect x="14" y="14" width="172" height="172" rx="14" fill="${green}"/><rect x="50" y="70" width="100" height="60" rx="8" fill="none" stroke="${white}" stroke-width="8"/><line x1="30" y1="170" x2="170" y2="30" stroke="${red}" stroke-width="8"/>`),
        tunnel: () => frameMandatory(`<path d="M60 140V110a40 40 0 0 1 80 0v30" fill="none" stroke="${white}" stroke-width="9"/>`),
        sos: () => wrap(`<rect x="14" y="14" width="172" height="172" rx="14" fill="${red}"/>${label("SOS",white,44)}`),
        disabledParking: () => frameMandatory(wheelchairGlyph(white)),
        taxiStand: () => frameMandatory(`${label("TAXI",white,30)}<text x="100" y="150" text-anchor="middle" font-family="Tajawal,Arial" font-size="20" font-weight="700" fill="${white}">تاكسي</text>`),
        police: () => frameMandatory(`${label("شرطة",white,26)}${arrow(white,90)}`),
        information: () => frameMandatory(label("i",white,84)),
        municipalPolice: () => frameMandatory(`${label("شرطة",white,22)}<text x="100" y="150" text-anchor="middle" font-family="Tajawal,Arial" font-size="18" font-weight="700" fill="${white}">بلدية</text>`),
        mainRoad: () => frameWhiteInfo(`<rect x="90" y="50" width="20" height="100" fill="${gold}"/><rect x="50" y="90" width="100" height="20" fill="${gold}"/>`),
        hotel: () => frameMandatory(bedGlyph(white)),
        restaurant: () => frameMandatory(forkGlyph(white)),
        telephone: () => frameMandatory(phoneGlyph(white)),
        busStop: () => frameMandatory(busGlyph(white)),
        campsite: () => frameMandatory(tentGlyph(white)),
        indirectTurn: () => frameMandatory(bendGlyph(white,true)),
        reduceSpeed: () => wrap(`<rect x="14" y="14" width="172" height="172" rx="10" fill="${red}"/><text x="100" y="95" text-anchor="middle" font-family="Tajawal,Arial" font-size="26" font-weight="800" fill="${white}">خفف السرعة</text><text x="100" y="130" text-anchor="middle" font-family="Arial" font-size="20" font-weight="700" fill="${white}">REDUCE SPEED</text>`),
        bumps: () => frameTriangle(bumpGlyph(navy)),
      };

      return table[type] ? table[type]() : wrap(`<rect x="14" y="14" width="172" height="172" rx="14" fill="${blue}"/>`);
    }
  }
}
