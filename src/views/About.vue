<template>
  <section>
    <div class="hero is-info" id="info__top">
      <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-2 is-uppercase has-text-weight-bold">
              Quienes Somos
            </h1>
          </div>
        </div>
    </div>
  <div class="section is-medium">
  	<div class="container">
  		<div class="columns is-centered is-variable is-5 mb-5">
  			<div class="column">
  				<h1 class="title">Quienes Somos</h1>
  				<p class="has-text-justified mb-3">Comercializadora ZEYMA SAS es una empresa que cuenta con mas de 22 años de experiencia, apoyando a los droguistas que buscan adquirir productos de excelente calidad sin afectar su economía. Les ofrecemos a todos nuestros clientes las mejores promociones, ofertas y precios del mercado.</p>

          <p class="has-text-justified">El objetivo principal es buscar la satisfacción de nuestros clientes, obteniendo productos de alta calidad al alcance de su bolsillo. Durante nuestra trayectoria, hemos fortalecido los servicios que ofrecemos a cada uno de nuestros clientes. Nos orgullece decir que logramos entregar sus pedidos en un plazo inferior a 24 horas en la ciudad de Barranquilla.</p>
  				
  			</div>
  			<div class="column">
  				<b-image
  				src="https://picsum.photos/600/400"
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
            <div>
              <p class="is-big">{{number.count}}</p>
              <p>{{number.name}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import json from '@/assets/data/data-general.json';

export default {
  name: 'Home',
  components: {
  },
  data(){
        return {
          json
        }
    }

}
</script>
