<template>
	<footer class="footer">
		<div class="container" data-aos-duration="1700" data-aos="fade-right">
			<div class="columns is-size-9 is-variable is-7">
				<div class="column">
					<figure class="image is-128x128">
						<img src="../assets/img/zeyma-Original-mod.webp">
					</figure>
					<p>Comercializadora ZEYMA SAS es una empresa que cuenta con más de {{(new Date).getFullYear() - 1998}} años de experiencia, apoyando a los droguistas que buscan adquirir productos de excelente calidad sin afectar su economía.</p>
				</div>
				<div class="column">
					<h1 class="is-size-3  has-text-weight-bold has-text-white">Accesos Rapidos</h1>
					<ul class="footer__list">
						<li><b-icon
							pack="fas"
							icon="angle-right"
							size="is-small">
						</b-icon><a href="http://plataformazeyma.com/adminlogin.aspx" target="_blank">Plataforma Web</a></li>
						<li><b-icon
							pack="fas"
							icon="angle-right"
							size="is-small">
						</b-icon><a href="/politicas_devolucion">Politicas de devolución</a></li>
						<li><b-icon
							pack="fas"
							icon="angle-right"
							size="is-small">
						</b-icon><a href="/preguntas_frecuentes">Envios y Pedidos</a></li>
						<li><b-icon
							pack="fas"
							icon="angle-right"
							size="is-small">
						</b-icon><a href="/pqrs">PQRS</a></li>
						<li><b-icon
							pack="fas"
							icon="angle-right"
							size="is-small">
						</b-icon><a href="/escribenos">Escribenos</a></li>
					</ul>
				</div>
				<div class="column">
					<h1 class="is-size-3 has-text-weight-bold has-text-white">Información de Contacto</h1>
					<div class="footer__list">
						<p class="mb-1 mt-2">{{json.direccion}}</p>
						<p class="mb-1">{{json.telefono}}</p>
						<p class="mb-1">{{json.celular}}</p>
						<p class="mb-1">Email: <a href="mailto:cadelbarre@gmail.com" class="has-text-weight-bold">{{json.correo1}}</a></p>
					</div>
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