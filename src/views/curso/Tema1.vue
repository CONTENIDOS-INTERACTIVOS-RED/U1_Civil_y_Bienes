<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Derechos reales'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    div(data-aos="zoom-in")
      p Los derechos reales son una categoría central en el derecho civil. Otorgan a una persona la facultad de ejercer un poder directo sobre un bien, permitiéndole usarlo, disfrutarlo o disponer de él sin depender de terceros. Este vínculo entre el sujeto y el bien es directo y oponible frente a cualquier persona, lo que garantiza su protección legal.

      p.mb-5 El término real deriva del latín res (cosa), y estos derechos se aplican tanto a bienes materiales como inmateriales. Entre sus características destacan:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white(data-aos="flip-up")
          .row.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema1/1.png")
            .col-lg-7
              h5 Oponibilidad universal
              p Todos deben respetar el derecho del titular sobre el bien. <b>Ejemplo:</b> un propietario puede impedir la ocupación no autorizada de su propiedad.
          .row.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema1/2.png")
            .col-lg-7
              h5 Derecho de persecución
              p El titular puede reclamar el bien donde sea que esté, incluso si ha sido transferido a terceros.
          .row.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema1/3.png")
            .col-lg-7
              h5 Tipicidad
              p Solo existen los derechos reales establecidos en la Ley, sin posibilidad de crear otros diferentes.
    
    h2(data-aos="fade-right") Propiedad

    p.mb-5 La propiedad es el derecho real más amplio y comprende las facultades de uso, goce y disposición del bien. El propietario puede disfrutar de sus beneficios, como rentas o utilidades, y transferirlo, según su voluntad, siempre sujeto a los límites legales.

    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5.pb-md-3
        h2(data-aos="fade-right") Posesión

        p.mb-5 La posesión implica la tenencia de un bien con ánimo de señor y dueño, aunque no siempre se cuente con un título de propiedad. Es una situación de hecho que puede generar efectos jurídicos, como la prescripción adquisitiva, si se cumplen los requisitos legales.
        
        p.mb-5.text-bold Otros derechos reales son: 

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/4.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Usufructo
                p.mb-0 Permite a alguien usar y disfrutar de un bien ajeno respetando su esencia. Por ejemplo, vivir en una casa que pertenece a otra persona, bajo un contrato de usufructo.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/5.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Servidumbres
                p.mb-0 Derechos que benefician a un bien a costa de otro, como el derecho de paso por un terreno, para acceder a una vía pública.
    
    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg.p-4.px-5.mb-3
          p.mb-0 Estos derechos son fundamentales para garantizar la estabilidad y seguridad jurídica en las relaciones patrimoniales, promoviendo el desarrollo social y económico al asegurar el uso, disfrute y transferencia de bienes, de forma regulada.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/6.png', alt='')
          

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Propiedad y posesión
    
    p.mb-5 La propiedad y la posesión son figuras esenciales en el derecho civil, que regulan la relación entre personas y bienes, garantizando el orden y la seguridad jurídica.

    TabsC.color-primario.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Propiedad" :icon="require('@/assets/bullets/icon-tab-c-4.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Propiedad
            p Según el Artículo 669 del Código Civil Colombiano, la propiedad confiere al titular el poder de usar, gozar y disponer de un bien, siempre que se respete la ley y los derechos de terceros. Este derecho es completo y exclusivo, pero limitado por normas como el interés público y las restricciones legales.
        
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/7.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Posesión" :icon="require('@/assets/bullets/icon-tab-c-4.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Posesión
            p Definida en el Artículo 762 del Código Civil, la posesión implica la tenencia de un bien con intención de actuar como su dueño, aunque no necesariamente se cuente con título legal. La posesión puede dar lugar a la adquisición de la propiedad mediante prescripción adquisitiva, siempre que se cumplan ciertos requisitos legales, como el tiempo de posesión continua y la ausencia de oposición por parte de terceros.
        
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/8.png', alt='')
    
    p.mb-5 Ambas figuras son esenciales para garantizar la convivencia y la seguridad en las transacciones patrimoniales, asegurando que los derechos de uso y disfrute de los bienes, se ejerzan dentro del marco normativo establecido.

    .bg-full-width.bg-color-3.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Evolución del concepto de propiedad y posesión
            p.mb-4(data-aos="fade-right") Se invita a reflexionar sobre la evolución histórica y contemporánea de los conceptos de propiedad y posesión, desde su origen colectivo en las primeras civilizaciones, hasta su reconocimiento como derechos individuales fundamentales, en la modernidad.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Evolución del concepto de propiedad y posesión

          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/9.png', alt='')

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Posesión y propiedad inmueble: una relación compleja y necesaria

    p.mb-5 La posesión y la propiedad, son conceptos esenciales en el derecho civil, especialmente en el ámbito inmobiliario. Aunque en teoría se trata de figuras distintas, en la práctica su relación es tan estrecha que, a menudo, parecen superponerse. 

    .row.align-items-start.mb-5.justify-content-center
      .col-md-8.col-lg-4.mb-3(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/10.png", alt="").mb-4.mb-lg-0
      .col-lg-8(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="La propiedad")
            p Como derecho real pleno, otorga al titular el uso, goce y disposición de un bien, consolidándose como la expresión más completa de control jurídico sobre un objeto. 
          .div(titulo="La posesión")
            p Se define como una relación de hecho que no necesariamente requiere un título formal. El poseedor actúa como si fuera propietario, aunque no tenga la titularidad legal que respalde su relación con el bien.
    
    p.mb-5.bg-color-1.p-4 Ambas figuras comparten un eje común: el disfrute económico del bien. Sin embargo, mientras la propiedad garantiza un derecho absoluto oponible a terceros, la posesión puede ser más limitada, dependiendo de las circunstancias legales. Además, la posesión no solo cumple una función económica al facilitar el acceso a los bienes, sino que también sirve como mecanismo para reconocer derechos en contextos de informalidad. A continuación, se detalla su relación y particularidades:

    .titulo-figura.mb-4
      h5 Tabla 1. 
      span Propiedad y posesión 

    .tabla-a.color-terciario.mb-5(data-aos="zoom-in") 
      table
        thead
          tr
            th.bg-color-4 Aspecto
            th.bg-color-4 Propiedad
            th.bg-color-4 Posesión
        tbody
          tr.bg-color-5
            td <b>Definición</b>
            td Derecho real pleno que otorga el uso, goce y disposición de un bien.
            td Relación de hecho sobre un bien, sin necesidad de título formal.
            
          tr.bg-color-5
            td <b>Protección jurídica</b> 
            td Derecho absoluto, oponible a terceros.
            td Derecho real provisional protegido por la ley.
           
          tr.bg-color-5
            td <b>Acceso al mercado</b>
            td Facilita beneficios como créditos formales y participación en el mercado inmobiliario.
            td Limitado por la ausencia de titularidad formal.
             
          tr.bg-color-5
            td <b>Herramienta legal</b> 
            td Pleno control mediante títulos de propiedad inscritos.
            td Posibilidad de adquirir la propiedad a través de la prescripción adquisitiva (usucapión).

    h2.mb-5(data-aos="fade-right") Historia y regulación de la posesión y propiedad

    .row.mb-5
      .col-lg-7.mb-3(data-aos="fade-right").order-2.order-lg-1
        p A continuación, se explora la evolución y la regulación de estos conceptos en la tradición jurídica.
        p En el <b>Derecho romano</b>, se trazaron las primeras distinciones claras entre ambas figuras. <b>La propiedad</b> (<em>dominium</em>) era el control absoluto sobre un bien, mientras que la <b>posesión</b> (<em>possessio</em>) se reconocía como una tenencia de hecho. Este sistema influyó profundamente en las codificaciones jurídicas de Europa y América Latina.
      .col-lg-5(data-aos="fade-left").order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/11.png", alt="").mb-4.mb-lg-0
    
    .row.mb-5.align-items-center
      .col-lg-4(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/12.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        p.mb-0.bg-color-2.p-5 En América Latina, los códigos civiles adoptaron la tradición romano-germánica, adaptándola a realidades locales. En países como Colombia y Perú, la posesión se ha regulado como un paso legítimo hacia la propiedad mediante herramientas como la usucapión, con requisitos como pacificidad, continuidad y publicidad.
    
    h2.mb-5(data-aos="fade-right") Desafíos de la posesión en el contexto colombiano

    p.mb-5 La relación entre posesión y propiedad, presenta desafíos significativos que impactan tanto a los individuos como a las comunidades, especialmente las más vulnerables.

    .row.align-items-center.bg-ppal-azul.p-4.mb-5
      .col-lg-auto.order-2(data-aos="fade-right")
        img(src="@/assets/curso/tema1/13.svg", style="max-width: 90px").mx-auto
      .col-lg.order-1.mb-3
        ul.lista-ul.mb-0
          li.mb-0.d-flex
            i.lista-ul__vineta
            p.mb-0 <b>Falta de acceso a beneficios asociados a la propiedad:</b> los poseedores no pueden acceder fácilmente a créditos formales o participar en el mercado inmobiliario.
          li.mb-0.d-flex
            i.lista-ul__vineta
            p.mb-0 <b>Lentitud y burocracia en la formalización: </b> los procesos para convertir la posesión en propiedad mediante usucapión suelen ser complejos.
          li.mb-0.d-flex
            i.lista-ul__vineta
            p.mb-0 <b>Impacto en comunidades vulnerables: </b> en zonas rurales y urbanas, la posesión garantiza un mínimo de estabilidad económica y habitacional, pero no siempre cubre las necesidades legales.
        
    
    p.mb-5 La posesión y la propiedad son figuras interconectadas que requieren equilibrio entre los intereses individuales y las necesidades colectivas. Simplificar procesos, garantizar acceso a beneficios y promover inclusión jurídica, son pasos esenciales para construir un sistema que proteja derechos patrimoniales y fomente el desarrollo social y económico.

    h2.mb-5(data-aos="fade-right") Cómo funciona en Colombia

    p En Colombia, los conceptos de propiedad y posesión, se encuentran regulados para equilibrar los derechos individuales, con el interés social y ecológico.

   
    figure(data-aos="zoom-in-up").mb-3
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/8GaGaJFfo9s?si=F1b2M6SlLRnGqFf9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    p.mb-5 La propiedad y la posesión son conceptos fundamentales en el derecho civil, especialmente en Colombia, donde la regulación de bienes inmuebles tiene un impacto significativo en la justicia social y el desarrollo económico. A continuación, se analizan detalladamente sus características, mecanismos legales y ejemplos prácticos que ilustran su importancia.

    h2.mb-5(data-aos="fade-right") Propiedad: concepto, características y limitaciones

    p.mb-5 La propiedad, definida como el derecho pleno de usar, gozar y disponer de un bien, está garantizada por el Artículo 58 de la Constitución Política de Colombia. Este derecho tiene características específicas:

    div.row.justify-content-center.align-items-stretch.mb-5
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-ppal-azul.box-shadow.px-4.py-5.h-100.tarjeta
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema1/14.svg"
            alt=""
            style="width: 90px"
          )
          p.text-center.text-bold Uso
          p.mb-0.text-center El propietario tiene la facultad de aprovechar el bien para fines personales o comerciales.
      
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-ppal-azul.box-shadow.px-4.py-5.h-100.tarjeta
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema1/15.svg"
            alt=""
            style="width: 90px"
          )
          p.text-center.text-bold Goce
          p.mb-0.text-center Puede recibir los beneficios económicos del bien, como las rentas generadas por un inmueble.
      
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-ppal-azul.box-shadow.px-4.py-5.h-100.tarjeta
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema1/16.svg"
            alt=""
            style="width: 90px"
          )
          p.text-center.text-bold Disposición
          p.mb-0.text-center Permite enajenar el bien, ya sea por venta, donación o sucesión.
    
    h2.mb-5(data-aos="fade-right") Posesión: concepto, características y mecanismos legales

    .row.mb-5.justify-content-center
      .col-lg-10(data-aos="fade-right")
        p La posesión es una figura jurídica que se refiere al control de hecho sobre un bien, con o sin título formal. Según el Artículo 762 del Código Civil, es la tenencia de una cosa con ánimo de señor y dueño. Aunque no confiere titularidad inmediata, la posesión puede transformarse en propiedad mediante la prescripción adquisitiva, que reconoce derechos a quienes poseen un bien de forma pacífica, continua y pública durante un periodo establecido.
        p Los tipos de prescripción adquisitiva son:
      .col-md-8.col-lg-2(data-aos="fade-left")
        figure
         img(src="@/assets/curso/tema1/17.png", alt="").mb-4.mb-lg-0

    TabsC.color-primario.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Posesión" :icon="require('@/assets/bullets/icon-tab-c-4.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Posesión
            ul.lista-ul.mb-0
              li.mb-0.d-flex
                i.lista-ul__vineta
                | Requiere título justo y buena fe.
              li.mb-0.d-flex
                i.lista-ul__vineta
                | Plazo mínimo: 5 años.
              li.mb-0.d-flex
                i.lista-ul__vineta
                p <b>Ejemplo:</b> un agricultor que compró un terreno mediante un contrato informal y lo ha trabajado durante cinco años, puede solicitar el reconocimiento legal de su propiedad.
        
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/18.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Propiedad" :icon="require('@/assets/bullets/icon-tab-c-4.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Posesión
            ul.lista-ul.mb-0
              li.mb-0.d-flex
                i.lista-ul__vineta
                | No exige título ni buena fe.
              li.mb-0.d-flex
                i.lista-ul__vineta
                | Plazo mínimo: 10 años.
              li.mb-0.d-flex
                i.lista-ul__vineta
                p <b>Ejemplo:</b> una familia que ocupó una parcela abandonada y la cultivó por más de 10 años, puede adquirir la propiedad legalmente, mediante este mecanismo.
        
        
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/19.png', alt='')
    
    p.mb-5 Aunque la propiedad y la posesión son figuras distintas, su interconexión es evidente en múltiples contextos:


    .titulo-figura.mb-4
      h5 Tabla 2. 
      span Relación entre propiedad y posesión

    .tabla-a.color-terciario.mb-5(data-aos="zoom-in") 
      table
        thead
          tr
            th.bg-color-4 Aspecto
            th.bg-color-4 Propiedad
            th.bg-color-4 Posesión
        tbody
          tr.bg-color-5
            td <b>Definición</b>
            td Derecho pleno que otorga uso, goce y disposición del bien.
            td Relación de hecho sobre un bien, con o sin título formal.
            
          tr.bg-color-5
            td <b>Protección jurídica</b> 
            td Regulada por el Artículo 58 de la Constitución. Es oponible a terceros.
            td Regulada por el Artículo 762 del Código Civil. Permite la defensa de la tenencia frente a interferencias.
           
          tr.bg-color-5
            td <b>Limitaciones</b>
            td Expropiación por utilidad pública o interés social, con indemnización.
            td No confiere titularidad legal inmediata; requiere prescripción adquisitiva para convertirse en propiedad.
             
          tr.bg-color-5
            td <b>Función social</b> 
            td Garantiza el uso del bien en beneficio del colectivo (función ecológica y social).
            td Facilita el acceso a tierras o bienes en contextos de informalidad, fomentando inclusión social.

    h2.mb-5(data-aos="fade-right") Aplicaciones prácticas

    p.mb-5 A continuación, se analizan estas regulaciones con ejemplos prácticos que ilustran su aplicación.

    .row.align-items-start.mb-5.justify-content-center
      .col-md-8.col-lg-4.order-2(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/20.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-1.mb-3
        AcordionA(tipo="b")
          .div(titulo="Restitución de tierras para víctimas del conflicto armado")
            p La Ley 1448 del 2011, permite a las víctimas del desplazamiento forzado, recuperar predios que poseían o de los que eran propietarios antes del despojo. 
            p <b>Ejemplo:</b> una familia desplazada de su finca durante la violencia, puede recuperarla mediante pruebas testimoniales o documentales, incluso sin un título formal.

          .div(titulo="Formalización de predios ocupados informalmente")
            p La Ley 1561 del 2012, facilita la obtención de títulos de propiedad para personas que han ocupado terrenos de manera informal. Este proceso permite acceder a servicios públicos y créditos hipotecarios. 
            p <b>Ejemplo:</b> un residente de un barrio popular en Bogotá, legaliza su vivienda tras demostrar ocupación continua durante más de 10 años.
          .div(titulo="Ordenamiento territorial y uso del suelo")
            p El Decreto 1077 del 2015, establece que los propietarios deben cumplir con las disposiciones locales de ordenamiento territorial, promoviendo un desarrollo sostenible y planificado. 
            p <b>Ejemplo:</b> un propietario de un terreno rural, necesita permisos específicos para urbanizarlo, respetando áreas protegidas y normativas ambientales.

    



    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/40193 " target="_blank" rel="noopener noreferrer") Campos Lozada, M. (2017). Bienes y derechos reales. IURE Editores. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://red.uexternado.edu.co/wp-content/uploads/sites/48/2021/07/USUFRUCTO-USO-Y-HABITACION-.pdf" target="_blank" rel="noopener noreferrer") Vargas, A. R. EL USUFRUCTO, USO Y HABITACIÓN EN COLOMBIA. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.thomsonreuters.cl/es-cl/productos/informacion-legal-westlaw " target="_blank" rel="noopener noreferrer") Plataforma sobre gestión básica del derecho

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=eeCakPgTrA0" target="_blank" rel="noopener noreferrer") Aprender. (2020). DERECHOS REALES: Introducción y concepto. 

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
