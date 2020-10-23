<template>
	<header class="has-background-white">
		<div class="content px-2 py-3 background-primary has-text-white">
			<!-- Top header info empresa -->
			<div class="container" id="info_navbar_desktop"> 
				<div class="columns is-centered has-text-centered is-mobile">
					<div class="column is-size-9 is-6-desktop">
						<b-icon
						pack="fas"
						icon="map-marker-alt">
						</b-icon>{{json.direccion}}	
					</div>
					<div class="column is-size-9 is-3-desktop">
						<b-icon
							pack="fas"
							icon="phone">
						</b-icon>{{json.telefono}}	
					</div>
					<div class="column is-size-9 is-3-desktop">
						<b-icon
							pack="fas"
							icon="envelope">
						</b-icon> <a href="mailto:facturacion@zeyma.co">{{json.correo1}}</a>	
					</div>
				</div>
			</div>

			<div class="container" id="info_navbar_mobile">
				<div class="columns is-centered has-text-centered is-mobile">
					<div class="column is-size-9 is-6-mobile">
						<b-icon
							pack="fas"
							icon="phone">
						</b-icon>{{json.telefono}}	
					</div>
					<div class="column is-size-9 is-6-mobile">
						<b-icon
							pack="fas"
							icon="envelope">
						</b-icon> <a href="mailto:facturacion@zeyma.co">{{json.correo1}}</a>	
					</div>
				</div>
			</div>	
		</div>
		<!-- Navbar -->
		<div class="container is-centered">
			<b-navbar>
				<template slot="brand">
					<b-navbar-item tag="router-link" :to="{ path: '/' }">
						<img src="../assets/img/zeyma-Original-mod.png">
					</b-navbar-item>
				</template>
				<template slot="end">
					<b-navbar-item tag="router-link" :to="{ path: '/' }">
						Inicio
					</b-navbar-item>

					<b-navbar-dropdown label="Nosotros">
						<b-navbar-item tag="router-link" :to="{ path: '/about' }">
							Quienes Somos
						</b-navbar-item>
						<b-navbar-item tag="router-link" :to="{ path: '/talento_humano' }">
							Talento Humano
						</b-navbar-item>
						<b-navbar-item tag="router-link" :to="{ path: '/politicas_devolucion' }">
							Politicas de Devolución
						</b-navbar-item>
						<b-navbar-item tag="router-link" :to="{ path: '/preguntas_frecuentes' }">
							Preguntas Frecuentes
						</b-navbar-item>
					</b-navbar-dropdown>

					<b-navbar-item tag="router-link" :to="{ path: '/publicaciones' }">
						Publicaciones
					</b-navbar-item>

					<b-navbar-dropdown label="Contacto">
						<b-navbar-item tag="router-link" :to="{ path: '/directorio' }">
							Directorio
						</b-navbar-item>
						<b-navbar-item tag="router-link" :to="{ path: '/pqrs' }">
							PQRS
						</b-navbar-item>
						<b-navbar-item tag="router-link" :to="{ path: '/escribenos' }">
							Escribenos
						</b-navbar-item>
					</b-navbar-dropdown>
				</template>

				<template slot="end">
					<b-navbar-item tag="div">
						<div class="buttons">
							<b-button 
							type="btn-primary" 
							tag="router-link"
							to="/escribenos">Escribenos</b-button>
						</div>
					</b-navbar-item>
				</template>
			</b-navbar>
		</div>
		
			
	</header>
</template>

<script>
import json from '@/assets/data/data-general.json';

export default {
  name: 'Header',
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