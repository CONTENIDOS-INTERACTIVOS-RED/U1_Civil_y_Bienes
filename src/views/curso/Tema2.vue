<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Clasificación de bienes: muebles, inmuebles, fungibles, consumibles y divisibles'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden


    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg.p-4.px-5.order-2(data-aos="fade-right")
          p.mb-0 El estudio de la clasificación de los bienes en el Derecho Civil, es fundamental para comprender su tratamiento jurídico y su impacto en las relaciones sociales y patrimoniales. La categorización de los bienes no es solo un ejercicio académico; su utilidad práctica reside en delimitar las normas aplicables a cada tipo de bien, facilitando la administración de la justicia y garantizando la seguridad jurídica, en las transacciones económicas. En el caso del Derecho Civil Colombiano, el Código Civil establece criterios claros para la clasificación de bienes, destacando categorías como bienes muebles, inmuebles, fungibles, consumibles y divisibles.
        .col-lg-auto.order-1(data-aos="fade-left")
          figure
            img(src='@/assets/curso/tema2/1.png', alt='')
    
    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Clasificación general: bienes corporales e incorporales

    p.mb-5 El Código Civil Colombiano, en su Artículo 653, establece una primera distinción entre bienes corporales e incorporales:

    .row.mb-5.justify-content-center
      .col-lg-4.mb-3(data-aos="flip-left")
        div.h-100.bg-color-8.p-4.tarjeta.mb-3
          p #[strong Bienes corporales]
          p.mb-0 Aquellos que tienen un ser real y pueden ser percibidos por los sentidos, como una casa, un libro o un carro.
      .col-md-8.col-lg-4.mb-3(data-aos="flip-right").align-content-center
        figure
          img.d-flex(src="@/assets/curso/tema2/2.png")
      .col-lg-4.mb-3(data-aos="flip-right")
        div.h-100.bg-color-8.p-4.tarjeta.mb-3
          p #[strong Bienes incorporales]
          p.mb-0 Consisten en meros derechos, como los créditos y las servidumbres activas.
    
    h2(data-aos="fade-right").mb-5 Bienes incorporales

    p Los bienes incorporales no poseen una existencia física, pero tienen una realidad jurídica y un valor económico. Ejemplos incluyen servidumbres, derechos de crédito, marcas comerciales y la reputación de un establecimiento de comercio. Estos bienes, aunque intangibles, forman parte del patrimonio de las personas y son fundamentales en las relaciones jurídicas.
    p.mb-5 Clasificación de los bienes incorporales:

    TabsC.color-primario.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Derechos reales" :icon="require('@/assets/bullets/icon-tab-c-4.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Derechos reales
            p Son aquellos que una persona tiene directamente sobre una cosa, sin depender de una relación con otra persona. 
            p <b>Ejemplo:</b> la propiedad o el usufructo.
        
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/3.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Propiedad" :icon="require('@/assets/bullets/icon-tab-c-4.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Derechos personales
            p Son los que una persona puede exigir a otra, en virtud de una obligación.  
            p <b>Ejemplo:</b> el pago de un arrendamiento.

          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/4.png', alt='')

    h2(data-aos="fade-right").mb-5 Bienes corporales

    .row.mb-5.justify-content-center
      .col-lg-10(data-aos="fade-right")
        p Los bienes corporales, son aquellos que tienen una existencia física, están compuestos por materia, ocupan un espacio y pueden ser percibidos por los sentidos. Su presencia tangible los convierte en una categoría esencial dentro del Derecho Civil, dado que son la base de muchas relaciones jurídicas patrimoniales.
      .col-md-8.col-lg-2(data-aos="fade-left")
        figure
         img(src="@/assets/curso/tema2/5.png", alt="").mb-4.mb-lg-0
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Clasificación, según su movilidad

    p.mb-5 El Artículo 654 del Código Civil Colombiano, divide las cosas corporales en muebles e inmuebles. La movilidad de los bienes corporales se refiere a su capacidad de ser transportados de un lugar a otro, sin perder su esencia.

    h2(data-aos="fade-right").mb-5 Bienes inmuebles

    p.mb-5 El Artículo 656, define los inmuebles como aquellos bienes que no pueden ser movidos de un lugar a otro, sin alterar su naturaleza. Son ejemplos de estos, las tierras, edificios, plantaciones y las minas. Los tipos de bienes inmuebles son:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white(data-aos="flip-up")
          .row.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema2/6.png")
            .col-lg-7
              h5 Por naturaleza
              p Terrenos y tierras que permanecen inmóviles.
          .row.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema2/7.png")
            .col-lg-7
              h5 Por adhesión
              p Bienes unidos de manera permanente al suelo, como construcciones o árboles.
          .row.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema2/8.png")
            .col-lg-7
              h5 Por destinación
              p Bienes muebles que se consideran inmuebles, por su asociación con un inmueble, como maquinaria agrícola.

    h2(data-aos="fade-right").mb-5 Bienes muebles

    .row.align-items-center.bg-ppal-azul.p-4.mb-5
      .col-lg-auto(data-aos="fade-right")
        img(src="@/assets/curso/tema2/9.svg", style="max-width: 90px").mx-auto
      .col-lg.mb-3
        p.mb-0 Son bienes que pueden ser desplazados de un lugar a otro, sin perder su esencia, como vehículos, muebles y objetos personales.

   
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5.pb-md-3  
        #t_2_3.titulo-segundo(data-aos="flip-up")
          h2 #[span 2.3] Clasificación, según el uso

        p.mb-5 La clasificación de bienes, según el uso, se fundamenta en su capacidad de ser consumidos o reutilizados. Esto resulta esencial para definir su función en contratos civiles y comerciales.


        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/10.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Bienes consumibles
                p.mb-0 Son bienes que se destruyen o agotan con su primer uso, como alimentos, combustibles o productos de limpieza.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/11.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Bienes no consumibles
                p.mb-0 Son bienes que pueden ser usados repetidamente, sin destruirse, como herramientas, maquinaria o muebles.
    
    .row.mb-5
      .col-xl-7
        .titulo-figura.mb-4
          h5 Tabla 1. 
          span Diferencias claves entre bienes consumibles y no consumibles 

        .tabla-a.color-terciario.mb-5(data-aos="zoom-in") 
          table
            thead
              tr
                th.bg-color-4 Característica
                th.bg-color-4 Consumibles
                th.bg-color-4 No consumibles
            tbody
              tr.bg-color-5
                td.text-bold Naturaleza
                td Perecederos.
                td Duraderos.
                
              tr.bg-color-5
                td.text-bold Uso
                td Se agotan con el uso.
                td Reutilizables.
              
              tr.bg-color-5
                td.text-bold Contratos típicos
                td Compraventa, permuta.
                td Comodato, arrendamiento.
              tr.bg-color-5
                td.text-bold Restitución
                td Imposible.
                td Posible.
    
    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Clasificación, según la fungibilidad

    .row.mb-5.justify-content-center
      .col-lg-10.order-2(data-aos="fade-right")
        p La fungibilidad de un bien se refiere a su capacidad para ser reemplazado por otro de la misma especie, calidad y cantidad. Esta clasificación resulta crucial en contratos donde se intercambian bienes idénticos o únicos.
      .col-md-8.col-lg-2.order-1(data-aos="fade-left")
        figure
         img(src="@/assets/curso/tema2/12.png", alt="").mb-4.mb-lg-0
    
    .row.mb-5
      .col-xl-7
        .titulo-figura.mb-4
          h5 Tabla 2. 
          span Diferencias claves entre bienes fungibles y no fungibles 

        .tabla-a.color-terciario.mb-5(data-aos="zoom-in") 
          table
            thead
              tr
                th.bg-color-4 Aspecto
                th.bg-color-4 Bienes fungibles
                th.bg-color-4 Bienes no fungibles
            tbody
              tr.bg-color-5
                td.text-bold Intercambiabilidad
                td Sí.
                td No.
                
              tr.bg-color-5
                td.text-bold Medición
                td Por peso o número.
                td Individualmente.
              
              tr.bg-color-5
                td.text-bold Contrato típico
                td Mutuo.
                td Comodato, arrendamiento.
    
    #t_2_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.5] Clasificación, según divisibilidad
    
    p.mb-5 La divisibilidad de un bien se determina por su capacidad de fraccionarse sin perder su utilidad o valor.

    .row.align-items-start.mb-5.justify-content-center
      .col-md-8.col-lg-5.mb-3(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema2/13.png", alt="").mb-4.mb-lg-0
      .col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Bienes divisibles")
            p Son bienes que pueden fraccionarse en partes, sin perder su utilidad o valor proporcional, como un terreno. 
          .div(titulo="Bienes indivisibles")
            p Son bienes que no pueden dividirse sin perder su esencia o funcionalidad, como un automóvil o una joya.
    
    .row.mb-5
      .col-xl-7
        .titulo-figura.mb-4
          h5 Tabla 3. 
          span Diferencias claves entre bienes divisibles e indivisibles 

        .tabla-a.color-terciario.mb-5(data-aos="zoom-in") 
          table
            thead
              tr
                th.bg-color-4 Aspecto
                th.bg-color-4 Bienes divisibles
                th.bg-color-4 Bienes indivisibles
            tbody
              tr.bg-color-5
                td.text-bold Fraccionamiento
                td Posible.
                td Imposible.
              tr.bg-color-5
                td.text-bold Resolución legal
                td Se adjudican en partes.
                td Se adjudican íntegros.

    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5.pb-md-3  
        #t_2_6.titulo-segundo(data-aos="flip-up")
          h2 #[span 2.6] Clasificación, según su situación jurídica
        
        p.mb-5 Esta clasificación analiza si un bien pertenece al dominio público o al privado, lo cual determina su uso y su regulación.

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/14.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Bienes de dominio público
                p.mb-0 Son aquellos que pertenecen al Estado y están destinados al uso común, como carreteras y ríos.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/15.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Bienes de dominio privado
                p.mb-0 Son bienes que pertenecen a particulares y se utilizan para fines personales o comerciales.

              
  

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/56781" target="_blank" rel="noopener noreferrer") Lacruz J. (2012). Nociones de derecho civil patrimonial e introducción al derecho (7 ed.). Dykinson
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://derechocivil2ula.blogspot.com/" target="_blank" rel="noopener noreferrer") Aula de Derecho Civil. (2015). Bienes y Derechos Reales (blog). 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.lexisnexis.com/en-us/gateway.page" target="_blank" rel="noopener noreferrer") Orientaciones sobre análisis de bienes 
            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/OIIxj60kXeA?si=RMv3D25DRPG6yIEq" target="_blank" rel="noopener noreferrer") Báez J. (2021). CLASIFICACIÓN JURÍDICA DE LOS BIENES.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
