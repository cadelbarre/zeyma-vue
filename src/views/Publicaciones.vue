<template>
	<section id="section__publicaciones">
		<div class="hero" id="info__top">
		  <div class="hero-body">
		    <div class="container">
		      <h1 class="title is-2 is-uppercase has-text-weight-bold">
		        Publicaciones
		      </h1>
		    </div>
		  </div>
		</div>
		<div class="container">
			<div class="columns features">

				<div class="column is-4">
					<div class="card is-shady">
						<div class="card-image">
							<figure class="image is-4by3">
								<img src="https://source.unsplash.com/RWnpyGtY1aU" alt="Placeholder image" class="modal-button" data-target="modal-image2">
							</figure>
						</div>
						<div class="card-content">
							<div class="content">
								<h4>Click on image above</h4>
								<p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam.</p>
								<span class="button is-link modal-button" data-target="modal-image2">Image modal</span>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</section>
</template>

<script>
export default {
  name: 'Publicaciones'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('../assets/css/publicaciones.css');
</style>