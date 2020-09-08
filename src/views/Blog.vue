<template>
	<section id="section__blog">

		<section class="hero is-info is-medium is-bold">
		    <div class="hero-body" id="hero__blog">
		        <div class="container has-text-centered">
		            <h1 class="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br>sed eiusmod tempor incididunt ut labore et dolore magna aliqua</h1>
		        </div>
		    </div>
		</section>


		<div class="container">
			<!-- START ARTICLE FEED -->
			<section class="articles">
				<div class="column is-8 is-offset-2">
					<!-- START ARTICLE -->
					<div class="card article">
						<div class="card-content">
							<div class="media">
								<div class="media-content has-text-centered">
									<p class="title article-title">{{articule.titulo}}</p>
									<div class="tags has-addons level-item">
										<span class="tag is-rounded is-info">{{articule.autor}}</span>
										<span class="tag is-rounded">{{articule.fecha}}</span>
									</div>
								</div>
							</div>
							<div class="content article-body">
								<b-tag type="is-info">{{articule.categoria}}</b-tag>
								<p>{{articule.contenido}}</p>
							</div>
						</div>
					</div>
					<!-- END ARTICLE -->
					
				</div>

			</section>
			<!-- END ARTICLE FEED -->
		</div>
	</section>
</template>

<script>
/*--------------  Firebase  --------------*/
import Firebase from 'firebase';
import "firebase/firestore";
import Config from '@/config/config';


export default {
  name: 'Blog',
  data () {
    return {
      articule: {}
    };
  },
  props: {
    name: {
      type: Number, // String, Number, Boolean, Function, Object, Array
      required: true,
      default: 1
    }
  },
  created(){

  	if (!Firebase.apps.length) {
  		Firebase.initializeApp(Config);
  	}

  	/*--------------  Obtener articulos del blog Real DataBase  --------------*/
    let real = Firebase.database();
    let dataBlog = real.ref('blog/' + this.name).on('value', snapshot => {
    	this.articule = snapshot.val()
    	console.log(this.articule);

    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('../assets/css/blog.css');
</style>

