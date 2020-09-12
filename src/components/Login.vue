<template>
	<section>
		<div class="container py-3">
			<figure class="image is-64x64">
				<img src="../assets/img/zeyma-Original-mod.png">
			</figure>
		</div>
		<section class="hero has-background-light is-fullheight has-shadow">
			<div class="hero-body">
				<div class="container">
					<div class="column is-4 is-offset-4">
						<div class="box">
							<div class="has-text-centered">
								<h3 class="title is-3">Ingreso</h3>
								<p class="subtitle is-6 mb-6">Ingresa tus datos para continuar.</p>
							</div>
							<form>
								<b-field>
									<b-input type="email" placeholder="Your User" autofocus=""></b-input>
								</b-field>
								<b-field>
									<b-input type="password" placeholder="Your Password"></b-input>
								</b-field>
								<b-button type="is-info is-fullwidth mt-5" @click="success">
									Ingresar
								</b-button>
								<b-message type="is-danger mt-4">
									<ul>
										<li><small>Contraseña incorrecta</small></li>
										<li><small>Usuario incorrecto</small></li>
									</ul>
								</b-message>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	</section>
</template>

<script>
export default {
  name: 'Login',
  error: false,
  methods: {
    success () {
    	this.$buefy.toast.open({
    		message: 'Something happened correctly!',
    		type: 'is-danger'
    	})
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
padding: 4em 3em !important;
}
.box .title {
margin-bottom:1em !important;
}
</style>