<template>
	<header>
		<div class="content px-2 py-3 background-primary has-text-white">
			<!-- Top header info empresa -->
			<div class="container">
				<div class="columns is-centered">
					<div class="column is-offset-2 has-text-right">
						<span class="is-size-9"><b-icon
							pack="fas"
							icon="map-marker-alt">
						</b-icon>{{json.direccion}}</span>
						<span class="is-size-9 ml-5"><b-icon
							pack="fas"
							icon="phone">
						</b-icon>{{json.telefono}}</span>
						<span class="is-size-9 ml-5"><b-icon
							pack="fas"
							icon="envelope">
						</b-icon> <a href="mailto:facturacion@zeyma.co">{{json.correo1}}</a></span>
					</div>
				</div>
			</div>		
		</div>
		<!-- Navbar (5) 363 2058 - (5) 362 8780-->
		<div class="container is-centered py-2">
			<b-navbar>
				<template slot="brand">
					<b-navbar-item tag="router-link" :to="{ path: '/' }">
						<img src="../assets/img/zeyma-Original-mod.png">
					</b-navbar-item>
				</template>
				<template slot="end">
					<b-navbar-item tag="router-link" :to="{ path: '/about' }">
						Inicio
					</b-navbar-item>

					<b-navbar-dropdown label="Nosotros">
						<b-navbar-item href="#">
							Quienes Somos
						</b-navbar-item>
						<b-navbar-item href="#">
							Talento Humano
						</b-navbar-item>
						<b-navbar-item href="#">
							Politicas de Devolución
						</b-navbar-item>
						<b-navbar-item href="#">
							Preguntas Frecuentes
						</b-navbar-item>
					</b-navbar-dropdown>

					<b-navbar-item href="#">
						Servicios
					</b-navbar-item>

					<b-navbar-item href="#">
						Publicaciones
					</b-navbar-item>

					<b-navbar-dropdown label="Contacto">
						<b-navbar-item href="#">
							Directorio
						</b-navbar-item>
						<b-navbar-item href="#">
							PQRS
						</b-navbar-item>
						<b-navbar-item href="#">
							Escribenos
						</b-navbar-item>
					</b-navbar-dropdown>
				</template>

				<template slot="end">
					<b-navbar-item tag="div">
						<div class="buttons">
							<a class="button is-primary">
								<strong>Sign up</strong>
							</a>
							<a class="button is-light">
								Log in
							</a>
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