<template>
	<section>
		<div class="hero" id="info__top">
		  <div class="hero-body">
		      <div class="container">
		        <h1 class="title is-size-2 is-uppercase has-text-weight-bold">
		          Preguntas Frecuentes
		        </h1>
		      </div>
		    </div>
		</div>
		<div class="section is-medium has-shadow">
			<div class="container">
				<div class="columns">
					<div class="column is-12 mb-6 has-text-centered">
						<h1 class="title is-1">Preguntas Frecuentes</h1>
						<p class="p-20">Si tienes alguna duda sobre nuestro servicio, como el horario de atención, entrega de los pedidos, el costo mínimo del pedido para poder ser enviado, entre otras; acá te damos algunas respuestas a esas inquietudes.</p>
					</div>
				</div>
				<div class="columns" data-aos-duration="1700" data-aos="fade-up">
					<div class="column is-10 m-auto">
						
						<b-collapse
						class="card"
						animation="slide"
						v-for="(collapse, index) of collapses"
						:key="index"
						:open="isOpen == index"
						@open="isOpen = index">
						<div
						slot="trigger"
						slot-scope="props"
						class="card-header"
						role="button">
						<p class="card-header-title">
							{{ collapse.title }}
						</p>
						<a class="card-header-icon">
							<b-icon
							:icon="props.open ? 'menu-down' : 'menu-up'">
						</b-icon>
							</a>
						</div>
						<div class="card-content">
							<div class="content" v-html="collapse.text">
								
							</div>
						</div>
					</b-collapse>

					</div>
				</div>
				<div class="columns">
					<div class="column is-10 m-auto">
						<b-notification type="is-warning has-text-centered" aria-close-label="Close notification">
							<em>Recuerde siempre pedir a nuestros representante de ventas ó telefonistas el recibo correspondiente al pago de la factura que va a realizar. Ese documento es el único soporte que tiene uds para demostrar la cancelación de sus facturas. <br><br>
							<strong>Para más información comuníquese con nosotros en la línea de atención al {{json.telefono}} ext 101 102 y 103 o al correo: {{json.correo1}}.</strong></em>
						</b-notification>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import json from '@/assets/data/data-general.json';

export default {

  name: 'Frecuente',
  data(){
        return {
        	isOpen: 0,
        	json,
        	collapses: [
        	{
        		title: '¿ En que horario hacen las entregas ?',
        		text: 'Las entregas de los pedidos sólo se realizarán de lunes a viernes de 8 am a 6 pm y los sábados de 8 de la mañana a 1 pm. Sí usted se encuentra en la ciudad de Barranquilla y realiza su pedido en el transcurso de la mañana (Máximo 10:00 am), le entregaremos sus productos el mismo día. Pasada esta hora, la entrega se realizará en un máximo de 12 horas hábiles después de haberlo solicitado.'
        	},
        	{
        		title: '¿ Cuál es el horario de atención ?',
        		text: 'Nuestro horario de atención es de Lunes a Viernes de 7:30 am a 12:00 m y de 2:00 pm a 6:00 pm – Sábados de 7:30 a 12:00 m'
        	},
        	{
        		title: '¿ Quienes son los autorizados en entregar los pedidos ?',
        		text: '<b>Comercializadora ZEYMA SAS</b> despacha todos los pedidos en su bodega principal situada en la ciudad de Barranquilla y son entregados por el personal calificado y debidamente identificados, en transportes propios de la empresa. Los pedidos que se encuentren fuera de la costa atlantica seran entregados por servicios de logistica de confianza como Chevalier, Coordinadora, entre otros.'
        	},
        	{
        		title: '¿ Como realizo una devolución de mercancia ?',
        		text: 'Si tienes alguna mercancia que haya sido vendida por nosotros y deseas realizar una devolución por vencimiento o por mal estado, te recomendamos visitar la pagina sobre nuestras <a href="/politicas_devolucion">Políticas de Devolución.</a>'
        	},
        	{
        		title: '¿ Cual es el costo de envio de cada pedido ?',
        		text: 'El valor del envío es totalmente gratis, solamente sí el pedido mínimo supera los $ 80.000 en la ciudad de Barranquilla y en el municipio de soledad. Si se encuentra en las otras poblaciones de la Costa Atlántica ó en otros municipios el pedido mínimo esta sujeto al monto establecido por la empresa. Por compras inferiores el pedido debe ser recogido por el cliente en nuestras oficinas.'
        	},
        	{
        		title: '¿ A través de que medios puedo cancelar mis facturas ?',
        		text: '<strong>Pago en efectivo:</strong> Es el medio de pago preferido por los droguistas. Se le informará con anterioridad el total por cancelar, el pago se ingresara a nuestro sistema el mismo día.<br> <strong>Cheques pos-fechados:</strong> Ademas de poder realizar los pagos en efectivos, podrán cancelar con cheques pos-fechados a la fecha. Solo cuando se haga efectivo el pago, se ingresar el pago correspondiente a nuestro sistema.'
        	}
        	]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>