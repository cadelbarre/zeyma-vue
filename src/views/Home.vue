<template>
	<section>
		<!-- Carousel -->
		<agile :autoplay-speed="5000" :speed="1500" autoplay="autoplay" :navButtons="true">
			<div class="slide">
				<b-image
				src="https://firebasestorage.googleapis.com/v0/b/zeymaweb.appspot.com/o/slides%2F1.jpg?alt=media&token=e18cee54-0d7b-4134-904c-d2ed1f21637e"
				></b-image>
			</div>
			<div class="slide">
				<b-image
				src="https://firebasestorage.googleapis.com/v0/b/zeymaweb.appspot.com/o/slides%2F2.jpg?alt=media&token=c5e21c0e-1956-4b06-a722-115e05ff34e9"
				></b-image>
			</div>
			<div class="slide">
				<b-image
				src="https://firebasestorage.googleapis.com/v0/b/zeymaweb.appspot.com/o/slides%2F3.jpg?alt=media&token=c34c9ed9-5807-46f1-b409-e571ef453164"
				></b-image>
			</div>
			<template slot="prevButton"><i class="fas fa-chevron-left"></i></template>
			<template slot="nextButton"><i class="fas fa-chevron-right"></i></template>
		</agile>
		
		<!-- Bienvenida -->
		<div class="section is-medium has-shadow">
			<div class="container">
				<div class="columns">
					<div class="column is-12 has-text-centered">
						<h1 class="title is-size-1 is-uppercase">Bienvenidos a <br>Comercializadora ZEYMA S.A.S</h1>
					</div>
				</div>
				<div class="columns mt-6 is-variable is-5">
					<div class="column">
						<a href="http://plataformazeyma.com/adminlogin.aspx" target="_blank">
							<figure class="image is-200x200 m-auto">
								<b-image
								src="https://firebasestorage.googleapis.com/v0/b/zeymaweb.appspot.com/o/bienvenida%2Fplataforma-web.png?alt=media&token=ae89d0f4-b30d-40e2-83fc-19ea45b768fa"
								alt="A random image"
								:rounded="true"
								></b-image>
							</figure>
							<h1 class="is-uppercase is-size-4 has-text-weight-bold has-text-centered mt-4 text-primary">Plataforma Web</h1>
						</a> 
						<p class="has-text-justified mt-3">A través de nuestra plataforma podras realizar todos sus pedidos de una manera facil, rapida e intuitiva.</p>
					</div>
					<div class="column">
						<a href="http://plataformazeyma.com/adminlogin.aspx" target="_blank"> 
							<figure class="image is-200x200 m-auto">
								<b-image
								src="https://firebasestorage.googleapis.com/v0/b/zeymaweb.appspot.com/o/bienvenida%2Fplataforma-colaboradores.png?alt=media&token=16805621-3867-4cf9-911a-2252d5e6c48e"
								alt="A random image"
								:rounded="true"
								></b-image>
							</figure>
							<h1 class="is-uppercase is-size-4 has-text-weight-bold has-text-centered mt-4 text-primary">Colaboradores</h1>
						</a> 
						<p class="has-text-justified mt-3">Buscamos integrar todo nuestro sistema ERP con cada uno de nuestros colaboradores para poder tener onicanalidad. </p>
					</div>
					<div class="column">
						<a href="/pqrs" target="_blank">
							<figure class="image is-200x200 m-auto">
								<b-image
								src="https://firebasestorage.googleapis.com/v0/b/zeymaweb.appspot.com/o/bienvenida%2Fpqrs.png?alt=media&token=61705326-022f-4815-8ec9-74f0a858d063"
								alt="A random image"
								:rounded="true"
								></b-image> 
							</figure>
							<h1 class="is-uppercase is-size-4 has-text-weight-bold has-text-centered mt-4 text-primary">pqrs</h1>
						</a> 
						<p class="has-text-justified mt-3">Nuestros canales estan abiertos para recibir todas sus peticiones, quejas, reclamos y sugerencias.</p>
					</div>
				</div>
			</div>
		</div>
		
		<!-- Quienes somos -->
		<div class="section is-medium has-background-white-bis">
			<div class="container">
				<div class="columns is-centered is-variable is-5">
					<div class="column" data-aos-anchor-placement="center-bottom" data-aos-duration="1700" data-aos="fade-up">
						<h1 class="title">Quienes Somos</h1>
						<p class="has-text-justified mb-3">Comercializadora ZEYMA SAS es una empresa que cuenta con mas de 22 años de experiencia, apoyando a los droguistas que buscan adquirir productos de excelente calidad sin afectar su economía. Les ofrecemos a todos nuestros clientes las mejores promociones, ofertas y precios del mercado.</p>

						<p class="has-text-justified">El objetivo principal es buscar la satisfacción de nuestros clientes, obteniendo productos de alta calidad al alcance de su bolsillo. Durante nuestra trayectoria, hemos fortalecido los servicios que ofrecemos a cada uno de nuestros clientes. Nos orgullece decir que logramos entregar sus pedidos en un plazo inferior a 24 horas en la ciudad de Barranquilla.</p>
						
						<b-button 
						type="btn-primary mt-6" 
						tag="router-link"
                		to="/about">Saber Más</b-button>
					</div>
					<div class="column" data-aos-anchor-placement="center-bottom" data-aos-duration="1700" data-aos="fade-up" data-aos-delay="400">
						<b-image
						:src="json.about"
						ratio="5by3"
						></b-image>	
					</div>
				</div>
			</div>
		</div>
		
		<!-- Servicios -->
		<div class="section is-medium has-shadow">
			<div class="container">
				<div class="columns">
					<div class="column is-12 mb-6 has-text-centered">
						<h1 class="title is-1">Nuestros Servicios</h1>
						<p class="p-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus autem sint quae excepturi ullam aut, temporibus, vel, sequi quibusdam facere dolorem. Quidem nulla consequatur tempore hic sit quo vitae aperiam!</p>
					</div>
				</div>
				<div class="columns is-variable is-5">
					<div class="column" v-for="(service) in json.services">
						<div class="card">
						  <div class="card-image">
						    <b-image
						      :src="service.imagen"
						      ratio="4by3"
						      ></b-image>
						  </div>
						  <div class="card-content">
						  	<h1 class="is-uppercase is-size-4 has-text-weight-bold has-text-centered mb-2 text-primary">{{service.title}}</h1>
						  	<p class="has-text-justified">{{ service.text }}</p>
						  </div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Hero -->
		<section class="hero is-medium" id="hero_home">
		  <div class="hero-body">
		  	<div class="container" data-aos-duration="1700" data-aos="fade-up">
		  		<h1 class="title has-text-centered is-1 has-text-white">
		  			Contamos con un equipo humano comprometido en todos los procesos tanto en el mejoramiento continuo como en el servicio al cliente.
		  		</h1>
		  		<div class="has-text-centered mt-6">
		  			<b-button 
		  			type="btn-primary" 
		  			tag="router-link"
		  			to="/about">Saber Más</b-button>
		  		</div>
		  	</div>
		  </div>
		</section>

		<!-- Contador - cifras -->
		<div class="section">
			<div class="container">
				<div class="level">
					<div class="level-item has-text-centered"  v-for="(number) in json.counter">
						<div>
							<p class="is-big text-primary" v-if="number.name === 'Años de Experiencia'">{{(new Date).getFullYear() - 1998}}</p>
							<p class="is-big text-primary" v-else>{{number.count}}</p>
							<p>{{number.name}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<!-- Testimonios -->
		<div class="section" id="testimonios">
			<div class="container p-20">
				<agile :autoplay-speed="5000" :speed="1500" autoplay="autoplay" :navButtons="true">
					<div class="slide" id="testigos" v-for="slide in json.testimonios">
						<figure class="image is-128x128 m-auto">
							<b-image
							:src="slide.imagen"
							></b-image>
						</figure>
						<div class="has-text-centered mt-3">
							<p class="mb-2">{{slide.text}}</p>
							<h1 class="is-uppercase has-text-weight-bold is-size-5">{{slide.name}}</h1>
							<h3 class="text-primary is-uppercase">{{slide.company}}</h3>
						</div>
					</div>
					<template slot="prevButton"><i class="fas fa-chevron-left"></i></template>
					<template slot="nextButton"><i class="fas fa-chevron-right"></i></template>
				</agile>
			</div>
		</div>

			<!-- Publicaciones -->
		<div class="section is-medium has-shadow">
			<div class="container">
				<div class="columns">
					<div class="column is-12 has-text-centered mb-6">
						<h1 class="title is-1">Publicaciones</h1>
						<p class="p-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus autem sint quae excepturi ullam aut, temporibus, vel, sequi quibusdam facere dolorem. Quidem nulla consequatur tempore hic sit quo vitae aperiam!</p>
					</div>
				</div>
				<div class="columns is-variable is-7">
					<div class="column">
						<div class="card">
						  <div class="card-image">
						    <figure class="image is-4by3">
						      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
						    </figure>
						  </div>
						  <div class="card-content">
						    <div class="media">
						      <div class="media-left">
						        <figure class="image is-48x48">
						          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
						        </figure>
						      </div>
						      <div class="media-content">
						        <p class="title is-4"></p>
						        <p class="subtitle is-6">@johnsmith</p>
						      </div>
						    </div>

						    <div class="content">
						      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
						      <a href="#">#css</a> <a href="#">#responsive</a>
						      <br>
						      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
						    </div>
						  </div>
						</div>
					</div>
					<div class="column">
						<div class="card">
						  <div class="card-image">
						    <figure class="image is-4by3">
						      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
						    </figure>
						  </div>
						  <div class="card-content">
						    <div class="media">
						      <div class="media-left">
						        <figure class="image is-48x48">
						          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
						        </figure>
						      </div>
						      <div class="media-content">
						        <p class="title is-4"></p>
						        <p class="subtitle is-6">@johnsmith</p>
						      </div>
						    </div>

						    <div class="content">
						      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
						      <a href="#">#css</a> <a href="#">#responsive</a>
						      <br>
						      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
						    </div>
						  </div>
						</div>
					</div>
					<div class="column">
						<div class="card">
						  <div class="card-image">
						    <figure class="image is-4by3">
						      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
						    </figure>
						  </div>
						  <div class="card-content">
						    <div class="media">
						      <div class="media-left">
						        <figure class="image is-48x48">
						          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
						        </figure>
						      </div>
						      <div class="media-content">
						        <p class="title is-4"></p>
						        <p class="subtitle is-6">@johnsmith</p>
						      </div>
						    </div>

						    <div class="content">
						      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
						      <a href="#">#css</a> <a href="#">#responsive</a>
						      <br>
						      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
						    </div>
						  </div>
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
    },
    methods:{
    	counter(){

    		const options = {
    			  duration: 5,
    		};
    		let demo = new CountUp('myTargetElement', 6378, options);
    		if (!demo.error) {
    			  demo.start();
    		} else {
    			  console.error(demo.error);
    		}

    	}
    }

}
</script>
