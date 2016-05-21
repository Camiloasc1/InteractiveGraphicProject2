var stations = [
    //M KR 7
    {
        name: 'Museo Nacional',
        x: 866,
        y: 140,
        connected: ['San Diego', 'Universidades', 'Centro Memoria', 'Calle 26', 'Calle 22']
    },
    //L KR 10
    {
        name: 'San Diego',
        x: 915,
        y: 140,
        connected: ['Museo Nacional', 'Las Nieves', 'Universidades', 'Centro Memoria', 'Calle 26', 'Calle 22']
    },
    {
        name: 'Las Nieves',
        x: 956,
        y: 140,
        connected: ['San Diego', 'San Victorino', 'Museo del Oro', 'AV. Jiménez (J)']
    },
    {
        name: 'San Victorino',
        x: 998,
        y: 140,
        connected: ['Las Nieves', 'Bicentenario', 'Museo del Oro', 'AV. Jiménez (J)', 'Tercer Milenio', 'Hospital', 'Tygua - San José']
    },
    {
        name: 'Bicentenario',
        x: 1066,
        y: 140,
        connected: ['San Victorino', 'Hospitales', 'Tygua - San José', 'Tercer Milenio', 'Hospital']
    },
    {name: 'Hospitales', x: 1091, y: 140, connected: ['Bicentenario', 'Policarpa']},
    {name: 'Policarpa', x: 1129, y: 140, connected: ['Hospitales', 'Ciudad Jardin - UAN']},
    {name: 'Ciudad Jardin - UAN', x: 1161, y: 140, connected: ['Policarpa', 'AV. 1° de Mayo']},
    {name: 'AV. 1° de Mayo', x: 1199, y: 140, connected: ['Ciudad Jardin - UAN', 'Country Sur']},
    {name: 'Country Sur', x: 1232, y: 140, connected: ['AV. 1° de Mayo', 'Portal 20 de Julio']},
    {name: 'Portal 20 de Julio', x: 1273, y: 140, connected: ['Country Sur']},
    //B Norte
    {
        name: 'Héroes',
        x: 550,
        y: 245,
        connected: ['Calle 85', 'Calle 76', 'Polo']
    },
    {name: 'Calle 85', x: 522, y: 245, connected: ['Héroes', 'Virrey']},
    {name: 'Virrey', x: 494, y: 245, connected: ['Calle 85', 'Calle 100']},
    {
        name: 'Calle 100',
        x: 454,
        y: 245,
        connected: ['Virrey', 'Calle 106', 'La Castellana']
    },
    {name: 'Calle 106', x: 427, y: 245, connected: ['Calle 100', 'Pepe Sierra']},
    {name: 'Pepe Sierra', x: 399, y: 245, connected: ['Calle 106', 'Calle 127']},
    {name: 'Calle 127', x: 372, y: 245, connected: ['Pepe Sierra', 'Prado']},
    {name: 'Prado', x: 344, y: 245, connected: ['Calle 127', 'Alcalá']},
    {name: 'Alcalá', x: 316, y: 245, connected: ['Prado', 'Calle 142']},
    {name: 'Calle 142', x: 288, y: 245, connected: ['Alcalá', 'Calle 146']},
    {name: 'Calle 146', x: 261, y: 245, connected: ['Calle 142', 'Mazuren']},
    {name: 'Mazuren', x: 233, y: 245, connected: ['Calle 146', 'Cardio Infantil']},
    {name: 'Cardio Infantil', x: 205, y: 245, connected: ['Mazuren', 'Toberín']},
    {name: 'Toberín', x: 178, y: 245, connected: ['Cardio Infantil', 'Portal del Norte']},
    {name: 'Portal del Norte', x: 147, y: 245, connected: ['Toberín', 'Calle 187']},
    //B Norte
    {name: 'Calle 187', x: 106, y: 245, connected: ['Portal del Norte', 'Terminal']},
    {name: 'Terminal', x: 55, y: 245, connected: ['Calle 187']},
    //A Caracas
    {
        name: 'Calle 76',
        x: 614,
        y: 245,
        connected: ['Héroes', 'Calle 72', 'Polo']
    },
    {name: 'Calle 72', x: 651, y: 245, connected: ['Calle 76', 'Flores']},
    {name: 'Flores', x: 679, y: 245, connected: ['Calle 72', 'Calle 63']},
    {name: 'Calle 63', x: 706, y: 245, connected: ['Flores', 'Calle 57']},
    {name: 'Calle 57', x: 734, y: 245, connected: ['Calle 63', 'Marly']},
    {name: 'Marly', x: 762, y: 245, connected: ['Calle 57', 'Calle 45']},
    {name: 'Calle 45', x: 789, y: 245, connected: ['Marly', 'AV. 39']},
    {name: 'AV. 39', x: 817, y: 245, connected: ['Calle 45', 'Profamilia']},
    {name: 'Profamilia', x: 844, y: 245, connected: ['AV. 39', 'Calle 26']},
    {
        name: 'Calle 26',
        x: 873,
        y: 245,
        connected: ['Profamilia', 'Calle 22', 'Museo Nacional', 'San Diego', 'Centro Memoria', 'Universidades']
    },
    {
        name: 'Calle 22',
        x: 936,
        y: 245,
        connected: ['Calle 26', 'Calle 19', 'Museo Nacional', 'San Diego', 'Centro Memoria', 'Universidades']
    },
    {name: 'Calle 19', x: 958, y: 245, connected: ['Calle 22', 'AV. Jiménez (A)']},
    {
        name: 'AV. Jiménez (A)',
        x: 998,
        y: 245,
        connected: ['Calle 19', 'Tercer Milenio', 'AV. Jiménez (J)']
    },
    {
        name: 'Tercer Milenio',
        x: 1020,
        y: 245,
        connected: ['AV. Jiménez (A)', 'Hospital', 'San Victorino', 'Bicentenario', 'Tygua - San José']
    },
    //H Caracas Sur
    {
        name: 'Hospital',
        x: 1077,
        y: 245,
        connected: ['Tercer Milenio', 'Hortúa', 'San Victorino', 'Bicentenario', 'Tygua - San José']
    },
    {name: 'Hortúa', x: 1106, y: 245, connected: ['Hospital', 'Nariño']},
    {name: 'Nariño', x: 1136, y: 245, connected: ['Hortúa', 'Fucha']},
    {name: 'Fucha', x: 1173, y: 252, connected: ['Nariño', 'Restrepo']},
    {name: 'Restrepo', x: 1196, y: 275, connected: ['Fucha', 'Olaya']},
    {name: 'Olaya', x: 1221, y: 299, connected: ['Restrepo', 'Quiroga']},
    {name: 'Quiroga', x: 1245, y: 323, connected: ['Olaya', 'Calle 40 S.']},
    {name: 'Calle 40 S.', x: 1269, y: 348, connected: ['Quiroga', 'Santa Lucía']},
    {
        name: 'Santa Lucía',
        x: 1294,
        y: 372,
        connected: ['Calle 40 S.', 'Socorro', 'Biblioteca']
    },
    //H Usme
    {name: 'Socorro', x: 1343, y: 388, connected: ['Santa Lucía', 'Consuelo']},
    {name: 'Consuelo', x: 1375, y: 388, connected: ['Socorro', 'Molinos']},
    {name: 'Molinos', x: 1407, y: 388, connected: ['Consuelo', 'Portal de Usme']},
    {name: 'Portal de Usme', x: 1449, y: 388, connected: ['Molinos']},
    //H Tunal
    {name: 'Biblioteca', x: 1345, y: 424, connected: ['Santa Lucía', 'Parque']},
    {name: 'Parque', x: 1369, y: 448, connected: ['Biblioteca', 'Portal del Tunal']},
    {name: 'Portal del Tunal', x: 1376, y: 506, connected: ['Parque']},
    //E NQS Central
    {name: 'La Castellana', x: 481, y: 328, connected: ['Calle 100', 'NQS - Calle 75']},
    {
        name: 'NQS - Calle 75',
        x: 615,
        y: 405,
        connected: ['La Castellana', 'San Martín', 'Esc. Militar', 'AV. Chile']
    },
    {name: 'AV. Chile', x: 654, y: 405, connected: ['NQS - Calle 75', 'Simon Bolivar']},
    {name: 'Simon Bolivar', x: 693, y: 405, connected: ['AV. Chile', 'Coliseo']},
    {name: 'Coliseo', x: 731, y: 405, connected: ['Simon Bolivar', 'Campín - U. Antonio Nariño']},
    {name: 'Campín - U. Antonio Nariño', x: 771, y: 405, connected: ['Coliseo', 'U. Nacional']},
    {
        name: 'U. Nacional',
        x: 805,
        y: 405,
        connected: ['Campín - U. Antonio Nariño', 'AV. El Dorado', 'Ciudad Universitaria']
    },
    {
        name: 'AV. El Dorado',
        x: 849,
        y: 405,
        connected: ['U. Nacional', 'CAD', 'Ciudad Universitaria']
    },
    {name: 'CAD', x: 927, y: 405, connected: ['AV. El Dorado', 'Paloquemao']},
    {name: 'Paloquemao', x: 961, y: 405, connected: ['CAD', 'Ricaurte (E)']},
    {
        name: 'Ricaurte (E)',
        x: 998,
        y: 405,
        connected: ['Paloquemao', 'Ricaurte (F)', 'Guatoque - Veraguas', 'Comuneros']
    },
    //E CL 6
    {
        name: 'Tygua - San José',
        x: 1047,
        y: 300,
        connected: ['Tercer Milenio', 'San Victorino', 'Bicentenario', 'Hospital', 'Guatoque - Veraguas']
    },
    {
        name: 'Guatoque - Veraguas',
        x: 1047,
        y: 350,
        connected: ['Tygua - San José', 'Ricaurte (E)', 'Comuneros']
    },
    //G NQS Sur
    {
        name: 'Comuneros',
        x: 1069,
        y: 405,
        connected: ['Ricaurte (E)', 'Guatoque - Veraguas', 'Santa Isabel']
    },
    {name: 'Santa Isabel', x: 1099, y: 405, connected: ['Comuneros', 'SENA']},
    {name: 'SENA', x: 1129, y: 416, connected: ['Santa Isabel', 'NQS-CL 30 S.']},
    {name: 'NQS-CL 30 S.', x: 1154, y: 440, connected: ['SENA', 'NQS-CL 38A S.']},
    {name: 'NQS-CL 38A S.', x: 1178, y: 464, connected: ['NQS-CL 30 S.', 'General Santander']},
    {name: 'General Santander', x: 1203, y: 487, connected: ['NQS-CL 38A S.', 'Alquería']},
    {name: 'Alquería', x: 1213, y: 502, connected: ['General Santander', 'Venecia']},
    {name: 'Venecia', x: 1216, y: 522, connected: ['Alquería', 'Sevillana']},
    {name: 'Sevillana', x: 1216, y: 554, connected: ['Venecia', 'Madelena']},
    {name: 'Madelena', x: 1216, y: 588, connected: ['Sevillana', 'Perdomo']},
    {name: 'Perdomo', x: 1216, y: 622, connected: ['Madelena', 'Portal del Sur']},
    {name: 'Portal del Sur', x: 1216, y: 654, connected: ['Perdomo', 'Bosa']},
    //G Soacha
    {name: 'Bosa', x: 1245, y: 708, connected: ['Portal del Sur', 'La Despensa']},
    {name: 'La Despensa', x: 1277, y: 740, connected: ['Bosa', 'Leon XIII']},
    {name: 'Leon XIII', x: 1305, y: 768, connected: ['La Despensa', 'Terreros - Hospital C.V.']},
    {name: 'Terreros - Hospital C.V.', x: 1332, y: 795, connected: ['Leon XIII', 'San Mateo']},
    {name: 'San Mateo', x: 1358, y: 822, connected: ['Terreros - Hospital C.V.']},
    //C Suba
    {
        name: 'San Martín',
        x: 471,
        y: 405,
        connected: ['NQS - Calle 75', 'Esc. Militar', 'Rionegro']
    },
    {name: 'Rionegro', x: 440, y: 405, connected: ['San Martín', 'Suba - CL 95']},
    {name: 'Suba - CL 95', x: 408, y: 405, connected: ['Rionegro', 'Suba - CL 100']},
    {name: 'Suba - CL 100', x: 377, y: 405, connected: ['Suba - CL 95', 'Puentelargo']},
    {name: 'Puentelargo', x: 346, y: 405, connected: ['Suba - CL 100', 'Shaio']},
    {name: 'Shaio', x: 315, y: 405, connected: ['Puentelargo', 'Humedal Córdova']},
    {name: 'Humedal Córdova', x: 285, y: 420, connected: ['Shaio', 'Niza - CL 127']},
    {name: 'Niza - CL 127', x: 262, y: 442, connected: ['Humedal Córdova', 'Suba - AV. Boyacá']},
    {name: 'Suba - AV. Boyacá', x: 238, y: 467, connected: ['Niza - CL 127', 'Gratamira']},
    {name: 'Gratamira', x: 229, y: 489, connected: ['Suba - AV. Boyacá', '21 Ángeles']},
    {name: '21 Ángeles', x: 229, y: 518, connected: ['Gratamira', 'Suba - TV 91']},
    {name: 'Suba - TV 91', x: 229, y: 547, connected: ['21 Ángeles', 'La Campiña']},
    {name: 'La Campiña', x: 229, y: 575, connected: ['Suba - TV 91', 'Portal de Suba']},
    {name: 'Portal de Suba', x: 229, y: 603, connected: ['La Campiña']},
    //D CL 80
    {
        name: 'Polo',
        x: 585,
        y: 328,
        connected: ['Héroes', 'Calle 76', 'Esc. Militar']
    },
    {
        name: 'Esc. Militar',
        x: 521,
        y: 415,
        connected: ['Polo', 'San Martín', 'NQS - Calle 75', 'Carrera 47']
    },
    {name: 'Carrera 47', x: 493, y: 444, connected: ['Esc. Militar', 'Carrera 53']},
    {name: 'Carrera 53', x: 470, y: 467, connected: ['Carrera 47', 'Avenida 68']},
    {name: 'Avenida 68', x: 446, y: 490, connected: ['Carrera 53', 'Ferias']},
    {name: 'Ferias', x: 424, y: 512, connected: ['Avenida 68', 'Boyacá']},
    {name: 'Boyacá', x: 401, y: 534, connected: ['Ferias', 'Minuto de Dios']},
    {name: 'Minuto de Dios', x: 380, y: 574, connected: ['Boyacá', 'Granja - Carrera 77']},
    {name: 'Granja - Carrera 77', x: 380, y: 603, connected: ['Minuto de Dios', 'Avenida Cali']},
    {name: 'Avenida Cali', x: 380, y: 633, connected: ['Granja - Carrera 77', 'Carrera 90']},
    {name: 'Carrera 90', x: 380, y: 663, connected: ['Avenida Cali', 'Quirigua']},
    {name: 'Quirigua', x: 380, y: 692, connected: ['Carrera 90', 'Portal de la 80']},
    {name: 'Portal de la 80', x: 380, y: 721, connected: ['Quirigua']},
    //K Cl 26
    {
        name: 'Universidades',
        x: 899,
        y: 44,
        connected: ['Museo Nacional', 'San Diego', 'Calle 26', 'Calle 22', 'Las Aguas', 'Centro Memoria']
    },
    {
        name: 'Centro Memoria',
        x: 899,
        y: 305,
        connected: ['Museo Nacional', 'San Diego', 'Universidades', 'Calle 26', 'Calle 22', 'Plaza de la Democracia']
    },
    {name: 'Plaza de la Democracia', x: 899, y: 351, connected: ['Centro Memoria', 'Ciudad Universitaria']},
    {
        name: 'Ciudad Universitaria',
        x: 850,
        y: 467,
        connected: ['Plaza de la Democracia', 'Corferias', 'U. Nacional', 'AV. El Dorado']
    },
    {name: 'Corferias', x: 822, y: 503, connected: ['Ciudad Universitaria', 'Quinta Paredes']},
    {name: 'Quinta Paredes', x: 794, y: 538, connected: ['Corferias', 'Gobernación']},
    {name: 'Gobernación', x: 772, y: 570, connected: ['Quinta Paredes', 'CAN']},
    {name: 'CAN', x: 772, y: 606, connected: ['Gobernación', 'Salitre - El Greco']},
    {name: 'Salitre - El Greco', x: 772, y: 642, connected: ['CAN', 'El Tiempo - Maloka']},
    {name: 'El Tiempo - Maloka', x: 772, y: 678, connected: ['Salitre - El Greco', 'AV. Rojas']},
    {name: 'AV. Rojas', x: 772, y: 715, connected: ['El Tiempo - Maloka', 'Normandia']},
    {name: 'Normandia', x: 772, y: 751, connected: ['AV. Rojas', 'Modelia']},
    {name: 'Modelia', x: 772, y: 787, connected: ['Normandia', 'Portal ElDorado']},
    {name: 'Portal ElDorado', x: 772, y: 827, connected: ['Modelia', 'Aeropuerto ElDorado']},
    {name: 'Aeropuerto ElDorado', x: 772, y: 887, connected: ['Portal ElDorado']},
    //J Eje Ambiental
    {
        name: 'Las Aguas',
        x: 920,
        y: 44,
        connected: ['Universidades', 'Museo del Oro']
    },
    {
        name: 'Museo del Oro',
        x: 960,
        y: 87,
        connected: ['Las Aguas', 'Las Nieves', 'San Victorino', 'AV. Jiménez (J)']
    },
    {
        name: 'AV. Jiménez (J)',
        x: 984,
        y: 231,
        connected: ['Museo del Oro', 'De La Sabana', 'AV. Jiménez (A)']
    },
    //F Americas
    {name: 'De La Sabana', x: 984, y: 303, connected: ['AV. Jiménez (J)', 'San Façon - KR 22']},
    {name: 'San Façon - KR 22', x: 984, y: 345, connected: ['De La Sabana', 'Ricaurte (F)']},
    {
        name: 'Ricaurte (F)',
        x: 984,
        y: 390,
        connected: ['San Façon - KR 22', 'CDS - Carrera 32', 'Ricaurte (E)']
    },
    {name: 'CDS - Carrera 32', x: 984, y: 453, connected: ['Ricaurte (F)', 'Zona Industrial']},
    {name: 'Zona Industrial', x: 984, y: 479, connected: ['CDS - Carrera 32', 'Carrera 43']},
    {name: 'Carrera 43', x: 984, y: 506, connected: ['Zona Industrial', 'Puente Aranda']},
    {name: 'Puente Aranda', x: 984, y: 535, connected: ['Carrera 43', 'Américas - KR 53A']},
    {name: 'Américas - KR 53A', x: 998, y: 566, connected: ['Puente Aranda', 'Pradera']},
    {name: 'Pradera', x: 1022, y: 590, connected: ['Américas - KR 53A', 'Marsella']},
    {name: 'Marsella', x: 1046, y: 615, connected: ['Pradera', 'Mundo Aventura']},
    {name: 'Mundo Aventura', x: 1069, y: 638, connected: ['Marsella', 'Mandalay']},
    {name: 'Mandalay', x: 1094, y: 664, connected: ['Mundo Aventura', 'Banderas']},
    {name: 'Banderas', x: 1108, y: 696, connected: ['Mandalay', 'Transversal 68']},
    {name: 'Transversal 68', x: 1108, y: 731, connected: ['Banderas', 'Bibliteca Tintal']},
    {name: 'Bibliteca Tintal', x: 1112, y: 760, connected: ['Transversal 68', 'Patio Bonito']},
    {name: 'Patio Bonito', x: 1146, y: 763, connected: ['Bibliteca Tintal', 'Portal de las Américas']},
    {name: 'Portal de las Américas', x: 1184, y: 763, connected: ['Patio Bonito']}
];
