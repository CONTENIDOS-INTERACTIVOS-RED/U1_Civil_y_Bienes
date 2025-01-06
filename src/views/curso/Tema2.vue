<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Usufructo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden


    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg.p-4.px-5.mb-3(data-aos="fade-right")
          p.mb-0 El usufructo es un derecho real que permite a una persona, conocida como usufructuario, usar y disfrutar de un bien ajeno, respetando su esencia y devolviéndolo al propietario, denominado nudo propietario, al finalizar el periodo estipulado por contrato o por la Ley. Este derecho se aplica tanto a bienes muebles como inmuebles, e incluso a derechos específicos o patrimonios completos. Un ejemplo común es cuando una persona puede vivir en una casa que no le pertenece, beneficiándose de ella sin tener el poder de venderla o hipotecarla.
        .col-lg-auto(data-aos="fade-left")
          figure
            img(src='@/assets/curso/tema2/1.png', alt='')
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white(data-aos="flip-up")
          .row.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema2/2.png")
            .col-lg-7
              h5 Temporalidad
              p El usufructo tiene una duración limitada, ya sea por un periodo específico o de manera vitalicia, al término de la cual, el bien regresa al nudo propietario. 
              p <b>Ejemplo:</b> un usufructo sobre una vivienda por 15 años, permite al usufructuario disfrutar de ella durante ese tiempo, debiendo devolverla al propietario, al finalizar el tiempo definido.
          .row.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema2/3.png")
            .col-lg-7
              h5 Frutos del bien
              p El usufructuario tiene derecho a percibir los frutos naturales, industriales o civiles, generados por el bien, respetando su esencia. 
              p <b>Ejemplo:</b> un usufructo sobre una finca permite al usufructuario beneficiarse de las cosechas, mientras no altere el uso agrícola del terreno.
          .row.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema2/4.png")
            .col-lg-7
              h5 Limitación en la disposición
              p El usufructuario no puede vender, hipotecar ni modificar el bien sin autorización, pero puede ceder su derecho de usufructo a terceros. 
              p <b>Ejemplo:</b> un usufructuario puede arrendar un apartamento objeto del usufructo, pero no puede venderlo.
          .row.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema2/5.png")
            .col-lg-7
              h5 Conservación del bien
              p El usufructuario debe realizar reparaciones ordinarias y mantener el bien en buen estado, mientras que el propietario se encarga de las reparaciones mayores.
              p <b>Ejemplo:</b> si un usufructo recae sobre un apartamento, el usufructuario debe cubrir los costos de pintura o cambio de griferías, pero no de reparaciones estructurales.

          .row.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema2/6.png")
            .col-lg-7
              h5 Reversibilidad
              p Al finalizar el usufructo, el bien regresa al nudo propietario en condiciones similares a las originales, salvo deterioros naturales por el uso permitido. 
              p <b>Ejemplo:</b> un usufructuario que dañó el inmueble, está obligado a repararlo antes de devolverlo al propietario.
    
    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3

        h2.mb-5(data-aos="fade-right") Regulación en Colombia

        p.mb-5 En el marco legal colombiano, el usufructo está regulado por los Artículos 823 y siguientes, del Código Civil. Este derecho puede constituirse de diversas formas:

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-ppal-azul.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/7.svg"
                alt=""
                style="width: 90px"
              )
              p.text-center.text-bold Usufructo legal
              p.mb-0.text-center Surge por disposición de la ley en situaciones específicas.
              p.text-center <b><b>Ejemplo:</b></b> los padres tienen el usufructo de los bienes de sus hijos menores, según el Artículo 253 del Código Civil.

          
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-ppal-azul.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/8.svg"
                alt=""
                style="width: 90px"
              )
              p.text-center.text-bold Usufructo voluntario
              p.mb-0.text-center Se establece mediante contrato o testamento, especificando las condiciones y duración del derecho.
              p.text-center <b><b>Ejemplo:</b></b> un testador otorga el usufructo vitalicio de una vivienda a su cónyuge, mientras que los hijos reciben la nuda propiedad.

          
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-ppal-azul.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/9.svg"
                alt=""
                style="width: 90px"
              )
              p.text-center.text-bold Usufructo por prescripción
              p.mb-0.text-center Se adquiere mediante posesión prolongada y pacífica con ánimo de usufructuario, cumpliendo requisitos legales.
              p.text-center <b><b>Ejemplo:</b></b> una persona que ha usufructuado un terreno por más de 10 años, podría regularizar su derecho si se cumplen las condiciones legales

    p.mb-5 El usufructo puede recaer sobre diferentes tipos de bienes, como viviendas, terrenos, cuentas de inversión o colecciones de arte. Sin importar el objeto, el usufructuario tiene la obligación de respetar la naturaleza del bien y garantizar su adecuada conservación.

    .row.mb-5.justify-content-center
      .col-lg-10
        .titulo-figura.mb-4
          h5 Tabla 3. 
          span Obligaciones del usufructuario y del propietario 

        .tabla-a.color-terciario.mb-5(data-aos="zoom-in") 
          table
            thead
              tr
                th.bg-color-4 Obligaciones del usufructuario
                th.bg-color-4 Obligaciones del propietario
            tbody
              tr.bg-color-5
                td Mantener el bien en buen estado y realizar reparaciones ordinarias.
                td Realizar reparaciones extraordinarias necesarias para conservar el bien.
                
              tr.bg-color-5
                td Respetar la naturaleza y el destino del bien, evitando alteraciones.
                td No interferir en el disfrute del usufructuario mientras este cumpla con sus obligaciones.
              
              tr.bg-color-5
                td Restituir el bien en condiciones originales o pactadas al término del usufructo.
                td Garantizar que el usufructuario pueda ejercer su derecho de manera plena y pacífica.
                
    h2.mb-5(data-aos="fade-right") Extinción del usufructo

    p.mb-5 El usufructo puede terminar por diversas razones, establecidas en el Artículo 866 del Código Civil:
    
    .row.mb-5.justify-content-center
      .col-md-6.col-lg-5.mb-3.col-xl-3(data-aos="fade-up")
        figure
          img(src="@/assets/curso/tema2/10-1.svg")
      .col-md-6.col-lg-5.mb-3.col-xl-3(data-aos="fade-down")
        figure
          img(src="@/assets/curso/tema2/10-2.svg")
      .col-md-6.col-lg-5.mb-3.col-xl-3(data-aos="fade-up")
        figure
          img(src="@/assets/curso/tema2/10-3.svg")
      .col-md-6.col-lg-5.mb-3.col-xl-3(data-aos="fade-down")
        figure
          img(src="@/assets/curso/tema2/10-4.svg")


    h2.mb-5(data-aos="fade-right") Usufructo como herramienta jurídica versátil

    p.mb-5 El usufructo tiene aplicaciones prácticas significativas, en diversos contextos:

    .row.mb-5.justify-content-center
      .col-md-8.col-lg-3.mb-3(data-aos="flip-right")
        figure
          img(src="@/assets/curso/tema2/11.png")
      .col-lg-3.mb-3(data-aos="flip-left")
        div.h-100.bg-color-1.p-4.tarjeta.mb-3
          p #[strong Protección habitacional]
          p.mb-0 Permite que una persona, como un cónyuge sobreviviente, pueda seguir viviendo en una vivienda sin ser propietario.
      .col-lg-3.mb-3(data-aos="flip-right")
        div.h-100.bg-color-1.p-4.tarjeta.mb-3
          p #[strong Explotación económica]
          p.mb-0 Facilita el uso productivo de bienes agrícolas o inmuebles, garantizando un equilibrio entre disfrute y conservación.
      .col-lg-3.mb-3(data-aos="flip-left")
        div.h-100.bg-color-1.p-4.tarjeta.mb-3
          p #[strong Planificación sucesoria]
          p.mb-0 Ofrece opciones para dividir derechos entre usufructuarios y nudo propietarios, optimizando la transferencia de bienes.

    p.mb-5 El usufructo en Colombia, representa una herramienta legal flexible y equilibrada que armoniza los intereses del usufructuario y del propietario, fomentando el uso productivo de los bienes y protegiendo los derechos de propiedad a largo plazo.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/115048" target="_blank" rel="noopener noreferrer") Larrea Holguín, J. (2008). Manual elemental de Derecho Civil 3. Volumen 5: el usufructo, derechos de uso y habitación, patrimonio familiar y las servidumbres. Corporación de Estudios y Publicaciones. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.enciclopedia-juridica.com" target="_blank" rel="noopener noreferrer") Enciclopedia Jurídica. (2020). Usufructo. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.lexisnexis.com/en-us/gateway.page" target="_blank" rel="noopener noreferrer") Orientaciones sobre analisis de bienes 
            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=U5dUoafXnZk" target="_blank" rel="noopener noreferrer") David Jiménez - Abogado Experto en Herencias. (2021). USUFRUCTO. ¿Qué es y cómo funciona?.

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
