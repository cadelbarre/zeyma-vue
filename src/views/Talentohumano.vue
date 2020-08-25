<template>
	<section>
		<div class="hero" id="info__top">
		  <div class="hero-body">
		      <div class="container">
		        <h1 class="title is-size-2 is-uppercase has-text-weight-bold">
		          Nuestra Empresa
		        </h1>
		      </div>
		    </div>
		</div>
		<div class="section is-medium">
			<div class="container">
				<div class="columns is-variable is-5 is-centered">
					<div class="column" data-aos-duration="1700" data-aos="fade-up">
						<b-image
						:src="json.about"
						ratio="6by3"
						></b-image>	
					</div>
					<div class="column" data-aos-duration="1700" data-aos="fade-up" data-aos-delay="400">
						<h1 class="title">Talento Humano</h1>
						<p class="has-text-justified mb-3">Nuestro personal está cualificado para emplear métodos adecuados para cada trabajo, brindándole, de este modo, seguridad y confiabilidad.</p>

						<p class="has-text-justified mb-3">Contamos con un equipo humano comprometido en todos los procesos tanto en el mejoramiento continuo como el de preservar el medio ambiente. Propiciamos un clima organización agradable y excelente comunicación con cada uno de nuestros proveedores y clientes.</p>

						<p class="has-text-justified mb-3">Nos dedicamos a prestar servicios especializados para atenderle en sus requerimientos. Nuestros procesos y productos son de la mejor calidad, y nuestra trayectoria es la mejor garantía de nuestra excelencia y confiabilidad. La fidelidad de nuestros clientes es nuestra mejor carta de presentación.</p>
					</div>
				</div>
				<div class="columns is-variable is-5 is-centered mt-6">
					<div class="column" data-aos-duration="1700" data-aos="fade-up">
						<h1 class="title">ZEYMA en la costa</h1>
						<p class="has-text-justified mb-3">Nuestra presencia se encuentra en casi todas las poblaciones de la costa atlántica (Soledad, Puerto Colombia, Galapa, Malambo, Baranoa, Sabanagrande, Sabanalarga, Santo Tomas, Ponedera, Luruaco, Manati, Suan, Polo Nuevo, Palmar de Valera, Campo de la Cruz, Santa Lucia y seguimos creciendo), con oficina Principal en la ciudad de Barranquilla.</p>
					</div>
					<div class="column" data-aos-duration="1700" data-aos="fade-up" data-aos-delay="400">
						<b-image
						:src="json.costa"
						ratio="4by3"
						></b-image>	
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import json from '@/assets/data/data-general.json';

export default {
	name: 'Talento',
	data(){
		return {
			json
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>