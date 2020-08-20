<template>
	<header>
		<div class="content px-2 py-3 has-background-info has-text-white">
			<!-- Top header info empresa -->
			<div class="container">
				<div class="columns is-centered">
					<div class="column is-offset-4 has-text-right">
						<span class="is-size-9">Carrera 7F N 44 - 52 Barrio la alboraya, Barranquilla - Colombia.</span>
						<span class="is-size-9">(5) 363 2058 - (5) 362 8780</span>
						<span class="is-size-9"> <a href="mailto:facturacion@zeyma.co">Facturacion@zeyma.co</a></span>
					</div>
				</div>
			</div>		
		</div>
		<!-- Navbar -->
		<div class="container is-centered py-2">
			<b-navbar>
				<template slot="brand">
					<b-navbar-item tag="router-link" :to="{ path: '/' }">
						<img
						src="../assets/img/zeyma-Original-mod.png"
						alt="Lightweight UI components for Vue.js based on Bulma"
						>
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
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>