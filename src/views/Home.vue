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
		<div class="section is-medium">
			<div class="container">
				<div class="columns">
					<div class="column is-12 has-text-centered">
						<h1 class="title is-size-1 is-uppercase">Bienvenidos a <br>Comercializadora ZEYMA S.A.S</h1>
					</div>
				</div>
				<div class="columns">
					<div class="column">
						
					</div>
					<div class="column"></div>
					<div class="column"></div>
				</div>
			</div>
		</div>
		
		<!-- Quienes somos -->
		<div class="section is-medium has-background-white-bis">
			<div class="container">
				<div class="columns is-centered is-variable is-5">
					<div class="column">
						<h1 class="title">Quienes Somos</h1>
						<p class="has-text-justified mb-3">Comercializadora ZEYMA SAS es una empresa que cuenta con mas de 22 años de experiencia, apoyando a los droguistas que buscan adquirir productos de excelente calidad sin afectar su economía. Les ofrecemos a todos nuestros clientes las mejores promociones, ofertas y precios del mercado.</p>

						<p class="has-text-justified">El objetivo principal es buscar la satisfacción de nuestros clientes, obteniendo productos de alta calidad al alcance de su bolsillo. Durante nuestra trayectoria, hemos fortalecido los servicios que ofrecemos a cada uno de nuestros clientes. Nos orgullece decir que logramos entregar sus pedidos en un plazo inferior a 24 horas en la ciudad de Barranquilla.</p>
						
						<b-button 
						type="btn-primary mt-6" 
						tag="router-link"
                		to="/about">Saber Más</b-button>
					</div>
					<div class="column">
						<b-image
						src="https://picsum.photos/600/400"
						ratio="5by3"
						></b-image>	
					</div>
				</div>
			</div>
		</div>
		
		<!-- Servicios -->
		<div class="section is-medium">
			<div class="container">
				<h1 class="title">HOla a todos</h1>
			</div>
		</div>
		
		<!-- Contador - cifras -->
		<div class="section">
			<div class="container">
				<div class="level">
					<div class="level-item has-text-centered"  v-for="(number) in counter">
						<div>
							<p class="is-big text-primary">{{number.count}}</p>
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
					<div class="slide" id="testigo">
						<figure class="image is-128x128 m-auto">
						  <img src="https://firebasestorage.googleapis.com/v0/b/zeymaweb.appspot.com/o/testimonios%2Favatar1.png?alt=media&token=e4df146d-a564-4921-80ac-80371474d604">
						</figure>
						<div class="has-text-centered">
							<p class="mb-4">Es una distribuidora de drogas excelente donde te brindan facilidad para abastecer tu negocio con productos que tienen buenas practicas de manufacturas.</p>
							<h1 class="is-uppercase has-text-weight-bold is-size-5">Alex Baldovino</h1>
							<h3 class="text-primary is-uppercase">DROGUERIA DROGUIFARMA JUNIOR</h3>
						</div>
					</div>
					<div class="slide" id="testigo">
						<figure class="image is-128x128 m-auto">
						  <img src="https://firebasestorage.googleapis.com/v0/b/zeymaweb.appspot.com/o/testimonios%2Favatar1.png?alt=media&token=e4df146d-a564-4921-80ac-80371474d604">
						</figure>
						<div class="has-text-centered">
							<p class="mb-4">Cuando se necesita algún producto urgente, se solicita por telefono y cuando te das cuenta ya lo tienes disponible en la droguerias, es decir es un servicio rapido y eficaz.</p>
							<h1 class="is-uppercase has-text-weight-bold is-size-5">Federico Martinez</h1>
							<h3 class="text-primary is-uppercase">DROGUERIA BUENOS AIRES</h3>
						</div>
					</div>
					<template slot="prevButton"><i class="fas fa-chevron-left"></i></template>
					<template slot="nextButton"><i class="fas fa-chevron-right"></i></template>
				</agile>
			</div>
		</div>

	</section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data(){
        return {
            counter: [
                { name: 'Clientes', count: 800 },
                { name: 'Años de Experiencia', count: 22 },
                { name: 'Productos Codificados', count: 3500 },
                { name: 'Número de Proveedores', count: 83 },
            ]
        }
    }

}
</script>
