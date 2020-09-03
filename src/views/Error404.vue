<template>
	<section class="section mb-6">
		<div class="container">
			<div class="columns is-multiline has-text-centered is-centered">
				<div class="column is-half">
					<b-image
					src="https://firebasestorage.googleapis.com/v0/b/zeymaweb.appspot.com/o/front_img%2Ferror404.png?alt=media&token=f5386bde-7d21-4e96-811c-af99c02764b0"
					placeholder="/static/img/icons/favicon-32x32.png"
					
					id="error404"
					></b-image>
				</div>
				<div class="column is-12">	
					<h1 class="is-big">Oops!</h1>
					<h3 class="subtitle ">La pagina a la que intenta acceder no ha sido encontrada. <br> Quizas la pagina fue eliminada ó movida.</h3>
				</div>
				<div class="column is-12 mt-3">
					<b-button 
					type="btn-primary" 
					tag="router-link"
					to="/">Pagina Principal</b-button>
				</div>
			</div>			
		</div>
	</section>
</template>

<script>
export default {
  name: 'Error404'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>