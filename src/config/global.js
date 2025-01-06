export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Conceptos fundamentales y clasificación de los bienes',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Definición de bienes, según el Código Civil',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Clasificación de bienes: muebles, inmuebles, fungibles, consumibles y divisibles',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Clasificación general: bienes corporales e incorporales',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Clasificación, según su movilidad',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Clasificación, según el uso',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Clasificación, según la fungibilidad',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Clasificación, según divisibilidad',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Clasificación, según su situación jurídica',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Propiedades comunes y privadas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Campos Lozada, M. (2017). Bienes y derechos reales. IURE Editores. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/40193',
    },
    {
      referencia:
        'Larrea Holguín, J. (2008). Manual elemental de Derecho Civil 3. Volumen 3: los bienes y la posesión. Corporación de Estudios y Publicaciones.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/11504',
    },
    {
      referencia:
        'Medina Pabón, J. E. (2019). Derecho Civil. Bienes. Derechos reales (2 ed.). Universidad del Rosario. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/117630',
    },
  ],
  glosario: [
    {
      termino: 'Apropiabilidad',
      significado:
        'Capacidad de un bien para ser poseído por una persona física o jurídica, siendo objeto de relaciones patrimoniales.',
    },
    {
      termino: 'Bien común',
      significado:
        'Bien destinado al uso colectivo, como carreteras, ríos o parques, regulados para garantizar el interés general.',
    },
    {
      termino: 'Bien corpóreo',
      significado:
        'Bien que tiene existencia física y puede ser percibido por los sentidos, como un inmueble o un vehículo..',
    },
    {
      termino: 'Bien incorporal',
      significado:
        'Bien intangible que representa derechos o intereses económicos, como una servidumbre o un crédito.',
    },
    {
      termino: 'Bien mueble',
      significado:
        'Objeto que puede ser trasladado de un lugar a otro, sin perder su esencia, como un vehículo o una joya.',
    },
    {
      termino: 'Bien privado',
      significado:
        'Propiedad exclusiva de una persona natural o jurídica, que goza de derechos de uso, disfrute y disposición.',
    },
    {
      termino: 'Bien público',
      significado:
        'Propiedad del Estado, destinada al uso de toda la población, protegida por su inalienabilidad e imprescriptibilidad.',
    },
    {
      termino: 'Clasificación de bienes',
      significado:
        'Organización de los bienes jurídicos, según características como movilidad, divisibilidad, fungibilidad y uso.',
    },
    {
      termino: 'Código civil',
      significado:
        'Conjunto de normas que regulan las relaciones patrimoniales y personales, entre individuos, incluyendo la propiedad.',
    },
    {
      termino: 'Expropiación',
      significado:
        'Mecanismo mediante el cual el Estado adquiere un bien privado por razones de utilidad pública o interés social, con indemnización previa.',
    },
    {
      termino: 'Función social de la propiedad',
      significado:
        'Principio constitucional que condiciona el ejercicio de la propiedad privada, al bienestar colectivo y el interés general.',
    },
    {
      termino: 'Propiedad horizontal',
      significado:
        'Régimen legal aplicable a edificios y conjuntos residenciales, donde existen áreas privadas y comunes, gestionadas colectivamente.',
    },
    {
      termino: 'Propiedad privada',
      significado:
        'Derecho exclusivo de una persona sobre un bien, que le otorga facultades de uso, goce y disposición, sujeto a restricciones legales.',
    },
    {
      termino: 'Propiedad pública',
      significado:
        'Bienes que pertenecen al Estado, destinados a satisfacer necesidades colectivas y protegidos por su carácter imprescriptible.',
    },
    {
      termino: 'Restricción legal',
      significado:
        'Limitación impuesta al ejercicio del derecho de propiedad para proteger intereses colectivos, como las normas ambientales o urbanísticas.',
    },
    {
      termino: 'Servidumbre',
      significado:
        'Derecho que permite el uso parcial de un bien ajeno, como el paso de tuberías o acceso a caminos, en beneficio de otro predio o persona.',
    },
  ],
}
