<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Servidumbres: constitución y extinción'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-1
      .row.mb-5.align-items-center
        .col-lg-7.mb-3
          p.mb-0.p-4.px-5 Las servidumbres son derechos reales que otorgan a un predio (dominante) un beneficio sobre otro (sirviente), limitando parcialmente la propiedad de este último. Reguladas por el Código Civil Colombiano, se constituyen para garantizar necesidades de acceso, servicios o convivencia entre propietarios.
        .col-lg-5(data-aos="flip-left")
          figure
            img(src="@/assets/curso/tema3/1.png")  
      
    h2.mb-5(data-aos="fade-right") Constitución

    p.mb-5 La analítica tiene aplicaciones prácticas que optimizan procesos y respaldan decisiones estratégicas en sectores como comercio, marketing y finanzas.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white(data-aos="zoom-in")
          .row.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema3/2.png")
            .col-lg-7
              h5 Por ley
              p Impuestas automáticamente para garantizar derechos fundamentales o utilidad pública. 
              p <b>Ejemplo:</b> servidumbre de paso para predios sin acceso a vías públicas.

          .row.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema3/3.png")
            .col-lg-7
              h5 Por contrato
              p Acuerdo entre partes formalizado en escritura pública. 
              p <b>Ejemplo:</b> instalación de tuberías a cambio de compensación económica

          .row.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema3/4.png")
            .col-lg-7
              h5 Por prescripción
              p Uso continuo y pacífico del bien ajeno por el tiempo exigido por ley. 
              p <b>Ejemplo:</b> camino utilizado durante años para acceder a un terreno.

          .row.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema3/5.png")
            .col-lg-7
              h5 Por destino del propietario
              p Surge al dividir un terreno, creando una necesidad entre los predios. 
              p <b>Ejemplo:</b> predio vendido con una servidumbre de paso para su acceso.

    h2.mb-5(data-aos="fade-right") Extinción

    p.mb-5 La extinción de servidumbres ocurre por diversas razones legales y prácticas, dependiendo de las circunstancias.

    .row.align-items-start.mb-5
      .col-lg-4.order-2(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema3/6.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-1(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Renuncia")
            p El propietario del predio dominante renuncia al derecho. 
            p <b>Ejemplo:</b> un predio obtiene acceso directo a una vía pública.
          .div(titulo="Confusión")
            p Ambos predios pasan a ser propiedad de la misma persona. 
            p <b>Ejemplo:</b> el propietario compra el predio sirviente.
          .div(titulo="Destrucción del predio")
            p El predio sirviente o dominante desaparece. 
            p <b>Ejemplo:</b> camino destruido por un deslizamiento.
          .div(titulo="Cumplimiento del plazo")
            p Finalización del plazo o condición pactada en el contrato. 
            p <b>Ejemplo:</b> servidumbre temporal para un proyecto eléctrico.
          .div(titulo="Prescripción extintiva")
            p Falta de uso durante el tiempo establecido por la ley. 
            p <b>Ejemplo:</b> no se usa una servidumbre de paso en 10 años.
    
    h2.mb-5(data-aos="fade-right") Características

    p.mb-5 Las servidumbres son <b>accesorias</b> (vinculadas a los predios), <b>indivisibles</b> (el derecho beneficia a todo el predio dominante) y, en general, <b>perpetuas</b>, salvo acuerdo contrario. Promueven la cooperación entre propietarios y garantizan el uso eficiente de los bienes inmuebles.

    div.bg-color-7.p-4.mb-5(data-aos="zoom-in")
      p.text-bold Importancia
      p.mb-0 Las servidumbres son herramientas jurídicas esenciales para resolver necesidades de acceso y uso entre predios vecinos, promoviendo el desarrollo urbano y rural en equilibrio con los derechos de los propietarios.

          

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/117630" target="_blank" rel="noopener noreferrer") Medina Pabón, J. E. (2019). Derecho Civil. Bienes. Derechos reales (2 ed.). Editorial Universidad del Rosario.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://blogs.ugto.mx/derecho/presentacion-derechos-de-los-usufructuarios/" target="_blank" rel="noopener noreferrer") Universidad de Guanajuato. (2021). Derechos de los usufructuarios (blog). 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://aplicaciones.ai/casetext/" target="_blank" rel="noopener noreferrer") Derecho público y privado  

           

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=ntcz89ZdgWo" target="_blank" rel="noopener noreferrer") Jurídicamente. (2023). USUFRUCTO VITALICIO.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes es una característica fundamental de los derechos humanos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Son temporales y cambiantes',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Son universales y aplican a todas las personas',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Son exclusivos de ciertos grupos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Son opcionales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes afirmaciones sobre la diversidad cultural es correcta?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Fomenta la homogeneización cultural',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Promueve el respeto y la aceptación de las diferencias',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Debilita la identidad cultural de los pueblos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Limita las oportunidades de interacción',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'La mediación en un conflicto tiene como objetivo principal:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Imponer una solución rápida',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Facilitar el diálogo entre las partes',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Determinar la culpabilidad',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar las preocupaciones de una parte',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'En un foro comunitario, es importante:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Escuchar solo a las autoridades',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Fomentar la participación de todos los miembros',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Decidir por votación sin consultar a los demás',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Excluir las opiniones de los más jóvenes',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué busca la justicia restaurativa en el contexto de un conflicto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aplicar una sanción severa',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Reparar el daño y restablecer las relaciones',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Castigar a las partes involucradas',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar el contexto del conflicto',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
