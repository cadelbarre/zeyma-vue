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

				<div class="column is-6 is-6-tablet is-offset-1">
					<div class="card is-shady" v-for="(post, index) in posts">
						<div class="card-image">
							<figure class="image is-2by1">
								<img :src="post.url" alt="Placeholder image" class="modal-button" data-target="modal-image2">
							</figure>
						</div>
						<div class="card-content">
							<div class="content">
								<h3><router-link :to="'blog/'+post.title.replace(/ /g, '-')">{{post.title}}</router-link>
									</h3>
								<div class="tags has-addons">
									<span class="tag is-rounded is-info">{{post.user}}</span>
									<span class="tag is-rounded">{{post.date}} - {{post.category}}</span>
								</div>
								<p>{{post.abstract}}</p>
								<b-button type="btn-primary"
								tag="router-link"
								:to="{ name: 'Blog', params: { year: post.title.replace(/ /g, '-') }}">Seguir leyendo</b-button>
							</div>
						</div>
					</div>

				</div>

				<div class="column is-4 is-5-tablet  px-6">
					<h2 class="subtitle is-4">Entradas Recientes</h2>
					
					<article class="media" v-for="(post, index) in posts">
						<div class="media-left">
							<figure class="image is-64x64">
								<img :src="post.url" alt="Image">
							</figure>
						</div>
						<div class="media-content">
							<div class="content">
								<p>
									<strong>
										<router-link :to="'blog/'+post.title.replace(/ /g, '-')">{{post.title}}</router-link>
									</strong><br>
									<small>{{post.date}} - {{post.category}}</small>
									<br>
								</p>
							</div>
						</div>
					</article>

				</div>

			</div>
		</div>
	</section>
</template>

<script>
import Firebase from 'firebase';
import "firebase/firestore";
import Config from '@/config/config';


export default {
  name: 'Publicaciones',
  data(){
  	return{
  		Firebase,
  		posts:[]
  	}
  },
  created(){
  	/*--------------  Obtener articulos del blog Real DataBase  --------------*/
  	if (!Firebase.apps.length) {
  		Firebase.initializeApp(Config);
  	}
  	
  	let real = Firebase.database();
  	let pruebass = real.ref('post').orderByChild("filtro");

  	let dataBlog = pruebass.on("child_added", (snapshot) => {
  		this.posts.push(snapshot.val());
  	})

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('../assets/css/publicaciones.css');
a{
	color: #363636;
	transition: all 0.2s ease;
}

a:hover{
	color: #035aa6;
}
</style>