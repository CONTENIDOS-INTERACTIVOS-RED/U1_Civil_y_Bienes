export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Derechos reales y usufructo',
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
        titulo: 'Derechos reales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Propiedad y posesión',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Posesión y propiedad inmueble: una relación compleja y necesaria',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Usufructo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Servidumbres: constitución y extinción',
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
        'Clemente Meoro, M. (2016). Cuaderno V: derechos reales limitados de goce. Dykinson.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/63073 ',
    },
    {
      referencia:
        'Santillán Santa Cruz, R. V. (2011). ¿Puede vulnerarse la libertad de tránsito del propietario del predio sirviente al no permitírsele circular por una servidumbre de paso constituida sobre su predio a favor de otro? Comentario a la STC Exp. Nº 02006-2011-PHC/TC. Revista de Investigación Jur. Red Universidad Católica Santo Toribio de Mogrovejo. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/28010 ',
    },
    {
      referencia: 'Rogel Vide, C. (2015). La nuda propiedad. Editorial Reus. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/46602 ',
    },
  ],
  glosario: [
    {
      termino: 'Accesoriedad',
      significado:
        'Característica de ciertos derechos reales, como las servidumbres, que están vinculados a los bienes (predios) y no a las personas, permaneciendo inalterados aunque cambie el propietario.',
    },
    {
      termino: 'Bienes',
      significado:
        'Todo aquello que puede ser objeto de apropiación y que satisface necesidades humanas, clasificándose en muebles, inmuebles, tangibles o intangibles.',
    },
    {
      termino: 'Código Civil Colombiano',
      significado:
        'Conjunto de normas que regula las relaciones jurídicas entre personas y bienes en Colombia, incluyendo derechos reales como la propiedad, posesión, usufructo y servidumbres.',
    },
    {
      termino: 'Confusión',
      significado:
        'Extinción de una servidumbre cuando el predio dominante y el predio sirviente pasan a ser propiedad de la misma persona.',
    },
    {
      termino: 'Derechos reales',
      significado:
        'Derechos que otorgan a una persona un poder directo e inmediato sobre un bien, como la propiedad, la posesión, el usufructo y las servidumbres.',
    },
    {
      termino: 'Función social de la propiedad',
      significado:
        'Limitación legal al derecho de propiedad que exige que su uso beneficie no solo al propietario sino también a la sociedad, regulado en el Artículo 58 de la constitución de Colombia.',
    },
    {
      termino: 'Indivisibilidad',
      significado:
        'Propiedad de ciertos derechos, como las servidumbres, que no pueden dividirse en su ejercicio, beneficiando al predio dominante en su totalidad.',
    },
    {
      termino: 'Nudo propietario',
      significado:
        'Propietario de un bien gravado con un usufructo, que conserva la titularidad pero no el derecho al uso y disfrute durante la vigencia del usufructo.',
    },
    {
      termino: 'Prescripción adquisitiva',
      significado:
        'Mecanismo legal mediante el cual una persona adquiere la propiedad de un bien tras poseerlo de manera pacífica, continua y pública durante un tiempo determinado.',
    },
    {
      termino: 'Propiedad',
      significado:
        'Derecho real que otorga a su titular el uso, goce y disposición de un bien, limitado por la ley y el respeto a los derechos de terceros.',
    },
    {
      termino: 'Posesión',
      significado:
        'Tenencia de un bien con ánimo de señor y dueño, aunque no se cuente con un título legal que respalde la propiedad.',
    },
    {
      termino: 'Predio dominante',
      significado:
        'Bien inmueble que se beneficia de una servidumbre, como el derecho de paso sobre un predio vecino.',
    },
    {
      termino: 'Predio sirviente',
      significado:
        'Bien inmueble que soporta una servidumbre, como permitir el paso de vehículos o personas de un predio dominante.',
    },
    {
      termino: 'Temporalidad del usufructo',
      significado:
        'Característica del usufructo que lo limita a un periodo específico, ya sea un plazo definido o vitalicio.',
    },
    {
      termino: 'Servidumbres',
      significado:
        'Derechos reales que permiten al propietario de un bien (predio dominante) beneficiarse del uso de otro bien ajeno (predio sirviente).',
    },
    {
      termino: 'Usufructo',
      significado:
        'Derecho real que otorga a una persona el uso y disfrute de un bien ajeno, respetando su esencia y devolviéndole al propietario al finalizar el usufructo.',
    },
    {
      termino: 'Usucapión',
      significado:
        'Forma de prescripción adquisitiva que permite a una persona convertirse en propietario de un bien tras poseerlo pacífica y continuamente durante el tiempo exigido por la ley.',
    },
    {
      termino: 'Vinculación jurídica',
      significado:
        'Relación legal que se establece entre una persona y un bien, como en los derechos reales, que permite su uso, disfrute o disposición.',
    },
  ],
}
