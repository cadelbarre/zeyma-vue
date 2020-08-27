<template>
	<section>
		<div class="hero" id="info__top">
		  <div class="hero-body">
		      <div class="container">
		        <h1 class="title is-2 is-uppercase has-text-weight-bold">
		          Escribenos
		        </h1>
		      </div>
		    </div>
		</div>
		<div class="section is-medium has-shadow">
			<div class="container">
				<div class="columns">
					<div class="column is-12 mb-6 has-text-centered">
						<h1 class="title is-1">Escribenos</h1>
						<p class="p-20">Si tiene alguna pregunta, llámenos o complete el siguiente formulario y nos pondremos en contacto con usted lo más pronto posible.</p>
					</div>
				</div>
				<div class="columns is-variable is-7" data-aos-duration="1700" data-aos="fade-right">
					<div class="column is-4">
						<div>							
							<h1 class="is-size-4 has-text-weight-medium text-primary mb-3">Información General</h1>
							<p>{{json.descripcion}} <br>
								{{json.direccion}}<br>
								Telefono: {{json.telefono}}<br>
								Celular: {{json.celular}} <br>
								Correo: <span class="text-primary has-text-weight-medium">{{json.correo1}} - {{json.correo2}}</span></p>
						</div>
						<div>
							<h1 class="is-size-4 has-text-weight-medium text-primary mb-3 mt-6">Horario de Atención</h1>
							<p>{{json.horario_corto}}<br>{{json.horario_finsemana}}</p>
						</div>
					</div>
					<div class="column is-8">
						<b-field label="Nombre Completo">
							<b-input></b-input>
						</b-field>
						<b-field grouped>
							<b-field label="Correo Electronico" expanded>
								<b-input></b-input>
							</b-field>
							<b-field label="Teléfono de Contacto" expanded>
								<b-input></b-input>
							</b-field>
						</b-field>
						<b-field label="Mensaje">
							<b-input maxlength="200" type="textarea"></b-input>
						</b-field>
						<b-button tag="a"
							type="btn-primary mt-4"
							href="https://firebasestorage.googleapis.com/v0/b/zeymaweb.appspot.com/o/POLITICA_DEVOLUCIONES_ZEYMA.pdf?alt=media&token=5fca64e8-78af-4b47-a04f-3de250eab038"
							target="_blank">
							Enviar Mensaje
						</b-button>
					</div>
				</div>
			</div>
		</div>
		<div class="columns">
			<iframe class="contacto__img" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d979.3123319822715!2d-74.79988657080015!3d10.944529299512988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef5d2b9e6ff81a7%3A0xcd1827beeb1e42e6!2sCra.%207f%20%234452%2C%20Barranquilla%2C%20Atl%C3%A1ntico!5e0!3m2!1ses!2sco!4v1589638730302!5m2!1ses!2sco" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
		</div>
	</section>
</template>

<script>
import json from '@/assets/data/data-general.json';

export default {
  name: 'Contacto',
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