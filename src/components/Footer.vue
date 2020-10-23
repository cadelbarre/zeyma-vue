<template>
	<footer class="footer">
		<div class="container" data-aos-duration="1700" data-aos="fade-right">
			<div class="columns is-size-9 is-variable is-7">
				<div class="column">
					<figure class="image">
						<img src="../assets/img/logo-zeyma-footer.png">
					</figure>
					<p class="has-text-justified">Comercializadora ZEYMA SAS, distribuidora de medicamentos farmacéuticos, hospitalarios y populares que brinda servicios de excelente calidad. Es una empresa que cuenta con más de {{(new Date).getFullYear() - 1998}} años de experiencia, apoyando a los droguistas que buscan adquirir productos de excelente calidad sin afectar su economía.</p>
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
						</b-icon><router-link to="/politicas_devolucion">Politicas de devolución</router-link>
						</li>
						<li><b-icon
							pack="fas"
							icon="angle-right"
							size="is-small">
						</b-icon><router-link to="/preguntas_frecuentes">Envios y Pedidos</router-link>
						</li>
						<li><b-icon
							pack="fas"
							icon="angle-right"
							size="is-small">
						</b-icon><router-link to="/pqrs">PQRS</router-link>
					</li>
						<li><b-icon
							pack="fas"
							icon="angle-right"
							size="is-small">
						</b-icon><router-link to="/escribenos">Escribenos</router-link>
					</li>
					</ul>
				</div>
				<div class="column">
					<h1 class="is-size-3 has-text-weight-bold has-text-white">Información de Contacto</h1>
					<div class="footer__list">
						<p class="mb-1 mt-2">{{json.direccion}} <br>{{json.ciudad}}</p>
						<p class="mb-1">{{json.telefono}}</p>
						<p class="mb-1">{{json.celular}}</p>
						<p class="mb-1">Email: <a href="mailto:cadelbarre@gmail.com" class="has-text-weight-bold">{{json.correo1}}</a></p>
						<a href="http://instagram.com/czeyma" target="_blank" class=""> 
							<div class="is-flex mt-3">
								<i class="fab fa-instagram fa-2x mr-1"></i>@czeyma
							</div>
						</a>
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