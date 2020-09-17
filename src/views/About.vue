<template>
  <section>
    <div class="hero" id="info__top">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2 is-uppercase has-text-weight-bold">
            Quienes Somos
          </h1>
        </div>
      </div>
    </div>
    <div class="section is-medium has-shadow">
     <div class="container">
      <div class="columns is-centered is-variable is-5 mb-5">
       <div class="column">
        <h1 class="title">Quienes Somos</h1>
        <p class="has-text-justified mb-3">Comercializadora ZEYMA SAS es una empresa que cuenta con mas de {{(new Date).getFullYear() - 1998}} años de experiencia, apoyando a los droguistas que buscan adquirir productos de excelente calidad sin afectar su economía. Les ofrecemos a todos nuestros clientes las mejores promociones, ofertas y precios del mercado.</p>

        <p class="has-text-justified">El objetivo principal es buscar la satisfacción de nuestros clientes, obteniendo productos de alta calidad al alcance de su bolsillo. Durante nuestra trayectoria, hemos fortalecido los servicios que ofrecemos a cada uno de nuestros clientes. Nos orgullece decir que logramos entregar sus pedidos en un plazo inferior a 24 horas en la ciudad de Barranquilla.</p>

      </div>
      <div class="column">
          <b-image
          :src="require('../assets/img/bienvenida/Sobre-nosotros.webp')"
          ratio="6by3"
          ></b-image>
        </div>
      </div>

      <div class="columns is-variable is-5 is-centered">
        <div class="column" data-aos-duration="1700" data-aos="fade-up">
          <h1 class="title">Misión</h1>
          <p class="has-text-justified">Empresa privada, distribuidora de medicamentos farmacéuticos, hospitalarios y populares que brinda servicios de excelente calidad. Ofreciendo seguridad, confianza y precios realmente competitivos con el fin de satisfacer las necesidades del cliente.</p>
        </div>
        <div class="column" data-aos-duration="1700" data-aos="fade-up" data-aos-delay="400">
         <h1 class="title">Visión</h1>
         <p class="has-text-justified">Ser reconocidos a nivel regional en la distribución de productos para la salud y reconocidos por la calidad del servicios. Teniendo como referencia a nuestros clientes y proveedores por la confiabilidad y responsabilidad de nuestra empresa.</p>
       </div>
     </div>
   </div>
  </div>

  <!-- Contador - cifras -->
  <div class="section background-secundary has-text-white">
    <div class="container">
      <div class="level">
        <div class="level-item has-text-centered"  v-for="(number) in json.counter">
          <div v-if="position > 410">
            <p class="is-big" v-if="number.name === 'Años de Experiencia'">
              <ICountUp
              :delay="delay"
              :endVal="(new Date).getFullYear() - 1998"
              :options="options"
              @ready="onReady"
              />
            </p>
            <p class="is-big" v-else>
              <ICountUp
              :delay="delay"
              :endVal="number.count"
              :options="options"
              @ready="onReady"
              /></p>
              <p>{{number.name}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  <!-- Politicas de Calidad -->
  <div class="section is-medium has-shadow">
    <div class="container">
      <div class="columns is-centered is-variable is-5 mb-5">
        <div class="column" data-aos-duration="1700" data-aos="fade-up" data-aos-delay="400">
          <b-image
          :src="require('../assets/img/nosotros/companeros-trabajo-planeando.webp')"
          ratio="6by3"
          ></b-image>
        </div>
        <div class="column" data-aos-duration="1700" data-aos="fade-up">
          <h1 class="title">Politicas de Calidad</h1>
          <p class="has-text-justified mb-3">Es política de calidad de COMERCIALIZADORA ZEYMA S.A.S. la satisfacción de las necesidades de todos nuestros clientes en el cumplimiento de los despachos oportunos y completos de sus pedidos, para lo cual contamos con un adecuado surtido de nuestros registros. Y tecnología adecuada.</p>

          <p class="has-text-justified">Contamos con un equipo humano comprometido en todos los procesos tanto en el mejoramiento continuo como el de preservar el medio ambiente. Propiciamos un clima organización agradable y excelente comunicación con cada uno de nuestros proveedores y clientes. </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Proveedores -->
  <div class="section">
    <carousel :autoplay="true" :autoplayTimeout="1500" :scrollPerPage="false" :paginationEnabled="false" :autoplayHoverPause="true" :perPageCustom="[[768, 3], [1024, 6]]" :loop="true">
      <slide v-for="value in img" >
        <img :src="value">
      </slide>
    </carousel>
  </div>

</section>
</template>

<script>
/*--------------  Firebase  --------------*/
import Firebase from 'firebase';
import "firebase/firestore";
import Config from '@/config/config';

// @ is an alias to /src
import json from '@/assets/data/data-general.json';
import ICountUp from 'vue-countup-v2';

export default {
  name: 'Home',
  components: {
    ICountUp,
  },
  data() {
    return {
      count: 0,
      img: [],
      Firebase,
      position: 0,
      json,
      delay: 1000,
      endVal: 100000,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
      }
    };
  },
  mounted(){
    var that = this;
    window.addEventListener("scroll", function(){
     that.position = window.scrollY;
   });
  },
  created(){

    if (!Firebase.apps.length) {
       Firebase.initializeApp(Config);
    }
    let db = Firebase.storage();
    let storageRef = db.ref();

    /*--------------  Obtener URL de cada imagen de la carpeta 'slides'  --------------*/
    // Create a reference under which you want to list
    var listRef = storageRef.child('proveedores');
    this.img = [];
    var imgArray = this.img;

    // Find all the prefixes and items.
    listRef.listAll().then(function(res) {
      res.prefixes.forEach(function(folderRef) {
        console.log('1. ' + folderRef)
        // All the prefixes under listRef.
        // You may call listAll() recursively on them.
      });
      res.items.forEach(function(itemRef) {

          let storeRef = db.ref(itemRef.fullPath);
          storeRef.getDownloadURL().then(function(url) {
          // inserted into an variable.
          imgArray.push(url)
          }).catch(function(error) {
          // Handle any errors
          });

      });

    }).catch(function(error) {
      console.log('error: '+ error)
    });

  },

  methods: {
    onReady: function(instance, CountUp) {
        const that = this;
        // instance.update(that.endVal + 100);
      }
 }
}
</script>
