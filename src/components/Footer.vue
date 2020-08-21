<template>
	<footer class="footer">
		<div class="container has-text-white">
			<div class="columns is-size-9 is-variable is-7">
				<div class="column">
					<figure class="image is-128x128">
					  <img src="../assets/img/zeyma-Original-mod.png">
					</figure>
					<p>Comercializadora ZEYMA SAS es una empresa que cuenta con más de 22 años de experiencia, apoyando a los droguistas que buscan adquirir productos de excelente calidad sin afectar su economía.</p>
				</div>
				<div class="column">
					<h1 class="is-size-3  has-text-weight-bold">Accesos Rapidos</h1>
					<ul class="footer__list">
						<li><b-icon
							pack="fas"
							icon="angle-right"
							size="is-small">
						</b-icon><a href="">Plataforma Web</a></li>
						<li><b-icon
							pack="fas"
							icon="angle-right"
							size="is-small">
						</b-icon><a href="">Politicas de devolución</a></li>
						<li><b-icon
							pack="fas"
							icon="angle-right"
							size="is-small">
						</b-icon><a href="">Envios y Pedidos</a></li>
						<li><b-icon
							pack="fas"
							icon="angle-right"
							size="is-small">
						</b-icon><a href="">PQRS</a></li>
						<li><b-icon
							pack="fas"
							icon="angle-right"
							size="is-small">
						</b-icon><a href="">Escribenos</a></li>
					</ul>
				</div>
				<div class="column">
					<h1 class="is-size-3 has-text-weight-bold">Información de Contacto</h1>
					<p class="mb-3 mt-2">{{json.direccion}}</p>
					<p class="mb-3">Teléfonos: {{json.telefono}}</p>
					<p class="mb-3">Celulares: {{json.celular}}</p>
					<p class="mb-3">Email: <a href="mailto:cadelbarre@gmail.com" class="has-text-weight-bold">{{json.correo1}}</a></p>
				</div>
			</div>

		</div>
	</footer>
</template>

<script>
import json from '@/assets/data/data-general.json';

export default {
  name: 'Footer',
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