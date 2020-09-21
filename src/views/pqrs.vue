<template>
	<section>
		<div class="hero" id="info__top">
		  <div class="hero-body">
		      <div class="container">
		        <h1 class="title is-2 is-uppercase has-text-weight-bold">
		          pqrs
		        </h1>
		      </div>
		    </div>
		</div>
		<div class="section is-medium has-background-light">
			<div class="container">
				<div class="box">
					<h1 class="title has-text-centered">Formulario de Peticiones, Quejas, Reclamos, Sugerencias ó Agradecimientos</h1>
					<b-field grouped>
						<b-field label="Nombre o Razón Social" expanded>
							<b-input maxlength="50" v-model="nombre"></b-input>
						</b-field>
						<b-field label="Asunto" expanded>	
							<b-input type="text" maxlength="40" v-model="asunto"></b-input>
						</b-field>
					</b-field>

					<b-field grouped>
						<b-field label="Persona Solicitante" expanded>
							<b-input type="text" maxlength="50" v-model="persona"></b-input>
						</b-field>
						<b-field label="Correo del Solicitante" expanded>
							<b-input type="email" v-model="email"></b-input>
						</b-field>
						<b-field label="Teléfono de Contacto" expanded>
							<b-input type="text" v-model="telefono"></b-input>
						</b-field>
					</b-field>

					<b-field label="Descripción del Asunto">
						<b-input maxlength="400" type="textarea" v-model="mensaje"></b-input>
					</b-field>

          <b-message type="is-danger" v-if="errors.length">
            <b>POR FAVOR, CORRIJA EL(LOS) SIGUIENTES(S) ERROR(ES):</b>
            <ul class="mt-2">
              <li v-for="error in errors">- {{error}}</li>
            </ul>
          </b-message>

					<b-button tag="a"
						type="button btn-primary" :class="{'is-loading': isSend }"
						@click="submit">
						Enviar solicitud
					</b-button>

				</div>
			</div>
		</div>
	</section>
</template>

<script>
let emailjs = require('emailjs-com');

export default {
  name: 'pqrs',
  data(){
  	return{
  		errors:[],
  		nombre:"",
  		asunto:"",
  		persona:"",
  		email:"",
  		telefono:"",
  		mensaje:"",
  		isSend: false
  	}
  },
  created(){
  	emailjs.init("user_RawyKhtaF9kpTHAmzAs9Q");
  },
  methods:{
  	clear(){
  		this.nombre= "",
  		this.persona= "",
  		this.asunto= "",
  		this.email= "",
  		this.mensaje= "",
  		this.telefono= "",
  		this.isSend=false
  	},
  	submit() {

  		if (this.nombre == "" || this.persona == "" || this.mensaje == "" || this.telefono == "" || this.asunto == "") { 
  			this.errors = [];

  			if (!this.nombre) {
  				this.errors.push('Ingrese un nombre ó razon social, por favor.');
  			}
  			if (!this.asunto) {
  				this.errors.push('Ingrese el asunto, por favor.');
  			}
  			if (!this.mensaje) {
  				this.errors.push('Ingrese un mensaje, por favor.');
  			}
  			if (!this.telefono) {
  				this.errors.push('Ingrese un numero de contacto, por favor.');
  			}
  			if (!this.persona) {
  				this.errors.push('Ingrese un nombre de contacto, por favor.');
  			}
  			if (!this.email) {
  				this.errors.push('Ingrese un correo electrónico de contacto, por favor.');
  			}

  		} else {
  			this.errors = [];
  			this.isSend = true;
  			let envio = new Date();
  			var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  			let data = {
  				nombre: this.nombre,
  				persona: this.persona,
  				asunto: 'Solicitud PQRS - ' + this.asunto,
  				email: this.email,
  				mensaje: this.mensaje,
  				telefono: this.telefono,
  				fecha: months[envio.getMonth()]+' '+envio.getDate()+'/'+envio.getFullYear()+' - '+envio.getHours()+':'+envio.getMinutes()
  			};

  			let that = this;

  			emailjs.send("gmail", "solicitud", data).then(
  				function(Response) {
  					if (Response.text === "OK") {
  						that.$buefy.toast.open({
  							message: 'Solicitud Enviada Correctamente!',
  							type: 'is-success'
  						})
  						that.clear();
  					}
  					console.log(
  						"SUCCESS. status=%d, text=%s",
  						Response.status,
  						Response.text
  						);
  				},
  				function(err) {
  					that.$buefy.toast.open({
  						message: 'Ha ocurrido un problema al momento de enviar la solicitud!',
  						type: 'is-danger'
  					})
  					that.isSend = false;
  					console.log("FAILDED. error=", err);
  				},
  				);
  		}


  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>