/*
 * CATÁLOGO — precios de Vape House (costo). La página les suma el margen
 * de config.js (markup, hoy 17 %) y redondea hacia arriba a $1.000.
 *
 * cost       Precio por unidad de Vape House en COP (detal del catálogo).
 * oldCost    Opcional. Precio normal cuando hay promoción (se muestra tachado).
 * x10        Opcional. Precio de Vape House por 10 unidades (total).
 * x100       Opcional. Precio de Vape House por 100 unidades (total).
 * puffs      0 = no aplica (baterías y sistemas open).
 * type       desechable | recargable | capsula | pod | open
 * nameEn / noteEn  Opcional. Nombre o nota en inglés.
 * soldOut    true para mostrarlo como agotado sin borrarlo.
 */
window.PRODUCTS = [
  // ── Desechables ─────────────────────────────────────────────
  { id: 'waka-stick', name: 'WAKA Stick', brand: 'WAKA', puffs: 2000, cost: 28000, x10: 210000, type: 'desechable', tags: ['Premium'] },
  { id: 'waka-solo-2', name: 'WAKA Solo 2', brand: 'WAKA', puffs: 3500, cost: 45000, x10: 300000, type: 'desechable', tags: ['Premium'] },
  { id: 'waka-smash-air', name: 'WAKA Smash Air', brand: 'WAKA', puffs: 10000, cost: 60000, x10: 400000, type: 'desechable', tags: ['Premium'] },
  { id: 'waka-nova', name: 'WAKA Nova', brand: 'WAKA', puffs: 16000, cost: 75000, x10: 480000, type: 'desechable', tags: ['Premium'] },
  { id: 'waka-blast', name: 'WAKA Blast', brand: 'WAKA', puffs: 36000, cost: 85000, type: 'desechable', tags: ['Premium'] },
  { id: 'hqd-cuvie-air', name: 'HQD Cuvie Air', brand: 'HQD', puffs: 4000, cost: 13000, x10: 60000, x100: 500000, type: 'desechable' },
  { id: 'fume-recharger', name: 'Fume Recharger', brand: 'Fume', puffs: 5000, cost: 15000, x10: 76000, x100: 680000, type: 'desechable' },
  { id: 'death-row-5k', name: 'Death Row 5K', brand: 'Death Row', puffs: 5000, cost: 15000, type: 'desechable' },
  { id: 'lost-mary-os5000', name: 'Lost Mary OS5000', brand: 'Lost Mary', puffs: 5000, cost: 15000, type: 'desechable' },
  { id: 'ignite-5000', name: 'Ignite 5000', brand: 'Ignite', puffs: 5000, cost: 15000, type: 'desechable' },
  { id: 'lost-mary-mo5000', name: 'Lost Mary MO5000', brand: 'Lost Mary', puffs: 5000, cost: 15000, x10: 85000, x100: 750000, type: 'desechable' },
  { id: 'death-row-7k', name: 'Death Row 7K', brand: 'Death Row', puffs: 7000, cost: 15000, x10: 50000, x100: 450000, type: 'desechable' },
  { id: 'tyson-7k', name: 'Tyson 7K', brand: 'Tyson', puffs: 7000, cost: 15000, x10: 60000, x100: 500000, type: 'desechable', note: 'Solo sabor tabaco', noteEn: 'Tobacco flavor only' },
  { id: 'nola-bar-10000', name: 'Nola Bar 10000', brand: 'Nola Bar', puffs: 10000, cost: 20000, x10: 100000, x100: 800000, type: 'desechable' },
  { id: 'ijoy-bar-sd10000', name: 'iJoy Bar SD10000', brand: 'iJoy', puffs: 10000, cost: 22000, x10: 100000, x100: 900000, type: 'desechable' },
  { id: 'nicky-jam-10000', name: 'Nicky Jam 10000', brand: 'Nicky Jam', puffs: 10000, cost: 20000, oldCost: 22000, x10: 100000, x100: 900000, type: 'desechable' },
  { id: 'north-ft12000', name: 'North FT12000', brand: 'North', puffs: 12000, cost: 22000, x10: 110000, x100: 1000000, type: 'desechable' },
  { id: 'beyond-12000', name: 'Beyond 12000', brand: 'IVG', puffs: 12000, cost: 22000, x10: 105000, x100: 950000, type: 'desechable' },
  { id: 'mtrx-12000', name: 'MTRX 12000', brand: 'MTRX', puffs: 12000, cost: 25000, x10: 95000, x100: 850000, type: 'desechable' },
  { id: 'chris-brown', name: 'Chris Brown 15000', brand: 'Chris Brown', puffs: 15000, cost: 25000, x10: 120000, x100: 1100000, type: 'desechable' },
  { id: 'baddy-bar-15000', name: 'Baddy Bar 15000', brand: 'Baddy Bar', puffs: 15000, cost: 27000, x10: 120000, x100: 1100000, type: 'desechable' },
  { id: 'nicky-jam-15000', name: 'Nicky Jam 15000', brand: 'Nicky Jam', puffs: 15000, cost: 27000, type: 'desechable' },
  { id: 'priv-bar-turbo', name: 'Priv Bar Turbo', brand: 'Priv Bar', puffs: 15000, cost: 30000, type: 'desechable', note: 'Solo sabor Florida Lemonade', noteEn: 'Florida Lemonade flavor only' },
  { id: 'bugatti-spaceship', name: 'Bugatti Spaceship', brand: 'Bugatti', puffs: 17000, cost: 27000, x10: 130000, x100: 1200000, type: 'desechable' },
  { id: 'elux-cyberover', name: 'Elux Cyberover', brand: 'Elux', puffs: 18000, cost: 27000, x10: 140000, x100: 1300000, type: 'desechable' },
  { id: 'spaceman-18000', name: 'Spaceman 18000', brand: 'Spaceman', puffs: 18000, cost: 28000, type: 'desechable' },
  { id: 'spaceman-20000', name: 'Spaceman 20000', brand: 'Spaceman', puffs: 20000, cost: 30000, type: 'desechable' },
  { id: 'vookbar-cyber', name: 'Vookbar Cyber', brand: 'Vookbar', puffs: 20000, cost: 25000, type: 'desechable', note: 'Sin garantía · se entrega probado', noteEn: 'No warranty · tested before delivery' },
  { id: 'airfuze-jet', name: 'Airfuze Jet 20000', brand: 'Airfuze', puffs: 20000, cost: 30000, x10: 130000, x100: 1200000, type: 'desechable' },
  { id: 'humo-azul', name: 'Humo Azul Edición Especial', nameEn: 'Humo Azul Special Edition', brand: 'Humo Azul', puffs: 15000, cost: 45000, type: 'desechable', tags: ['Edición especial'] },
  { id: 'starbuzz-15k', name: 'Starbuzz 15K', brand: 'Starbuzz', puffs: 15000, cost: 30000, x10: 150000, x100: 1400000, type: 'desechable', tags: ['Tipo hookah'] },
  { id: 'vera-vr22000', name: 'Vera VR22000', brand: 'Vera', puffs: 22000, cost: 30000, type: 'desechable' },
  { id: 'clase-azul', name: 'Clase Azul', brand: 'Clase Azul', puffs: 22000, cost: 40000, x10: 230000, x100: 1450000, type: 'desechable', tags: ['Edición especial'] },
  { id: 'snoopy-smoke-pro', name: 'Snoopy Smoke Pro', brand: 'Snoopy Smoke', puffs: 30000, cost: 35000, x10: 200000, x100: 1900000, type: 'desechable', tags: ['Doble sabor'] },
  { id: 'kylin-bar-30000', name: 'Kylin Bar 30000', brand: 'Kylin Bar', puffs: 30000, cost: 28000, oldCost: 33000, x10: 150000, x100: 1400000, type: 'desechable' },
  { id: 'hookalit', name: 'Hookalit', brand: 'Hookalit', puffs: 35000, cost: 35000, x10: 155000, x100: 1450000, type: 'desechable', tags: ['Tipo hookah'] },
  { id: 'equator-eq30000', name: 'Equator EQ30000', brand: 'Equator', puffs: 30000, cost: 35000, type: 'desechable' },
  { id: 'tomoro-d15', name: 'Tomoro D15', brand: 'Tomoro', puffs: 35000, cost: 33000, x10: 160000, x100: 1500000, type: 'desechable' },
  { id: 'airfuze-smart', name: 'Airfuze Smart Vape', brand: 'Airfuze', puffs: 30000, cost: 35000, x10: 180000, x100: 1700000, type: 'desechable', tags: ['Smart vape'] },
  { id: 'extra-bar-turbo', name: 'Extre Bar Turbo X', brand: 'Extre Bar', puffs: 30000, cost: 35000, x10: 170000, x100: 1600000, type: 'desechable' },
  { id: 'nexa-pix', name: 'Nexa Pix', brand: 'Nexa', puffs: 35000, cost: 35000, x10: 160000, x100: 1500000, type: 'desechable' },
  { id: 'nimmbox-flux', name: 'Nimmbox Flux', brand: 'Nimmbox', puffs: 40000, cost: 35000, x10: 150000, x100: 1400000, type: 'desechable' },
  { id: 'elfbar-ebcreate', name: 'Elfbar EBCreate', brand: 'Elfbar', puffs: 40000, cost: 35000, x10: 140000, x100: 1300000, type: 'desechable' },
  { id: 'shot-caller', name: 'Shot Caller', brand: 'Shot Caller', puffs: 40000, cost: 35000, x10: 150000, x100: 1400000, type: 'desechable' },
  { id: 'rifbar-mix-pro', name: 'Rifbar Mix Pro', brand: 'Rifbar', puffs: 40000, cost: 35000, x10: 160000, x100: 1500000, type: 'desechable' },
  { id: 'tomoro-t1', name: 'Tomoro T1', brand: 'Tomoro', puffs: 40000, cost: 35000, x10: 180000, x100: 1700000, type: 'desechable' },
  { id: 'dojo-sphere-s', name: 'Dojo Sphere S', brand: 'Dojo', puffs: 40000, cost: 35000, x10: 160000, x100: 1500000, type: 'desechable' },
  { id: 'dojo-sphere-x', name: 'Dojo Sphere X', brand: 'Dojo', puffs: 40000, cost: 35000, x10: 150000, x100: 1400000, type: 'desechable' },
  { id: 'solo-bar-defender', name: 'Solo Bar Defender', brand: 'Solo Bar', puffs: 40000, cost: 38000, x10: 200000, x100: 1900000, type: 'desechable', tags: ['Doble sabor'] },
  { id: 'dummy-50k', name: 'Dummy 50K', brand: 'Dummy', puffs: 50000, cost: 40000, x10: 180000, x100: 1700000, type: 'desechable' },
  { id: 'nimmbox-mecha', name: 'Nimmbox Mecha', brand: 'Nimmbox', puffs: 50000, cost: 38000, x10: 160000, x100: 1500000, type: 'desechable' },
  { id: 'spaceman-50k', name: 'Spaceman 50K', brand: 'Spaceman', puffs: 50000, cost: 40000, x10: 170000, x100: 1600000, type: 'desechable' },
  { id: 'reignbar', name: 'Reign Bar', brand: 'Reign Bar', puffs: 50000, cost: 40000, x10: 190000, x100: 1800000, type: 'desechable', tags: ['Doble sabor'] },
  { id: 'upends', name: 'Upends', brand: 'Upends', puffs: 50000, cost: 40000, x10: 160000, x100: 1500000, type: 'desechable' },
  { id: 'lost-angel', name: 'Lost Angel', brand: 'Lost Angel', puffs: 50000, cost: 40000, x10: 160000, x100: 1500000, type: 'desechable' },
  { id: 'bang-leader', name: 'Bang Leader', brand: 'Bang', puffs: 32000, cost: 38000, x10: 205000, x100: 1950000, type: 'desechable', tags: ['Doble sabor'] },
  { id: 'hello-synix', name: 'Hello Synix', brand: 'Hello', puffs: 30000, cost: 38000, type: 'desechable' },
  { id: 'craftbox-v-play', name: 'Craftbox V-Play', brand: 'Craftbox', puffs: 20000, cost: 35000, type: 'desechable' },
  { id: 'dinner-lady-galax', name: 'Dinner Lady Galax', brand: 'Dinner Lady', puffs: 60000, cost: 45000, x10: 180000, x100: 1700000, type: 'desechable' },
  { id: 'binaries-sv15000', name: 'Binaries SV15000', brand: 'Binaries', puffs: 15000, cost: 40000, type: 'desechable' },
  { id: 'extra-3k', name: 'Extra 3K', brand: 'Extra', puffs: 3000, cost: 40000, type: 'desechable' },

  // ── Recargables ─────────────────────────────────────────────
  { id: 'chillax-go-kit', name: 'Chillax Go · Kit', nameEn: 'Chillax Go · Kit', brand: 'Chillax', puffs: 9000, cost: 28000, x10: 140000, x100: 1350000, type: 'recargable', tags: ['Kit completo'], note: 'Batería + cápsula', noteEn: 'Battery + pod' },
  { id: 'chillax-go-bateria', name: 'Chillax Go · Batería', nameEn: 'Chillax Go · Battery', brand: 'Chillax', puffs: 0, cost: 8000, type: 'recargable', note: 'Cápsula se vende por separado', noteEn: 'Pod sold separately' },
  { id: 'solo-bar-mate-kit', name: 'Solo Bar Mate Kit', brand: 'Solo Bar', puffs: 35000, cost: 35000, x10: 170000, x100: 1600000, type: 'recargable', tags: ['Kit completo'] },
  { id: 'solo-bar-30-kit', name: 'Solo Bar 30 Kit', brand: 'Solo Bar', puffs: 30000, cost: 45000, x10: 180000, x100: 1700000, type: 'recargable', tags: ['Kit completo', 'Doble sabor'], note: 'Incluye 2 cápsulas', noteEn: 'Includes 2 pods' },
  { id: 'ulit-shellet-plus', name: 'Ulit Shellet Plus', brand: 'Ulit', puffs: 60000, cost: 45000, x10: 210000, x100: 2000000, type: 'recargable' },
  { id: 'life-pod-eco-2', name: 'Life Pod Eco II', brand: 'Life Pod', puffs: 10000, cost: 70000, type: 'recargable' },
  { id: 'life-pod-sk', name: 'Life Pod SK', brand: 'Life Pod', puffs: 14000, cost: 70000, type: 'recargable' },

  // ── Cápsulas y repuestos ────────────────────────────────────
  { id: 'chillax-go-capsula', name: 'Chillax Go · Cápsula', nameEn: 'Chillax Go · Pod', brand: 'Chillax', puffs: 9000, cost: 20000, x10: 115000, x100: 1050000, type: 'capsula', note: 'Requiere batería Chillax Go', noteEn: 'Requires Chillax Go battery' },
  { id: 'dummy-capsula', name: 'Dummy · Cápsula', nameEn: 'Dummy · Pod', brand: 'Dummy', puffs: 50000, cost: 28000, x10: 150000, x100: 1400000, type: 'capsula', note: 'Repuesto para Dummy 50K', noteEn: 'Refill for Dummy 50K' },
  { id: 'lost-angel-capsula', name: 'Lost Angel · Cápsula', nameEn: 'Lost Angel · Pod', brand: 'Lost Angel', puffs: 50000, cost: 28000, x10: 140000, x100: 1300000, type: 'capsula', note: 'Repuesto para Lost Angel', noteEn: 'Refill for Lost Angel' },
  { id: 'ulit-shellet-capsula', name: 'Ulit Shellet · Cápsula', nameEn: 'Ulit Shellet · Pod', brand: 'Ulit', puffs: 60000, cost: 28000, x10: 140000, x100: 1300000, type: 'capsula', note: 'Repuesto para Ulit Shellet Plus', noteEn: 'Refill for Ulit Shellet Plus' },

  // ── Pods y baterías STLTH ───────────────────────────────────
  { id: 'stlth-loop-5k-kit', name: 'STLTH Loop 5K', brand: 'STLTH', puffs: 5000, cost: 58000, type: 'pod', tags: ['Kit completo'] },
  { id: 'stlth-loop-2-bateria', name: 'Batería STLTH Loop 2', nameEn: 'STLTH Loop 2 Battery', brand: 'STLTH', puffs: 0, cost: 35000, type: 'pod', note: 'Pod se vende por separado', noteEn: 'Pod sold separately' },
  { id: 'stlth-loop-bateria', name: 'Batería STLTH Loop', nameEn: 'STLTH Loop Battery', brand: 'STLTH', puffs: 0, cost: 25000, type: 'pod', note: 'Pod se vende por separado', noteEn: 'Pod sold separately' },
  { id: 'stlth-pod-loop-5k', name: 'Pod STLTH Loop 5K', nameEn: 'STLTH Loop 5K Pod', brand: 'STLTH', puffs: 5000, cost: 33000, type: 'pod', note: 'Requiere batería', noteEn: 'Requires battery' },
  { id: 'stlth-pod-vice-5k', name: 'Pod STLTH Vice 5K', nameEn: 'STLTH Vice 5K Pod', brand: 'STLTH', puffs: 5000, cost: 33000, type: 'pod', note: 'Requiere batería', noteEn: 'Requires battery' },
  { id: 'stlth-pod-9k', name: 'Pod STLTH 9K', nameEn: 'STLTH 9K Pod', brand: 'STLTH', puffs: 9000, cost: 45000, type: 'pod', note: 'Requiere batería', noteEn: 'Requires battery' },
  { id: 'stlth-pod-switch-15k', name: 'Pod STLTH Switch 15K', nameEn: 'STLTH Switch 15K Pod', brand: 'STLTH', puffs: 15000, cost: 55000, type: 'pod', tags: ['Doble sabor'], note: 'Requiere batería', noteEn: 'Requires battery' },

  // ── Sistemas open ───────────────────────────────────────────
  { id: 'stlth-open', name: 'STLTH Open', brand: 'STLTH', puffs: 0, cost: 90000, type: 'open' },
  { id: 'vaporesso-gtx-go-40', name: 'Vaporesso GTX GO 40', brand: 'Vaporesso', puffs: 0, cost: 140000, type: 'open' },
  { id: 'vaporesso-xros', name: 'Vaporesso XROS', brand: 'Vaporesso', puffs: 0, cost: 160000, type: 'open' },
  { id: 'vaporesso-xros-2', name: 'Vaporesso XROS 2', brand: 'Vaporesso', puffs: 0, cost: 135000, type: 'open' },
  { id: 'vaporesso-xtra', name: 'Vaporesso XTRA', brand: 'Vaporesso', puffs: 0, cost: 140000, type: 'open' },
  { id: 'vaporesso-luxe-x-pro', name: 'Vaporesso Luxe X Pro', brand: 'Vaporesso', puffs: 0, cost: 220000, type: 'open' },
  { id: 'vaporesso-sky-solo', name: 'Vaporesso Sky Solo', brand: 'Vaporesso', puffs: 0, cost: 140000, type: 'open' },
  { id: 'vaporesso-sky-solo-plus', name: 'Vaporesso Sky Solo Plus', brand: 'Vaporesso', puffs: 0, cost: 180000, type: 'open' },
  { id: 'smok-rpm-5', name: 'SMOK RPM 5 Kit', brand: 'SMOK', puffs: 0, cost: 265000, type: 'open' },
  { id: 'voopoo-vinci-q', name: 'Voopoo Vinci Q', brand: 'Voopoo', puffs: 0, cost: 100000, type: 'open' },
];

/* PROMOCIONES — items son ids de PRODUCTS (se repiten para "3x"); cost = precio Vape House. */
window.COMBOS = [
  { id: 'combo-beyond-nexa', name: 'Beyond 12K + Nexa Pix 35K', items: ['beyond-12000', 'nexa-pix'], cost: 55000 },
  { id: 'combo-nicky-lost', name: 'Nicky Jam 10K + Lost Mary 5K', items: ['nicky-jam-10000', 'lost-mary-os5000'], cost: 32000 },
  { id: 'combo-fume-dojo', name: 'Fume Recharger + Dojo Sphere S', items: ['fume-recharger', 'dojo-sphere-s'], cost: 40000 },
  { id: 'combo-hqd-north', name: 'HQD Cuvie Air + North 12K', items: ['hqd-cuvie-air', 'north-ft12000'], cost: 30000 },
  { id: 'combo-tomoro', name: 'Tomoro D15 + Tomoro T1', items: ['tomoro-d15', 'tomoro-t1'], cost: 60000 },
  { id: 'combo-angel-tomoro', name: 'Lost Angel 50K + Tomoro T1', items: ['lost-angel', 'tomoro-t1'], cost: 65000 },
  { id: 'combo-3-nicky', name: '3 × Nicky Jam 10K', items: ['nicky-jam-10000', 'nicky-jam-10000', 'nicky-jam-10000'], cost: 55000 },
  { id: 'combo-north-nicky-dojo', name: 'North + Nicky Jam + Dojo Sphere S', items: ['north-ft12000', 'nicky-jam-10000', 'dojo-sphere-s'], cost: 65000 },
  { id: 'combo-dinner-nexa-angel', name: 'Dinner Lady + Nexa Pix + Lost Angel', items: ['dinner-lady-galax', 'nexa-pix', 'lost-angel'], cost: 95000 },
  { id: 'combo-3-airfuze', name: '3 × Airfuze Smart 30K', items: ['airfuze-smart', 'airfuze-smart', 'airfuze-smart'], cost: 85000 },
];
