<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Definición de bienes, según el Código Civil'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-5 En el ámbito jurídico, es fundamental distinguir entre los conceptos de cosas y bienes, ya que aunque similares, tienen connotaciones específicas dentro del Derecho Civil.

    .row.mb-5
      .col-lg-5.order-2(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/1.png", alt="").mb-4.mb-lg-0
      .col-lg-7.order-1
        p.bg-color-1.p-4 Las cosas se definen como "todo lo que tiene entidad, ya sea corporal o espiritual, natural o artificial, concreto o abstracto", según el Diccionario de la Real Academia Española. Este término abarca objetos tangibles, como una mesa, e intangibles, como una idea. Sin embargo, no todas las cosas son consideradas bienes, en el ámbito jurídico.
        p Los bienes, en cambio, son aquellas cosas que poseen valor económico y pueden ser objeto de relaciones jurídicas. Para que algo sea considerado un bien, debe cumplir ciertos requisitos: ser útil, apropiable por alguien y no estar excluido del comercio por ley o naturaleza.

    h2(data-aos="fade-right").mb-5 Características de los bienes, según el Código Civil Colombiano

    p.mb-5 El Código Civil Colombiano, inspirado en el Derecho Romano y el Código Civil Chileno, define los bienes en el Artículo 653, como:


    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5.pb-md-3
        .row.mb-5
          .col-lg-4(data-aos="fade-right")
            figure
              img(src="@/assets/curso/tema1/2.png", alt="").mb-4.mb-lg-0
          .col-lg-8.bg-color-2.p-4.align-content-center
            p.mb-0 "Los bienes consisten en cosas corporales e incorporales. Corporales, son las que tienen un ser real y pueden ser percibidas por los sentidos, como una casa, un libro. Incorporales, son las que consisten en meros derechos, como los créditos y las servidumbres activas".
              
        p.mb-5.text-bold Esta definición destaca dos categorías principales:

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/3.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Bienes corporales
                p.mb-0 Elementos tangibles que pueden percibirse físicamente (casas, automóviles, joyas).
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/4.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Bienes incorporales
                p.mb-0 Derechos abstractos con valor económico (créditos, derechos de autor, servidumbres).

    h2(data-aos="fade-right").mb-5 Elementos fundamentales de los bienes jurídicos

    p.mb-5 Para que algo sea considerado un bien jurídico en Colombia, debe cumplir con los siguientes requisitos:

    .row.align-items-center.bg-ppal-azul.p-4.mb-5
      .col-lg-auto(data-aos="fade-right")
        img(src="@/assets/curso/tema1/5.svg", style="max-width: 90px").mx-auto
      .col-lg.mb-3
        ul.lista-ul.mb-0
          li.mb-0.d-flex
            i.lista-ul__vineta
            p.mb-0 <b>Apropiabilidad.</b> Ser susceptible de pertenecer a una persona física o jurídica.
          li.mb-0.d-flex
            i.lista-ul__vineta
            p.mb-0 <b>Utilidad.</b> Satisfacer necesidades humanas.
          li.mb-0.d-flex
            i.lista-ul__vineta
            p.mb-0 <b>Valoración económica</b> Tener un valor monetario que permita incluirlo en el patrimonio.
    
    h2(data-aos="fade-right").mb-5 Historia y evolución del concepto de bienes en Colombia

    p.mb-5 El concepto de bienes, tiene raíces en el Derecho Romano, que evolucionó a través de tres etapas claves:

    .row.align-items-start.mb-5.justify-content-center
      .col-md-8.col-lg-4.mb-3.order-2(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/6.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-1(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="República")
            p Bienes tangibles administrados por el "<em>pater</em> familias". 
          .div(titulo="Imperio")
            p Inclusión de bienes adquiridos por hijos de familia, de forma independiente.
          .div(titulo="Justiniano")
            p Codificación en el <em>Corpus Iuris Civilis</em>, distinguiendo bienes susceptibles de propiedad y bienes de uso público.

    p.mb-5 El Código Civil Colombiano (1873), basado en el modelo chileno de Andrés Bello, consolidó estos principios, adoptando también las innovaciones del Código Napoleónico (1804), como la distinción entre bienes muebles, inmuebles e incorporales.

    h2(data-aos="fade-right").mb-5 Importancia de los bienes en el patrimonio

    p En Derecho Civil, los bienes forman la base del patrimonio, entendido como el conjunto de derechos y obligaciones con valor económico, de una persona. Este patrimonio tiene una función económica y social, regulando:

    .row.align-items-center.bg-ppal-azul.p-4.mb-5
      .col-lg-auto(data-aos="fade-right")
        img(src="@/assets/curso/tema1/7.svg", style="max-width: 90px").mx-auto
      .col-lg.mb-3
        ul.lista-ul.mb-0
          li.mb-0.d-flex
            i.lista-ul__vineta
            p.mb-0 <b>Relaciones de propiedad. </b> Normas para transferir bienes corporales (escritura pública, registro) o incorporales (leyes de propiedad intelectual).
          li.mb-0.d-flex
            i.lista-ul__vineta
            p.mb-0 <b>Bienes excluidos del comercio. </b> Cosas como el aire o bienes públicos (parques, carreteras) no pueden ser apropiados, garantizando su uso colectivo.

    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5.pb-md-3  
        h2(data-aos="fade-right").mb-5 Aportes doctrinales y jurisprudenciales

        p.mb-5 La doctrina colombiana ha analizado los bienes desde diferentes perspectivas:

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/8.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Doctrina
                p.mb-0 Autores como Velásquez Jaramillo y Madrid-Malo Garizábal, han destacado la adaptación del concepto a contextos económicos cambiantes.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/9.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Jurisprudencia
                p.mb-0 Las cortes han interpretado el concepto de bienes, desarrollando nociones como la función social de la propiedad y la protección de bienes culturales, ambientales y de uso público.

    p.mb-5 El concepto de bienes en el Derecho Civil Colombiano, es fundamental para estructurar las relaciones patrimoniales y económicas. Los bienes no solo representan elementos tangibles o derechos abstractos, sino que son el núcleo de la interacción jurídica y social en el ordenamiento legal del país. La definición contenida en el Artículo 653 del Código Civil, subraya su relevancia y versatilidad en el sistema jurídico.
  


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/117630" target="_blank" rel="noopener noreferrer") Medina J. (2019) Derecho Civil. Bienes. Derechos reales (2 ed.). Universidad del Rosario. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://blogs.ugto.mx/derecho/clase-digital-2-estudio-de-los-bienes/" target="_blank" rel="noopener noreferrer") Universidad de Guanajuato. (2021). Estudio de los bienes (blog).
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.thomsonreuters.cl/es-cl/productos/informacion-legal-westlaw" target="_blank" rel="noopener noreferrer") Plataforma de información y gestión legal Westlaw

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/live/YDOm4MD6Thw?si=egbRSsiXw_Y-CbhC" target="_blank" rel="noopener noreferrer") Videoconferencias. (2016). UTPL PRESENTACIÓN DERECHO CIVIL II: BIENES [(CIENCIAS JURÍDICAS)]. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
    
    

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
