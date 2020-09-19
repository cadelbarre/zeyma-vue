<template>
	<section>
		<!-- Slides -->

		 <b-carousel icon-pack="fa"
            icon-prev="angle-left"
            icon-next="angle-right"
            icon-size="is-medium"
            >
		 	<b-carousel-item v-for="value in img.slides">
		 		<b-image
		 		placeholder="/static/img/icons/favicon-32x32.png"
		 		:src="value"
		 		alt="The Buefy Logo"
		 		ratio="16by9"
		 		></b-image>
		 	</b-carousel-item>
		 </b-carousel>


		<!-- Bienvenida -->
		<div class="section is-medium has-shadow">
			<div class="container">
				<div class="columns">
					<div class="column is-12 has-text-centered">
						<h1 class="title is-1 is-uppercase">Bienvenidos a <br>Comercializadora ZEYMA S.A.S</h1>
					</div>
				</div>
				<div class="columns mt-6 is-variable is-5" id="welcome_links">
					<div class="column is-4-tablet">
						<a href="http://plataformazeyma.com/adminlogin.aspx" target="_blank">
							<figure class="image is-200x200 m-auto">
								<b-image
								:src="require('../assets/img/bienvenida/plataforma-web.webp')"
								alt="A random image"
								:rounded="true"
								></b-image>
							</figure>
							<h1 class="is-uppercase is-size-4 has-text-weight-bold has-text-centered mt-4 text-primary">Plataforma Web</h1>
						</a> 
						<p class="has-text-justified mt-3">A través de nuestra plataforma podras realizar todos sus pedidos de una manera facil, rapida e intuitiva.</p>
					</div>
					<div class="column is-4-tablet">
						<a href="http://plataformazeyma.com/adminlogin.aspx" target="_blank"> 
							<figure class="image is-200x200 m-auto">
								<b-image
								:src="require('../assets/img/bienvenida/plataforma-colaboradores.webp')"
								alt="A random image"
								:rounded="true"
								></b-image>
							</figure>
							<h1 class="is-uppercase is-size-4 has-text-weight-bold has-text-centered mt-4 text-primary">Colaboradores</h1>
						</a> 
						<p class="has-text-justified mt-3">Buscamos integrar todo nuestro sistema ERP con cada uno de nuestros colaboradores para poder tener onicanalidad. </p>
					</div>
					<div class="column is-4-tablet">
						<a href="/pqrs" target="_blank">
							<figure class="image is-200x200 m-auto">
								<b-image
								:src="require('../assets/img/bienvenida/pqrs.webp')"
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

		<!-- Modal Video -->
		<b-modal v-model="isImageModalActive">
			<p class="image modal__video">
				<iframe src="https://www.youtube.com/embed/Juqf9VkTgwU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</p>
		</b-modal>
		
		<!-- Quienes somos -->
		<div class="section is-medium has-background-white-bis">
			<div class="container">
				<div class="columns is-centered is-variable is-5 is-multiline">
					<div class="column is-12-tablet is-6-desktop" data-aos-anchor-placement="center-bottom" data-aos-duration="1700" data-aos="fade-up">
						<h1 class="title">Quienes Somos</h1>
						<p class="has-text-justified mb-3">Comercializadora ZEYMA SAS es una empresa que cuenta con mas de 22 años de experiencia, apoyando a los droguistas que buscan adquirir productos de excelente calidad sin afectar su economía. Les ofrecemos a todos nuestros clientes las mejores promociones, ofertas y precios del mercado.</p>

						<p class="has-text-justified">El objetivo principal es buscar la satisfacción de nuestros clientes, obteniendo productos de alta calidad al alcance de su bolsillo. Durante nuestra trayectoria, hemos fortalecido los servicios que ofrecemos a cada uno de nuestros clientes. Nos orgullece decir que logramos entregar sus pedidos en un plazo inferior a 24 horas en la ciudad de Barranquilla.</p>
						
						<b-button 
						type="btn-primary mt-6" 
						tag="router-link"
                		to="/about">Saber Más</b-button>
					</div>
					<div class="column is-12-tablet is-6-desktop" data-aos-anchor-placement="center-bottom" data-aos-duration="1700" data-aos="fade-up" data-aos-delay="400">
						<div id="play__video">
						<button class="button btn-primary" 
						@click="isImageModalActive = true">
							<b-icon
							pack="fas"
							icon="play"
							size="is-medium"
							@click="isImageModalActive = true">
							</b-icon>
						</button>
						</div>
						<b-image
						:src="require('../assets/img/bienvenida/Sobre-nosotros.webp')"
						ratio="4by3"
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
						<p class="p-20">A continuación podrá encontrar algunos de los servicios que ofrecemos en Comcercializadora ZEYMA SAS</p>
					</div>
				</div>
				
				<div class="columns is-multiline">
					<div class="column is-6-tablet is-3-desktop is-12-mobile" v-for="(service) in json.services">
						<div class="card">
							<div class="card-image">
								<b-image
								  :src="service.imagen"
								  ratio="4by3"
								  ></b-image>
							</div>
							<div class="card-content">
								<div class="content">
									<h3 class="text-primary has-text-centered">{{service.title}}</h3>
									<p class="has-text-justified">{{ service.text }}</p>
								</div>
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
		  		<div class="has-text-centered">
		  			<b-button 
		  			type="btn-primary mt-3" 
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
						<div v-if="position > 3200">
							<p class="is-big text-primary" v-if="number.name === 'Años de Experiencia'">
								<ICountUp
								:delay="delay"
								:endVal="(new Date).getFullYear() - 1998"
								:options="options"
								@ready="onReady"
								/>
							</p>
							<p class="is-big text-primary" v-else>
								<ICountUp
								:delay="delay"
								:endVal="number.count"
								:options="options"
								@ready="onReady"
								/>
							</p>
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

		<!-- Proveedores -->
		<div class="section">
			<carousel :autoplay="true" :autoplayTimeout="1500" :scrollPerPage="false" :paginationEnabled="false" :perPageCustom="[[768, 3], [1024, 6]]" :loop="true" :autoplayHoverPause="true">
			  <slide v-for="value in img.logos" >
			    <img :src="value">
			  </slide>
			</carousel>
		</div>

			<!-- Publicaciones -->
		<div class="section is-medium has-shadow">
			<div class="container">
				<div class="columns">
					<div class="column is-12 mb-6 has-text-centered">
						<h1 class="title is-1">Publicaciones</h1>
						<p class="p-20">A continuación podrá encontrar algunos de los servicios que ofrecemos en Comcercializadora ZEYMA SAS</p>
					</div>
				</div>
				<div class="columns">

					<div class="column is-4" v-for="(blog, index) in blogs">
						<div class="card is-shady">
							<div class="card-image">
								<figure class="image is-4by3">
									<img :src="blog.url" data-target="modal-image2">
								</figure>
							</div>
							<div class="card-content">
								<div class="content">
									<h3><a id="blog_title" :href="/blog/+blog.title.replace(/ /g, '-')">{{blog.title}}</a></h3>
									<div class="tags has-addons">
									    <span class="tag is-rounded btn-primary">{{blog.user}}</span>
									    <span class="tag is-rounded">{{blog.date}}</span>
									</div>
									<p class="has-text-justified">{{blog.abstract}}</p>
									<b-button 
									type="btn-primary mt-2" 
									tag="router-link"
									:to="{ name: 'Blog', params: { year: blog.title.replace(/ /g, '-') }}"
									>Seguir Leyendo</b-button>
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
/*--------------  Firebase  --------------*/
import Firebase from 'firebase';
import "firebase/firestore";
import Config from '@/config/config';

// @ is an alias to /src
import json from '@/assets/data/data-general.json';
import ICountUp from 'vue-countup-v2';

export default {
  name: '',
  components: {
  	ICountUp,
  },
  data() {
  	return {
  		
  		name: '',
  		blogs : [],
  		count: 0,
  		json,
  		img: {
  			slides:[],
  			logos: [],
  		},
  		Firebase,
  		position: 0,
  		isImageModalActive: false,
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
  created(){
  	if (!Firebase.apps.length) {
  		Firebase.initializeApp(Config);
  	}

    let db = Firebase.storage();
    let storageRef = db.ref();

    /*--------------  Obtener URL de cada imagen de la carpeta 'proveedores'  --------------*/
    // Create a reference under which you want to list
    var listRef = storageRef.child('proveedores');
    this.img.logos = [];
    
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
          imgArray.logos.push(url)
          }).catch(function(error) {
          console.log(error)
          });
        
      });
      
    }).catch(function(error) {
      console.log('error: '+ error)
    });

    /*--------------  Obtener URL de cada imagen de la carpeta 'slides'  --------------*/
    // Create a reference under which you want to list
    var listSlidesRef = storageRef.child('slides');
    this.img.slides = [];
    var imgArray = this.img;

    // Find all the prefixes and items.
    listSlidesRef.listAll().then(function(res) {
      res.prefixes.forEach(function(folderRef) {
        console.log('1. ' + folderRef)
        // All the prefixes under listRef.
        // You may call listAll() recursively on them.
      });
      res.items.forEach(function(itemRef) {
      
          let storeRef = db.ref(itemRef.fullPath);
          storeRef.getDownloadURL().then(function(url) {
          // inserted into an variable.
          imgArray.slides.push(url)
          }).catch(function(error) {
          // Handle any errors
          });
        
      });
      
    }).catch(function(error) {
      console.log('error: '+ error)
    });

    /*--------------  Obtener articulos del blog Real DataBase  --------------*/
    let real = Firebase.database();
    let pruebass = real.ref('post').orderByChild("filtro").limitToFirst(3);

    let dataBlog = pruebass.on("child_added", (snapshot) => {
    	this.blogs.push(snapshot.val());
    })

  },
  mounted(){
  	var that = this;
  	window.addEventListener("scroll", function(){
  		that.position = window.scrollY;
  	});
  },
  methods: {
  	onReady: function(instance, CountUp) {
  		const that = this;
        // instance.update(that.endVal + 100);
    },

}

}
</script>

<style lang="css" scoped>
a#blog_title{
	color: #363636;
	transition: all 0.2s ease;
}

a#blog_title:hover{
	color: #035aa6;
}

.is-shady {
	animation: flyintoright .4s backwards;
	background: #fff;
	box-shadow: rgba(0, 0, 0, .1) 0 1px 0;
	border-radius: 4px;
	display: inline-block;
	margin: 10px;
	position: relative;
	transition: all .2s ease-in-out;
	border: 1px solid rgba(0, 0, 0, .1);
}
.is-shady:hover {
	box-shadow: 0 10px 16px rgba(0, 0, 0, .13), 0 6px 6px rgba(0, 0, 0, .19);
}

.card-content .content {
  font-size: 0.9375em !important;
  margin: 1rem 1rem !important;
}
.card {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
}
</style>